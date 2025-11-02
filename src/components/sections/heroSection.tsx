"use client";
import { colors } from "@/constants/colors";
import BookCallButton from "@/components/button/bookCall";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { images } from "@/constants/images";
import Marquee from "../ui/marquee";

const heroSectionData = {
  badgeText: "New Feature Dropped!!",
  badgeDescription: "Lazychat can now understand all your product images too!",
  titleHighlight: "Your AI Customer Support agent ",
  titleHighlight2: "for your Business.",
  description:
    "LazyChat is your AI customer support that handles your customer messages, take orders, and solve issues 24/7—so you can focus on growing your store.",
  buttonText: "Book a demo",
};

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-15 px-5">
      {/* Main Container */}
      <div className="flex flex-col items-center gap-10 max-w-4xl w-full">
        {/* Upper Section */}
        <div className="flex flex-col items-center gap-4">
          {/* Feature Announcement Bar */}
          <div
            className="flex items-center gap-2 md:gap-3 px-2 py-1 md:px-2.5 rounded-lg border text-xs md:text-sm"
            style={{
              borderColor: colors.lightGray,
              borderWidth: "1px",
              background: colors.white,
            }}
          >
            {/* Purple Circle Icon */}
            <div
              className="flex items-center rounded-sm shadow-xs gap-1 md:gap-2 py-0.5 px-1.5 md:px-2 border"
              style={{ borderColor: colors.lightGray, borderWidth: "1px" }}
            >
              <div
                className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full flex items-center justify-center"
                style={{
                  background: colors.veryLightPurple,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex items-center justify-center"
                  style={{ background: colors.deepPurple }}
                ></div>
              </div>

              {/* Text */}
              <span
                className="font-semibold text-xs md:text-sm text-center bg-clip-text text-transparent leading-tight"
                style={{
                  backgroundImage: colors.gradientColorRight,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {heroSectionData.badgeText}
              </span>
            </div>

            {/* Arrow Icon */}
            <BsArrowRight style={{ color: colors.darkSlateGray }} />

            <span
              className="font-semibold sm:inline text-center"
              style={{ color: colors.darkGray }}
            >
              {heroSectionData.badgeDescription}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl mx-auto font-neuepower-ultra leading-[32px] md:leading-[59px]">
            <span style={{ color: colors.charcoalBlue }}>
              {heroSectionData.titleHighlight}
            </span>
            <span style={{ color: colors.slateGray }}>
              {heroSectionData.titleHighlight2}
            </span>
          </h1>

          {/* Descriptive Paragraph */}
          <p
            className="text-base md:text-lg lg:text-xl text-center font-medium max-w-4xl mx-auto leading-7 md:leading-8"
            style={{ color: colors.darkSlateGray }}
          >
            {heroSectionData.description}
          </p>
        </div>

        {/* Call to Action Button */}
        <BookCallButton
          text={heroSectionData.buttonText}
          px="px-8"
          py="py-4"
          textSize="text-lg md:text-xl"
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

      <div className="mb-10">
        <Marquee />
      </div>
    </div>
  );
};

export default HeroSection;
