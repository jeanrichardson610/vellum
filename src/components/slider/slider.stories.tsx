import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: { defaultValue: [40], max: 100, step: 1 },
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Playground: Story = { render: (args) => <Slider className="w-72" {...args} /> };
export const Range: Story = { render: (args) => <Slider className="w-72" {...args} defaultValue={[20, 70]} /> };
