"use client";
import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/button";
import { Calendar } from "./date-picker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { cn } from "@/lib/utils";

export interface DatePickerFieldProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

/** A single-date picker: text trigger + popover calendar, the common product pattern. */
export function DatePickerField({
  value,
  onChange,
  placeholder = "Pick a date",
  className,
  disabled,
}: DatePickerFieldProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          disabled={disabled}
          className={cn("w-[240px] justify-start font-normal", !value && "text-ink-400", className)}
          leadingIcon={<CalendarIcon className="size-4" />}
        >
          {value ? format(value, "PPP") : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange?.(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
