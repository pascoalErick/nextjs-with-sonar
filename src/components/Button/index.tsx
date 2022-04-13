import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...restProps }: ButtonProps) {
  return <button {...restProps}>{children}</button>;
}
