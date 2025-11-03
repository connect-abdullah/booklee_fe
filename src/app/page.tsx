import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/sections/heroSection";
import FeedbackSection from "@/components/sections/feedbackSection";
import ProblemSection from "@/components/sections/problemSection";
import SolutionSection from "@/components/sections/solutionSection";
import CtaSection from "@/components/sections/ctaSection";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeedbackSection />
      <ProblemSection />
      <SolutionSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
