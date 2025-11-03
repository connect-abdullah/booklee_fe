"use client";
import { cn } from "@/lib/utils";
import { colors } from "@/constants/colors";

interface SectionHeaderProps {
  smallHeading?: string;
  mainHeading?: string;
  description?: string;
  headingClass?: string;
  marginBottom?: number;
}

const SectionHeader = ({
  smallHeading,
  mainHeading,
  description,
  headingClass,
  marginBottom,
}: SectionHeaderProps) => {
  const getMarginClass = (margin?: number) => {
    if (!margin) return "mb-16";

    // Map common margin values to Tailwind classes
    const marginMap: Record<number, string> = {
      0: "mb-0",
      1: "mb-1",
      2: "mb-2",
      3: "mb-3",
      4: "mb-4",
      5: "mb-5",
      6: "mb-6",
      8: "mb-8",
      10: "mb-10",
      12: "mb-12",
      16: "mb-16",
      20: "mb-20",
      24: "mb-24",
      32: "mb-32",
      40: "mb-40",
      48: "mb-48",
      56: "mb-56",
      64: "mb-64",
    };

    return marginMap[margin] || "mb-16";
  };

  return (
    <div
      className={cn(
        getMarginClass(marginBottom),
        "flex flex-col items-center justify-center text-center px-4 sm:px-6"
      )}
      data-section-header="true"
    >
      {smallHeading && (
        <h2
          className={`text-[11px] md:text-[11px] font-medium mb-4 uppercase tracking-wide text-[${colors.ashGray}]`}
          style={{
            letterSpacing: "0.1em",
          }}
        >
          {smallHeading}
        </h2>
      )}
      {mainHeading && (
        <h1
          className={cn(
            `text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl mx-auto font-neuepower-ultra text-[${colors.ashGray}]`,
            headingClass
          )}
        >
          {mainHeading}
        </h1>
      )}
      {description && (
        <p className="text-sm md:text-base font-medium max-w-4xl mx-auto leading-[24px] text-[#555E67]">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
