import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  className?: string;
  href?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function buttonStyles({
  className,
  size = "md",
  variant = "primary",
}: Pick<ButtonProps, "className" | "size" | "variant">) {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    {
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-3 text-sm",
      lg: "px-6 py-3.5 text-base",
    }[size],
    {
      primary:
        "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:opacity-95",
      secondary:
        "bg-foreground text-background shadow-lg shadow-foreground/10 hover:-translate-y-0.5 hover:bg-foreground/90",
      outline:
        "border border-border bg-background/80 text-foreground hover:border-primary/30 hover:bg-primary/5",
      ghost: "text-foreground hover:bg-foreground/5",
    }[variant],
    className,
  );
}

export function Button({
  className,
  href,
  size = "md",
  type,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = buttonStyles({ className, size, variant });

  if (href) {
    return <a className={classes} href={href} {...props} />;
  }

  return <button className={classes} type={type ?? "button"} {...props} />;
}
