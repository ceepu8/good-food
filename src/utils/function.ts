import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]): string {
  return twMerge(clsx(inputs));
}

export function formatAsDollar(number: number, options = {}) {
  if (typeof number !== "number") {
    return "$0.00";
  }

  const defaultOptions = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const formattedNumber = number.toLocaleString("en-US", mergedOptions);
  return formattedNumber;
}
