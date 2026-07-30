import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar size="sm"><AvatarFallback>JD</AvatarFallback></Avatar>
      <Avatar size="md"><AvatarFallback>JD</AvatarFallback></Avatar>
      <Avatar size="lg"><AvatarFallback>JD</AvatarFallback></Avatar>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Avatar size="lg">
      <AvatarImage src="https://i.pravatar.cc/96" alt="User avatar" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};
