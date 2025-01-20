import React, { useState, useEffect } from "react";
import { Zap, Search, Puzzle, TrendingUp } from "lucide-react";

const BenefitCard = ({
  icon: Icon,
  title,
  description,
  isActive,
  onClick,
  progress,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden p-6 rounded-xl transition-all duration-500 cursor-pointer transform backdrop-blur-sm
        ${
          isActive
            ? "bg-gradient-to-br from-orange-500/95 via-rose-500/95 to-violet-500/95 text-white scale-105 shadow-xl"
            : isHovered
            ? "bg-white/95 shadow-2xl scale-102"
            : "bg-white/95 text-gray-800"
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-blue-200/50 w-full">
        <div
          className="h-full bg-blue-700 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Floating particles effect */}
      {isHovered && (
        <>
          <div className="absolute top-2 right-2 w-2 h-2 bg-orange-300/50 rounded-full animate-ping" />
          <div className="absolute bottom-4 right-8 w-3 h-3 bg-violet-300/50 rounded-full animate-pulse" />
          <div className="absolute top-8 left-4 w-2 h-2 bg-rose-300/50 rounded-full animate-bounce" />
        </>
      )}

      <div className="flex items-center space-x-4 mb-4">
        <div
          className={`p-4 rounded-full transform transition-all duration-300
          ${
            isActive || isHovered
              ? "bg-white/30 rotate-12 backdrop-blur-sm"
              : "bg-orange-50"
          }`}
        >
          <Icon
            size={28}
            className={`transform transition-all duration-300
              ${isActive ? "text-white rotate-12" : "text-orange-400"}`}
          />
        </div>
        <h3
          className={`text-xl font-bold ${
            isActive ? "text-white drop-shadow-md" : ""
          }`}
        >
          {title}
        </h3>
      </div>

      <p
        className={`text-sm transition-all duration-300 ${
          isActive ? "text-white/90" : "text-gray-700"
        } ${isActive ? "drop-shadow-md" : ""}`}
      >
        {description}
      </p>
    </div>
  );
};

const NextJsBenefits = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [progress, setProgress] = useState(Array(4).fill(0));

  useEffect(() => {
    if (activeIndex !== null) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          const newProgress = [...prev];
          if (newProgress[activeIndex] < 100) {
            newProgress[activeIndex] += 1;
          } else {
            setActiveIndex((activeIndex + 1) % 4);
            newProgress[activeIndex] = 0;
          }
          return newProgress;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [activeIndex]);

  const benefits = [
    {
      icon: Zap,
      title: "Performance is Paramount",
      description:
        "Next.js's server-side rendering (SSR) and static site generation (SSG) deliver lightning-fast load times, crucial for user experience and SEO. However, implementing these features effectively requires in-depth knowledge.",
    },
    {
      icon: Search,
      title: "SEO Optimization Built-In",
      description:
        "Next.js makes SEO implementation significantly easier, but optimizing meta tags, structured data, and other SEO elements still requires expertise. A skilled Next.js developer understands how to leverage these features for maximum impact.",
    },
    {
      icon: Puzzle,
      title: "Complex Integrations and Customization",
      description:
        "Integrating with APIs, databases, and third-party services can be complex. Experienced Next.js developers can handle these integrations seamlessly, ensuring smooth functionality.",
    },
    {
      icon: TrendingUp,
      title: "Scaling for Growth",
      description:
        "Next.js is designed for scalability, but architecting your application for future growth requires careful planning and execution. Our developers have the experience to build robust and scalable solutions.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">
          Why Choose Next.js?
        </h2>
        <p className="text-gray-300 max-w-5xl mx-auto text-xl">
          Choosing Next.js is a strategic move, but maximizing its potential
          requires specialized expertise. Here's why:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            {...benefit}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            progress={progress[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default NextJsBenefits;
