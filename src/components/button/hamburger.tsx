"use client";
import { cn } from "@/lib/utils";

type HamburgerProps = {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
};

const HamburgerButton = ({
  isOpen,
  onClick,
  className = "",
  ariaLabel = "Toggle menu",
}: HamburgerProps) => (
  <button
    onClick={onClick}
    className={cn(
      "p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 lg:hidden",
      className
    )}
    aria-label={ariaLabel}
    type="button"
  >
    <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
      <span
        className={cn(
          "block h-0.5 w-6 bg-black transition-all duration-300",
          isOpen && "rotate-45 translate-y-2"
        )}
      ></span>
      <span
        className={cn(
          "block h-0.5 w-6 bg-black transition-all duration-300",
          isOpen && "opacity-0"
        )}
      ></span>
      <span
        className={cn(
          "block h-0.5 w-6 bg-black transition-all duration-300",
          isOpen && "-rotate-45 -translate-y-2"
        )}
      ></span>
    </div>
  </button>
);

export default HamburgerButton;
