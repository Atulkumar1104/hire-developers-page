import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Clock,
  Code2,
  DollarSign,
  Users,
  MessageCircle,
  Shield,
  ArrowRight,
  Star,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const BenefitsGrid = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setAnimate(true);
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    {
      title: "Access to Pre-Vetted Talent",
      description:
        "Immediate access to top-tier Next.js developers from India, thoroughly vetted for excellence.",
      icon: Users,
      color: "blue",
      stats: "100+ vetted developers",
      highlight: "Top 1% talent",
    },
    {
      title: "Focus on Your Core Business",
      description:
        "We handle hiring, onboarding, and management, letting you concentrate on core business objectives.",
      icon: Code2,
      color: "purple",
      stats: "40% time saved",
      highlight: "Streamlined Process",
    },
    {
      title: "Reduced Development Time",
      description:
        "Experienced developers ensure faster development cycles and quicker time-to-market.",
      icon: Clock,
      color: "green",
      stats: "2x faster delivery",
      highlight: "Lightning Fast",
    },
    {
      title: "Cost-Effective Solution",
      description:
        "Access high-quality expertise at competitive rates, especially advantageous with Indian talent.",
      icon: DollarSign,
      color: "yellow",
      stats: "50% cost savings",
      highlight: "Maximum Value",
    },
    {
      title: "Flexible Engagement Models",
      description:
        "Choose from dedicated teams, individual developers, or hourly support to match your needs.",
      icon: CheckCircle2,
      color: "pink",
      stats: "3+ engagement options",
      highlight: "Your Terms",
    },
    {
      title: "Seamless Communication",
      description:
        "Clear and consistent communication ensuring smooth collaboration throughout development.",
      icon: MessageCircle,
      color: "indigo",
      stats: "24/7 support",
      highlight: "Always Connected",
    },
    {
      title: "Risk Mitigation",
      description:
        "Reduce risks of delays, quality issues, and communication breakdowns through agency expertise.",
      icon: Shield,
      color: "red",
      stats: "99.9% project success",
      highlight: "Zero Worry",
    },
  ];

  const getColorClasses = (color, isHovered) => {
    const colorMap = {
      blue: `bg-gradient-to-br from-blue-400 to-blue-600 ${
        isHovered ? "shadow-lg shadow-blue-200" : ""
      }`,
      purple: `bg-gradient-to-br from-purple-400 to-purple-600 ${
        isHovered ? "shadow-lg shadow-purple-200" : ""
      }`,
      green: `bg-gradient-to-br from-green-400 to-green-600 ${
        isHovered ? "shadow-lg shadow-green-200" : ""
      }`,
      yellow: `bg-gradient-to-br from-yellow-400 to-yellow-600 ${
        isHovered ? "shadow-lg shadow-yellow-200" : ""
      }`,
      pink: `bg-gradient-to-br from-pink-400 to-pink-600 ${
        isHovered ? "shadow-lg shadow-pink-200" : ""
      }`,
      indigo: `bg-gradient-to-br from-indigo-400 to-indigo-600 ${
        isHovered ? "shadow-lg shadow-indigo-200" : ""
      }`,
      red: `bg-gradient-to-br from-red-400 to-red-600 ${
        isHovered ? "shadow-lg shadow-red-200" : ""
      }`,
    };
    return colorMap[color] || colorMap.blue;
  };

  const totalPages = Math.ceil(benefits.length / 3);
  const visibleBenefits = benefits.slice(
    currentPage * 3,
    (currentPage + 1) * 3
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const getGlobalIndex = (localIndex) => {
    return currentPage * 3 + localIndex;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-12 relative">
        <h2 className="text-5xl font-bold text-white mb-4">
          Why Choose Our Next.js Developers?
        </h2>
        <p className="text-gray-400 text-xl">
          Unlock the potential of your project with our expert development team
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {visibleBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const globalIndex = getGlobalIndex(index);
            const isExpanded = expandedCard === globalIndex;
            const isHovered = hoveredCard === globalIndex;

            return (
              <div key={globalIndex} className="relative">
                <div
                  className={`bg-gray-300 rounded-2xl transition-all duration-300 cursor-pointer
                    ${isExpanded ? "scale-105" : "hover:scale-102"} 
                    ${isHovered ? "shadow-2xl" : "shadow-lg"}`}
                  onMouseEnter={() => setHoveredCard(globalIndex)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() =>
                    setExpandedCard(isExpanded ? null : globalIndex)
                  }
                >
                  <div className="p-8">
                    <div
                      className={`${getColorClasses(
                        benefit.color,
                        isHovered
                      )} w-16 h-16 rounded-xl flex items-center justify-center mb-6
                      transform transition-all duration-500 group-hover:rotate-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {benefit.description}
                    </p>

                    {isExpanded && (
                      <div className="border-t border-gray-200 pt-4 mt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-gray-500 mb-2">
                              {benefit.stats}
                            </p>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              <span className="text-sm font-medium text-gray-700">
                                {benefit.highlight}
                              </span>
                            </div>
                          </div>
                          <ArrowRight className="w-6 h-6 text-gray-500 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {isHovered && (
                  <div className="absolute -top-2 -right-2">
                    <div
                      className={`w-6 h-6 ${getColorClasses(
                        benefit.color
                      )} rounded-full flex items-center justify-center animate-pulse`}
                    >
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={handlePrevPage}
            className="p-2 rounded-full bg-orange-600 hover:bg-orange-700 transition-colors duration-300"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>
          <button
            onClick={handleNextPage}
            className="p-2 rounded-full bg-orange-600 hover:bg-orange-700 transition-colors duration-300"
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsGrid;
