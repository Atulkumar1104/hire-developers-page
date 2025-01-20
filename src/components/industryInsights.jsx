import React, { useState } from "react";
import { motion } from "framer-motion";

const IndustryInsights = () => {
  const [activeTab, setActiveTab] = useState("Healthcare");

  const tabs = [
    "Healthcare",
    "BFSI",
    "Education",
    "Real Estate",
    "Retail & E-Commerce",
    "Logistics",
    "On Demand",
  ];

  const tabData = {
    Healthcare: [
      {
        type: "CASE STUDY",
        title: "DentalCare App - Doctor Appointment Booking App",
        description:
          "How has MindInventory helped DentalCare to create an app simplifying dental appointment booking and record management.",
        image:
          "https://www.mindinventory.com/img/industryfocusedinsights/dentalcare-app.webp",
      },
      {
        type: "PODCAST",
        title: "How AI Can Be Beneficial to Healthcare Startups?",
        description:
          "Learn how AI is transforming the healthcare landscape and setting benchmarks with its compelling offerings.",
        image:
          "https://www.mindinventory.com/img/industryfocusedinsights/ai-benefits-healthcare-startups.webp",
      },
      {
        type: "WHITEPAPER",
        title: "A Guide to Healthcare IT Solution Development",
        description:
          "This guide covers everything, including healthcare IT trends, app development best practices, cost estimation.",
        image:
          "https://www.mindinventory.com/img/industryfocusedinsights/healthcare-it-solution.webp",
      },
    ],
    BFSI: [
      {
        type: "CASE STUDY",
        title: "Banking App - Secure Transactions",
        description:
          "How we developed a secure banking app for seamless transactions.",
        image:
          "https://www.mindinventory.com/img/industryfocusedinsights/cloud-is-reshaping-the-fintech-industry.webp",
      },
      {
        type: "PODCAST",
        title: "AI in Banking",
        description: "Exploring the role of AI in modern banking solutions.",
        image:
          "https://www.mindinventory.com/img/industryfocusedinsights/web3-in-finance.webp",
      },
    ],
    Education: [
      {
        type: "CASE STUDY",
        title: "E-Learning Platform",
        description:
          "Building a scalable e-learning platform for global audiences.",
        image:
          "https://www.mindinventory.com/img/industryfocusedinsights/develop-lms.webp",
      },
    ],
    "Real Estate": [
      {
        type: "CASE STUDY",
        title: "Property Management App",
        description: "Revolutionizing property management with a custom app.",
        image:
          "https://www.mindinventory.com/img/industryfocusedinsights/ai-is-empowering-the-realeestate-industry.webp",
      },
    ],
    "Retail & E-Commerce": [
      {
        type: "CASE STUDY",
        title: "E-Commerce Platform",
        description: "Developing a high-performance e-commerce platform.",
        image:
          "https://www.mindinventory.com/img/industryfocusedinsights/mamaearth-ecommerce-ux-design-trends.webp",
      },
    ],
    Logistics: [
      {
        type: "CASE STUDY",
        title: "Logistics Management System",
        description:
          "Streamlining logistics operations with a custom management system.",
        image:
          "https://www.mindinventory.com/img/industryfocusedinsights/saas-based-transportation-management-system.webp",
      },
    ],
    "On Demand": [
      {
        type: "CASE STUDY",
        title: "On-Demand Delivery App",
        description:
          "Creating an on-demand delivery app for fast and reliable services.",
        image:
          "https://www.mindinventory.com/img/industryfocusedinsights/on-demand-service-app.webp",
      },
      {
        type: "BLOG",
        title: "On-Demand Delivery App",
        description:
          "Creating an on-demand delivery app for fast and reliable services.",
        image:
          "https://www.mindinventory.com/img/industryfocusedinsights/on-demand-service-app.webp",
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative mx-auto max-w-7xl py-16 sm:py-18">
      {/* Heading with precise styling */}
      <motion.h2
        className="text-4xl sm:text-4xl font-bold text-center mb-4 text-white"
        variants={itemVariants}
      >
        Industry-focused Insights
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 text-lg mb-12"
        variants={itemVariants}
      >
        Explore our featured content on different industries that you may find
        helpful.
      </motion.p>

      {/* Tabs with updated styling */}
      <motion.div
        className="flex justify-center mb-12 overflow-x-auto py-2 px-4"
        variants={itemVariants}
      >
        <div className="inline-flex bg-[#1A2436] rounded-full p-1.5">
          <div className="inline-flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-full transition-all duration-300 text-sm whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#2563EB] text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#2563EB]/10"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Content cards with refined styling */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tabData[activeTab].map((card, index) => (
          <motion.div
            key={index}
            className="group relative bg-[#1A2436] rounded-xl overflow-hidden hover:bg-[#1E2A42] transition-colors duration-300"
            variants={itemVariants}
          >
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

            {/* Image with hover effect */}
            <div className="aspect-video overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content section */}
            <div className="p-6 relative">
              <span className="inline-block px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium mb-3">
                {card.type}
              </span>
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                {card.description}
              </p>
            </div>

            {/* Hover border effect */}
            <div className="absolute inset-0 border border-[#2563EB]/0 group-hover:border-[#2563EB]/20 rounded-xl transition-colors duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default IndustryInsights;
