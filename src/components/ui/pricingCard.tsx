"use client";
import { colors } from "@/constants/colors";
import BookCallButton from "@/components/button/bookCall";
import { FiCheckCircle } from "react-icons/fi";

type Feature = {
  text: string;
};

interface PricingCardProps {
  title: string;
  price: string; // e.g. "$39"
  cadence?: string; // e.g. "per month"
  subtitle?: string; // e.g. "Growing teams up to 05 users."
  features: Feature[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  cadence = "per month",
  subtitle,
  features,
  popular,
}) => {
  return (
    <div
      className="flex flex-col justify-between h-full rounded-2xl border"
      style={{
        backgroundColor: colors.raisinBlack,
        borderColor: colors.darkIndigoGray,
      }}
    >
      <div className="p-6 md:py-8 md:px-7">
        {/* Top Section kept equal across cards */}
        <div className="flex flex-col gap-6 min-h-[250px]">
          {/* Title */}
          <div className="flex items-center justify-between">
            <p
              className="text-sm font-semibold"
              style={{ color: colors.softSilver }}
            >
              {title}
            </p>
            {popular && (
              <span
                className="px-2 py-1 text-xs font-semibold rounded-full"
                style={{
                  backgroundColor: colors.gunMetal,
                  color: colors.F5White,
                }}
              >
                Popular
              </span>
            )}
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-end gap-2">
              <span
                className="text-5xl md:text-6xl font-bold leading-none"
                style={{ color: colors.F7White }}
              >
                {price}
              </span>
              <span
                className="mb-1 text-xs md:text-sm font-semibold"
                style={{ color: colors.silverGray }}
              >
                {cadence}
              </span>
            </div>
            {subtitle && (
              <p
                className="mt-2 text-sm font-medium"
                style={{ color: colors.silverGray }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Book Call Button */}
          <BookCallButton
            text="Chat to sales"
            bgColor="bg-white"
            textColor="text-black"
            className="w-full"
            px="px-4"
            py="py-3"
          />
        </div>

        {/* Divider (aligned across cards due to equal top section height) */}
        <div
          className="mb-6 w-[calc(100%+theme(space.6)*2)] md:w-[calc(100%+theme(space.7)*2)] -mx-6 md:-mx-7"
          style={{ borderTop: `1px solid ${colors.darkIndigoGray}` }}
        />

        {/* Features */}
        <div className="pt-2">
          <p
            className="text-xs font-semibold mb-4"
            style={{ color: colors.softSilver }}
          >
            FEATURES
          </p>
          <ul className="space-y-3">
            {features.map((f, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FiCheckCircle
                  className="mt-[2px]"
                  color={colors.F5White}
                  size={18}
                />
                <span className="text-sm" style={{ color: colors.silverGray }}>
                  {f.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
