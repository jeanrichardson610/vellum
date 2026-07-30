import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "@storybook/addon-interactions",
  ],
  framework: { name: "@storybook/react-vite", options: {} },
  docs: { autodocs: "tag" },
  viteFinal: async (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": path.resolve(__dirname, "../src"),
    };
    // The root tsconfig.json sets "jsx": "preserve" (required by Next.js's
    // own tsconfig validator for the src/app side of this project). Vite's
    // esbuild pass reads that same tsconfig and, left alone, can fall back
    // to a classic-style transform that doesn't auto-import React — hence
    // "ReferenceError: React is not defined" in story files. Force the
    // automatic runtime here so Storybook's build doesn't depend on that
    // setting at all.
    config.esbuild = {
      ...(config.esbuild || {}),
      jsx: "automatic",
      jsxImportSource: "react",
    };
    return config;
  },
};
export default config;
