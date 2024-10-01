import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines class names
export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  