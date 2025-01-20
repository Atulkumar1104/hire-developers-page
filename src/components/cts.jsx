import React from "react";

const CTASection = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative overflow-hidden rounded-3xl group h-[450px]">
        {/* Dynamic background gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 via-orange-500 to-red-600 group-hover:scale-105 transition-transform duration-700" />

        {/* Floating orbs with animation */}
        <div className="absolute top-0 left-0 w-32 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-20 -translate-x-16 -translate-y-16 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full blur-2xl opacity-20 animate-bounce" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-500 to-red-500 rounded-full blur-3xl opacity-20 translate-x-16 translate-y-16 animate-pulse" />

        {/* Interactive overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm group-hover:bg-black/5 transition-all duration-500" />

        {/* Content container */}
        <div className="relative flex flex-col items-center justify-center px-6 -mt-6 py-24 ">
          {/* Animated heading */}
          <h2 className="text-6xl max-w-5xl font-bold mb-8 text-center transform transition-all duration-500 group-hover:scale-105">
            <span className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 bg-clip-text text-transparent inline-block">
              The Future of Workflow Automation is Now
            </span>
          </h2>

          {/* Interactive description */}
          <p className="bg-gradient-to-r from-teal-100 via-orange-100 to-red-100 bg-clip-text text-transparent text-lg mb-12 max-w-2xl text-center leading-relaxed font-medium transform transition-all duration-500 group-hover:scale-105">
            Get started with GitHub Actions today and explore community created
            actions in the GitHub Marketplace.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-wrap gap-4  justify-center">
            <button
              className="group relative px-8 py-3 bg-gray-950 text-white rounded-xl font-semibold
                overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                Get started →
              </span>
              <div className="absolute inset-0 bg-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              className="group relative px-8 py-3 bg-gray-950 text-white rounded-xl font-semibold
                overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                Contact sales →
              </span>
              <div className="absolute inset-0 bg-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Interactive bottom accent */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-teal-500 via-orange-500 to-red-500 rounded-full blur-sm group-hover:w-2/3 group-hover:opacity-75 transition-all duration-700" />

          {/* Floating particles */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping" />
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-100" />
            <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-red-400 rounded-full animate-ping delay-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
