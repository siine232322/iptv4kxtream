import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const OUT = join(process.cwd(), "public", "images");
mkdirSync(OUT, { recursive: true });

const BLUE = "#0878D9";
const BLUE_DARK = "#063B73";
const PURPLE = "#8B2BBE";
const PINK = "#E83B8E";
const INK = "#050810";

let uid = 0;
const nid = (p) => `${p}${uid++}`;

function svgWrap(w, h, defs, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <defs>${defs}</defs>
  ${body}
</svg>`;
}

function skyDefs(id, from, to) {
  return `<linearGradient id="${id}" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="${from}"/>
    <stop offset="100%" stop-color="${to}"/>
  </linearGradient>`;
}

function radialGlowDefs(id, color) {
  return `<radialGradient id="${id}" cx="50%" cy="35%" r="65%">
    <stop offset="0%" stop-color="${color}" stop-opacity="0.55"/>
    <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
  </radialGradient>`;
}

function vignetteDefs(id) {
  return `<radialGradient id="${id}" cx="50%" cy="45%" r="75%">
    <stop offset="55%" stop-color="#000000" stop-opacity="0"/>
    <stop offset="100%" stop-color="#000000" stop-opacity="0.55"/>
  </radialGradient>`;
}

function grainFilterDefs(id) {
  return `<filter id="${id}"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise"/><feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0"/></filter>`;
}

function vignetteAndGrain(w, h, vId, gId) {
  return `<rect width="${w}" height="${h}" fill="url(#${vId})"/><rect width="${w}" height="${h}" filter="url(#${gId})" style="mix-blend-mode:overlay" opacity="0.5"/>`;
}

function stars(count, w, h, seed = 1) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  let out = "";
  for (let i = 0; i < count; i++) {
    const x = rand() * w;
    const y = rand() * h * 0.6;
    const r = rand() * 1.6 + 0.4;
    out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="#ffffff" opacity="${(rand() * 0.5 + 0.35).toFixed(2)}"/>`;
  }
  return out;
}

function confettiBurst(cx, cy, count, w, h, seed = 3) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const colors = ["#ffffff", PINK, "#FFD166", BLUE];
  let out = "";
  for (let i = 0; i < count; i++) {
    const a = rand() * Math.PI * 2;
    const dist = rand() * Math.min(w, h) * 0.42;
    const x = cx + Math.cos(a) * dist;
    const y = cy + Math.sin(a) * dist * 0.6;
    const size = rand() * 10 + 5;
    const rot = rand() * 360;
    const c = colors[i % colors.length];
    out += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${size.toFixed(1)}" height="${(size * 0.4).toFixed(1)}" rx="2" fill="${c}" opacity="0.85" transform="rotate(${rot.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
  }
  return out;
}

function skyline(y, w, color, opacity, seed = 5) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  let x = -20;
  let out = "";
  while (x < w + 20) {
    const bw = rand() * 46 + 26;
    const bh = rand() * 160 + 60;
    out += `<rect x="${x.toFixed(0)}" y="${(y - bh).toFixed(0)}" width="${bw.toFixed(0)}" height="${(bh + 40).toFixed(0)}" fill="${color}" opacity="${opacity}"/>`;
    if (rand() > 0.5) {
      for (let wy = y - bh + 14; wy < y - 10; wy += 18) {
        if (rand() > 0.4) {
          out += `<rect x="${(x + bw * 0.25).toFixed(0)}" y="${wy.toFixed(0)}" width="5" height="7" fill="#FFD166" opacity="0.5"/>`;
        }
      }
    }
    x += bw + rand() * 10 + 4;
  }
  return out;
}

function mountains(y, w, color, opacity) {
  return `<path d="M -20 ${y + 40} L 90 ${y - 120} L 180 ${y - 30} L 280 ${y - 160} L 380 ${y - 40} L 460 ${y - 130} L ${w + 20} ${y + 20} L ${w + 20} ${y + 200} L -20 ${y + 200} Z" fill="${color}" opacity="${opacity}"/>`;
}

function waves(y, w, color, opacity) {
  return `<path d="M -20 ${y} Q ${w * 0.15} ${y - 26} ${w * 0.3} ${y} T ${w * 0.6} ${y} T ${w * 0.9} ${y} T ${w + 20} ${y} L ${w + 20} ${y + 220} L -20 ${y + 220} Z" fill="${color}" opacity="${opacity}"/>`;
}

function sunGlow(cx, cy, r, color) {
  const id = nid("sun");
  return `<defs><radialGradient id="${id}"><stop offset="0%" stop-color="${color}" stop-opacity="0.9"/><stop offset="100%" stop-color="${color}" stop-opacity="0"/></radialGradient></defs><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id})"/><circle cx="${cx}" cy="${cy}" r="${r * 0.35}" fill="${color}" opacity="0.85"/>`;
}

function spotlightCone(cx, topY, bottomY, topW, bottomW, color, opacity) {
  return `<polygon points="${cx - topW / 2},${topY} ${cx + topW / 2},${topY} ${cx + bottomW / 2},${bottomY} ${cx - bottomW / 2},${bottomY}" fill="${color}" opacity="${opacity}"/>`;
}

function stadiumScene(w, h, night = false) {
  const groundY = h * 0.6;
  const floodPositions = [w * 0.06, w * 0.94];
  let out = "";
  out += `<rect y="0" width="${w}" height="${groundY}" fill="${night ? "#050b18" : "#0c2038"}"/>`;
  out += `<ellipse cx="${w / 2}" cy="${groundY + 90}" rx="${w * 0.85}" ry="${h * 0.34}" fill="#16324a"/>`;
  out += `<ellipse cx="${w / 2}" cy="${groundY + 78}" rx="${w * 0.78}" ry="${h * 0.28}" fill="#0f5c2e"/>`;
  out += `<ellipse cx="${w / 2}" cy="${groundY + 78}" rx="${w * 0.78}" ry="${h * 0.28}" fill="url(#stripes)" opacity="0.22"/>`;
  out += `<ellipse cx="${w / 2}" cy="${groundY + 74}" rx="${w * 0.5}" ry="${h * 0.16}" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.55"/>`;
  out += `<circle cx="${w / 2}" cy="${groundY + 74}" r="${w * 0.09}" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.5"/>`;
  // crowd texture in the stands
  let cx0 = w * 0.05;
  let cRow = 0;
  while (cRow < 3) {
    let cx = cx0;
    while (cx < w * 0.95) {
      const col = ["#ffd166", "#ffffff", PINK, BLUE][Math.floor((cx * 7 + cRow * 13) % 4)];
      out += `<circle cx="${cx.toFixed(0)}" cy="${(groundY - 6 - cRow * 9).toFixed(0)}" r="2.4" fill="${col}" opacity="0.55"/>`;
      cx += 9;
    }
    cRow++;
  }
  for (const fx of floodPositions) {
    out += `<rect x="${fx - 3}" y="${groundY - 210}" width="6" height="212" fill="#cfd6e3" opacity="0.7"/>`;
    out += `<rect x="${fx - 22}" y="${groundY - 226}" width="44" height="18" rx="3" fill="#cfd6e3" opacity="0.8"/>`;
    out += sunGlow(fx, groundY - 220, 75, "#fff7d6");
  }
  out += ball(w / 2, groundY + 74, 16, BLUE_DARK);
  return out;
}

function filmReel(cx, cy, r, color) {
  let holes = "";
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    holes += `<circle cx="${(cx + Math.cos(a) * r * 0.55).toFixed(1)}" cy="${(cy + Math.sin(a) * r * 0.55).toFixed(1)}" r="${r * 0.16}" fill="${INK}"/>`;
  }
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="6" opacity="0.7"/><circle cx="${cx}" cy="${cy}" r="${r * 0.22}" fill="${color}" opacity="0.7"/>${holes}`;
}

function planetScene(cx, cy, r, color1, color2) {
  const id = nid("planet");
  return `<defs><linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${color1}"/><stop offset="100%" stop-color="${color2}"/></linearGradient></defs>
  <ellipse cx="${cx}" cy="${cy}" rx="${r * 1.7}" ry="${r * 0.35}" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.35" transform="rotate(-18 ${cx} ${cy})"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id})"/>
  <path d="M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx} ${cy - r}" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.15"/>`;
}

function silhouetteRunner(cx, baseY, scale, color) {
  return `<g transform="translate(${cx} ${baseY}) scale(${scale})" fill="${color}" opacity="0.85">
    <circle cx="0" cy="-58" r="10"/>
    <path d="M -4 -46 Q 10 -30 4 -6 L 14 30 L 4 30 L -4 -2 L -18 20 L -26 16 L -10 -14 Q -16 -30 -4 -46 Z"/>
    <path d="M -2 -20 L -30 -8 L -32 -16 L -4 -30 Z"/>
  </g>`;
}

function houseSilhouette(cx, baseY, color) {
  return `<g fill="${color}" opacity="0.6">
    <rect x="${cx - 70}" y="${baseY - 80}" width="140" height="80"/>
    <polygon points="${cx - 90},${baseY - 78} ${cx},${baseY - 150} ${cx + 90},${baseY - 78}"/>
    <rect x="${cx - 16}" y="${baseY - 44}" width="32" height="44" fill="${INK}" opacity="0.6"/>
  </g>
  <circle cx="${cx + 150}" cy="${baseY - 190}" r="30" fill="#FFD166" opacity="0.8"/>`;
}

function ball(cx, cy, r, color) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffffff" opacity="0.92"/>
  <path d="M ${cx} ${cy - r} L ${cx + r * 0.5} ${cy - r * 0.3} L ${cx + r * 0.3} ${cy + r * 0.5} L ${cx - r * 0.3} ${cy + r * 0.5} L ${cx - r * 0.5} ${cy - r * 0.3} Z" fill="${color}" opacity="0.8"/>`;
}

function clapper(cx, cy, w, h, color) {
  return `<g opacity="0.8">
    <rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="6" fill="${color}"/>
    <rect x="${cx - w / 2}" y="${cy - h / 2 - 18}" width="${w}" height="18" fill="${color}" transform="skewX(-18)"/>
  </g>`;
}

function screenRows(cx, topY, w, rowH, gap, count, colors) {
  let out = "";
  for (let i = 0; i < count; i++) {
    const y = topY + i * (rowH + gap);
    out += `<rect x="${cx - w / 2}" y="${y}" width="${w}" height="${rowH}" rx="4" fill="${colors[i % colors.length]}" opacity="0.5"/>`;
  }
  return out;
}

/* ---------------- composite scene builders ---------------- */

function writeScene(name, w, h, fn) {
  const body = fn(w, h);
  writeFileSync(join(OUT, `${name}.svg`), svgWrap(w, h, "", body), "utf8");
}

const posterWH = [400, 520];
const heroWH = [640, 360];
const deviceWH = [480, 360];

/* Entertainment categories */
writeScene("category-sport", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g");
  return `<defs>${skyDefs(nid("sky"), "#0f2e17", "#092013")}${vignetteDefs(vId)}${grainFilterDefs(gId)}<pattern id="stripes" width="40" height="10" patternUnits="userSpaceOnUse"><rect width="20" height="10" fill="#ffffff"/></pattern></defs>
  <rect width="${w}" height="${h}" fill="#0c2716"/>
  ${stadiumScene(w, h)}
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("category-football", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g");
  return `<defs>${vignetteDefs(vId)}${grainFilterDefs(gId)}<pattern id="stripes" width="40" height="10" patternUnits="userSpaceOnUse"><rect width="20" height="10" fill="#ffffff"/></pattern></defs>
  <rect width="${w}" height="${h}" fill="#0d3a1f"/>
  ${stadiumScene(w, h, true)}
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("category-films", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g"), sId = nid("s");
  return `<defs>${skyDefs(nid("sky"), "#1a0e2e", INK)}${vignetteDefs(vId)}${grainFilterDefs(gId)}${radialGlowDefs(sId, PURPLE)}</defs>
  <rect width="${w}" height="${h}" fill="${INK}"/>
  <rect width="${w}" height="${h}" fill="url(#${sId})"/>
  ${spotlightCone(w * 0.3, 0, h * 0.7, 40, 260, "#ffffff", 0.08)}
  ${spotlightCone(w * 0.7, 0, h * 0.7, 40, 260, PINK, 0.1)}
  ${filmReel(w * 0.5, h * 0.42, 90, "#ffffff")}
  ${clapper(w * 0.5, h * 0.78, 150, 70, PURPLE)}
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("category-series", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g");
  return `<defs>${skyDefs(nid("sky"), "#0b1530", "#05070f")}${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
  <rect width="${w}" height="${h}" fill="${INK}"/>
  <rect x="${w * 0.14}" y="${h * 0.22}" width="${w * 0.72}" height="${h * 0.5}" rx="14" fill="#0a1428" stroke="${BLUE}" stroke-width="4" opacity="0.9"/>
  ${screenRows(w / 2, h * 0.3, w * 0.58, 26, 14, 5, [BLUE, PURPLE, PINK, BLUE_DARK])}
  <circle cx="${w / 2}" cy="${h * 0.86}" r="30" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.5"/>
  <polygon points="${w / 2 - 8},${h * 0.86 - 12} ${w / 2 - 8},${h * 0.86 + 12} ${w / 2 + 14},${h * 0.86}" fill="#ffffff" opacity="0.8"/>
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("category-documentaires", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g");
  return `<defs>${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
  <rect width="${w}" height="${h}" fill="#0e2a3d"/>
  ${sunGlow(w * 0.72, h * 0.28, 70, "#ffe1a8")}
  ${mountains(h * 0.62, w, "#0a1c2b", 0.9)}
  ${waves(h * 0.78, w, "#082433", 0.95)}
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("category-divertissement", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g");
  return `<defs>${skyDefs(nid("sky"), "#3a0e3e", "#150a2e")}${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
  <rect width="${w}" height="${h}" fill="#20102f"/>
  ${spotlightCone(w * 0.5, 0, h * 0.75, 60, 340, "#ffd166", 0.16)}
  ${confettiBurst(w / 2, h * 0.45, 26, w, h, 7)}
  <circle cx="${w / 2}" cy="${h * 0.42}" r="42" fill="none" stroke="#ffffff" stroke-width="5" opacity="0.7"/>
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("category-jeunesse", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g");
  return `<defs>${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
  <rect width="${w}" height="${h}" fill="#ffb3c6"/>
  <circle cx="${w * 0.28}" cy="${h * 0.32}" r="60" fill="${PINK}" opacity="0.85"/>
  <circle cx="${w * 0.68}" cy="${h * 0.22}" r="44" fill="${BLUE}" opacity="0.85"/>
  <circle cx="${w * 0.55}" cy="${h * 0.5}" r="34" fill="#ffe066" opacity="0.9"/>
  ${confettiBurst(w / 2, h * 0.65, 20, w, h * 0.8, 11)}
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("category-international", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g");
  return `<defs>${skyDefs(nid("sky"), "#0a2540", "#050e1c")}${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
  <rect width="${w}" height="${h}" fill="#0a2540"/>
  ${planetScene(w / 2, h * 0.46, 100, BLUE, PURPLE)}
  <circle cx="${w / 2}" cy="${h * 0.46}" r="130" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.2"/>
  <circle cx="${w / 2}" cy="${h * 0.46}" r="160" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.12"/>
  ${stars(30, w, h, 21)}
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

/* Movie genre posters */
writeScene("movie-action", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g"), sId = nid("s");
  return `<defs>${vignetteDefs(vId)}${grainFilterDefs(gId)}${radialGlowDefs(sId, "#ff5a36")}</defs>
  <rect width="${w}" height="${h}" fill="#1a0705"/>
  <rect width="${w}" height="${h}" fill="url(#${sId})"/>
  ${spotlightCone(w * 0.5, h * 0.35, h, 20, 500, "#ff8a4c", 0.18)}
  ${silhouetteRunner(w * 0.5, h * 0.82, 2.6, "#0a0402")}
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("movie-comedie", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g");
  return `<defs>${skyDefs(nid("sky"), "#ffd23f", "#ee6c9b")}${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
  <rect width="${w}" height="${h}" fill="#ffb703"/>
  ${confettiBurst(w / 2, h * 0.42, 34, w, h, 4)}
  <circle cx="${w / 2}" cy="${h * 0.42}" r="70" fill="#ffffff" opacity="0.18"/>
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("movie-thriller", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g");
  return `<defs>${skyDefs(nid("sky"), "#0c1224", "#03050c")}${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
  <rect width="${w}" height="${h}" fill="#050810"/>
  ${skyline(h * 0.62, w, "#0d1730", 0.9, 17)}
  ${skyline(h * 0.68, w, "#111c38", 0.95, 42)}
  <rect width="${w}" height="${h}" fill="${PURPLE}" opacity="0.06"/>
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("movie-science-fiction", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g");
  return `<defs>${skyDefs(nid("sky"), "#0a0d2e", "#02030a")}${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
  <rect width="${w}" height="${h}" fill="#050414"/>
  ${stars(46, w, h, 9)}
  ${planetScene(w * 0.62, h * 0.36, 80, BLUE, PURPLE)}
  ${silhouetteRunner(w * 0.3, h * 0.88, 1.8, "#020103")}
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("movie-drame", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g"), sId = nid("s");
  return `<defs>${vignetteDefs(vId)}${grainFilterDefs(gId)}${radialGlowDefs(sId, "#8a6a3f")}</defs>
  <rect width="${w}" height="${h}" fill="#0f0a08"/>
  <rect width="${w}" height="${h}" fill="url(#${sId})"/>
  ${spotlightCone(w * 0.5, 0, h * 0.9, 90, 420, "#ffe1a8", 0.14)}
  <circle cx="${w / 2}" cy="${h * 0.62}" r="20" fill="#1a1310" opacity="0.9"/>
  <rect x="${w / 2 - 16}" y="${h * 0.62}" width="32" height="70" rx="14" fill="#1a1310" opacity="0.9"/>
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("movie-famille", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g");
  return `<defs>${skyDefs(nid("sky"), "#8fd3ff", "#fff3c4")}${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
  <rect width="${w}" height="${h}" fill="#aee2ff"/>
  ${houseSilhouette(w * 0.42, h * 0.72, "#3a2e6b")}
  ${waves(h * 0.78, w, "#7fd3b0", 0.9)}
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("movie-aventure", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g");
  return `<defs>${skyDefs(nid("sky"), "#ffb35c", "#ff7854")}${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
  <rect width="${w}" height="${h}" fill="#ff9a56"/>
  ${sunGlow(w * 0.5, h * 0.32, 66, "#fff2c9")}
  ${mountains(h * 0.6, w, "#5b3a2e", 0.85)}
  ${mountains(h * 0.68, w, "#3a2a24", 0.9)}
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

writeScene("movie-animation", ...posterWH, (w, h) => {
  const vId = nid("v"), gId = nid("g"), skyId = nid("sky");
  return `<defs>${skyDefs(skyId, PURPLE, PINK)}${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
  <rect width="${w}" height="${h}" fill="url(#${skyId})"/>
  ${confettiBurst(w * 0.4, h * 0.35, 22, w, h, 55)}
  <circle cx="${w * 0.62}" cy="${h * 0.55}" r="54" fill="#ffe066" opacity="0.9"/>
  <circle cx="${w * 0.3}" cy="${h * 0.62}" r="30" fill="#ffffff" opacity="0.5"/>
  ${vignetteAndGrain(w, h, vId, gId)}`;
});

/* Devices — line-art silhouette with a mini "screen content" mockup */
function deviceScene(kind) {
  const rows = `${screenRows(0, -46, 150, 14, 8, 3, ["#ffffff"])}`;
  return (w, h) => {
    const vId = nid("v"), gId = nid("g");
    const cx = w / 2, cy = h / 2;
    let frame = "";
    if (kind === "smart-tv" || kind === "android-tv") {
      frame = `<rect x="${cx - 150}" y="${cy - 95}" width="300" height="170" rx="10" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.85"/>
        <g transform="translate(${cx} ${cy - 10})">${rows}</g>
        <rect x="${cx - 16}" y="${cy + 75}" width="32" height="10" fill="#ffffff" opacity="0.7"/>
        <rect x="${cx - 55}" y="${cy + 85}" width="110" height="8" rx="4" fill="#ffffff" opacity="0.5"/>`;
    } else if (kind === "firestick") {
      frame = `<rect x="${cx - 70}" y="${cy - 90}" width="140" height="22" rx="11" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.7"/>
        <rect x="${cx - 22}" y="${cy - 60}" width="44" height="110" rx="20" fill="#ffffff" opacity="0.85"/>
        <circle cx="${cx}" cy="${cy - 8}" r="9" fill="${INK}"/>`;
    } else if (kind === "smartphone") {
      frame = `<rect x="${cx - 55}" y="${cy - 100}" width="110" height="200" rx="20" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.85"/>
        <g transform="translate(${cx} ${cy - 50}) scale(0.7)">${rows}</g>`;
    } else if (kind === "tablet") {
      frame = `<rect x="${cx - 90}" y="${cy - 115}" width="180" height="230" rx="18" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.85"/>
        <g transform="translate(${cx} ${cy - 60}) scale(1.1)">${rows}</g>`;
    } else {
      frame = `<rect x="${cx - 100}" y="${cy - 65}" width="200" height="120" rx="10" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.85"/>
        <g transform="translate(${cx} ${cy - 10})">${rows}</g>
        <path d="M ${cx - 120} ${cy + 55} L ${cx + 120} ${cy + 55} L ${cx + 104} ${cy + 78} L ${cx - 104} ${cy + 78} Z" fill="#ffffff" opacity="0.45"/>`;
    }
    return `<defs>${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
    <rect width="${w}" height="${h}" fill="url(#dg)"/>
    ${frame}
    ${vignetteAndGrain(w, h, vId, gId)}`;
  };
}

const deviceGradients = {
  "smart-tv": [BLUE_DARK, BLUE],
  "android-tv": [BLUE, PURPLE],
  firestick: [PURPLE, PINK],
  smartphone: [PINK, PURPLE],
  tablet: [BLUE, PINK],
  computer: [BLUE_DARK, PURPLE],
};

for (const [kind, [from, to]] of Object.entries(deviceGradients)) {
  const w = deviceWH[0], h = deviceWH[1];
  const grad = `<linearGradient id="dg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${from}"/><stop offset="100%" stop-color="${to}"/></linearGradient>`;
  const scene = deviceScene(kind)(w, h).replace("<defs>", `<defs>${grad}`);
  writeFileSync(join(OUT, `device-${kind}.svg`), svgWrap(w, h, "", scene), "utf8");
}

/* Hero featured banner + recommended row (16:9, fictional original titles) */
const heroContent = {
  "hero-featured-action-night": (w, h) => {
    const vId = nid("v"), gId = nid("g"), sId = nid("s");
    return `<defs>${vignetteDefs(vId)}${grainFilterDefs(gId)}${radialGlowDefs(sId, "#ff5a36")}</defs>
    <rect width="${w}" height="${h}" fill="#1a0705"/>
    <rect width="${w}" height="${h}" fill="url(#${sId})"/>
    ${spotlightCone(w * 0.65, 0, h, 60, 700, "#ff8a4c", 0.16)}
    ${silhouetteRunner(w * 0.66, h * 0.92, 3.4, "#0a0402")}
    ${vignetteAndGrain(w, h, vId, gId)}`;
  },
  "hero-reco-action-night": (w, h) => heroContent["hero-featured-action-night"](w, h),
  "hero-reco-dark-horizon": (w, h) => {
    const vId = nid("v"), gId = nid("g");
    return `<defs>${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
    <rect width="${w}" height="${h}" fill="#050414"/>
    ${stars(40, w, h, 3)}
    ${planetScene(w * 0.7, h * 0.42, 60, PURPLE, BLUE)}
    ${vignetteAndGrain(w, h, vId, gId)}`;
  },
  "hero-reco-hidden-city": (w, h) => {
    const vId = nid("v"), gId = nid("g");
    return `<defs>${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
    <rect width="${w}" height="${h}" fill="#050810"/>
    ${skyline(h * 0.7, w, "#0d1730", 0.9, 12)}
    ${skyline(h * 0.78, w, "#111c38", 0.95, 88)}
    ${vignetteAndGrain(w, h, vId, gId)}`;
  },
  "hero-reco-beyond-earth": (w, h) => {
    const vId = nid("v"), gId = nid("g");
    return `<defs>${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
    <rect width="${w}" height="${h}" fill="#040616"/>
    ${stars(50, w, h, 61)}
    ${planetScene(w * 0.4, h * 0.5, 70, BLUE, "#3fd0ff")}
    ${vignetteAndGrain(w, h, vId, gId)}`;
  },
  "hero-reco-final-match": (w, h) => {
    const vId = nid("v"), gId = nid("g");
    return `<defs>${vignetteDefs(vId)}${grainFilterDefs(gId)}<pattern id="stripes" width="40" height="10" patternUnits="userSpaceOnUse"><rect width="20" height="10" fill="#ffffff"/></pattern></defs>
    <rect width="${w}" height="${h}" fill="#0c2716"/>
    ${stadiumScene(w, h)}
    ${vignetteAndGrain(w, h, vId, gId)}`;
  },
  "hero-reco-ocean-planet": (w, h) => {
    const vId = nid("v"), gId = nid("g");
    return `<defs>${vignetteDefs(vId)}${grainFilterDefs(gId)}</defs>
    <rect width="${w}" height="${h}" fill="#0e2a3d"/>
    ${sunGlow(w * 0.78, h * 0.26, 50, "#ffe1a8")}
    ${mountains(h * 0.58, w, "#0a1c2b", 0.9)}
    ${waves(h * 0.74, w, "#082433", 0.95)}
    ${vignetteAndGrain(w, h, vId, gId)}`;
  },
};

for (const [name, fn] of Object.entries(heroContent)) {
  const w = heroWH[0], h = heroWH[1];
  writeFileSync(join(OUT, `${name}.svg`), svgWrap(w, h, "", fn(w, h)), "utf8");
}

/* Intro section — browsing-interface mockups */
function interfaceMock(kind) {
  return (w, h) => {
    const vId = nid("v"), gId = nid("g");
    const cx = w / 2, cy = h / 2;
    let content = "";
    if (kind === "smarttv") {
      content = `<rect x="30" y="30" width="${w - 60}" height="${h - 60}" rx="16" fill="#0a1428" stroke="${BLUE}" stroke-width="4"/>
      <rect x="52" y="56" width="${w - 104}" height="${h * 0.36}" rx="10" fill="${PURPLE}" opacity="0.5"/>
      ${screenRows(cx, cy + 10, w - 120, 20, 10, 3, [BLUE, PINK, BLUE_DARK])}`;
    } else if (kind === "livetv") {
      content = `<rect x="30" y="30" width="${w - 60}" height="${h - 60}" rx="16" fill="#0a1428" stroke="${PINK}" stroke-width="4"/>
      <rect x="52" y="52" width="60" height="${h - 104}" rx="8" fill="${BLUE_DARK}" opacity="0.6"/>
      ${screenRows(52 + 30 + (w - 150) / 2, 66, w - 150, 22, 10, 4, [PINK, PURPLE, BLUE])}
      <circle cx="82" cy="70" r="6" fill="#ff4d4d"/>`;
    } else if (kind === "movies") {
      content = `<rect x="30" y="30" width="${w - 60}" height="${h - 60}" rx="16" fill="#0a1428" stroke="${PURPLE}" stroke-width="4"/>
      <g>${[0, 1, 2].map((i) => `<rect x="${58 + i * ((w - 116) / 3 + 6)}" y="56" width="${(w - 116) / 3}" height="${h - 130}" rx="8" fill="${[BLUE, PURPLE, PINK][i]}" opacity="0.55"/>`).join("")}</g>`;
    } else {
      content = `<rect x="30" y="30" width="${w - 60}" height="${h - 60}" rx="16" fill="#0a1428" stroke="${BLUE}" stroke-width="4"/>
      ${[0, 1, 2, 3].map((i) => `<rect x="52" y="${56 + i * 34}" width="${w - 104}" height="24" rx="6" fill="${[BLUE, PURPLE, PINK, BLUE_DARK][i]}" opacity="0.5"/>`).join("")}`;
    }
    return `<defs>${vignetteDefs(vId)}${grainFilterDefs(gId)}<linearGradient id="ig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${BLUE_DARK}"/><stop offset="100%" stop-color="${PURPLE}"/></linearGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#ig)"/>
    ${content}
    ${vignetteAndGrain(w, h, vId, gId)}`;
  };
}

for (const kind of ["smarttv", "livetv", "movies", "series"]) {
  const w = posterWH[0], h = posterWH[0];
  writeFileSync(join(OUT, `intro-${kind}-interface.svg`), svgWrap(w, h, "", interfaceMock(kind)(w, h)), "utf8");
}

console.log("Generated v2 art assets in", OUT);
