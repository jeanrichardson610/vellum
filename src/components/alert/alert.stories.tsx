import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-3">
      {(["default", "success", "warning", "danger", "info"] as const).map((variant) => (
        <Alert key={variant} variant={variant}>
          <AlertTitle>{variant[0].toUpperCase() + variant.slice(1)} alert</AlertTitle>
          <AlertDescription>Supporting copy explains what happened and what to do next.</AlertDescription>
        </Alert>
      ))}
    </div>
  ),
};
