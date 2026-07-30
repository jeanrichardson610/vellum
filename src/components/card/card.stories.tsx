import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Button } from "@/components/button";
import { Badge } from "@/components/badge";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "A composable surface — pair Header/Title/Description/Content/Footer to build any card shape." } } },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Deploy pipeline</CardTitle>
          <Badge variant="success" dot>Live</Badge>
        </div>
        <CardDescription>Runs on every push to main.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-body-sm text-ink-600">Last run finished in 2m 14s with zero failing checks.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="secondary">View logs</Button>
        <Button size="sm">Redeploy</Button>
      </CardFooter>
    </Card>
  ),
};
