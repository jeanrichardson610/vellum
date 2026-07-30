import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";
import { getContrastRatio } from "../../lib/color";

// --- Rendering / class-enforcement tests ---
describe("Button solid-variant contrast enforcement", () => {
  it.each(["primary", "ember", "danger"] as const)(
    "forces text-white on the %s solid variant even if className tries to override it",
    (variant) => {
      render(
        <Button variant={variant} className="text-black">
          Click me
        </Button>
      );
      const button = screen.getByRole("button", { name: "Click me" });
      // tailwind-merge should resolve to text-white regardless of the
      // conflicting className passed in — this is the regression this
      // test exists to catch.
      expect(button.className).toMatch(/text-white/);
      expect(button.className).not.toMatch(/text-black/);
    }
  );

  // "secondary" — not "outline" (Button has no such variant; that name
  // belongs to Badge/Alert). It intentionally has dark text on a light
  // background, so it's the right variant to prove the enforcement is
  // scoped to solid-fill variants only, not applied blanket-wide.
  it("does not force text-white on non-solid variants", () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button.className).not.toMatch(/text-white/);
  });
});

// --- Contrast math (the actual bug class) ---
describe("solid-fill token contrast (WCAG AA)", () => {
  const pairs = [
    { name: "primary-solid", bg: "#6c5ce7", fg: "#ffffff" },
    { name: "primary-solid-hover", bg: "#5a47d6", fg: "#ffffff" },
    { name: "primary-solid-active", bg: "#4835b0", fg: "#ffffff" },
  ];

  it.each(pairs)(
    "$name clears the 4.5:1 AA minimum against white text",
    ({ bg, fg }) => {
      expect(getContrastRatio(bg, fg)).toBeGreaterThanOrEqual(4.5);
    }
  );

  // The actual bug this whole file exists to prevent regressing: before the
  // fix, dark mode retuned this pair lighter for text-on-background use and
  // Button borrowed the same variable for its solid fill, dropping to 2.57:1.
  it("documents the specific ratio that failed before the fix (regression marker, not a live token check)", () => {
    const brokenDarkModeHover = getContrastRatio("#a692ff", "#ffffff");
    expect(brokenDarkModeHover).toBeLessThan(4.5);
    expect(brokenDarkModeHover).toBeCloseTo(2.57, 1);
  });
});
