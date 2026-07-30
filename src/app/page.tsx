import * as React from "react";
import { Button } from "@/components/button";
import { Badge } from "@/components/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/card";
import { ArrowRight, Component, Palette, Type } from "lucide-react";

const components = [
  "Button", "Badge", "Card", "Input", "Textarea", "Checkbox", "Switch",
  "RadioGroup", "Select", "Tabs", "Accordion", "Dialog", "Drawer",
  "Tooltip", "Popover", "DropdownMenu", "Toast", "Alert", "Progress",
  "Avatar", "Slider", "DatePicker", "Spinner",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-24 px-6 py-24">
      {/* Hero */}
      <section className="flex flex-col gap-6">
        <Badge variant="primary" className="w-fit">23 components · 1 token file</Badge>
        <h1 className="max-w-2xl font-display text-display-xl text-ink-950">
          A component system drafted like a blueprint, not assembled from defaults.
        </h1>
        <p className="max-w-xl text-body-lg text-ink-600">
          Vellum is a token-driven React library — every color, radius, and spacing value traces
          back to a single source, so the interface stays consistent by construction. Built on
          Radix UI, Tailwind v4, and Framer Motion, documented in Storybook.
        </p>
        <div className="flex gap-3">
          <Button size="lg" trailingIcon={<ArrowRight className="size-4" />}>
            <a href="#catalog">View components</a>
          </Button>
          <Button size="lg" variant="secondary">
            <a href="https://storybook.example.com" target="_blank" rel="noopener noreferrer">
              Open in Storybook
            </a>
          </Button>
        </div>
      </section>

      {/* Pillars */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <Palette className="size-5 text-primary-500" />
            <CardTitle>Tokens first</CardTitle>
            <CardDescription>Color, type, spacing, radius, shadow, and motion — one file, every component reads it.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Component className="size-5 text-primary-500" />
            <CardTitle>23 components</CardTitle>
            <CardDescription>From Button to DatePicker, each built on Radix UI for correct accessibility behavior.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Type className="size-5 text-primary-500" />
            <CardTitle>Documented</CardTitle>
            <CardDescription>Every component ships with Storybook stories covering its real states and variants.</CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Component index */}
      <section id="catalog" className="flex flex-col gap-6">
        <h2 className="font-display text-heading-lg text-ink-950">The catalog</h2>
        <div className="flex flex-wrap gap-2">
          {components.map((name) => (
            <Badge key={name} variant="outline" className="font-mono text-mono-sm">
              {name}
            </Badge>
          ))}
        </div>
      </section>

      <footer className="border-t border-ink-100 pt-8 text-body-sm text-ink-400">
        Run <code className="font-mono text-mono-sm text-ink-950">npm run storybook</code> to browse every
        component, variant, and token live.
      </footer>
    </main>
  );
}
