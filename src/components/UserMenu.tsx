"use client";

import { useState } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/[0.08]"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Abrir menú de consola"
      >
        <span className="grid h-6 w-6 place-items-center rounded-sm bg-gradient-to-br from-atoll-400 to-stratos-500 text-[10px] font-black text-black-950">O</span>
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-60 overflow-hidden rounded-lg border border-white/8 bg-[#111317] p-1 shadow-2xl shadow-black/70">
          <div className="px-3 pb-2 pt-2 text-[11px] uppercase tracking-widest text-white/40">Cuenta</div>
          <a href="#dashboard" className="block rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white">Console</a>
          <a href="#servicios" className="block rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white">Productos</a>
          <a href="#documentacion" className="block rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white">Documentación</a>
          <div className="my-1 h-px bg-white/8" />
          <a href="#precios" className="block rounded-md px-3 py-2 text-sm text-atoll-300 transition hover:bg-white/5">Plan empresarial →</a>
        </div>
      )}
    </div>
  );
}
