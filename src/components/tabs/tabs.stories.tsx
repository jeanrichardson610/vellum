import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {
  render: () => (
    <Tabs defaultValue="tokens" className="w-96">
      <TabsList>
        <TabsTrigger value="tokens">Tokens</TabsTrigger>
        <TabsTrigger value="components">Components</TabsTrigger>
        <TabsTrigger value="usage">Usage</TabsTrigger>
      </TabsList>
      <TabsContent value="tokens">Spacing, color, and type tokens live in globals.css as CSS variables.</TabsContent>
      <TabsContent value="components">21 components, each with its own directory and stories.</TabsContent>
      <TabsContent value="usage">Import from <code className="font-mono text-mono-sm">@/components</code>.</TabsContent>
    </Tabs>
  ),
};
