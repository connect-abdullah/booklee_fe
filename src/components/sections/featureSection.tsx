"use client";

import { useEffect, useRef, useState } from "react";
import GradientBackground from "@/components/GradientBackground";

const featureSectionData = [
  {
    title: "Message & Comment Automation",
    description:
      "Every DM and comment is answered instantly—no more late replies or missed orders.",
    buttonText: "Get Started",
    videoSrc: "/videos/feature1.mp4",
  },
  {
    title: "Speak into their language automatically",
    description:
      "Automatically respond in English, Bangla, Banglish or any other language",
    buttonText: "Get Started",
    videoSrc: "/videos/feature2.mp4",
  },
  {
    title: "Ads running? So are the sales",
    description:
      "Customers clicking on your Facebook/Instagram ads get instant, personalized replies—before they click away.",
    buttonText: "Get Started",
    videoSrc: "/videos/feature3.mp4",
  },
  {
    title: "Superpower your support team",
    description:
      "LazyChat suggests smart replies in real time and tracks agent performance—so your humans get sharper with every message.",
    buttonText: "Get Started",
    videoSrc: "/videos/feature4.mp4",
  },
  {
    title: "Stop repeating while Start resolving",
    description:
      "From \"Where's my order?\" to \"How to return?\"— LazyChat answers instantly and flags issues for humans only when needed.",
    buttonText: "Get Started",
    videoSrc: "/videos/feature5.mp4",
  },
];

const FeatureSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Don't run slider animation on mobile/tablet
    if (isMobile) {
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;
      const containerHeight = containerRect.height;
      
      // Calculate when the container starts and ends being sticky
      // Container starts being sticky when its top reaches viewport top (containerTop <= 0)
      // Container ends being sticky when its bottom reaches viewport top
      
      // If container hasn't reached sticky state yet (still above viewport)
      if (containerTop > 0) {
        setCurrentIndex(0);
        return;
      }
      
      // If container has fully scrolled past (below viewport)
      if (containerBottom < 0) {
        setCurrentIndex(featureSectionData.length - 1);
        return;
      }
      
      // Container is in sticky state
      // Calculate how much of the container has scrolled through
      // When containerTop = 0 (just started sticking), we're at the start
      // When containerBottom = 0 (container about to exit), we're at the end
      
      // The scrollable range is from when container top hits 0 to when container bottom hits 0
      const scrollableDistance = containerHeight - windowHeight;
      const scrolled = -containerTop; // containerTop is negative when sticky
      
      const scrollProgress = Math.max(
        0,
        Math.min(1, scrolled / scrollableDistance)
      );

      // Map progress to feature index
      const totalFeatures = featureSectionData.length;
      const rawIndex = scrollProgress * totalFeatures;
      const index = Math.min(
        Math.floor(rawIndex),
        totalFeatures - 1
      );

      setCurrentIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobile]);

  // Mobile/Tablet Layout: Show all items in flex-col
  if (isMobile) {
    return (
      <GradientBackground>
        <div className="max-w-6xl mx-auto px-2 py-27 md:px-14 w-full">
          <div className="flex flex-col gap-16">
            {featureSectionData.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center w-full"
              >
                {/* Heading Section */}
                <div className="flex flex-col items-center justify-center w-full py-6 gap-4 mb-8">
                  <div className="text-4xl md:text-5xl font-bold font-neuepower-ultra text-center text-white">
                    {feature.title}
                  </div>
                  <div className="text-white text-base md:text-lg font-semibold text-center px-4">
                    {feature.description}
                  </div>
                  <button className="py-4 px-9 bg-white text-black cursor-pointer rounded-md text-xl font-bold">
                    {feature.buttonText}
                  </button>
                </div>
                {/* Video */}
                <div className="flex items-center justify-center w-full">
                  <video
                    src={feature.videoSrc}
                    width={350}
                    height={350}
                    loop
                    playsInline
                    autoPlay
                    muted
                    className="rounded-3xl w-full max-w-[350px] h-auto"
                  >
                    Sorry, your browser doesn't support embedded videos.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GradientBackground>
    );
  }

  // Desktop Layout: Scroll-based slider
  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{ height: `${featureSectionData.length * 100}vh` }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <div 
          className="relative w-full h-full overflow-hidden"
          style={{
            background: "linear-gradient(to right, #8426E2, #6A16E1, #5004E1)"
          }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
          {/* Content Layer */}
          <div className="relative z-10 h-full">
            <div className="max-w-6xl mx-auto px-2 py-27 md:px-14 w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
              {featureSectionData.map((feature, idx) => {
                const offset = idx - currentIndex;
                const isActive = offset === 0;
                const isAbove = offset < 0;
                const isBelow = offset > 0;

                // Calculate transform based on position
                let translateY = 0;
                let opacity = 0;
                let scale = 0.8;

                if (isActive) {
                  translateY = 0;
                  opacity = 1;
                  scale = 1;
                } else if (isAbove) {
                  // Slides above (negative offset)
                  translateY = -100 - Math.abs(offset) * 20;
                  opacity = 0;
                  scale = 0.8;
                } else if (isBelow) {
                  // Slides from below (positive offset)
                  translateY = 100 + offset * 20;
                  opacity = 0;
                  scale = 0.8;
                }

                return (
                  <div
                    key={idx}
                    className="absolute inset-0 flex flex-row items-center justify-between transition-all duration-700 ease-out"
                    style={{
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      opacity,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div className="flex flex-col items-center justify-center max-w-lg w-full py-6 gap-4">
                      <div className="text-7xl font-bold font-neuepower-ultra text-center text-white">
                        {feature.title}
                      </div>
                      <div className="text-white text-lg font-semibold text-center">
                        {feature.description}
                      </div>
                      <button className="py-4 px-9 bg-white text-black cursor-pointer rounded-md text-xl font-bold">
                        {feature.buttonText}
                      </button>
                    </div>
                    <div className="flex items-center justify-center">
                      <video
                        src={feature.videoSrc}
                        width={350}
                        height={350}
                        loop
                        playsInline
                        autoPlay={isActive}
                        muted
                        className="rounded-3xl"
                      >
                        Sorry, your browser doesn't support embedded videos.
                      </video>
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
