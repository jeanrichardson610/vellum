"use client";
import * as React from "react";
import type { ToastActionElement, ToastRootProps } from "./toast";

const TOAST_LIMIT = 3;

type ToasterToast = ToastRootProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

type State = { toasts: ToasterToast[] };
type Action =
  | { type: "ADD"; toast: ToasterToast }
  | { type: "DISMISS"; id?: string }
  | { type: "REMOVE"; id?: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD":
      return { toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT) };
    case "DISMISS":
      return {
        toasts: state.toasts.map((t) =>
          t.id === action.id || action.id === undefined ? { ...t, open: false } : t
        ),
      };
    case "REMOVE":
      if (action.id === undefined) return { toasts: [] };
      return { toasts: state.toasts.filter((t) => t.id !== action.id) };
  }
}

const listeners: Array<(state: State) => void> = [];
let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ToastInput = Omit<ToasterToast, "id">;

/** Imperative toast() call — usable from anywhere, mirrors the classic react-hot-toast/shadcn API. */
export function toast(props: ToastInput) {
  const id = genId();
  const update = (next: ToastInput) => dispatch({ type: "ADD", toast: { ...next, id, open: true } });
  const dismiss = () => dispatch({ type: "DISMISS", id });

  dispatch({
    type: "ADD",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return { id, update, dismiss };
}

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return {
    toasts: state.toasts,
    toast,
    dismiss: (id?: string) => dispatch({ type: "DISMISS", id }),
  };
}
