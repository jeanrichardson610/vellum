import type { Meta, StoryObj } from "@storybook/react";
import { TokenPlayground } from "./TokenPlayground";

const meta: Meta<typeof TokenPlayground> = {
  title: "Playground/Token Playground",
  component: TokenPlayground,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The system's signature page. Scrub radius, density, and accent — real tokens, real components, no screenshots.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof TokenPlayground>;

export const Live: Story = {};
