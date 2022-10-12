import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes } from "react";

export type TextInputRootProps = {
  children: React.ReactNode;
};

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex h-1/2 w-full items-center gap-3 rounded bg-gray-800 py-4 px-3 ring-cyan-300 focus-within:ring-2">
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export type TextInputIconProps = {
  children: React.ReactNode;
};

export function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="h-6 w-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="flex-1 bg-transparent text-xs text-gray-100 outline-none placeholder:text-gray-400"
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
