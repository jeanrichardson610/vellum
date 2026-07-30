import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/button";
import { toast } from "./use-toast";
import { Toaster } from "./toaster";

const meta: Meta = {
  title: "Components/Toast",
  // Toaster is mounted here (file-level decorator) rather than globally in
  // preview.tsx — it only needs to exist where a toast demo actually lives,
  // and mounting it on every story (including every auto-generated Docs
  // page, which composes several story previews on one page) was the cause
  // of a duplicate-portal rendering bug in Storybook's docs renderer.
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "Toasts are imperative — call toast({...}) from anywhere. Mount <Toaster /> once, wherever it's actually needed (this file mounts it via a story-level decorator; in the real app, that's near the root layout).",
      },
    },
  },
};
export default meta;
type Story = StoryObj;

export const Playground: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="secondary"
        onClick={() => toast({ variant: "default", title: "Saved", description: "Your changes were saved." })}
      >
        Default
      </Button>
      <Button
        onClick={() => toast({ variant: "success", title: "Deployed", description: "vellum@1.4.0 is live." })}
      >
        Success
      </Button>
      <Button
        variant="danger"
        onClick={() => toast({ variant: "danger", title: "Build failed", description: "Check the CI logs for details." })}
      >
        Danger
      </Button>
    </div>
  ),
};