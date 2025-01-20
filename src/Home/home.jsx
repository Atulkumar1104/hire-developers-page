import React, { useState, useEffect } from "react";
import { GlowingStarsBackgroundCard } from "../components/glowing-starts";
import { FlowingCardsDemo } from "../components/demo";
import BenefitsGrid from "../components/benefietsCards";
import CombinedTechNav from "../components/combnedTechnav";
import { FeatureStepsDemo } from "../components/demoFeature";
import Demo from "../components/tiltdemo";
import CTASection from "../components/cts";
import LatestInsights from "../components/latestInsights";
import IndustryInsights from "../components/industryInsights";
import FAQSection from "../components/faq";
import ContactSection from "../components/contactUs";
import NextJsBenefits from "../components/LASTPOINTS.JSX";
import { OrbEffectDemo } from "../components/ord-demo";
import HorizontalNav from "../components/internalnav";

const Home = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav only after scrolling past 100vh
      if (window.scrollY > window.innerHeight) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div id="hero" className="relative h-screen overflow-hidden">
        <OrbEffectDemo />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl font-bold leading-tight mb-6 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Need a Top-Notch Next.js Developer for Your Project? You're in the
              Right Place.
            </h1>

            <p className="text-gray-100 mb-10 text-xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              Are you embarking on a new web development project and recognizing
              the power and performance advantages of Next.js? Are you
              struggling to find experienced developers who can bring your
              vision to life? You've landed in the right spot. Our India-based
              software development agency specializes in providing highly
              skilled Next.js developers, ready to seamlessly integrate into
              your team or take full ownership of your project.
            </p>

            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-orange-500 text-black rounded-3xl font-bold hover:bg-orange-600 transition-colors duration-300">
                Get started
              </button>
              <button className="px-8 py-3 bg-orange-500 text-black rounded-3xl font-bold hover:bg-orange-600 transition-colors duration-300">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        {/* Sticky Navigation with display none when not visible */}
        {isNavVisible && (
          <div className="fixed top-0 left-0 right-0 z-50 bg-black">
            <HorizontalNav />
          </div>
        )}

        {/* Rest of your sections */}
        <div className="relative z-10 bg-gradient-to-b from-[#0e1421] to-black">
          <FlowingCardsDemo />
        </div>
        <div id="benefits" className="bg-gradient-to-b from-black to-gray-900">
          <BenefitsGrid />
        </div>
        <div id="tech" className="bg-gradient-to-b from-black to-gray-900">
          <CombinedTechNav />
        </div>
        <div id="features" className="bg-gradient-to-b from-gray-900 to-black">
          <FeatureStepsDemo />
        </div>
        <div className="bg-gradient-to-b from-black to-gray-900">
          <Demo />
        </div>
        <div className="bg-gradient-to-b from-gray-900 to-black">
          <NextJsBenefits />
        </div>
        <div id="insights">
          <LatestInsights />
        </div>
        <div id="industry" className="bg-[#101726] to-[#0d121e]">
          <IndustryInsights />
        </div>
        <div className="bg-gradient-to-b from-[#101726] to-gray-900">
          <CTASection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
