import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  asChild?: boolean;
};

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "w-full rounded bg-cyan-500 px-4 py-3 text-sm font-semibold text-black ring-white transition-colors duration-200 hover:bg-cyan-300 focus:ring-2",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
