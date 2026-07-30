import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: { placeholder: "Leave a comment…" },
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {};
export const Invalid: Story = { args: { invalid: true, defaultValue: "" } };
