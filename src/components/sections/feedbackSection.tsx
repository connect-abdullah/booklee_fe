"use client";
import { useEffect, useRef, useState } from "react";
import { colors } from "@/constants/colors";

const FeedbackSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlightedChars, setHighlightedChars] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const text = `“Since using Booklee, we haven't  missed an appointment — inquiries are answered instantly, our bookings are up 30%”`;

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
      // Set highlighted chars for mobile
      if (mobile) {
        setHighlightedChars(text.length);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [text.length]);

  useEffect(() => {
    // Don't run animation on mobile
    if (isMobile) {
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;

      // Find the hero section by ID
      const heroSection = document.getElementById(
        "hero-section"
      ) as HTMLElement;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = containerRect.top;

      // Check if hero section has completely passed (its bottom is above viewport)
      let heroHasPassed = false;
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroBottom = heroRect.bottom;

        // Hero has passed when its bottom is above the viewport top
        heroHasPassed = heroBottom <= 0;

        // Hero hasn't passed yet, don't animate - keep all text in initial color
        if (!heroHasPassed) {
          setHighlightedChars(0);
          return;
        }
      }

      // Hero has passed, now animate based on scroll progress
      // Add a delay before animation starts - wait for more scrolling
      const startDelay = windowHeight * 0.6; // Wait until we've scrolled 0.5 viewport more
      const animationDistance = windowHeight * 2; // Total scroll distance for animation

      // Calculate how much we've scrolled since hero passed
      // When containerTop is 0 (at top), scrolled = 0
      // As we scroll more, containerTop becomes negative, scrolled increases
      const scrolled = Math.max(0, -containerTop);

      // Don't start animation until we've scrolled past the delay
      if (scrolled < startDelay) {
        setHighlightedChars(0);
        return;
      }

      // Calculate progress (0 to 1) starting after the delay
      const animationScroll = scrolled - startDelay;
      const scrollProgress = Math.max(
        0,
        Math.min(1, (animationScroll / animationDistance) * 2.3)
      );

      // Map scroll progress to character count
      const totalChars = text.length + 1;
      const charsToHighlight = Math.floor(scrollProgress * totalChars);

      setHighlightedChars(charsToHighlight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [text, isMobile]);

  const getCharColor = (index: number) => {
    // On mobile, show all text in charcoalBlue
    if (isMobile) {
      return colors.darkGray;
    }

    // Desktop animation colors
    if (index < highlightedChars - 1) {
      // Fully transitioned characters - darkGray
      return colors.darkGray;
    } else if (index === highlightedChars - 1) {
      // Currently transitioning character - B7Gray
      return colors.B7Gray;
    } else {
      // Not yet highlighted - D6Gray
      return colors.D6Gray;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-0 bg-white md:min-h-[250vh] md:-mt-[50vh] w-full"
    >
      {/* Sticky container on desktop, regular on mobile */}
      <div className="md:sticky md:top-0 flex items-center justify-center md:min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 flex-col py-14 w-full md:py-0">
        <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-216 mx-auto w-full px-2 sm:px-4">
          <h2 className="text-2xl md:text-5xl lg:text-5xl font-bold text-center font-neuepower-ultra leading-tight md:leading-snug wrap-break-word">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className="inline"
                style={{
                  color: isMobile ? colors.darkGray : getCharColor(index),
                  transition: "color 0.15s ease",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </div>
        <div className="mt-8 md:mt-12 text-center">
          <p
            className="text-lg md:text-xl lg:text-xl font-semibold mb-2"
            style={{ color: colors.slateGray }}
          >
            Muhammad Husnain 
          </p>
          <p
            className="text-md font-medium"
            style={{ color: colors.darkSlateGray }}
          >
            Founder, Al-Mudeef
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
