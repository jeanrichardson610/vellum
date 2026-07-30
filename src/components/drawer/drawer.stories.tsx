import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle,
  DrawerDescription, DrawerFooter, DrawerClose,
} from "./drawer";
import { Button } from "@/components/button";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Side panel for filters, details, and settings. Slides in from either edge." } } },
};
export default meta;
type Story = StoryObj<typeof Drawer>;

export const Playground: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open filters</Button>
      </DrawerTrigger>
      <DrawerContent side="right">
        <DrawerHeader>
          <DrawerTitle>Filter components</DrawerTitle>
          <DrawerDescription>Narrow the catalog by category or status.</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 text-body-sm text-ink-600">Filter controls would render here.</div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DrawerClose>
          <Button>Apply</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
