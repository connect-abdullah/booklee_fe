"use client";

import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import { images } from "@/constants/images";
import { colors } from "@/constants/colors";

const upperFeature = {
  heading: "All-in-one Inbox",
  description:
    "Get all your messages from Facebook, Instagram and WhatsApp in one place along with customer summary and many other features developed specifically for your e-commerce business.",
  image: images.cardImage1,
};

const lowerFeatures = [
  {
    heading: "AI that adapts to your business",
    description:
      "Customize how your agent collects info, responds in local language, and support team.",
    image: images.cardImage2,
  },
  {
    heading: "Connect in 1-Click",
    description:
      "Connect Facebook, WhatsApp, Shopify, WooCommerce, and custom sites with ease.",
    image: images.cardImage3,
  },
];

const MoreFeaturesSection = () => {
  return (
    <div className="bg-white py-10 sm:py-14 md:py-18 px-2 md:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          smallHeading="MORE FEATURES"
          mainHeading="Features that help you to run smoothly"
          description="Unlock powerful tools that do more than support they sell, scale, and supercharge your customer experience."
          maxWidth="max-w-5xl"
          marginBottom={12}
        />

        <div className="flex flex-col gap-5">
          {/* Upper Div - Flex Row */}
          <div
            className={`flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-12 border border-[${colors.lightGray}] shadow-md rounded-3xl pt-5 md:pt-8 pl-4 md:pl-8`}
          >
            {/* Left side - Flex Column */}
            <div className="flex flex-col flex-1 w-full max-w-full lg:max-w-md">
              <h3
                className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold"
                style={{ color: colors.slateGray }}
              >
                {upperFeature.heading}
              </h3>
              <p
                className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed"
                style={{ color: colors.slateGray }}
              >
                {upperFeature.description}
              </p>
            </div>
            {/* Right side - Image */}
            <div className="flex-1 flex justify-center lg:justify-end items-start w-full">
              <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-[600px]">
                <Image
                  src={upperFeature.image}
                  alt={upperFeature.heading}
                  width={600}
                  height={400}
                  className="object-contain rounded-lg w-full h-auto min-h-[150px]"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 65vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Lower Div - Flex Row containing two more dives */}
          <div className="flex flex-col lg:flex-row gap-5">
            {lowerFeatures.map((feature, idx) => (
              <div
                className={`flex flex-col gap-6 md:gap-10 justify-between flex-1 border border-[${colors.lightGray}] shadow-md rounded-3xl pl-4 md:pl-8 pt-5 md:pt-8`}
                key={idx}
              >
                <div className="flex flex-col w-full max-w-full lg:max-w-md">
                  <h3
                    className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold"
                    style={{ color: colors.slateGray }}
                  >
                    {feature.heading}
                  </h3>
                  <p
                    className="mt-2 text-xs sm:text-sm md:text-lg lg:text-lg font-medium leading-relaxed"
                    style={{ color: colors.slateGray }}
                  >
                    {feature.description}
                  </p>
                </div>
                <div className="relative right-0 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                  <Image
                    src={feature.image}
                    alt={feature.heading}
                    width={600}
                    height={400}
                    className="object-contain rounded-lg w-full h-auto min-h-[120px]"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 65vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFeaturesSection;
