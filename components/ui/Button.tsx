import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-display font-semibold transition-all duration-200 rounded-full focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-gx-mint text-[#08231a] hover:bg-[#a2f7c9] shadow-[0_8px_25px_rgba(184,255,217,0.2)] hover:shadow-[0_10px_30px_rgba(184,255,217,0.35)]",
      secondary:
        "bg-[rgba(184,255,217,0.06)] text-gx-text border border-gx-border hover:bg-[rgba(184,255,217,0.12)] hover:border-gx-borderGlow",
      outline:
        "bg-transparent text-gx-mint border border-gx-mint/30 hover:border-gx-mint hover:bg-gx-mint/5",
      danger:
        "bg-gx-coral text-[#2a0e08] hover:bg-[#ff8a72] shadow-[0_8px_25px_rgba(255,155,135,0.25)]",
      ghost:
        "bg-transparent text-gx-muted hover:text-gx-text hover:bg-[rgba(184,255,217,0.05)]",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
