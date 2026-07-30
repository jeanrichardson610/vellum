import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Playground: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };

export const WithLabel: Story = {
  render: () => (
    <label className="flex items-center gap-3 text-body-sm text-ink-950">
      <Switch id="notifications" />
      Email notifications
    </label>
  ),
};
