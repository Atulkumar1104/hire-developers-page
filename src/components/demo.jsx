import React, { useState } from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
  GlowingStarsDescription,
} from "./glowing-starts";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const FlowingCardsDemo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Full-Stack Next.js Development",
      description:
        "From front-end user interfaces to back-end API development, we handle every aspect of your application.",
    },
    {
      title: "Next.js Consulting and Architecture",
      description:
        "We can help you plan and architect your Next.js application for optimal performance, scalability, and maintainability.",
    },
    {
      title: "Custom Component Development",
      description:
        "We can create reusable and performant UI components tailored to your specific design and functionality.",
    },
    {
      title: "API Integration and Development",
      description:
        "We can integrate your Next.js application with various APIs and develop custom APIs as needed.",
    },
    {
      title: "Performance Optimization and SEO Audits",
      description:
        "We can optimize your Next.js application for speed and SEO, ensuring maximum visibility and user engagement.",
    },
    {
      title: "Next.js Migration and Upgrades",
      description:
        "We can help you migrate existing applications to Next.js or upgrade your existing Next.js projects to the latest versions.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= cards.length ? 0 : prevIndex + 4
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 < 0 ? cards.length - 4 : prevIndex - 4
    );
  };

  // Get current visible cards
  const visibleCards = cards.slice(currentIndex, currentIndex + 4);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-white text-center mb-6">
          What We Offer for Your Next.js Project:
        </h2>
        <p className="text-gray-300 text-center text-2xl mb-8 max-w-3xl mx-auto">
          We provide comprehensive Next.js development services tailored to your
          project requirements:
        </p>
        <div>
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {visibleCards.map((card, index) => (
              <GlowingStarsBackgroundCard
                key={currentIndex + index}
                className="w-full min-h-[350px] flex flex-col"
              >
                <GlowingStarsTitle className="mb-4 mt-1 text-xl leading-tight">
                  {card.title}
                </GlowingStarsTitle>
                <GlowingStarsDescription className="text-base flex-grow">
                  {card.description}
                </GlowingStarsDescription>
              </GlowingStarsBackgroundCard>
            ))}
          </div>

          {/* Navigation Controls - Centered below cards */}
          <div className="flex justify-end gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white transform transition-all hover:scale-110"
              aria-label="Previous slides"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white transform transition-all hover:scale-110"
              aria-label="Next slides"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingCardsDemo;
