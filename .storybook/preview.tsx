import type { Preview } from "@storybook/react";
import React from "react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { TooltipProvider } from "../src/components/tooltip";
import { Toaster } from "../src/components/toast";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: { disable: true },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          ["Overview", "Colors", "Typography", "Spacing & Radius", "Button"],
          "Components",
          "Playground",
        ],
      },
    },
    a11y: { test: "todo" },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: { light: "light", dark: "dark" },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
    (Story) => (
      <TooltipProvider delayDuration={200}>
        <div className="font-body text-ink-950">
          <Story />
          <Toaster />
        </div>
      </TooltipProvider>
    ),
  ],
  tags: ["autodocs"],
};

export default preview;
