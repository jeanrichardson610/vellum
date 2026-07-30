import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { DatePickerField } from "./date-picker-field";

const meta: Meta<typeof DatePickerField> = {
  title: "Components/DatePicker",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Built on react-day-picker v9, restyled with system tokens, wrapped in a Popover + Button trigger." } } },
};
export default meta;
type Story = StoryObj<typeof DatePickerField>;

export const Playground: Story = {
  render: function DatePickerStory() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    return <DatePickerField value={date} onChange={setDate} />;
  },
};
