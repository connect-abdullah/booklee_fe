import PricingSection from "@/components/sections/pricingSection";
import { colors } from "@/constants/colors";
import FaqSection from "./faqSection";
import ContactUsSection from "@/components/sections/contactUsSection";
import SiteFooter from "@/components/ui/siteFooter";
import Image from "next/image";
import { images } from "@/constants/images";

const Footer = () => {
  return (
    <div>
      <div className={`bg-[${colors.midnightBlack}] py-6 px-2 md:px-8 w-full`}>
        <PricingSection />
        <FaqSection />
        <ContactUsSection />
      </div>
      <SiteFooter />
      <div className="w-full relative h-10">
        <Image
          src={images.paymentMethods}
          alt="payment methods"
          fill
          sizes="100vw"
          quality={100}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Footer;
