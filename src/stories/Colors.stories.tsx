import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Colors" };
export default meta;
type Story = StoryObj;

const scales: Record<string, string[]> = {
  paper: ["paper-0", "paper-50", "paper-100", "paper-200", "paper-300"],
  ink: ["ink-100", "ink-200", "ink-400", "ink-600", "ink-700", "ink-800", "ink-950"],
  primary: ["primary-50", "primary-100", "primary-200", "primary-300", "primary-400", "primary-500", "primary-600", "primary-700", "primary-800"],
  "primary (solid fill)": ["primary-solid", "primary-solid-hover", "primary-solid-active"],
  accent: ["accent-400", "accent-500", "accent-600"],
  success: ["success-100", "success-500", "success-700"],
  warning: ["warning-100", "warning-500", "warning-700"],
  danger: ["danger-100", "danger-500", "danger-700"],
};

function Swatch({ name }: { name: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 w-full rounded-[var(--radius-md)] border border-ink-100"
        style={{ backgroundColor: `var(--color-${name})` }}
      />
      <span className="font-mono text-mono-sm text-ink-600">{name}</span>
    </div>
  );
}

export const Palette: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-2" style={{ width: 720 }}>
      <div>
        <h2 className="mb-3 font-display text-heading-md text-ink-950">Vellum palette</h2>
        <p className="mb-6 text-body-sm text-ink-600">
          Cool paper neutrals, signal violet for action, ember for rare emphasis, and a semantic triad
          for status. Every value below is a live CSS variable — change it once in globals.css and
          every component updates.
        </p>
      </div>
      {Object.entries(scales).map(([group, tokens]) => (
        <div key={group}>
          <h3 className="mb-3 text-body-sm font-semibold capitalize text-ink-950">{group}</h3>
          <div className="grid grid-cols-5 gap-3 sm:grid-cols-9">
            {tokens.map((t) => (
              <Swatch key={t} name={t} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};