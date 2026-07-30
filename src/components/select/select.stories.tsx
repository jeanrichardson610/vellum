import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup } from "./select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Playground: Story = {
  render: () => (
    <Select defaultValue="violet">
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Choose an accent" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="violet">Signal violet</SelectItem>
          <SelectItem value="ember">Ember</SelectItem>
          <SelectItem value="teal">Success teal</SelectItem>
          <SelectItem value="amber">Warning amber</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
