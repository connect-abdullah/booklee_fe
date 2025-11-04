"use client";
import SectionHeader from "@/components/ui/sectionHeader";
import { colors } from "@/constants/colors";
import BookCallButton from "@/components/button/bookCall";

const CtaCard = () => {
  return (
    <div
      className={`bg-[${colors.charcoalBlue}] py-16 px-2 md:px-8 w-full rounded-2xl`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <SectionHeader
          mainHeading="Discover why customers are loving us!"
          description="Join Booklee and Grow Your Business"
          mainHeadingColor={colors.white}
          descriptionColor={colors.white}
          marginBottom={12}
          maxWidth="max-w-5xl"
        />
        <BookCallButton
          text="Book a demo"
          textColor={colors.charcoalBlue}
          bgColor={`bg-[${colors.white}]`}
          px="px-8"
          py="py-4"
          textSize="text-lg md:text-xl"
          fontWeight="font-bold"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default CtaCard;
