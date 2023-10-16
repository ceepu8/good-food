import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";

type HeadingProps = {
  as?: React.ElementType;
  truncation?: VariantProps<typeof headingVariants>["truncation"];
  size?: VariantProps<typeof headingVariants>["size"];
  bold?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const headingVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      medium: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    truncation: {
      false: "",
      true: "truncate",
      1: "truncate",
      2: "text-ellipsis overflow-hidden line-clamp-2",
      3: "text-ellipsis overflow-hidden line-clamp-3",
      4: "text-ellipsis overflow-hidden line-clamp-4",
      5: "text-ellipsis overflow-hidden line-clamp-5",
    },
  },
  defaultVariants: {
    size: "2xl",
    truncation: true,
  },
});

const Heading: React.FC<HeadingProps> = ({
  as,
  truncation,
  size,
  bold = true,
  children,
  className,
}) => {
  const rootClassName = cn(
    bold && "font-bold",
    headingVariants({ size, truncation }),
    className
  );

  const Component = as || "h1";
  return <Component className={rootClassName}>{children}</Component>;
};

export default Heading;
