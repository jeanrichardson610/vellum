import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Spacing & Radius" };
export default meta;
type Story = StoryObj;

const spacing = [1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24];
const radii = ["sm", "md", "lg", "xl"];

export const Scales: Story = {
  render: () => (
    <div className="flex flex-col gap-10" style={{ width: 720 }}>
      <div>
        <h2 className="mb-1 font-display text-heading-md text-ink-950">Spacing</h2>
        <p className="mb-4 text-body-sm text-ink-600">4px base unit — standard Tailwind spacing scale, used everywhere for margin, padding, and gap.</p>
        <div className="flex flex-col gap-2">
          {spacing.map((n) => (
            <div key={n} className="flex items-center gap-3">
              <span className="w-10 font-mono text-mono-sm text-ink-400">{n}</span>
              <div className="h-3 rounded-sm bg-primary-500" style={{ width: `${n * 4}px` }} />
              <span className="font-mono text-mono-sm text-ink-400">{n * 4}px</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="mb-1 font-display text-heading-md text-ink-950">Radius</h2>
        <p className="mb-4 text-body-sm text-ink-600">Deliberately not-quite-default — 10px reads as drafted rather than templated.</p>
        <div className="flex items-end gap-6">
          {radii.map((r) => (
            <div key={r} className="flex flex-col items-center gap-2">
              <div
                className="size-16 border-2 border-primary-500 bg-primary-50"
                style={{ borderRadius: `var(--radius-${r})` }}
              />
              <span className="font-mono text-mono-sm text-ink-400">radius-{r}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
