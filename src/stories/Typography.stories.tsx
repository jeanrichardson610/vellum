import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Typography" };
export default meta;
type Story = StoryObj;

const scale = [
  { token: "display-2xl", sample: "Vellum" },
  { token: "display-xl", sample: "Drafted, not decorated" },
  { token: "display-lg", sample: "Systems over screens" },
  { token: "heading-lg", sample: "Section heading" },
  { token: "heading-md", sample: "Card title" },
  { token: "heading-sm", sample: "Compact heading" },
  { token: "body-lg", sample: "Lead paragraph text sits here." },
  { token: "body-md", sample: "Default body copy sits at this size." },
  { token: "body-sm", sample: "Secondary, supporting copy." },
  { token: "caption", sample: "CAPTION / METADATA" },
];

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-6" style={{ width: 720 }}>
      <div>
        <h2 className="mb-1 font-display text-heading-md text-ink-950">Type system</h2>
        <p className="mb-6 text-body-sm text-ink-600">
          Fraunces (display, used with restraint) paired with Inter (body) and IBM Plex Mono
          (tokens &amp; data). Every row uses the actual <code className="font-mono text-mono-sm">text-*</code> utility.
        </p>
      </div>
      {scale.map(({ token, sample }) => (
        <div key={token} className="flex items-baseline gap-6 border-b border-ink-100 pb-4">
          <span className="w-32 shrink-0 font-mono text-mono-sm text-ink-400">{token}</span>
          <p
            className={`text-${token} ${token.startsWith("display") ? "font-display" : "font-body"} text-ink-950`}
          >
            {sample}
          </p>
        </div>
      ))}
    </div>
  ),
};
