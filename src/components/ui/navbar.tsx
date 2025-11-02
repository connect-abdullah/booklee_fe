"use client";
import { useState, Fragment } from "react";
import { colors } from "@/constants/colors";
import { cn } from "@/lib/utils";
import { images } from "@/constants/images";
import Image from "next/image";
import BookCallButton from "@/components/button/bookCall";
import HamburgerButton from "@/components/button/hamburger";

const navLinks = [
  { href: "/", label: "Solutions", dividerClass: true },
  {
    href: "#features",
    label: "Features",
    dividerClass: true,
  },
  { href: "#pricing", label: "Pricing", dividerClass: true },
  { href: "#contact", label: "Contacts" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-center mt-5 mx-5 md:mx-10 lg:mx-20">
      {/* Main Navbar Container */}
      <div
        className="rounded-2xl shadow-xs px-7 py-6 flex items-center justify-between relative w-full max-w-5xl"
        style={{ borderColor: colors.veryLightGray, borderWidth: "1px" }}
      >
        {/* Logo Section */}
        <Image src={images.logo} alt="logo" width={150} height={150} className="hidden md:block" />
        <Image src={images.logo} alt="logo" width={120} height={120} className="block md:hidden" />
        
        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          {navLinks.map((link, idx) => (
            <Fragment key={link.href}>
              <a
                href={link.href}
                className="font-semibold text-xs uppercase tracking-wide transition-colors duration-200"
                style={{ color: colors.softSilver }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.graphiteGray;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.softSilver;
                }}
              >
                {link.label}
              </a>
              {/* Only add divider after an item if it's not the last */}
              {link.dividerClass && idx !== navLinks.length - 1 && (
                <div className="h-2.5 w-px" style={{ backgroundColor: colors.softSilver }}></div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Hamburger Menu Button - Mobile/Tablet */}
        <HamburgerButton
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

       
        {/* Call to Action Button */}
        <BookCallButton
          text="Book a demo"
          onClick={() => console.log("Book a call clicked")}
        />

        {/* Dropdown Menu - Smoothly animates */}
        <div
          className={cn(
            `absolute left-0 right-0 top-full mx-5 rounded-2xl shadow-xs bg-[${colors.F5White}] overflow-hidden transition-all duration-300 ease-in-out z-50`,
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          )}
          // style={{ borderColor: colors.veryLightGray, borderWidth: "1px" }}
        >
          <div className="px-5 py-6 space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center font-semibold text-xs uppercase tracking-wide transition-colors duration-200 pb-3 last:pb-2"
                style={{
                  color: colors.softSilver,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.graphiteGray;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.softSilver;
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
