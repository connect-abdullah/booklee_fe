"use client";
import { colors } from "@/constants/colors";
import BookCallButton from "@/components/button/bookCall";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { images } from "@/constants/images";
import Marquee from "../ui/marquee";

const heroSectionData = {
  badgeText: "New Feature Dropped!!",
  badgeDescription: "Booklee can now understand all your product images too!",
  titleHighlight: "Booklee is an AI-powered business automation platform built for ",
  titleHighlight2: "service-based business.",
  description:
    "Your 24/7 sales and customer support engine—handling inquiries, scheduling, reminders, and follow-ups across Omni Channel, SMS, Email, and Call.",
  buttonText: "Book a demo",
};

const HeroSection = () => {
  return (
    <div
      id="hero-section"
      className="relative z-10 flex flex-col items-center justify-center mt-15 px-5"
    >
      {/* Main Container */}
      <div className="flex flex-col items-center gap-10 max-w-4xl w-full">
        {/* Upper Section */}
        <div className="flex flex-col p-4 items-center gap-4">
          {/* Feature Announcement Bar */}
    

          {/* Main Heading */}
          <h1 className="text-2xl  sm:text-3xl md:text-3xl lg:text-4xl font-bold text-center max-w-4xl mx-auto font-neuepower-ultra leading-[32px] md:leading-[59px]">
            <span style={{ color: colors.charcoalBlue}}>
              {heroSectionData.titleHighlight}
            </span>
            <span  style={{ color: colors.slateGray }}>
              {heroSectionData.titleHighlight2}
            </span>
          </h1>

          {/* Descriptive Paragraph */}
          <p
            className="text-base md:text-md lg:text-lg text-center font-medium max-w-4xl mx-auto leading-7 md:leading-8"
            style={{ color: colors.darkSlateGray }}
          >
            {heroSectionData.description}
          </p>
        </div>

        {/* Call to Action Button */}
        <BookCallButton
          text={heroSectionData.buttonText}
          px="px-8"
          py="py-3"
          textSize="text-md md:text-md"
        />
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center gap-4 w-full max-w-7xl mx-auto mt-14">
        <Image
          src={images.heroSectionImage}
          alt="Hero Image"
          width={2668}
          height={1334}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Don't delete this marquee section */}
      {/* <div className="mb-10">
        <Marquee />
      </div> */}
    </div>
  );
};

export default HeroSection;
