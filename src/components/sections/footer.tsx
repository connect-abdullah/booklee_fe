import PricingSection from "@/components/sections/pricingSection";
import { colors } from "@/constants/colors";
import FaqSection from "./faqSection";

const Footer = () => {
  return (
    <div className={`bg-[${colors.midnightBlack}] py-6 px-2 md:px-8 w-full`}>
      <PricingSection />
      <FaqSection />
    </div>
  );
};

export default Footer;
