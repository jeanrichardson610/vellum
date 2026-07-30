import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import { Button } from "@/components/button";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Popover>;

export const Playground: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Share</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-body-sm font-medium text-ink-950">Share this component</p>
        <p className="mt-1 text-body-sm text-ink-600">Anyone with the link can view this story.</p>
      </PopoverContent>
    </Popover>
  ),
};
