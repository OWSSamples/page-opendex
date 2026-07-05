"use client";

import { useEffect, useRef } from "react";

export default function DataCenterBlueprint() {
  const cvs = useRef<HTMLCanvasElement>(null);
  const raf = useRef(0);

  useEffect(() => {
    const canvas = cvs.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    function draw(t: number) {
      if (!canvas) return;
      const W = canvas.width;
      const H = canvas.height;
      const scale = Math.min(W / 1200, H / 700);

      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.scale(scale, scale);
      ctx.translate((W / scale - 1200) / 2, (H / scale - 700) / 2);

      const blue = (a: number) => `rgba(59,130,246,${a})`;
      const green = (a: number) => `rgba(34,197,94,${a})`;
      const orange = (a: number) => `rgba(251,146,60,${a})`;
      const ink = (a: number) => `rgba(15,23,42,${a})`;

      const roundedRect = (x: number, y: number, w: number, h: number, r: number) => {
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, r);
      };

      const drawRack = (
        x: number,
        y: number,
        index: number,
        rowIndex: number,
        activeShift: number,
      ) => {
        const w = 70;
        const h = 72;
        const depth = 12;

        // Floor contact shadow and cool reflection.
        const shadow = ctx.createRadialGradient(x + w / 2, y + h + 12, 4, x + w / 2, y + h + 12, 58);
        shadow.addColorStop(0, ink(0.18));
        shadow.addColorStop(0.58, blue(0.07));
        shadow.addColorStop(1, "transparent");
        ctx.fillStyle = shadow;
        ctx.beginPath();
        ctx.ellipse(x + w / 2, y + h + 12, 58, 16, 0, 0, Math.PI * 2);
        ctx.fill();

        // Right side plane for light isometric depth.
        ctx.beginPath();
        ctx.moveTo(x + w, y + 8);
        ctx.lineTo(x + w + depth, y + 15);
        ctx.lineTo(x + w + depth, y + h + 5);
        ctx.lineTo(x + w, y + h);
        ctx.closePath();
        const side = ctx.createLinearGradient(x + w, y, x + w + depth, y + h);
        side.addColorStop(0, blue(0.12));
        side.addColorStop(1, ink(0.08));
        ctx.fillStyle = side;
        ctx.fill();
        ctx.strokeStyle = blue(0.24);
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Top cap.
        ctx.beginPath();
        ctx.moveTo(x + 4, y);
        ctx.lineTo(x + w, y + 8);
        ctx.lineTo(x + w + depth, y + 15);
        ctx.lineTo(x + depth, y + 8);
        ctx.closePath();
        const top = ctx.createLinearGradient(x, y, x + w, y + 18);
        top.addColorStop(0, "rgba(255,255,255,0.22)");
        top.addColorStop(1, blue(0.1));
        ctx.fillStyle = top;
        ctx.fill();
        ctx.strokeStyle = blue(0.28);
        ctx.stroke();

        // Main rack body.
        roundedRect(x, y + 6, w, h, 4);
        const body = ctx.createLinearGradient(x, y + 6, x + w, y + h);
        body.addColorStop(0, "rgba(255,255,255,0.16)");
        body.addColorStop(0.4, blue(0.08));
        body.addColorStop(1, ink(0.1));
        ctx.fillStyle = body;
        ctx.fill();
        ctx.strokeStyle = blue(0.46);
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Front glass/mesh door.
        roundedRect(x + 5, y + 11, w - 10, h - 11, 3);
        ctx.fillStyle = "rgba(248,250,252,0.05)";
        ctx.fill();
        ctx.strokeStyle = blue(0.22);
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Perforated door mesh.
        ctx.fillStyle = blue(0.18);
        for (let mx = x + 10; mx < x + w - 10; mx += 8) {
          for (let my = y + 17; my < y + h - 4; my += 8) {
            const pulse = (Math.sin(t * 0.004 + mx * 0.03 + my * 0.02) + 1) / 2;
            ctx.globalAlpha = 0.18 + pulse * 0.12;
            ctx.fillRect(mx, my, 2.2, 2.2);
          }
        }
        ctx.globalAlpha = 1;

        // Server blades behind the mesh.
        for (let u = 0; u < 7; u++) {
          const uy = y + 17 + u * 7;
          const bayAlpha = u % 2 === 0 ? 0.2 : 0.12;
          roundedRect(x + 9, uy, w - 18, 4.8, 1.5);
          ctx.fillStyle = blue(bayAlpha);
          ctx.fill();
          ctx.strokeStyle = blue(0.16);
          ctx.lineWidth = 0.45;
          ctx.stroke();

          // Drive bay slits.
          ctx.strokeStyle = ink(0.16);
          ctx.lineWidth = 0.35;
          for (let d = 0; d < 4; d++) {
            ctx.beginPath();
            ctx.moveTo(x + 14 + d * 9, uy + 1.4);
            ctx.lineTo(x + 19 + d * 9, uy + 1.4);
            ctx.stroke();
          }
        }

        // Door handle and vertical PDU strip.
        roundedRect(x + w - 10, y + 26, 3, 22, 1.5);
        ctx.fillStyle = "rgba(15,23,42,0.22)";
        ctx.fill();
        roundedRect(x + 6, y + 14, 3, h - 18, 1.5);
        ctx.fillStyle = orange(0.14);
        ctx.fill();

        // Activity LEDs with staggered behavior.
        for (let l = 0; l < 4; l++) {
          const phase = (t * 0.002 + activeShift + l * 0.7) % 2.8;
          const on = phase < 1.1;
          const lx = x + w - 17;
          const ly = y + 19 + l * 10;
          ctx.beginPath();
          ctx.arc(lx, ly, on ? 2.15 : 1.6, 0, Math.PI * 2);
          ctx.fillStyle = on ? green(0.95) : green(0.2);
          ctx.fill();
          if (on) {
            const ledGlow = ctx.createRadialGradient(lx, ly, 0, lx, ly, 8);
            ledGlow.addColorStop(0, green(0.34));
            ledGlow.addColorStop(1, "transparent");
            ctx.fillStyle = ledGlow;
            ctx.beginPath();
            ctx.arc(lx, ly, 8, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Tiny amber warning light on one rack per row.
        if (index === (rowIndex + 2) % 6) {
          const wx = x + 16;
          const wy = y + 61;
          ctx.beginPath();
          ctx.arc(wx, wy, 2, 0, Math.PI * 2);
          ctx.fillStyle = orange(0.9);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(wx, wy, 7, 0, Math.PI * 2);
          const amber = ctx.createRadialGradient(wx, wy, 0, wx, wy, 7);
          amber.addColorStop(0, orange(0.28));
          amber.addColorStop(1, "transparent");
          ctx.fillStyle = amber;
          ctx.fill();
        }

        // Label plate.
        roundedRect(x + 18, y + h + 9, 34, 9, 2);
        ctx.fillStyle = "rgba(255,255,255,0.38)";
        ctx.fill();
        ctx.strokeStyle = blue(0.18);
        ctx.stroke();
        ctx.fillStyle = blue(0.52);
        ctx.font = "6px monospace";
        ctx.textAlign = "center";
        ctx.fillText(rowIndex % 2 === 0 ? "CORE" : "EDGE", x + 35, y + h + 16);
      };

      // ─── Background grid ─────────────────────────────────────
      ctx.strokeStyle = blue(0.08);
      ctx.lineWidth = 0.5;
      for (let x = 0; x < 1200; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 700);
        ctx.stroke();
      }
      for (let y = 0; y < 700; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1200, y);
        ctx.stroke();
      }

      // ─── AREA 1: Server Racks (Hot/Cold Aisle Layout) ────────
      ctx.strokeStyle = blue(0.4);
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 4]);
      ctx.beginPath();
      ctx.rect(100, 100, 650, 450);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = blue(0.6);
      ctx.font = "bold 10px monospace";
      ctx.textAlign = "left";
      ctx.fillText("ZONE A — COMPUTE", 110, 90);

      // Hot/Cold Aisle labels
      ctx.fillStyle = blue(0.25);
      ctx.font = "8px monospace";
      ctx.textAlign = "center";
      ctx.fillText("← HOT AISLE", 425, 220);
      ctx.fillText("← COLD AISLE", 425, 340);
      ctx.fillText("← HOT AISLE", 425, 460);

      // Rack rows
      const rackRows = [
        { y: 130, count: 6 },
        { y: 250, count: 6 },
        { y: 370, count: 6 },
      ];

      rackRows.forEach((row, rowIdx) => {
        for (let i = 0; i < row.count; i++) {
          const rx = 140 + i * 95;
          const ry = row.y;
          drawRack(rx, ry, i, rowIdx, i * 0.36 + rowIdx * 0.7);
        }
      });

      // Cable trays (overhead)
      ctx.strokeStyle = blue(0.35);
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(130, 120);
      ctx.lineTo(730, 120);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(130, 240);
      ctx.lineTo(730, 240);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(130, 360);
      ctx.lineTo(730, 360);
      ctx.stroke();

      // Vertical spine cable tray
      ctx.beginPath();
      ctx.moveTo(110, 120);
      ctx.lineTo(110, 540);
      ctx.stroke();

      // Network cables from each rack to tray
      rackRows.forEach((row, rowIdx) => {
        for (let i = 0; i < row.count; i++) {
          const rx = 140 + i * 95;
          const ry = row.y;
          const trayY = row.y - 10;

          // Data cables (blue bundle)
          ctx.strokeStyle = blue(0.3);
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(rx + 35, ry);
          ctx.lineTo(rx + 35, trayY);
          ctx.stroke();

          // Data packets traveling up the cable (animated)
          const packetProgress = ((t * 0.15 + i * 100 + rowIdx * 200) % 200) / 200;
          if (packetProgress < 0.8) {
            const py = ry - (ry - trayY) * packetProgress;
            ctx.beginPath();
            ctx.arc(rx + 35, py, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = blue(0.8);
            ctx.fill();
            // Glow
            ctx.beginPath();
            ctx.arc(rx + 35, py, 5, 0, Math.PI * 2);
            const grd = ctx.createRadialGradient(rx + 35, py, 0, rx + 35, py, 5);
            grd.addColorStop(0, blue(0.4));
            grd.addColorStop(1, "transparent");
            ctx.fillStyle = grd;
            ctx.fill();
          }

          // Power cables (red)
          ctx.strokeStyle = "rgba(239,68,68,0.3)";
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(rx + 40, ry);
          ctx.bezierCurveTo(rx + 40, ry - 30, 110, ry + 20, 110, 540);
          ctx.stroke();
        }
      });

      // Horizontal cable runs on tray to spine (with data flow)
      ctx.strokeStyle = blue(0.25);
      ctx.lineWidth = 2;
      [120, 240, 360].forEach((y, idx) => {
        ctx.beginPath();
        ctx.moveTo(130, y);
        ctx.lineTo(110, y);
        ctx.stroke();

        // Data flowing horizontally on tray
        const flowProgress = ((t * 0.2 + idx * 50) % 100) / 100;
        if (flowProgress < 0.7) {
          const px = 130 - 20 * flowProgress;
          ctx.beginPath();
          ctx.arc(px, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = blue(0.7);
          ctx.fill();
        }
      });

      // ─── AREA 2: Network & Storage ───────────────────────────
      ctx.strokeStyle = orange(0.4);
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 4]);
      ctx.beginPath();
      ctx.rect(800, 100, 320, 200);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = orange(0.6);
      ctx.font = "bold 10px monospace";
      ctx.textAlign = "left";
      ctx.fillText("ZONE B — NETWORK", 810, 90);

      // Core switches
      for (let i = 0; i < 3; i++) {
        const sx = 820 + i * 95;
        const sy = 140;

        ctx.strokeStyle = orange(0.5);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(sx, sy, 70, 40);
        ctx.stroke();

        ctx.fillStyle = orange(0.08);
        ctx.fillRect(sx, sy, 70, 40);

        // Switch ports
        for (let p = 0; p < 12; p++) {
          const px = sx + 5 + (p % 6) * 10;
          const py = sy + 10 + Math.floor(p / 6) * 14;
          ctx.fillStyle = orange(0.15);
          ctx.fillRect(px, py, 8, 10);
          ctx.strokeStyle = orange(0.3);
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.rect(px, py, 8, 10);
          ctx.stroke();

          // Port LED
          const portActive = (t * 0.001 + i * 100 + p * 50) % 800 < 120;
          ctx.beginPath();
          ctx.arc(px + 4, py + 3, 1, 0, Math.PI * 2);
          ctx.fillStyle = portActive ? green(1) : green(0.2);
          ctx.fill();
        }

        ctx.fillStyle = orange(0.5);
        ctx.font = "6px monospace";
        ctx.textAlign = "center";
        ctx.fillText(`SW-${i + 1}`, sx + 35, sy + 52);
      }

      // Storage arrays
      for (let i = 0; i < 2; i++) {
        const stx = 845 + i * 120;
        const sty = 220;

        ctx.strokeStyle = orange(0.5);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(stx, sty, 90, 50);
        ctx.stroke();

        ctx.fillStyle = orange(0.06);
        ctx.fillRect(stx, sty, 90, 50);

        // Disk bays
        for (let d = 0; d < 8; d++) {
          const dx = stx + 8 + (d % 4) * 19;
          const dy = sty + 10 + Math.floor(d / 4) * 18;
          ctx.fillStyle = orange(0.12);
          ctx.fillRect(dx, dy, 15, 14);
          ctx.strokeStyle = orange(0.25);
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.rect(dx, dy, 15, 14);
          ctx.stroke();

          // Disk activity
          const diskActive = (t * 0.001 + i * 150 + d * 80) % 1200 < 300;
          ctx.beginPath();
          ctx.arc(dx + 7, dy + 5, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = diskActive ? orange(1) : orange(0.2);
          ctx.fill();
        }

        ctx.fillStyle = orange(0.5);
        ctx.font = "6px monospace";
        ctx.textAlign = "center";
        ctx.fillText(`STOR-${i + 1}`, stx + 45, sty + 64);
      }

      // ─── AREA 3: Power & Cooling ─────────────────────────────
      ctx.strokeStyle = green(0.4);
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 4]);
      ctx.beginPath();
      ctx.rect(800, 350, 320, 200);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = green(0.6);
      ctx.font = "bold 10px monospace";
      ctx.textAlign = "left";
      ctx.fillText("ZONE C — INFRASTRUCTURE", 810, 340);

      // PDUs
      for (let i = 0; i < 2; i++) {
        const px = 830 + i * 140;
        const py = 380;

        ctx.strokeStyle = green(0.5);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(px, py, 100, 70);
        ctx.stroke();

        ctx.fillStyle = green(0.06);
        ctx.fillRect(px, py, 100, 70);

        // Circuit breakers
        for (let b = 0; b < 6; b++) {
          const bx = px + 10 + (b % 3) * 28;
          const by = py + 15 + Math.floor(b / 3) * 30;
          ctx.fillStyle = green(0.15);
          ctx.fillRect(bx, by, 20, 22);
          ctx.strokeStyle = green(0.35);
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.rect(bx, by, 20, 22);
          ctx.stroke();

          ctx.fillStyle = green(0.7);
          ctx.font = "5px monospace";
          ctx.textAlign = "center";
          ctx.fillText(`${b + 1}`, bx + 10, by + 14);
        }

        ctx.fillStyle = green(0.5);
        ctx.font = "6px monospace";
        ctx.textAlign = "center";
        ctx.fillText(`PDU-${String.fromCharCode(65 + i)}`, px + 50, py + 82);
      }

      // CRAC units
      for (let i = 0; i < 2; i++) {
        const cx = 830 + i * 140;
        const cy = 480;

        ctx.strokeStyle = green(0.5);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(cx, cy, 100, 50);
        ctx.stroke();

        ctx.fillStyle = green(0.06);
        ctx.fillRect(cx, cy, 100, 50);

        // Fan
        ctx.beginPath();
        ctx.arc(cx + 35, cy + 25, 18, 0, Math.PI * 2);
        ctx.strokeStyle = green(0.35);
        ctx.lineWidth = 1;
        ctx.stroke();

        // Fan blades (rotating)
        const angle = (t * 0.003 + i) % (Math.PI * 2);
        for (let b = 0; b < 4; b++) {
          const ba = angle + (b * Math.PI) / 2;
          ctx.beginPath();
          ctx.moveTo(cx + 35, cy + 25);
          ctx.lineTo(cx + 35 + Math.cos(ba) * 14, cy + 25 + Math.sin(ba) * 14);
          ctx.strokeStyle = green(0.25);
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Temp display
        ctx.fillStyle = green(0.4);
        ctx.font = "7px monospace";
        ctx.textAlign = "left";
        ctx.fillText("TEMP", cx + 60, cy + 18);
        ctx.fillStyle = green(0.7);
        ctx.font = "bold 8px monospace";
        ctx.fillText("18°C", cx + 60, cy + 30);

        ctx.fillStyle = green(0.5);
        ctx.font = "6px monospace";
        ctx.textAlign = "center";
        ctx.fillText(`CRAC-${i + 1}`, cx + 50, cy + 62);
      }

      // ─── Main power feed ──────────────────────────────────────
      ctx.strokeStyle = "rgba(239,68,68,0.45)";
      ctx.lineWidth = 5;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(100, 580);
      ctx.lineTo(880, 580);
      ctx.lineTo(880, 450);
      ctx.stroke();

      // Power lines from main feed to PDUs
      for (let i = 0; i < 2; i++) {
        const px = 830 + i * 140;
        ctx.strokeStyle = "rgba(239,68,68,0.35)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(880, 450);
        ctx.bezierCurveTo(880, 460, px + 50, 460, px + 50, 380);
        ctx.stroke();
      }

      // Cooling lines from PDUs to CRAC
      for (let i = 0; i < 2; i++) {
        const px = 830 + i * 140;
        const cx = 830 + i * 140;
        ctx.strokeStyle = green(0.3);
        ctx.lineWidth = 2;
        ctx.setLineDash([3, 2]);
        ctx.beginPath();
        ctx.moveTo(px + 50, 450);
        ctx.lineTo(cx + 50, 480);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      ctx.fillStyle = "rgba(239,68,68,0.5)";
      ctx.font = "7px monospace";
      ctx.textAlign = "left";
      ctx.fillText("◄ 208V 3φ MAIN FEED", 110, 575);

      // ─── Data backbone ────────────────────────────────────────
      ctx.strokeStyle = blue(0.4);
      ctx.lineWidth = 3;
      ctx.setLineDash([]);
      // From compute zone to network zone
      ctx.beginPath();
      ctx.moveTo(750, 180);
      ctx.lineTo(800, 180);
      ctx.stroke();

      // Fiber bundles to switches
      for (let i = 0; i < 3; i++) {
        const sx = 820 + i * 95;
        ctx.strokeStyle = "rgba(168,85,247,0.35)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(800, 180);
        ctx.bezierCurveTo(810, 180, sx + 20, 130, sx + 35, 140);
        ctx.stroke();

        // Data packets on fiber (purple, faster)
        const fiberProgress = ((t * 0.25 + i * 80) % 150) / 150;
        if (fiberProgress < 0.9) {
          const curveT = fiberProgress;
          // Bezier curve formula
          const px = Math.pow(1 - curveT, 3) * 800 +
                     3 * Math.pow(1 - curveT, 2) * curveT * 810 +
                     3 * (1 - curveT) * Math.pow(curveT, 2) * (sx + 20) +
                     Math.pow(curveT, 3) * (sx + 35);
          const py = Math.pow(1 - curveT, 3) * 180 +
                     3 * Math.pow(1 - curveT, 2) * curveT * 180 +
                     3 * (1 - curveT) * Math.pow(curveT, 2) * 130 +
                     Math.pow(curveT, 3) * 140;

          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(168,85,247,0.9)";
          ctx.fill();
          // Glow trail
          ctx.beginPath();
          ctx.arc(px, py, 6, 0, Math.PI * 2);
          const grd = ctx.createRadialGradient(px, py, 0, px, py, 6);
          grd.addColorStop(0, "rgba(168,85,247,0.5)");
          grd.addColorStop(1, "transparent");
          ctx.fillStyle = grd;
          ctx.fill();
        }
      }

      // From switches to storage
      for (let i = 0; i < 2; i++) {
        const stx = 845 + i * 120;
        ctx.strokeStyle = orange(0.3);
        ctx.lineWidth = 1.5;
        for (let s = 0; s < 3; s++) {
          const sx = 820 + s * 95;
          ctx.beginPath();
          ctx.moveTo(sx + 35, 180);
          ctx.bezierCurveTo(sx + 35, 200, stx + 30, 210, stx + 45, 220);
          ctx.stroke();
        }
      }

      ctx.fillStyle = blue(0.5);
      ctx.font = "7px monospace";
      ctx.textAlign = "center";
      ctx.fillText("10G FIBER", 775, 173);

      // ─── Title block ──────────────────────────────────────────
      ctx.strokeStyle = blue(0.4);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.rect(100, 600, 1000, 80);
      ctx.stroke();

      // Dividers
      ctx.beginPath();
      ctx.moveTo(100, 625);
      ctx.lineTo(1100, 625);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(100, 650);
      ctx.lineTo(1100, 650);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(850, 600);
      ctx.lineTo(850, 680);
      ctx.stroke();

      ctx.fillStyle = blue(0.75);
      ctx.font = "bold 12px monospace";
      ctx.textAlign = "left";
      ctx.fillText("INFRASTRUCTURE CONTROL PLANE", 110, 618);

      ctx.fillStyle = blue(0.5);
      ctx.font = "9px monospace";
      ctx.fillText("FLOOR PLAN — INFRASTRUCTURE LAYOUT", 110, 642);
      ctx.fillText("18 RACKS · 10G BACKBONE · N+1 COOLING", 110, 667);

      ctx.font = "8px monospace";
      ctx.textAlign = "right";
      ctx.fillText("SCALE 1:100", 840, 618);
      ctx.fillText("REV 2026-Q2", 840, 642);
      ctx.fillText("SHEET 1/1", 840, 667);

      ctx.textAlign = "left";
      ctx.fillText("PROJECT: DC-001", 860, 618);
      ctx.fillText("DATE: 2026-06-06", 860, 642);
      ctx.fillText("CONFIDENTIAL", 860, 667);

      // Compass
      const compassX = 1070;
      const compassY = 630;
      ctx.strokeStyle = blue(0.4);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(compassX, compassY - 15);
      ctx.lineTo(compassX, compassY + 15);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(compassX - 15, compassY);
      ctx.lineTo(compassX + 15, compassY);
      ctx.stroke();
      ctx.fillStyle = blue(0.5);
      ctx.font = "bold 8px monospace";
      ctx.textAlign = "center";
      ctx.fillText("N", compassX, compassY - 18);

      ctx.restore();
      raf.current = requestAnimationFrame(draw);
    }

    raf.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={cvs}
      className="absolute inset-0 h-full w-full opacity-[0.38]"
      style={{ pointerEvents: "none" }}
    />
  );
}
