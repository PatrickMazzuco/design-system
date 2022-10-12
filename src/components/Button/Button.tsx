import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export type ButtonProps = {
  children: React.ReactNode;
  asChild?: boolean;
};

export function Button({ children, asChild }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "w-full rounded bg-cyan-500 px-3 py-4 text-sm font-semibold text-black ring-white transition-colors duration-200 hover:bg-cyan-300 focus:ring-2",
      )}
    >
      {children}
    </Component>
  );
}
