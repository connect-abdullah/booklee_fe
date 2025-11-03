"use client";
import SectionHeader from "@/components/ui/sectionHeader";
import { colors } from "@/constants/colors";
import BookCallButton from "@/components/button/bookCall";
import { images } from "@/constants/images";
import Image from "next/image";

const ContactUsCard = () => {
  return (
    <div
      className={`bg-[${colors.deepCharcoalBlue}] py-6 px-6 md:px-8 w-full rounded-2xl`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8">
        <div>
          <Image
            src={images.TeamsLogo}
            alt="contact us"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold" style={{ color: colors.white }}>
            Still have questions?
          </h2>
          <p
            className={`text-sm font-medium`}
            style={{ color: colors.silverGray }}
          >
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <BookCallButton
          text="Get in touch"
          textColor={colors.charcoalBlue}
          bgColor={`bg-[${colors.white}]`}
          px="px-5"
          py="py-2"
          textSize="text-lg"
          fontWeight="font-bold"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactUsCard;
