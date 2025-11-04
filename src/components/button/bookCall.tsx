"use client";
import { colors } from "@/constants/colors";

interface BookCallButtonProps {
  text: string;
  textColor?: string;
  textSize?: string;
  bgColor?: string;
  px?: string; // e.g. "px-5"
  py?: string; // e.g. "py-2"
  fontWeight?: string; // e.g. "font-bold"
  className?: string;
  onClick?: () => void;
}

const BookCallButton: React.FC<BookCallButtonProps> = ({
  text,
  textColor = "text-white",
  textSize = "text-sm",
  bgColor = "bg-black",
  px = "px-5",
  py = "py-2",
  fontWeight = "font-bold",
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={() => window.open('https://cal.com/uzair-anjum-cfkozo/30min', '_blank')}
      className={`${bgColor} ${textColor} ${px} ${textSize} ${py} rounded-lg ${fontWeight} cursor-pointer shadow ease-in-out transition-all duration-200 ${className}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = colors.gradientColorLeft;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "";
      }}
    >
      {text}
    </button>
  );
};

export default BookCallButton;
