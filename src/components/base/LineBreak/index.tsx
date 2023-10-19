import { twMerge } from "tailwind-merge";

type LineBreakProps = {
  className?: string;
};

const LineBreak = ({ className }: LineBreakProps) => {
  return (
    <div className={twMerge("my-2 h-[1px] w-auto bg-divide", className)} />
  );
};

export default LineBreak;
