import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = { args: {} };
export const Checked: Story = { args: { defaultChecked: true } };
export const Indeterminate: Story = { args: { checked: "indeterminate" } };
export const Disabled: Story = { args: { disabled: true } };

export const WithLabel: Story = {
  render: () => (
    <label className="flex items-center gap-2 text-body-sm text-ink-950">
      <Checkbox id="terms" />
      Accept the terms and conditions
    </label>
  ),
};
