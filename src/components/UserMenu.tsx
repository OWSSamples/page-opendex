"use client";

import { useState } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="opx-json-button opx-json-button-secondary"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Abrir menú de consola"
      >
        O
      </button>
      {open && (
        <div className="opx-json-menu">
          <div className="opx-json-label">Cuenta</div>
          <a href="#dashboard" className="opx-json-menu-link">Console</a>
          <a href="#servicios" className="opx-json-menu-link">Productos</a>
          <a href="#documentacion" className="opx-json-menu-link">Documentación</a>
          <a href="#precios" className="opx-json-menu-link">Plan empresarial</a>
        </div>
      )}
    </div>
  );
}
