# Vellum

A token-driven React component system: 23 components, one design-token file, documented in Storybook.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, Radix UI, Framer Motion, and GSAP.

## Get running

```bash
npm install
npm run storybook   # component docs — http://localhost:6006
npm run dev         # the landing page — http://localhost:3000
```

**A note on how this was built:** the whole codebase was written in a sandboxed
environment with no network access, so `npm install` has never actually been run
against it, and nothing here has been visually verified in a browser. The code is
complete and internally consistent — types, imports, and component APIs all line
up — but treat the first `npm install && npm run storybook` as the real first
test. The two spots most likely to need a small fix on a real machine:

- **`react-day-picker`'s `classNames` keys** (`src/components/date-picker/date-picker.tsx`) —
  these changed across recent major versions; if the calendar renders unstyled, diff
  against the version npm actually resolves.
- **Storybook/addon major versions** — pinned to `^8.5.0` in `package.json`; if a newer
  major has shipped since, `npx storybook@latest upgrade` will fix version drift.

## Structure

```
src/
  app/                  Next.js app router — layout.tsx (fonts), page.tsx (landing), globals.css (tokens)
  components/<name>/    one folder per component: <name>.tsx, index.ts, <name>.stories.tsx
  components/index.ts   barrel export — import { Button, Dialog, ... } from "@/components"
  lib/utils.ts           cn() classname helper
  stories/               Storybook Foundations pages + the Token Playground
.storybook/               Storybook config, theme decorator, Google Fonts for the preview iframe
```

## The token system

Every design decision lives in `src/app/globals.css`, inside a single `@theme` block —
Tailwind v4's CSS-native config. Colors, type scale, spacing, radius, shadow, and motion
are all named tokens (`--color-primary-500`, `--text-heading-lg`, `--radius-md`, …), and
Tailwind auto-generates the matching utility classes (`bg-primary-500`, `text-heading-lg`,
`rounded-[var(--radius-md)]`). Change a value once, every component picks it up — see
**Playground → Token Playground** in Storybook for this working live.

Dark mode mirrors every token under `[data-theme="dark"]` and is wired into Storybook's
toolbar theme switcher (`@storybook/addon-themes`).

## Components

Button, Badge, Card, Input, Textarea, Checkbox, Switch, RadioGroup, Select, Tabs,
Accordion, Dialog, Drawer, Tooltip, Popover, DropdownMenu, Toast, Alert, Progress,
Avatar, Slider, DatePicker, Spinner.

Every interactive one is built on a Radix UI primitive (correct keyboard nav, focus
trapping, ARIA) and styled entirely through the token classes above — no one-off hex
values or pixel measurements in component code.

## Motion

- **Framer Motion** drives component-level transitions: Dialog and Drawer mount their
  content through `AnimatePresence`, Toast and Accordion use token-driven CSS keyframes
  defined alongside the other tokens in `globals.css`.
- **GSAP** powers the one signature moment: the Token Playground's entrance sequence
  (`src/stories/TokenPlayground.tsx`) — a staggered reveal built with `gsap.context()` and
  cleaned up on unmount, the standard pattern for GSAP inside React.

## Extending it

Adding a component follows the same shape every time:

```
src/components/my-thing/
  my-thing.tsx          the component, styled with token classes only
  index.ts              barrel export
  my-thing.stories.tsx  at least one meaningful story per state/variant
```

Then add `export * from "./my-thing";` to `src/components/index.ts`.
