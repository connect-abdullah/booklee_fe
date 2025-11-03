import { colors } from "@/constants/colors";
import { images } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

const SiteFooter = () => {
  return (
    <footer
      className={`w-full flex flex-col items-center justify-center gap-2 bg-[${colors.midnightBlack}] `}
    >
      <div
        className={`w-full text-[10px] uppercase font-medium text-[${colors.silverGray}] border-t border-b py-4`}
        style={{
          borderTop: `1px solid ${colors.lightGray}10`,
          borderBottom: `1px solid ${colors.lightGray}10`,
        }}
      >
        <div className="w-full max-w-5xl mx-auto gap-8 justify-center flex flex-row sm:items-center sm:justify-between md:gap-3 px-4">
          <div className="text-center sm:text-left">
            <Link href="/privacy-policy">PRIVACY POLICY</Link>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: colors.gradientColorLeft }}
            ></div>
            <span>BOOKING FOR</span>
          </div>
          <div className="text-center sm:text-right">
            <Link href="/terms-and-conditions">TERMS & CONDITIONS</Link>
          </div>
        </div>
      </div>
      <div
        className={`w-full max-w-5xl mx-auto uppercase flex flex-col md:flex-row items-center md:justify-between gap-4 px-4 text-[10px] font-medium text-[${colors.silverGray}]  py-4`}
      >
        <div className="text-center md:text-left">
          © lazychat 2025. All rights reserved.
        </div>
        <div className="order-first md:order-0">
          <Image
            src={images.whiteLogo}
            alt="logo"
            width={144}
            height={32}
            className="w-28 h-8 md:w-36 md:h-10 object-contain"
          />
        </div>
        <div className="flex items-center justify-center md:justify-end gap-4">
          <div className=" sm:block">
            <Link href="https://www.twitter.com" target="_blank">
              Twitter
            </Link>
          </div>
          <div className=" sm:block">
            <Link href="https://www.facebook.com" target="_blank">
              Facebook
            </Link>
          </div>
          <div className=" sm:block">
            <Link href="https://www.instagram.com" target="_blank">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
