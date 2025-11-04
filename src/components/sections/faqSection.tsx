"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/ui/sectionHeader";
import { colors } from "@/constants/colors";
import { FiPlus, FiMinus } from "react-icons/fi";
import { cn } from "@/lib/utils";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question:
      "Do AI replies and comment replies count toward my message limit?",
    answer:
      "Yes, only AI replies (both direct and suggestive) and comment automation messages count toward your monthly message quota.",
  },
  {
    question: "Can I purchase additional messages if I reach my limit?",
    answer:
      "Absolutely. You can upgrade your plan at any time or purchase a top-up that becomes available instantly.",
  },
  {
    question: "Is there a mobile omnichannel inbox app available?",
    answer:
      "Yes, our Android and iOS apps provide realtime notifications and a streamlined inbox experience on the go.",
  },
  {
    question: "How do I connect my product inventory to Booklee?",
    answer:
      "Use the integrations page to connect your ecommerce store. We support Shopify, WooCommerce, and custom catalogs via API.",
  },
  {
    question: "How is my customer data stored and protected?",
    answer:
      "All data is encrypted in transit and at rest. We follow industry best practices and undergo regular security reviews.",
  },
];


const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>();
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const [measuredHeights, setMeasuredHeights] = useState<number[]>([]);

  useEffect(() => {
    const values = contentRefs.current.map((el) => (el ? el.scrollHeight : 0));
    setMeasuredHeights(values);

    const onResize = () => {
      const v = contentRefs.current.map((el) => (el ? el.scrollHeight : 0));
      setMeasuredHeights(v);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [openIndex]);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="w-full px-2 sm:px-6 md:px-24 py-16">
      <SectionHeader
        mainHeading="Frequently asked questions"
        description="Everything you need to know about the product and billing."
        descriptionColor={colors.silverGray}
        mainHeadingColor={colors.F7White}
        marginBottom={12}
      />

      <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full text-left px-6 md:px-8 py-6 flex items-center justify-between gap-6 cursor-pointer"
                aria-expanded={isOpen}
                style={{ color: colors.F7White }}
              >
                <span className="text-sm font-semibold">{item.question}</span>
                {/* Animated plus/minus built from two lines */}
                <span
                  className={`relative shrink-0 h-5 w-5 grid place-items-center border-2 border-[${colors.silverGray}] rounded-full`}
                  aria-hidden="true"
                >
                  <span
                    className="absolute h-0.5 w-2.5 rounded-full transition-transform duration-300"
                    style={{ backgroundColor: colors.silverGray }}
                  />
                  <span
                    className={cn(
                      "absolute h-0.5 w-2.5 rounded-full transition-transform duration-300",
                      isOpen ? "scale-y-0 rotate-0" : "rotate-90"
                    )}
                    style={{ backgroundColor: colors.silverGray }}
                  />
                </span>
              </button>

              <div
                ref={(el) => {
                  if (el) contentRefs.current[index] = el;
                }}
                className="px-6 md:px-8 -mt-3 overflow-hidden"
                style={{
                  maxHeight:
                    openIndex === index
                      ? `${measuredHeights[index] || 0}px`
                      : "0px",
                  transition: "max-height 300ms ease",
                }}
              >
                <div className="pb-6">
                  <p
                    className="text-sm leading-6"
                    style={{ color: colors.silverGray }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>

              <div
                className="mx-6 md:mx-8"
                style={{ borderTop: `1px solid ${colors.darkIndigoGray}` }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
