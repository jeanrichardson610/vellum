import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Mail, Search } from "lucide-react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "you@company.com" },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {};
export const WithLeadingIcon: Story = { args: { leadingIcon: <Mail />, placeholder: "Email address" } };
export const Search_: Story = { name: "Search", args: { leadingIcon: <Search />, placeholder: "Search components…" } };
export const Invalid: Story = { args: { invalid: true, defaultValue: "not-an-email" } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "you@company.com" } };
