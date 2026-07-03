"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";
import { Select } from "@cloudflare/kumo/components/select";
import CorporateButton from "@/components/ui/corporate/Button";
import { useI18n } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/config";

type ContactFormData = {
  name: string;
  company: string;
  companyWebsite: string;
  email: string;
  countryRegion: string;
  jobTitle: string;
  jobFunction: string;
  jobLevel: string;
  companyType: string;
  requestType: string;
  otherRequest: string;
  message: string;
};

type ContactChannel = {
  label: string;
  value: string;
  detail: string;
  href: string;
};

type ContactCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  responseLabel: string;
  channelsTitle: string;
  channelsBody: string;
  channels: ContactChannel[];
  imageTitle: string;
  imageBody: string;
  imageStats: Array<[string, string]>;
  formEyebrow: string;
  formTitle: string;
  formBody: string;
  fields: {
    name: string;
    namePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    companyWebsite: string;
    companyWebsitePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    countryRegion: string;
    jobTitle: string;
    jobTitlePlaceholder: string;
    jobFunction: string;
    jobLevel: string;
    companyType: string;
    optional: string;
    requestType: string;
    otherRequest: string;
    otherRequestPlaceholder: string;
    message: string;
    messagePlaceholder: string;
  };
  countryOptions: string[];
  jobFunctionOptions: string[];
  jobLevelOptions: string[];
  companyTypeOptions: string[];
  requestOptions: string[];
  otherRequestOption: string;
  note: string;
  submit: string;
  sentTitle: string;
  sentBody: string;
};

const defaultChannels: ContactChannel[] = [
  {
    label: "Correo",
    value: "hola@opendex.com",
    detail: "Para propuestas, contexto comercial, seguimiento de productos y solicitudes generales.",
    href: "mailto:hola@opendex.com",
  },
  {
    label: "Teléfono",
    value: "+52 (55) 1234 5678",
    detail: "Para conversaciones iniciales, validación de alcance y coordinación de reuniones.",
    href: "tel:+525512345678",
  },
  {
    label: "Formulario",
    value: "Respuesta con contexto",
    detail: "La mejor opción cuando necesitas explicar producto, volumen, urgencia y objetivo.",
    href: "#contact-form",
  },
];

const contactCopy: Record<Locale, ContactCopy> = {
  es: {
    eyebrow: "Contacto Opendex",
    title: "Hablemos con contexto, no con formularios vacíos.",
    subtitle:
      "Cuéntanos qué estás intentando construir, qué producto te interesa y qué nivel de acompañamiento necesitas. Con esa información podemos responder mejor desde el primer mensaje.",
    responseLabel: "Respondemos solicitudes completas en horario laboral.",
    channelsTitle: "Cómo puedes comunicarte con nosotros",
    channelsBody:
      "Usa el canal que mejor se ajuste a tu caso. Si el alcance todavía no está claro, envía el formulario y nosotros ayudamos a ordenar la conversación.",
    channels: defaultChannels,
    imageTitle: "Una primera conversación debe aclarar alcance, riesgo y siguiente paso.",
    imageBody:
      "El objetivo del contacto no es venderte una promesa rápida. Queremos entender si necesitas identidad, documentos, operación, rediseño web o contexto técnico antes de proponer una ruta.",
    imageStats: [
      ["01", "Producto o servicio de interés"],
      ["02", "Etapa actual del proyecto"],
      ["03", "Urgencia, volumen y responsables"],
    ],
    formEyebrow: "Solicitud profesional",
    formTitle: "Envía el contexto correcto desde el inicio.",
    formBody:
      "Mientras más precisa sea la solicitud, mejor podemos responder: producto, empresa, objetivo, fechas, restricciones y cualquier referencia importante.",
    fields: {
      name: "Nombre completo",
      namePlaceholder: "Tu nombre",
      company: "Empresa",
      companyPlaceholder: "Nombre de la empresa",
      companyWebsite: "Sitio web de la empresa",
      companyWebsitePlaceholder: "https://empresa.com",
      email: "Correo de trabajo",
      emailPlaceholder: "tu@empresa.com",
      countryRegion: "País/región",
      jobTitle: "Cargo",
      jobTitlePlaceholder: "Ej. Directora de operaciones",
      jobFunction: "Función del cargo",
      jobLevel: "Nivel del cargo",
      companyType: "Tipo de empresa",
      optional: "Opcional",
      requestType: "Tipo de solicitud",
      otherRequest: "¿De qué se trata?",
      otherRequestPlaceholder: "Ej. alianza, prensa, soporte interno, propuesta especial...",
      message: "Explica el asunto",
      messagePlaceholder:
        "Cuéntanos qué quieres construir, qué producto te interesa, en qué etapa estás, qué volumen esperas y qué necesitas resolver primero.",
    },
    countryOptions: ["México", "Estados Unidos", "Colombia", "España", "Otro país/región"],
    jobFunctionOptions: ["Dirección general", "Producto", "Ingeniería", "Operaciones", "Finanzas", "Seguridad / TI", "Comercial", "Otra función"],
    jobLevelOptions: ["Founder / Owner", "C-Level", "VP", "Director/a", "Manager", "Individual contributor", "Consultor/a"],
    companyTypeOptions: ["SaaS / Software", "Fintech", "Retail / e-commerce", "Servicios profesionales", "Manufactura / logística", "Startup", "Empresa enterprise", "Otro tipo"],
    requestOptions: [
      "Información comercial",
      "Contexto técnico",
      "Implementación de identidad",
      "Facturación o documentos",
      "Punto de venta / operación",
      "Rediseño web",
      "Otros",
    ],
    otherRequestOption: "Otros",
    note:
      "No envíes contraseñas, tokens, claves privadas ni datos sensibles. Para casos técnicos, comparte solo contexto operativo.",
    submit: "Enviar solicitud",
    sentTitle: "Solicitud recibida",
    sentBody:
      "Gracias. Revisaremos el contexto y responderemos por el canal indicado con el siguiente paso más claro.",
  },
  en: {
    eyebrow: "Contact Opendex",
    title: "Talk to us with context, not with an empty form.",
    subtitle:
      "Tell us what you are trying to build, which product matters, and what level of support you need. That helps us reply with a useful next step.",
    responseLabel: "Complete requests are reviewed during business hours.",
    channelsTitle: "How to reach us",
    channelsBody:
      "Choose the channel that fits your case. If the scope is still unclear, send the form and we will help structure the conversation.",
    channels: defaultChannels,
    imageTitle: "A first conversation should clarify scope, risk and the next step.",
    imageBody:
      "The goal is not to sell a quick promise. We need to understand whether you need identity, documents, operations, web redesign or technical context.",
    imageStats: [
      ["01", "Product or service of interest"],
      ["02", "Current project stage"],
      ["03", "Urgency, volume and owners"],
    ],
    formEyebrow: "Professional request",
    formTitle: "Send the right context from the start.",
    formBody:
      "The more precise the request, the better we can respond: product, company, objective, dates, constraints and references.",
    fields: {
      name: "Full name",
      namePlaceholder: "Your name",
      company: "Company",
      companyPlaceholder: "Company name",
      companyWebsite: "Company website",
      companyWebsitePlaceholder: "https://company.com",
      email: "Work email",
      emailPlaceholder: "you@company.com",
      countryRegion: "Country/region",
      jobTitle: "Job title",
      jobTitlePlaceholder: "E.g. Head of operations",
      jobFunction: "Job function",
      jobLevel: "Job level",
      companyType: "Company type",
      optional: "Optional",
      requestType: "Request type",
      otherRequest: "What is it about?",
      otherRequestPlaceholder: "E.g. partnership, press, internal support, special proposal...",
      message: "Anything else?",
      messagePlaceholder:
        "Tell us what you want to build, which product matters, your stage, expected volume and what you need to solve first.",
    },
    countryOptions: ["Mexico", "United States", "Colombia", "Spain", "Other country/region"],
    jobFunctionOptions: ["Executive", "Product", "Engineering", "Operations", "Finance", "Security / IT", "Sales", "Other function"],
    jobLevelOptions: ["Founder / Owner", "C-Level", "VP", "Director", "Manager", "Individual contributor", "Consultant"],
    companyTypeOptions: ["SaaS / Software", "Fintech", "Retail / e-commerce", "Professional services", "Manufacturing / logistics", "Startup", "Enterprise", "Other type"],
    requestOptions: [
      "Commercial information",
      "Technical context",
      "Identity implementation",
      "Billing or documents",
      "Point of sale / operations",
      "Web redesign",
      "Other",
    ],
    otherRequestOption: "Other",
    note: "Do not send passwords, tokens, private keys or sensitive data. For technical cases, share only operational context.",
    submit: "Send request",
    sentTitle: "Request received",
    sentBody: "Thanks. We will review the context and reply through the indicated channel with a clear next step.",
  },
  pt: {
    eyebrow: "Contato Opendex",
    title: "Fale conosco com contexto, não com um formulário vazio.",
    subtitle:
      "Conte o que deseja construir, qual produto interessa e que acompanhamento precisa. Assim podemos responder melhor desde a primeira mensagem.",
    responseLabel: "Solicitações completas são revisadas em horário comercial.",
    channelsTitle: "Como falar conosco",
    channelsBody: "Escolha o canal adequado. Se o escopo ainda não estiver claro, envie o formulário e ajudaremos a organizar a conversa.",
    channels: defaultChannels,
    imageTitle: "Uma primeira conversa deve esclarecer escopo, risco e próximo passo.",
    imageBody: "Queremos entender se você precisa de identidade, documentos, operação, redesign web ou contexto técnico antes de propor uma rota.",
    imageStats: [["01", "Produto de interesse"], ["02", "Etapa do projeto"], ["03", "Urgência e responsáveis"]],
    formEyebrow: "Solicitação profissional",
    formTitle: "Envie o contexto correto desde o início.",
    formBody: "Quanto mais precisa for a solicitação, melhor poderemos responder.",
    fields: {
      name: "Nome completo",
      namePlaceholder: "Seu nome",
      company: "Empresa",
      companyPlaceholder: "Nome da empresa",
      companyWebsite: "Site da empresa",
      companyWebsitePlaceholder: "https://empresa.com",
      email: "Email profissional",
      emailPlaceholder: "voce@empresa.com",
      countryRegion: "País/região",
      jobTitle: "Cargo",
      jobTitlePlaceholder: "Ex. Diretora de operações",
      jobFunction: "Função do cargo",
      jobLevel: "Nível do cargo",
      companyType: "Tipo de empresa",
      optional: "Opcional",
      requestType: "Tipo de solicitação",
      otherRequest: "Do que se trata?",
      otherRequestPlaceholder: "Ex. parceria, imprensa, suporte interno, proposta especial...",
      message: "Explique o assunto",
      messagePlaceholder: "Conte o que deseja construir, etapa atual, volume esperado e prioridade.",
    },
    countryOptions: ["México", "Estados Unidos", "Colômbia", "Espanha", "Outro país/região"],
    jobFunctionOptions: ["Direção geral", "Produto", "Engenharia", "Operações", "Finanças", "Segurança / TI", "Comercial", "Outra função"],
    jobLevelOptions: ["Founder / Owner", "C-Level", "VP", "Diretor/a", "Manager", "Contribuidor individual", "Consultor/a"],
    companyTypeOptions: ["SaaS / Software", "Fintech", "Retail / e-commerce", "Serviços profissionais", "Manufatura / logística", "Startup", "Enterprise", "Outro tipo"],
    requestOptions: ["Informação comercial", "Contexto técnico", "Identidade", "Documentos", "Operação", "Redesign web", "Outros"],
    otherRequestOption: "Outros",
    note: "Não envie senhas, tokens, chaves privadas ou dados sensíveis.",
    submit: "Enviar solicitação",
    sentTitle: "Solicitação recebida",
    sentBody: "Vamos revisar o contexto e responder com o próximo passo.",
  },
  fr: {
    eyebrow: "Contact Opendex",
    title: "Contactez-nous avec du contexte, pas avec un formulaire vide.",
    subtitle:
      "Expliquez ce que vous voulez construire, le produit concerné et le niveau d'accompagnement attendu.",
    responseLabel: "Les demandes complètes sont examinées pendant les heures ouvrées.",
    channelsTitle: "Comment nous contacter",
    channelsBody: "Choisissez le canal adapté. Si la portée n'est pas claire, envoyez le formulaire.",
    channels: defaultChannels,
    imageTitle: "Une première conversation doit clarifier la portée, le risque et l'étape suivante.",
    imageBody: "Nous voulons comprendre si vous avez besoin d'identité, documents, opérations, refonte web ou contexte technique.",
    imageStats: [["01", "Produit concerné"], ["02", "Étape du projet"], ["03", "Urgence et responsables"]],
    formEyebrow: "Demande professionnelle",
    formTitle: "Envoyez le bon contexte dès le début.",
    formBody: "Plus la demande est précise, meilleure sera notre réponse.",
    fields: {
      name: "Nom complet",
      namePlaceholder: "Votre nom",
      company: "Entreprise",
      companyPlaceholder: "Nom de l'entreprise",
      companyWebsite: "Site web de l'entreprise",
      companyWebsitePlaceholder: "https://entreprise.com",
      email: "Email professionnel",
      emailPlaceholder: "vous@entreprise.com",
      countryRegion: "Pays/région",
      jobTitle: "Poste",
      jobTitlePlaceholder: "Ex. Directrice des opérations",
      jobFunction: "Fonction",
      jobLevel: "Niveau du poste",
      companyType: "Type d'entreprise",
      optional: "Optionnel",
      requestType: "Type de demande",
      otherRequest: "De quoi s'agit-il ?",
      otherRequestPlaceholder: "Ex. partenariat, presse, support interne, proposition spéciale...",
      message: "Précisez le sujet",
      messagePlaceholder: "Expliquez ce que vous voulez construire, l'étape actuelle, le volume attendu et la priorité.",
    },
    countryOptions: ["Mexique", "États-Unis", "Colombie", "Espagne", "Autre pays/région"],
    jobFunctionOptions: ["Direction générale", "Produit", "Ingénierie", "Opérations", "Finance", "Sécurité / IT", "Commercial", "Autre fonction"],
    jobLevelOptions: ["Founder / Owner", "C-Level", "VP", "Directeur/trice", "Manager", "Contributeur individuel", "Consultant/e"],
    companyTypeOptions: ["SaaS / Software", "Fintech", "Retail / e-commerce", "Services professionnels", "Fabrication / logistique", "Startup", "Enterprise", "Autre type"],
    requestOptions: ["Information commerciale", "Contexte technique", "Identité", "Documents", "Opérations", "Refonte web", "Autre"],
    otherRequestOption: "Autre",
    note: "N'envoyez pas de mots de passe, tokens, clés privées ou données sensibles.",
    submit: "Envoyer la demande",
    sentTitle: "Demande reçue",
    sentBody: "Nous examinerons le contexte et répondrons avec la prochaine étape.",
  },
  zh: {
    eyebrow: "联系 Opendex",
    title: "请带着上下文联系我们，而不是只提交空表单。",
    subtitle: "告诉我们你要构建什么、关注哪个产品、需要什么支持。这样我们可以给出更明确的下一步。",
    responseLabel: "完整请求会在工作时间内处理。",
    channelsTitle: "联系方式",
    channelsBody: "选择适合你的渠道。如果范围还不清楚，请先发送表单。",
    channels: defaultChannels,
    imageTitle: "第一次沟通应该明确范围、风险和下一步。",
    imageBody: "我们需要理解你需要身份、文档、运营、网站改版还是技术背景。",
    imageStats: [["01", "感兴趣的产品"], ["02", "项目阶段"], ["03", "紧急程度和负责人"]],
    formEyebrow: "专业请求",
    formTitle: "从第一条消息开始提供正确上下文。",
    formBody: "请求越具体，我们越能准确回复。",
    fields: {
      name: "姓名",
      namePlaceholder: "你的姓名",
      company: "公司",
      companyPlaceholder: "公司名称",
      companyWebsite: "公司网站",
      companyWebsitePlaceholder: "https://company.com",
      email: "工作邮箱",
      emailPlaceholder: "you@company.com",
      countryRegion: "国家/地区",
      jobTitle: "职位",
      jobTitlePlaceholder: "例如：运营负责人",
      jobFunction: "职位职能",
      jobLevel: "职位级别",
      companyType: "公司类型",
      optional: "可选",
      requestType: "请求类型",
      otherRequest: "具体是什么？",
      otherRequestPlaceholder: "例如：合作、媒体、内部支持、特殊提案...",
      message: "消息",
      messagePlaceholder: "说明你要构建什么、当前阶段、预期规模和优先级。",
    },
    countryOptions: ["墨西哥", "美国", "哥伦比亚", "西班牙", "其他国家/地区"],
    jobFunctionOptions: ["高管", "产品", "工程", "运营", "财务", "安全 / IT", "销售", "其他职能"],
    jobLevelOptions: ["Founder / Owner", "C-Level", "VP", "Director", "Manager", "Individual contributor", "Consultant"],
    companyTypeOptions: ["SaaS / Software", "Fintech", "Retail / e-commerce", "Professional services", "Manufacturing / logistics", "Startup", "Enterprise", "Other type"],
    requestOptions: ["商业信息", "技术背景", "身份系统", "文档", "运营", "网站改版", "其他"],
    otherRequestOption: "其他",
    note: "不要发送密码、令牌、私钥或敏感数据。",
    submit: "发送请求",
    sentTitle: "请求已收到",
    sentBody: "我们会查看上下文并回复下一步。",
  },
};

const initialFormData: ContactFormData = {
  name: "",
  company: "",
  companyWebsite: "",
  email: "",
  countryRegion: "",
  jobTitle: "",
  jobFunction: "",
  jobLevel: "",
  companyType: "",
  requestType: "",
  otherRequest: "",
  message: "",
};

export default function ContactClient() {
  const { locale } = useI18n();
  const copy = contactCopy[locale];
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [sent, setSent] = useState(false);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (sent) setSent(false);
  };

  const updateRequestType = (value: string) => {
    setFormData((current) => ({
      ...current,
      requestType: value,
      otherRequest: value === copy.otherRequestOption ? current.otherRequest : "",
    }));
    if (sent) setSent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="opx-contact-page">
      <section className="border-b border-[#ded8cc]">
        <div className="opx-layout-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1fr)] lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="opx-contact-kicker">{copy.eyebrow}</p>
            <h1 className="mt-5 max-w-[720px] text-balance text-[44px] font-semibold leading-[0.96] tracking-[-0.055em] text-[#101012] md:text-[64px]">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-[620px] text-[17px] leading-8 text-[#4c4a45]">{copy.subtitle}</p>
            <div className="mt-8 inline-flex w-fit rounded-full border border-[#d6d0c3] bg-white/70 px-4 py-2 text-[13px] font-medium text-[#34322e] shadow-sm">
              {copy.responseLabel}
            </div>
          </div>

          <aside className="overflow-hidden rounded-[28px] border border-[#ded8cc] bg-white shadow-[0_28px_90px_-62px_rgba(15,23,42,0.42)]">
            <div className="relative min-h-[280px]">
              <Image
                src="/images/assets/03.jpg"
                alt="Espacio visual para representar la conversación inicial con Opendex"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/68 via-[#111111]/12 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h2 className="max-w-[460px] text-[24px] font-semibold leading-tight tracking-[-0.035em]">
                  {copy.imageTitle}
                </h2>
              </div>
            </div>
            <div className="p-6 md:p-7">
              <p className="text-[14.5px] leading-7 text-[#57534b]">{copy.imageBody}</p>
              <div className="mt-6 grid gap-px overflow-hidden rounded-[18px] border border-[#e2ddd3] bg-[#e2ddd3]">
                {copy.imageStats.map(([step, label]) => (
                  <div key={step} className="grid grid-cols-[52px_minmax(0,1fr)] bg-[#fbfaf7] px-4 py-3">
                    <span className="font-mono text-[12px] font-semibold text-[#6d4df1]">{step}</span>
                    <span className="text-[13px] font-medium text-[#34322e]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#ded8cc] bg-white">
        <div className="opx-layout-shell grid gap-10 py-16 lg:grid-cols-[360px_minmax(0,1fr)]">
          <div>
            <h2 className="text-[30px] font-semibold tracking-[-0.045em] text-[#101012]">{copy.channelsTitle}</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#5f5a52]">{copy.channelsBody}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {copy.channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="group rounded-[22px] border border-[#e2ddd3] bg-[#fbfaf7] p-5 text-left transition hover:-translate-y-0.5 hover:border-[#cfc6b7] hover:bg-white hover:shadow-[0_24px_60px_-50px_rgba(15,23,42,0.55)]"
              >
                <span className="opx-contact-card-label">{channel.label}</span>
                <strong className="mt-3 block break-words text-[18px] font-semibold tracking-[-0.025em] text-[#151515]">
                  {channel.value}
                </strong>
                <span className="mt-3 block text-[13px] leading-6 text-[#625d55]">{channel.detail}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="bg-[#f7f5ef]">
        <div className="opx-layout-shell grid gap-10 py-16 lg:grid-cols-[minmax(0,0.78fr)_minmax(520px,1fr)] lg:py-20">
          <div className="lg:pt-8">
            <p className="opx-contact-kicker">{copy.formEyebrow}</p>
            <h2 className="mt-4 max-w-[520px] text-[36px] font-semibold leading-[1.02] tracking-[-0.052em] text-[#101012]">
              {copy.formTitle}
            </h2>
            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-[#5f5a52]">{copy.formBody}</p>
            <p className="mt-7 max-w-[520px] rounded-[18px] border border-[#ded8cc] bg-white/72 p-4 text-[13px] leading-6 text-[#5f5a52]">
              {copy.note}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-[#ded8cc] bg-white p-5 shadow-[0_28px_90px_-64px_rgba(15,23,42,0.45)] md:p-7"
          >
            <div className="grid gap-4">
              <Field label={copy.fields.email} htmlFor="contact-email">
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder={copy.fields.emailPlaceholder}
                  className="opx-contact-input"
                  autoComplete="email"
                  required
                />
              </Field>

              <Select
                label={copy.fields.countryRegion}
                value={formData.countryRegion}
                onValueChange={(value) => updateField("countryRegion", String(value))}
                placeholder={copy.fields.countryRegion}
                className="w-full"
                required
                size="lg"
              >
                {copy.countryOptions.map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>

              <Field label={copy.fields.name} htmlFor="contact-name">
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder={copy.fields.namePlaceholder}
                  className="opx-contact-input"
                  autoComplete="name"
                  required
                />
              </Field>

              <Field label={copy.fields.company} htmlFor="contact-company">
                <input
                  id="contact-company"
                  type="text"
                  value={formData.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  placeholder={copy.fields.companyPlaceholder}
                  className="opx-contact-input"
                  autoComplete="organization"
                  required
                />
              </Field>

              <Field label={copy.fields.companyWebsite} optionalLabel={copy.fields.optional} htmlFor="contact-company-website">
                <input
                  id="contact-company-website"
                  type="url"
                  value={formData.companyWebsite}
                  onChange={(event) => updateField("companyWebsite", event.target.value)}
                  placeholder={copy.fields.companyWebsitePlaceholder}
                  className="opx-contact-input"
                  autoComplete="url"
                />
              </Field>

              <Field label={copy.fields.jobTitle} htmlFor="contact-job-title">
                <input
                  id="contact-job-title"
                  type="text"
                  value={formData.jobTitle}
                  onChange={(event) => updateField("jobTitle", event.target.value)}
                  placeholder={copy.fields.jobTitlePlaceholder}
                  className="opx-contact-input"
                  autoComplete="organization-title"
                  required
                />
              </Field>

              <Select
                label={copy.fields.jobFunction}
                value={formData.jobFunction}
                onValueChange={(value) => updateField("jobFunction", String(value))}
                placeholder={copy.fields.jobFunction}
                className="w-full"
                required
                size="lg"
              >
                {copy.jobFunctionOptions.map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>

              <Select
                label={copy.fields.jobLevel}
                value={formData.jobLevel}
                onValueChange={(value) => updateField("jobLevel", String(value))}
                placeholder={copy.fields.jobLevel}
                className="w-full"
                required
                size="lg"
              >
                {copy.jobLevelOptions.map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>

              <Select
                label={copy.fields.companyType}
                value={formData.companyType}
                onValueChange={(value) => updateField("companyType", String(value))}
                placeholder={copy.fields.companyType}
                className="w-full"
                required
                size="lg"
              >
                {copy.companyTypeOptions.map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
            </div>

            <div className="mt-4">
              <Select
                label={copy.fields.requestType}
                value={formData.requestType}
                onValueChange={(value) => updateRequestType(String(value))}
                placeholder={copy.fields.requestType}
                className="w-full"
                required
                size="lg"
              >
                {copy.requestOptions.map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
            </div>

            {formData.requestType === copy.otherRequestOption ? (
              <Field label={copy.fields.otherRequest} htmlFor="contact-other-request" className="mt-4">
                <input
                  id="contact-other-request"
                  type="text"
                  value={formData.otherRequest}
                  onChange={(event) => updateField("otherRequest", event.target.value)}
                  placeholder={copy.fields.otherRequestPlaceholder}
                  className="opx-contact-input"
                  required
                />
              </Field>
            ) : null}

            <Field label={copy.fields.message} htmlFor="contact-message" className="mt-4">
              <textarea
                id="contact-message"
                value={formData.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder={copy.fields.messagePlaceholder}
                rows={7}
                className="opx-contact-input resize-none"
                required
              />
            </Field>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <CorporateButton type="submit" variant="primary" size="lg" className="min-h-[42px] rounded-[12px] px-6 text-[13px]">
                {copy.submit}
              </CorporateButton>
              {sent ? (
                <p className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[13px] font-medium text-emerald-700" role="status">
                  {copy.sentTitle}
                </p>
              ) : null}
            </div>

            {sent ? <p className="mt-4 text-[13px] leading-6 text-[#5f5a52]">{copy.sentBody}</p> : null}
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({
  children,
  className,
  htmlFor,
  label,
  optionalLabel,
}: {
  children: ReactNode;
  className?: string;
  htmlFor: string;
  label: string;
  optionalLabel?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-[13px] font-semibold text-[#26231f]">
        {label}
        {optionalLabel ? (
          <span className="ml-2 rounded-md bg-[#eeece8] px-1.5 py-0.5 text-[11px] font-medium text-[#6b665f]">
            {optionalLabel}
          </span>
        ) : null}
      </label>
      {children}
    </div>
  );
}
