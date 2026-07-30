/**
 * WCAG 2.1 relative luminance and contrast ratio — the same formula used to
 * hand-verify the dark-mode Button/Switch/Checkbox contrast fix earlier in
 * this project, now codified so it can be asserted in tests instead of
 * recomputed by hand whenever a token value changes.
 *
 * https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
function relativeLuminance(hex: string): number {
  const channels = hex.replace("#", "").match(/.{2}/g);
  if (!channels || channels.length !== 3) {
    throw new Error(`relativeLuminance: expected a 6-digit hex color, got "${hex}"`);
  }
  const [r, g, b] = channels.map((c) => {
    const s = parseInt(c, 16) / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  }) as [number, number, number];
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Contrast ratio between two hex colors, per WCAG 2.1 — ranges from 1:1 (no contrast) to 21:1 (black on white). */
export function getContrastRatio(hexA: string, hexB: string): number {
  const l1 = relativeLuminance(hexA) + 0.05;
  const l2 = relativeLuminance(hexB) + 0.05;
  return l1 > l2 ? l1 / l2 : l2 / l1;
}
