"use client";

import { type FormEvent, type KeyboardEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, HeadphonesIcon, MessageCircle } from "@/components/icons";
import { useI18n } from "@/i18n/LanguageProvider";
import { useUIText } from "@/i18n/useUIText";

const chatDismissedStorageKey = "opendex-sales-chat-dismissed";
const miniMessageHiddenStorageKey = "opendex-sales-chat-mini-message-hidden";
const maxSupportQuestionLength = 600;
const maxVisibleMessages = 4;

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

type SupportOption = {
  title: string;
  description: string;
  icon: "deploy" | "cloud" | "key" | "transfer" | "settings";
};

function SupportOptionIcon({ icon }: { icon: SupportOption["icon"] }) {
  if (icon === "deploy") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 14.5 19 5l-4.6 14-3-5.7L5 14.5Z" />
        <path d="m11.4 13.3 3-3" />
      </svg>
    );
  }

  if (icon === "cloud") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7.5 17.5h9.2a3.7 3.7 0 0 0 .3-7.4 5.2 5.2 0 0 0-10-1.4 4.5 4.5 0 0 0 .5 8.8Z" />
      </svg>
    );
  }

  if (icon === "key") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 9a4 4 0 1 1-1.2-2.8L20 6v4h-3v3h-3v-4Z" />
        <path d="M7 13.5h.01" />
      </svg>
    );
  }

  if (icon === "transfer") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 7h10l-2.5-2.5" />
        <path d="M17 17H7l2.5 2.5" />
        <path d="M17 7 14.5 9.5" />
        <path d="M7 17l2.5-2.5" />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
      <path d="M12 3.5v2" />
      <path d="M12 18.5v2" />
      <path d="m5.9 5.9 1.4 1.4" />
      <path d="m16.7 16.7 1.4 1.4" />
      <path d="M3.5 12h2" />
      <path d="M18.5 12h2" />
      <path d="m5.9 18.1 1.4-1.4" />
      <path d="m16.7 7.3 1.4-1.4" />
    </svg>
  );
}

function ReasoningPreview({
  eyebrow,
  body,
  status,
}: {
  eyebrow: string;
  body: string;
  status: string;
}) {
  return (
    <div className="opx-sales-chat-reasoning" aria-live="polite">
      <button type="button" className="opx-sales-chat-reasoning-toggle" aria-expanded="true">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m4 6 4 4 4-4" />
        </svg>
        {eyebrow}
      </button>
      <p>{body}</p>
      <div className="opx-sales-chat-resolving">
        <span className="opx-sales-chat-resolving-cloud" aria-hidden>
          <span />
          <span />
          <span />
        </span>
        <em>{status}</em>
      </div>
    </div>
  );
}

function readBooleanStorage(key: string) {
  if (typeof window === "undefined") return false;

  try {
    return window.localStorage.getItem(key) === "true";
  } catch {
    return false;
  }
}

function writeBooleanStorage(key: string, value: boolean) {
  try {
    window.localStorage.setItem(key, String(value));
  } catch {
    // Storage can be unavailable in private browsing or strict environments.
  }
}

export default function SalesChatWidget() {
  const { locale } = useI18n();
  const text = useUIText();
  const shouldReduceMotion = useReducedMotion();
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMiniMessageHidden, setIsMiniMessageHidden] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isWorkspaceMode, setIsWorkspaceMode] = useState(false);
  const [isWorkspaceClosing, setIsWorkspaceClosing] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPrivacyNoticeHidden, setIsPrivacyNoticeHidden] = useState(false);
  const workspaceCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const workspaceTranscriptRef = useRef<HTMLDivElement | null>(null);
  const visibleMessages = messages.slice(-maxVisibleMessages);
  const isNewSupportFlow = messages.length === 0 && !isSending;

  useEffect(() => {
    setIsMinimized(readBooleanStorage(chatDismissedStorageKey));
    setIsMiniMessageHidden(readBooleanStorage(miniMessageHiddenStorageKey));
  }, []);

  useEffect(() => {
    return () => {
      if (workspaceCloseTimeoutRef.current) {
        clearTimeout(workspaceCloseTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isWorkspaceMode && !isExpanded) return;

    workspaceTranscriptRef.current?.scrollTo({
      top: workspaceTranscriptRef.current.scrollHeight,
      behavior: "auto",
    });
  }, [isWorkspaceMode, isExpanded, messages, isSending]);

  const openExpandedChat = () => {
    setIsMinimized(false);
    setIsExpanded(true);
  };

  const openWorkspaceChat = () => {
    if (workspaceCloseTimeoutRef.current) {
      clearTimeout(workspaceCloseTimeoutRef.current);
      workspaceCloseTimeoutRef.current = null;
    }

    setIsMinimized(false);
    setIsExpanded(true);
    setIsWorkspaceClosing(false);
    setIsWorkspaceMode(true);
  };

  const closeWorkspaceChat = () => {
    if (isWorkspaceClosing) return;

    setIsWorkspaceClosing(true);
    workspaceCloseTimeoutRef.current = setTimeout(() => {
      setIsWorkspaceMode(false);
      setIsWorkspaceClosing(false);
      workspaceCloseTimeoutRef.current = null;
    }, 520);
  };

  const dismissChat = () => {
    writeBooleanStorage(chatDismissedStorageKey, true);
    if (workspaceCloseTimeoutRef.current) {
      clearTimeout(workspaceCloseTimeoutRef.current);
      workspaceCloseTimeoutRef.current = null;
    }
    setIsWorkspaceClosing(false);
    setIsWorkspaceMode(false);
    setIsExpanded(false);
    setIsMinimized(true);
    setIsMiniMessageHidden(true);
  };

  const hideMiniMessage = () => {
    writeBooleanStorage(miniMessageHiddenStorageKey, true);
    setIsMiniMessageHidden(true);
  };

  const submitPrompt = async (prompt: string) => {
    const cleanPrompt = prompt.trim();
    if (!cleanPrompt || isSending) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: cleanPrompt,
    };

    setQuestion("");
    setErrorMessage("");
    setMessages((current) => [...current, userMessage]);
    setIsSending(true);

    try {
      const response = await fetch("/api/support-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale,
          message: cleanPrompt,
        }),
      });

      if (!response.ok) {
        throw new Error("Support request failed");
      }

      const payload = (await response.json()) as { reply?: unknown };
      const reply =
        typeof payload.reply === "string" && payload.reply.trim().length > 0
          ? payload.reply.trim()
          : text(
              "chat.flow.fallbackReply",
              "Puedo ayudarte a ordenar la solicitud. Cuéntame si buscas soporte técnico, una demo, precios o documentación."
            );

      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: reply,
        },
      ]);
    } catch {
      setErrorMessage(
        text(
          "chat.flow.error",
          "No pude procesar tu mensaje en este momento. Intenta de nuevo o agenda una conversación con el equipo."
        )
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleQuestionSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submitPrompt(question);
  };

  const handleTextareaKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== "Enter" || event.shiftKey) return;

    event.preventDefault();

    if (question.trim().length === 0 || isSending) return;

    void submitPrompt(question);
  };

  useEffect(() => {
    if (!isExpanded && !isWorkspaceMode) return;

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;
    const previousBodyOverscroll = body.style.overscrollBehavior;
    const previousHtmlOverscroll = documentElement.style.overscrollBehavior;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";
    documentElement.style.overscrollBehavior = "none";

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
      body.style.overscrollBehavior = previousBodyOverscroll;
      documentElement.style.overscrollBehavior = previousHtmlOverscroll;
    };
  }, [isExpanded, isWorkspaceMode]);

  if (isMinimized) {
    return (
      <aside className="opx-sales-chat-mini" aria-label={text("chat.mini.aria", "Asistente comercial Melissa")}>
        {!isMiniMessageHidden ? (
          <div className="opx-sales-chat-mini-card">
            <p
              className="opx-sales-chat-mini-message"
              role="button"
              tabIndex={0}
              onClick={openExpandedChat}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openExpandedChat();
                }
              }}
            >
              {text(
                "chat.mini.message",
                "Hi there! I'm Melissa from Opendex. What are you hoping to learn about our identity and access management solutions today?"
              )}
            </p>
            <button
              type="button"
              className="opx-sales-chat-mini-close"
              aria-label={text("chat.mini.close", "Ocultar mensaje de Melissa")}
              onClick={(event) => {
                event.stopPropagation();
                hideMiniMessage();
              }}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 6 12 12" />
                <path d="m18 6-12 12" />
              </svg>
            </button>
          </div>
        ) : null}
        <motion.button
          type="button"
          className="opx-sales-chat-mini-button"
          aria-label={text("chat.mini.open", "Abrir chat con Melissa")}
          onClick={openExpandedChat}
          whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.025 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.965 }}
        >
          <motion.span
            className="opx-sales-chat-mini-border"
            aria-hidden
          >
            <motion.span
              className="opx-sales-chat-mini-sheen"
              animate={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      x: ["-42%", "-42%", "0%", "42%", "42%"],
                      opacity: [0, 0, 0.72, 0, 0],
                    }
              }
              transition={{ duration: 4.8, repeat: Infinity, ease: [0.22, 1, 0.36, 1], times: [0, 0.38, 0.48, 0.62, 1] }}
            />
          </motion.span>
          <span className="opx-sales-chat-mini-orbit" aria-hidden />
          <span className="opx-sales-chat-mini-mark" aria-hidden>
            <img src="/opendex-support-headset-mark.png" alt="" draggable={false} />
          </span>
          <span className="opx-sales-chat-mini-label">
            {text("chat.mini.button", "Ask Melissa")}
          </span>
        </motion.button>
      </aside>
    );
  }

  const supportOptions: SupportOption[] = [
    {
      title: text("chat.console.option.transfer.title", "Transfer a domain"),
      description: text("chat.console.option.transfer.description", "Walk me through the process"),
      icon: "transfer",
    },
    {
      title: text("chat.console.option.bind.title", "Bind R2 to a Worker"),
      description: text("chat.console.option.bind.description", "Connect object storage"),
      icon: "deploy",
    },
    {
      title: text("chat.console.option.encrypt.title", "Encrypted Client Hello"),
      description: text("chat.console.option.encrypt.description", "Enable ECH for my zone"),
      icon: "cloud",
    },
    {
      title: text("chat.console.option.token.title", "Create an API token"),
      description: text("chat.console.option.token.description", "Set up API access"),
      icon: "key",
    },
    {
      title: text("chat.console.option.account.title", "Find my account ID"),
      description: text("chat.console.option.account.description", "Locate account and zone IDs"),
      icon: "settings",
    },
  ];

  const resetConversation = () => {
    setQuestion("");
    setMessages([]);
    setErrorMessage("");
    setIsPrivacyNoticeHidden(false);
  };

  const latestUserMessage = [...messages].reverse().find((message) => message.role === "user");
  const workspaceTitle =
    latestUserMessage?.content.trim() ||
    text("chat.workspace.title", "Nueva conversación");

  return (
    <aside
      className={`opx-sales-chat ${isWorkspaceMode ? `opx-sales-chat-workspace${isWorkspaceClosing ? " opx-sales-chat-workspace-closing" : ""}` : isExpanded ? "opx-sales-chat-expanded" : ""}`}
      aria-label={text("chat.aria", "Asistente comercial de Opendex")}
    >
      {isWorkspaceMode ? (
        <div className="opx-sales-chat-workspace-shell">
          <aside className="opx-sales-chat-workspace-sidebar" aria-label={text("chat.workspace.sidebar", "Historial del chat")}>
            <div className="opx-sales-chat-workspace-brand">
              <span className="opx-sales-chat-workspace-cloud" aria-hidden>
                <span />
                <span />
                <span />
              </span>
              <strong>{text("chat.workspace.brand", "Chat")}</strong>
              <button type="button" aria-label={text("chat.workspace.collapseSidebar", "Contraer barra lateral")}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2.5" y="2.5" width="11" height="11" rx="1.6" />
                  <path d="M6.2 2.5v11" />
                </svg>
              </button>
            </div>
            <nav className="opx-sales-chat-workspace-nav" aria-label={text("chat.workspace.navigation", "Navegación del chat")}>
              <button type="button" onClick={resetConversation}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 3v10" />
                  <path d="M3 8h10" />
                </svg>
                {text("chat.workspace.newChat", "New chat")}
              </button>
              <button type="button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="7" cy="7" r="4" />
                  <path d="m10.2 10.2 2.8 2.8" />
                </svg>
                {text("chat.workspace.search", "Search")}
              </button>
            </nav>
            <div className="opx-sales-chat-workspace-history">
              <span>{text("chat.workspace.today", "Today")}</span>
              <button type="button" className="is-active">
                {workspaceTitle}
              </button>
              <button type="button">
                {text("chat.workspace.historyExample", "What is Encrypted Client Hello (E...")}
              </button>
            </div>
          </aside>

          <section className="opx-sales-chat-workspace-main" aria-label={text("chat.workspace.main", "Conversación")}>
            <header className="opx-sales-chat-workspace-header">
              <h2>{workspaceTitle}</h2>
              <div className="opx-sales-chat-workspace-actions" aria-label={text("chat.controls", "Controles de ventana")}>
                <button type="button" aria-label={text("chat.workspace.grid", "Cambiar vista")}>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3.2" y="3.2" width="3.5" height="3.5" />
                    <rect x="9.3" y="3.2" width="3.5" height="3.5" />
                    <rect x="3.2" y="9.3" width="3.5" height="3.5" />
                    <rect x="9.3" y="9.3" width="3.5" height="3.5" />
                  </svg>
                </button>
                <button type="button" aria-label={text("chat.workspace.exit", "Volver al chat compacto")} onClick={closeWorkspaceChat}>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3.5 3.5 6.6 6.6" />
                    <path d="M3.8 6.2V3.8h2.4" />
                    <path d="m12.5 12.5-3.1-3.1" />
                    <path d="M12.2 9.8v2.4H9.8" />
                  </svg>
                </button>
              </div>
            </header>

            <div
              ref={workspaceTranscriptRef}
              className="opx-sales-chat-workspace-content"
              aria-live="polite"
            >
              <div className="opx-sales-chat-workspace-thread" aria-label={text("chat.flow.transcript", "Conversación con Melissa")}>
                {messages.length === 0 ? (
                  <div className="opx-sales-chat-workspace-empty">
                    <div className="opx-sales-chat-workspace-empty-cloud" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                    <h3>{text("chat.console.greeting", "Good afternoon.")}</h3>
                    <p>{text("chat.console.prompt", "What are we doing today?")}</p>
                  </div>
                ) : null}

                {messages.map((message) => (
                  <article
                    key={message.id}
                    className={`opx-sales-chat-workspace-message opx-sales-chat-workspace-message-${message.role}`}
                  >
                    {message.role === "assistant" && (
                      <span className="opx-sales-chat-workspace-role">Melissa</span>
                    )}
                    <div className="opx-sales-chat-workspace-bubble">
                      {message.content}
                    </div>
                  </article>
                ))}

                {isSending ? (
                  <ReasoningPreview
                    eyebrow={text("chat.reasoning.toggle", "hide reasoning")}
                    body={text(
                      "chat.reasoning.body",
                      "The user is asking about the selected topic and how to enable it. I should review the request, identify the right Opendex context, and answer with accurate implementation steps."
                    )}
                    status={text("chat.reasoning.status", "Resolving query...")}
                  />
                ) : null}
              </div>
            </div>

            <form className="opx-sales-chat-workspace-composer" onSubmit={handleQuestionSubmit}>
              <label className="sr-only" htmlFor="opx-sales-chat-question-workspace">
                {text("chat.inputLabel", "Haz una pregunta a Opendex")}
              </label>
              <textarea
                id="opx-sales-chat-question-workspace"
                name="question"
                autoComplete="off"
                maxLength={maxSupportQuestionLength}
                placeholder={text("chat.workspace.placeholder", "Ask anything...")}
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={handleTextareaKeyDown}
              />
              <div className="opx-sales-chat-workspace-composer-footer">
                <span className="opx-sales-chat-ask-chip">
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                  {text("chat.console.ask", "Ask")}
                </span>
                <div className="opx-sales-chat-composer-tools">
                  <button type="button" className="opx-sales-chat-tune" aria-label={text("chat.console.settings", "Opciones")}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 5h10" />
                      <path d="M3 11h10" />
                      <path d="M6 3.5v3" />
                      <path d="M10 9.5v3" />
                    </svg>
                  </button>
                  <button
                    type="submit"
                    className="opx-sales-chat-send"
                    aria-label={text("chat.submit", "Enviar pregunta")}
                    disabled={isSending || question.trim().length === 0}
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              </div>
            </form>

            {errorMessage ? <p className="opx-sales-chat-error">{errorMessage}</p> : null}
          </section>
        </div>
      ) : isExpanded ? (
        <>
          <div className="opx-sales-chat-console-header">
            <button
              type="button"
              className="opx-sales-chat-conversation-button"
              onClick={resetConversation}
            >
              {text("chat.console.title", "Nueva conversación")}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m4.5 6 3.5 3.5L11.5 6" />
              </svg>
            </button>
            <div className="opx-sales-chat-console-actions" aria-label={text("chat.controls", "Controles de ventana")}>
              <button type="button" aria-label={text("chat.console.new", "Nueva conversación")} onClick={resetConversation}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 3v10" />
                  <path d="M3 8h10" />
                </svg>
              </button>
              <button
                type="button"
                aria-label={text("chat.workspace.open", "Abrir workspace")}
                onClick={openWorkspaceChat}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3.2" y="3.2" width="3.8" height="3.8" rx="0.8" />
                  <rect x="9" y="3.2" width="3.8" height="3.8" rx="0.8" />
                  <rect x="3.2" y="9" width="3.8" height="3.8" rx="0.8" />
                  <rect x="9" y="9" width="3.8" height="3.8" rx="0.8" />
                </svg>
              </button>
              <button
                type="button"
                aria-label={text("chat.close", "Cerrar")}
                onClick={() => {
                  setIsExpanded(false);
                  dismissChat();
                }}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m4 4 8 8" />
                  <path d="m12 4-8 8" />
                </svg>
              </button>
            </div>
          </div>

          <div className="opx-sales-chat-console">
            <div className="opx-sales-chat-help-strip">
              <span>{text("chat.console.needHelp", "Need more help?")}</span>
              <Link className="opx-sales-chat-button opx-sales-chat-button-secondary" href="/contacto">{text("chat.console.support", "Support")}</Link>
            </div>

            <div className="opx-sales-chat-console-main">
              {isNewSupportFlow ? (
                <>
                  <div className="opx-sales-chat-cloud" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="opx-sales-chat-console-copy">
                    <h2>{text("chat.console.greeting", "Good afternoon.")}</h2>
                    <p>{text("chat.console.prompt", "What are we doing today?")}</p>
                  </div>
                  <div className="opx-sales-chat-option-list">
                    {supportOptions.map((item) => (
                      <button
                        key={item.title}
                        type="button"
                        className="opx-sales-chat-option"
                        onClick={() => void submitPrompt(`${item.title}. ${item.description}`)}
                        disabled={isSending}
                      >
                        <span className="opx-sales-chat-option-icon">
                          <SupportOptionIcon icon={item.icon} />
                        </span>
                        <span>
                          <strong>{item.title}</strong>
                          <small>{item.description}</small>
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div
                  className="opx-sales-chat-transcript opx-sales-chat-transcript-console"
                  aria-label={text("chat.flow.transcript", "Conversación con Melissa")}
                  aria-live="polite"
                >
                  {messages.length === 0 ? (
                    <div className="opx-sales-chat-message opx-sales-chat-message-assistant">
                      <span className="opx-sales-chat-message-name">Melissa</span>
                      <p>
                        {text(
                          "chat.body",
                          "¿Estás explorando soluciones para identidad, documentos u operaciones listas para IA? Puedo ayudarte con preguntas sobre acceso seguro, flujos de trabajo y planificación de implementación."
                        )}
                      </p>
                    </div>
                  ) : null}

                  {visibleMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`opx-sales-chat-message opx-sales-chat-message-${message.role}`}
                    >
                      {message.role === "assistant" && (
                        <span className="opx-sales-chat-message-name">Melissa</span>
                      )}
                      <p>{message.content}</p>
                    </div>
                  ))}

                  {isSending ? (
                    <ReasoningPreview
                      eyebrow={text("chat.reasoning.toggle", "hide reasoning")}
                      body={text(
                        "chat.reasoning.body",
                        "The user is asking about the selected topic and how to enable it. I should review the request, identify the right Opendex context, and answer with accurate implementation steps."
                      )}
                      status={text("chat.reasoning.status", "Resolving query...")}
                    />
                  ) : null}
                </div>
              )}
            </div>

            {!isPrivacyNoticeHidden ? (
              <div className="opx-sales-chat-privacy">
                <p>
                  {text(
                    "chat.console.privacy",
                    "Chats are recorded to improve the service and are processed in accordance with our Privacy Policy."
                  )}
                </p>
                <button
                  type="button"
                  aria-label={text("chat.console.hideNotice", "Ocultar aviso")}
                  onClick={() => setIsPrivacyNoticeHidden(true)}
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 5 6 6" />
                    <path d="m11 5-6 6" />
                  </svg>
                </button>
              </div>
            ) : null}

            <form className="opx-sales-chat-composer" onSubmit={handleQuestionSubmit}>
              <label className="sr-only" htmlFor="opx-sales-chat-question">
                {text("chat.inputLabel", "Haz una pregunta a Opendex")}
              </label>
              <textarea
                id="opx-sales-chat-question"
                name="question"
                autoComplete="off"
                maxLength={maxSupportQuestionLength}
                placeholder={text("chat.console.placeholder", "What can we help you with?")}
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={handleTextareaKeyDown}
              />
              <div className="opx-sales-chat-composer-footer">
                <span className="opx-sales-chat-ask-chip">
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                  {text("chat.console.ask", "Ask")}
                </span>
                <div className="opx-sales-chat-composer-tools">
                  <button type="button" className="opx-sales-chat-tune" aria-label={text("chat.console.settings", "Opciones")}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 5h10" />
                      <path d="M3 11h10" />
                      <path d="M6 3.5v3" />
                      <path d="M10 9.5v3" />
                    </svg>
                  </button>
                  <button
                    type="submit"
                    className="opx-sales-chat-send"
                    aria-label={text("chat.submit", "Enviar pregunta")}
                    disabled={isSending || question.trim().length === 0}
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              </div>
            </form>

            {errorMessage ? <p className="opx-sales-chat-error">{errorMessage}</p> : null}
          </div>
        </>
      ) : (
        <>
          <div className="opx-sales-chat-controls" aria-label={text("chat.controls", "Controles de ventana")}>
            <button
              type="button"
              className="opx-sales-chat-control"
              aria-label={text("chat.expand", "Expandir")}
              onClick={() => setIsExpanded(true)}
            >
              <svg className="opx-sales-chat-control-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 3H3v5" />
                <path d="M16 3h5v5" />
                <path d="M3 16v5h5" />
                <path d="M21 16v5h-5" />
                <path d="M8 8 3 3" />
                <path d="M16 8 21 3" />
                <path d="M8 16 3 21" />
                <path d="M16 16 21 21" />
              </svg>
            </button>
            <button
              type="button"
              className="opx-sales-chat-control"
              aria-label={text("chat.close", "Cerrar")}
              onClick={() => {
                setIsExpanded(false);
                dismissChat();
              }}
            >
              <svg className="opx-sales-chat-control-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 6 12 12" />
                <path d="m18 6-12 12" />
              </svg>
            </button>
          </div>

          {isNewSupportFlow ? (
            <div className="opx-sales-chat-media">
              <div className="opx-sales-chat-avatar" aria-hidden="true">
                <span className="opx-sales-chat-avatar-face" />
              </div>
              <Link href="/contacto" className="opx-sales-chat-speak">
                <HeadphonesIcon className="h-4 w-4" aria-hidden />
                {text("chat.talk", "Hablar ahora")}
              </Link>
            </div>
          ) : null}

          <div className="opx-sales-chat-body">
            <div
              className="opx-sales-chat-transcript"
              aria-label={text("chat.flow.transcript", "Conversación con Melissa")}
              aria-live="polite"
            >
              <div className="opx-sales-chat-message opx-sales-chat-message-assistant">
                <span className="opx-sales-chat-message-name">Melissa</span>
                <p>
                  {text(
                    "chat.body",
                    "¿Estás explorando soluciones para identidad, documentos u operaciones listas para IA? Puedo ayudarte con preguntas sobre acceso seguro, flujos de trabajo y planificación de implementación."
                  )}
                </p>
              </div>

              {visibleMessages.map((message) => (
                <div
                  key={message.id}
                  className={`opx-sales-chat-message opx-sales-chat-message-${message.role}`}
                >
                  {message.role === "assistant" && (
                    <span className="opx-sales-chat-message-name">Melissa</span>
                  )}
                  <p>{message.content}</p>
                </div>
              ))}

              {isSending ? (
                <div className="opx-sales-chat-message opx-sales-chat-message-assistant opx-sales-chat-message-loading">
                  <span className="opx-sales-chat-message-name">Melissa</span>
                  <p>{text("chat.flow.thinking", "Revisando tu solicitud...")}</p>
                </div>
              ) : null}
            </div>

            <form className="opx-sales-chat-input" onSubmit={handleQuestionSubmit}>
              <label className="sr-only" htmlFor="opx-sales-chat-question-compact">
                {text("chat.inputLabel", "Haz una pregunta a Opendex")}
              </label>
              <input
                id="opx-sales-chat-question-compact"
                name="question"
                type="text"
                autoComplete="off"
                maxLength={maxSupportQuestionLength}
                placeholder={text("chat.inputPlaceholder", "Haz una pregunta a Opendex")}
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
              />
              <MessageCircle className="h-4 w-4" aria-hidden />
              <button
                type="submit"
                aria-label={text("chat.submit", "Enviar pregunta")}
                disabled={isSending || question.trim().length === 0}
              >
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </form>

            {errorMessage ? <p className="opx-sales-chat-error">{errorMessage}</p> : null}

            <p className="opx-sales-chat-legal">
              {text(
                "chat.legal",
                "Al usar este asistente automatizado, la información que proporciones puede usarse para dar seguimiento a tu solicitud y mejorar tu experiencia con Opendex. No envíes información personal sensible ni financiera."
              )}
            </p>
          </div>
        </>
      )}
    </aside>
  );
}
