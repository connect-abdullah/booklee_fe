import React from "react";
import SectionHeader from "@/components/ui/sectionHeader";
import PricingCard from "@/components/ui/pricingCard";
import { colors } from "@/constants/colors";

const PricingSection = () => {
  const plans = [
    {
      title: "15 Days Trial",
      price: "$0",
      subtitle: "All essentials to grow sales.",
      popular: true,
      features: [
        { text: "3,000 Messages" },
        { text: "Suggestive AI" },
        { text: "Comment Automation" },
        { text: "Image supported replies" },
        { text: "Omnichannel inbox" },
        { text: "Multilingual Support" },
      ],
    },
    {
      title: "Standard plan",
      price: "$39",
      subtitle: "Growing teams up to 05 users.",
      features: [
        { text: "6,000 Messages" },
        { text: "Suggestive AI" },
        { text: "Comment Automation" },
        { text: "Image supported replies" },
        { text: "Omnichannel inbox" },
        { text: "Multilingual Support" },
      ],
    },
    {
      title: "Pro plan",
      price: "$99",
      subtitle: "Growing teams up to 15 users.",
      popular: true,
      features: [
        { text: "18,000 Messages" },
        { text: "Omnichannel inbox" },
        { text: "Suggestive AI" },
        { text: "Comment Automation" },
        { text: "Image supported replies" },
        { text: "Multilingual Support" },
      ],
    },
    {
      title: "Elite plan",
      price: "$199",
      subtitle: "Growing teams up to 25 users.",
      features: [
        { text: "45,000 Messages" },
        { text: "Suggestive AI" },
        { text: "Comment Automation" },
        { text: "Image supported replies" },
        { text: "Omnichannel inbox" },
        { text: "Multilingual Support" },
      ],
    },
  ];

  return (
    <section className="w-full px-2 sm:px-6 md:px-24 py-16">
      <SectionHeader
        smallHeading="Pricing"
        mainHeading="Simple, transparent pricing"
        description="We believe Untitled should be accessible to all companies, no matter the size."
        descriptionColor={colors.silverGray}
        mainHeadingColor={colors.F7White}
        marginBottom={16}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">
        {plans.map((p) => (
          <div className="h-full" key={p.title}>
            <PricingCard
              title={p.title}
              price={p.price}
              subtitle={p.subtitle}
              features={p.features}
              popular={p.popular}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
