import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: { value: 62 },
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const Playground: Story = { render: (args) => <Progress className="w-72" {...args} /> };
export const Tones: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-3">
      <Progress value={80} tone="primary" />
      <Progress value={100} tone="success" />
      <Progress value={45} tone="warning" />
      <Progress value={20} tone="danger" />
    </div>
  ),
};
