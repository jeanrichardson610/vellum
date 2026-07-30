import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogFooter, DialogClose,
} from "./dialog";
import { Button } from "@/components/button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Modal dialog. Content mounts on open via a Framer Motion AnimatePresence, layered over Radix's focus trap and aria wiring." } } },
};
export default meta;
type Story = StoryObj<typeof Dialog>;

export const Playground: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Delete project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete this project?</DialogTitle>
          <DialogDescription>This action can't be undone. All components, tokens, and stories will be permanently removed.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button variant="danger">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
