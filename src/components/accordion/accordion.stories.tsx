import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Playground: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-96">
      <AccordionItem value="a">
        <AccordionTrigger>What is Vellum?</AccordionTrigger>
        <AccordionContent>A precision-drafted component system: tokens, 21 components, Storybook docs.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Every interactive component is built on Radix UI primitives for correct keyboard and screen-reader behavior.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="c">
        <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
        <AccordionContent>Yes — every token has a dark counterpart, toggled with the theme switcher in the Storybook toolbar.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
