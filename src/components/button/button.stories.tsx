import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, Mail, Trash2 } from "lucide-react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Foundations/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Button is the system's most-used primitive — every other interactive control (IconButton, DropdownMenu trigger, Dialog actions) composes it. Six variants, four sizes, built on Radix `Slot` so it can render as any element via `asChild`.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "ember", "danger", "link"],
    },
    size: { control: "select", options: ["sm", "md", "lg", "icon"] },
  },
  args: { children: "Save changes", variant: "primary", size: "md" },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ember">Ember</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Send email">
        <Mail className="size-4" />
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button trailingIcon={<ArrowRight className="size-4" />}>Continue</Button>
      <Button variant="danger" leadingIcon={<Trash2 className="size-4" />}>
        Delete
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { loading: true, children: "Saving…" },
};

export const Disabled: Story = {
  args: { disabled: true },
};
