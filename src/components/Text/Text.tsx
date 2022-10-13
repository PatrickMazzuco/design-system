import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export type TextProps = {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
};

export function Text({ size = "md", children, className, asChild }: TextProps) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={clsx(
        "font-sans text-gray-100",
        {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-md": size === "lg",
        },
        className,
      )}
    >
      {children}
    </Component>
  );
}
