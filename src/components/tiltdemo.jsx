import React, { useState } from "react";
import Tilt from "./titlt";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

const Demo = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const cards = [
    {
      title: "Fast and Efficient",
      description:
        "We understand the importance of time, so we've designed our process to be as quick and efficient as possible without compromising quality.",
      img: "https://i.pinimg.com/736x/2f/49/6c/2f496c29c6076d0e424faffebbf26147.jpg",
    },
    {
      title: "Transparent and Collaborative",
      description:
        "We believe in open communication and collaboration throughout the entire process.",
      img: "https://i.pinimg.com/736x/9e/a5/e5/9ea5e5255688e5a7a3a9c6226d36139c.jpg",
    },
    {
      title: "Tailored Solutions",
      description:
        "We understand that every project is unique, so we tailor our approach to meet your specific needs.",
      img: "https://i.pinimg.com/736x/26/12/c2/2612c27b479627c324e2547d17cd5a80.jpg",
    },
    {
      title: "Risk-Free Engagement",
      description:
        "Our streamlined process and experienced team minimize the risk of project delays and quality issues.",
      img: "https://i.pinimg.com/736x/3a/15/b2/3a15b240856f0e3b930f75a159c511a6.jpg",
    },
    {
      title: "Dedicated Account Manager",
      description:
        "You'll have a dedicated account manager who will be your point of contact throughout the engagement.",
      img: "https://i.pinimg.com/736x/3a/15/b2/3a15b240856f0e3b930f75a159c511a6.jpg",
      isPremium: true,
    },
  ];

  const cardsPerPage = 4;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const startIdx = currentPage * cardsPerPage;
  const visibleCards = cards.slice(startIdx, startIdx + cardsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen  p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-16 text-5xl text-center font-bold text-gray-900 dark:text-white">
          Key Benefits of Our Hiring Process:
        </h1>

        <div className="relative">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {visibleCards.map((card, index) => (
              <Tilt key={index} rotationFactor={8} isRevese>
                <div
                  className={`h-96 overflow-hidden rounded-lg bg-gray-800
                  } shadow-lg flex flex-col`}
                >
                  <div className="h-48 flex-shrink-0">
                    <img
                      src={card.img}
                      alt={`${card.title} illustration`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h3
                      className={`text-lg font-semibold ${
                        card.isPremium
                          ? "text-white"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`mt-2 ${
                        card.isPremium
                          ? "text-white/90"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={prevPage}
              className="rounded-full bg-orange-600 px-4 py-3 font-medium text-white shadow-md transition-colors hover:bg-orange-700"
            >
              <FaArrowLeft className="inline-block" /> {/* Previous Icon */}
            </button>
            <button
              onClick={nextPage}
              className="rounded-full bg-orange-600 px-4 py-3 font-medium text-white shadow-md transition-colors hover:bg-orange-700"
            >
              <FaArrowRight className="inline-block" /> {/* Next Icon */}
            </button>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Demo;
