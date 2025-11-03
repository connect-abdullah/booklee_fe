"use client";
import { colors } from "@/constants/colors";
import SectionHeader from "@/components/ui/sectionHeader";

const ProblemSection = () => {
  const problems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
      title: "YOUR INBOX GETS OVERFLOWED WITH CUSTOMER MESSAGES.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M3 12H2m15.325-7.757l-.707-.707M6.382 17.618l-.707-.707M18.364 18.364l-.707-.707M5.636 5.636l-.707-.707"
          />
        </svg>
      ),
      title: "ALL OF YOUR TIME IS BEING WASTED REPLYING TO CUSTOMERS.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
      title: "STILL YOU ARE LOSING SALES DUE TO MISSED OR LATE REPLIES.",
    },
  ];

  return (
    <div className="bg-white py-16  w-full">
      <div className="max-w-7xl mx-auto px-2">
        <div>
          <SectionHeader
            smallHeading="PROBLEM"
            mainHeading="Tired of Replying to Customer Messages"
            description="Running your business on social media is overwhelming. Customers keep messaging and you can't reply to all of them instantly resulting in lost sales which leads to overworking and constant stress. We don't want that for you."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left p-5 md:p-5 border border-dashed rounded-lg"
              style={{
                borderColor: colors.lightGray,
                borderWidth: "1px",
                backgroundColor: colors.ultraLightGray,
              }}
            >
              <div
                className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center mb-4 md:mb-6"
                style={{ backgroundColor: colors.black }}
              >
                {problem.icon}
              </div>
              <h3
                className="text-base md:text-lg font-extrabold leading-tight"
                style={{ color: colors.darkGray }}
              >
                {problem.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
