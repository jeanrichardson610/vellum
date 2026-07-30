import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Playground: Story = {
  render: () => (
    <RadioGroup defaultValue="monthly">
      {[
        ["monthly", "Billed monthly"],
        ["annual", "Billed annually — save 20%"],
        ["lifetime", "Lifetime, one payment"],
      ].map(([value, label]) => (
        <label key={value} className="flex items-center gap-3 text-body-sm text-ink-950">
          <RadioGroupItem value={value} id={value} />
          {label}
        </label>
      ))}
    </RadioGroup>
  ),
};
