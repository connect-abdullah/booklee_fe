"use client";
import { useRef } from "react";
import Image from "next/image";

interface Logo {
  src: string;
  alt?: string;
}

interface MarqueeProps {
  logos?: Logo[];
  speed?: number;
  gap?: number;
  pauseOnHover?: boolean;
}

const colors = {
  white: "#FFFFFF",
  darkSlateGray: "#2F4F4F",
};

// Increased width and height for all company logos
const companyLogos: Logo[] = [
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68dccbe7cfa5a9eb3b13b22e_Adroit.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/681c88a97949ca6715235471_image%2020.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/681c88a97105f6634c173ce6_image%2019.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68e5faf0d01ca104117b6735_Manarah%20Publication.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68dcce0f253834bb65f9d950_Punch.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68dccca8e62eaaf3d287f0de_SSB.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68dcce2fc921399353969fb9_Nazim.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/681c8280ca43c8b05e4b4cd8_image%206.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68dccde1a53a3090dd2c38df_Matita.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68dccf02d98b2d060bb9a9c7_Shaver.png",
  },
];

const Marquee: React.FC<MarqueeProps> = ({
  logos = companyLogos,
  speed = 30,
  gap = 20,
  pauseOnHover = true,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Duplicate logos twice for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className="w-full pt-10 pb-6 overflow-hidden"
      style={{ backgroundColor: colors.white }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-md font-bold text-center mb-10"
          style={{ color: colors.darkSlateGray }}
        >
          Trusted by top brands
        </h2>

        <div className="relative overflow-hidden">
          <div
            ref={marqueeRef}
            className={`flex ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
            style={{
              animation: `scroll ${speed}s linear infinite`,
              gap: `${gap}px`,
              willChange: "transform",
            }}
          >
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={idx}
                className="shrink-0 flex items-center justify-center select-none"
                style={{
                  width: `200px`,
                  height: `100px`,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt || `Company Logo ${idx + 1}`}
                  className="max-w-full max-h-full object-contain select-none"
                  style={{ userSelect: "none", pointerEvents: "none" }}
                />
              </div>
            ))}
          </div>
          {/* Gradient overlays for fade effect */}
          <div
            className="absolute top-0 left-0 h-full pointer-events-none z-10"
            style={{
              width: "160px",
              background: "linear-gradient(to right, white, transparent)",
            }}
          />
          <div
            className="absolute top-0 right-0 h-full pointer-events-none z-10"
            style={{
              width: "160px",
              background: "linear-gradient(to left, white, transparent)",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(-200px * ${logos.length} - ${gap}px * ${logos.length})
            );
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
