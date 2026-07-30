import { DayPicker, type DayPickerProps } from "react-day-picker";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Thin styling wrapper around react-day-picker v9. Class names below map to
 * v9's documented `classNames` keys — pin the exact react-day-picker
 * version in package.json if you bump it, since these keys have changed
 * between major versions before.
 */
export function Calendar({ className, classNames, ...props }: DayPickerProps) {
  return (
    <DayPicker
      showOutsideDays
      className={cn("p-3 font-body", className)}
      classNames={{
        months: "flex flex-col gap-4",
        month: "flex flex-col gap-3",
        month_caption: "flex justify-center items-center h-9 relative",
        caption_label: "text-body-sm font-semibold text-ink-950",
        nav: "flex items-center justify-between absolute inset-x-1 top-0 h-9",
        button_previous: cn(
          "size-7 flex items-center justify-center rounded-[var(--radius-sm)] text-ink-600",
          "hover:bg-ink-100 transition-colors disabled:opacity-30"
        ),
        button_next: cn(
          "size-7 flex items-center justify-center rounded-[var(--radius-sm)] text-ink-600",
          "hover:bg-ink-100 transition-colors disabled:opacity-30"
        ),
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "text-ink-400 w-9 text-caption font-medium",
        week: "flex w-full mt-1",
        day: "size-9 text-center p-0 text-body-sm relative [&:has([data-selected])]:bg-primary-50 first:[&:has([data-selected])]:rounded-l-[var(--radius-sm)] last:[&:has([data-selected])]:rounded-r-[var(--radius-sm)]",
        day_button: cn(
          "size-9 rounded-[var(--radius-sm)] text-ink-800 transition-colors",
          "hover:bg-ink-100 focus-visible:outline-none"
        ),
        selected: "[&>button]:bg-primary-500 [&>button]:text-white [&>button]:hover:bg-primary-600",
        today: "[&>button]:font-semibold [&>button]:text-primary-600",
        outside: "text-ink-200",
        disabled: "text-ink-200 opacity-50",
        range_start: "[&>button]:bg-primary-500 [&>button]:text-white",
        range_middle: "bg-primary-50 [&>button]:bg-transparent [&>button]:text-ink-950",
        range_end: "[&>button]:bg-primary-500 [&>button]:text-white",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "left" ? <ChevronLeft className="size-4" /> : <ChevronRight className="size-4" />,
      }}
      {...props}
    />
  );
}
