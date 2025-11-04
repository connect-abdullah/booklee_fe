import SectionHeader from "@/components/ui/sectionHeader";
import { colors } from "@/constants/colors";

const SolutionCard = () => {
  return (
    <div className={`py-10 md:px-7 md:py-22 bg-[${colors.ultraLightGray}]`}>
      <SectionHeader
        smallHeading="SOLUTION BOOKLEE OFFERS"
        mainHeading="Booklee replies to all of your customers so that you can focus on growth"
        description="Booklee is like your superhuman customer support agent that replies to all your customers, takes orders and handles issues automatically."
        maxWidth="max-w-5xl"
        marginBottom={12}
      />
      <div>
        <video
          className={`w-full max-w-xl mx-auto border-0.5 border-[${colors.lightGray}]`}
          src="/videos/solutionVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
};

export default SolutionCard;
