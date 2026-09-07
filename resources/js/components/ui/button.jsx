import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 rounded-md border border-solid border-transparent text-center align-middle font-normal leading-normal transition-colors duration-150 outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-65 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-slate-900 bg-slate-900 text-white hover:border-slate-800 hover:bg-slate-800 focus-visible:ring-slate-900/50",
        primary:
          "border-[#0d6efd] bg-[#0d6efd] text-white hover:border-[#0a58ca] hover:bg-[#0b5ed7] focus-visible:ring-[#0d6efd]/50",
        secondary:
          "border-[#6c757d] bg-[#6c757d] text-white hover:border-[#565e64] hover:bg-[#5c636a] focus-visible:ring-[#6c757d]/50",
        success:
          "border-[#198754] bg-[#198754] text-white hover:border-[#146c43] hover:bg-[#157347] focus-visible:ring-[#198754]/50",
        danger:
          "border-[#dc3545] bg-[#dc3545] text-white hover:border-[#b02a37] hover:bg-[#bb2d3b] focus-visible:ring-[#dc3545]/50",
        destructive:
          "border-[#dc3545] bg-[#dc3545] text-white hover:border-[#b02a37] hover:bg-[#bb2d3b] focus-visible:ring-[#dc3545]/50",
        warning:
          "border-[#ffc107] bg-[#ffc107] text-black hover:border-[#ffcd39] hover:bg-[#ffca2c] focus-visible:ring-[#ffc107]/50",
        info: "border-[#0dcaf0] bg-[#0dcaf0] text-black hover:border-[#3dd5f3] hover:bg-[#31d2f2] focus-visible:ring-[#0dcaf0]/50",
        light:
          "border-[#f8f9fa] bg-[#f8f9fa] text-black hover:border-[#c6c7c8] hover:bg-[#d3d4d5] focus-visible:ring-[#f8f9fa]/50",
        dark: "border-[#212529] bg-[#212529] text-white hover:border-[#1a1e21] hover:bg-[#1c1f23] focus-visible:ring-[#212529]/50",

        outline:
          "border-[#6c757d] bg-transparent text-[#6c757d] hover:border-[#6c757d] hover:bg-[#6c757d] hover:text-white focus-visible:ring-[#6c757d]/50",
        "outline-primary":
          "border-[#0d6efd] bg-transparent text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white focus-visible:ring-[#0d6efd]/50",
        "outline-success":
          "border-[#198754] bg-transparent text-[#198754] hover:bg-[#198754] hover:text-white focus-visible:ring-[#198754]/50",
        "outline-danger":
          "border-[#dc3545] bg-transparent text-[#dc3545] hover:bg-[#dc3545] hover:text-white focus-visible:ring-[#dc3545]/50",
        "outline-dark":
          "border-[#212529] bg-transparent text-[#212529] hover:bg-[#212529] hover:text-white focus-visible:ring-[#212529]/50",

        ghost:
          "bg-transparent text-inherit hover:bg-black/5 focus-visible:ring-[#6c757d]/50",
        link: "bg-transparent text-[#0d6efd] underline underline-offset-2 hover:text-[#0a58ca] focus-visible:ring-[#0d6efd]/50",
      },
      size: {
        default: "h-10 px-3 text-base",
        xs: "rounded-sm px-1.5 py-0.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "rounded-sm px-2 py-1 text-sm [&_svg:not([class*='size-'])]:size-3.5",
        lg: "rounded-lg px-4 py-2 text-xl",
        icon: "size-[38px] p-0",
        "icon-xs": "size-6 rounded-sm p-0 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-[31px] rounded-sm p-0 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-12 rounded-lg p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
