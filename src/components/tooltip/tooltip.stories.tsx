import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Info } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "./tooltip";
import { Button } from "@/components/button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Wrap the app in <TooltipProvider> once (already done in this Storybook's preview decorator)." } } },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Playground: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="More info">
          <Info className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Spacing tokens use a 4px base unit</TooltipContent>
    </Tooltip>
  ),
};
