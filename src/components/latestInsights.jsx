import React, { useState } from "react";
import { motion } from "framer-motion";

const LatestInsights = () => {
  const [activeTab, setActiveTab] = useState("Blog");

  const tabs = ["Blog", "Podcasts", "Infographics", "Whitepapers", "Videos"];

  const insights = {
    Blog: [
      {
        category: "GENERAL",
        title:
          "Agile Software Development: Methodologies, Principles, Benefits, and more",
        description:
          "Agile adoption can lead to a 64% improvement in software delivery, a 45% enhancement in software quality, a 51%",
        image:
          "https://www.mindinventory.com/blog/wp-content/uploads/2025/01/agile-software-development-1024x576.webp",
      },
      {
        category: "GENERAL",
        title: "Types of Web Applications: A Guide For Entrepreneurs",
        description:
          "Choosing the right type of web app for your needs can be challenging, especially with so many options available. However, the good news is that each type of web application",
        image:
          "https://www.mindinventory.com/blog/wp-content/uploads/2024/12/types-of-web-applications-guide-1024x576.webp",
      },
      {
        category: "GENERAL",
        title: "Software Product Development Guide for Businesses",
        description:
          "This comprehensive guide walks you through the critical stages of software product development, from idea conception to launch. It highlights key steps such as brainstorming, market research, designing, coding",
        image:
          "https://www.mindinventory.com/blog/wp-content/uploads/2024/12/software-product-development-step-by-step-guide-1024x576.webp",
      },
    ],
    Podcasts: [
      {
        category: "TECHNOLOGY",
        title: "The Future of AI in Enterprise Software",
        description:
          "Join our tech experts as they discuss the revolutionary impact of AI on enterprise software development and what it means for businesses in 2025.",
        image:
          "https://www.mindinventory.com/img/explore-teams/generative-ai.webp",
      },
      {
        category: "INNOVATION",
        title: "Digital Transformation Success Stories",
        description:
          "Listen to industry leaders share their experiences and insights on successful digital transformation initiatives and lessons learned.",
        image:
          "https://thescalers.com/wp-content/uploads/2021/06/Digital-transformation-success-stories.jpg",
      },
      {
        category: "DEVELOPMENT",
        title: "Modern Development Practices",
        description:
          "A deep dive into contemporary software development practices, from DevOps to microservices architecture.",
        image:
          "https://th.bing.com/th/id/OIP.JJG4hOYvnYpVqN3u8p42aAHaEF?rs=1&pid=ImgDetMain",
      },
    ],
    Infographics: [
      {
        category: "RESEARCH",
        title: "Cloud Computing Trends 2025",
        description:
          "Visual breakdown of emerging cloud computing trends and their adoption rates across different industries.",
        image:
          "https://thumbs.dreamstime.com/b/d-rendering-futuristic-robot-technology-development-artificial-intelligence-ai-machine-learning-concept-global-robotic-bionic-180665082.jpg",
      },
      {
        category: "ANALYTICS",
        title: "Data Science Pipeline Explained",
        description:
          "A comprehensive visual guide to understanding the modern data science workflow and its key components.",
        image:
          "https://img.freepik.com/premium-photo/schematic-data-pipeline-background_1046712-822.jpg",
      },
      {
        category: "SECURITY",
        title: "Cybersecurity Best Practices",
        description:
          "Visual guide to implementing robust cybersecurity measures in your organization.",
        image:
          "https://th.bing.com/th/id/OIP.zYLb4CTKT6-NdX425PVG_AHaFL?rs=1&pid=ImgDetMain",
      },
    ],
    Whitepapers: [
      {
        category: "STRATEGY",
        title: "Digital Transformation Roadmap",
        description:
          "A comprehensive guide to planning and executing digital transformation initiatives in enterprise organizations.",
        image:
          "https://quixy.com/wp-content/uploads/2022/05/Roadmap-to-Digital-transformation.png",
      },
      {
        category: "RESEARCH",
        title: "Blockchain in Enterprise: Use Cases and Implementation",
        description:
          "Detailed analysis of blockchain technology applications in enterprise environments with real-world case studies.",
        image:
          "https://dv-website.s3.amazonaws.com/uploads/2022/08/kf_blockchainimplementation_aug22.jpg",
      },
      {
        category: "TECHNICAL",
        title: "Microservices Architecture Design Patterns",
        description:
          "In-depth exploration of microservices architecture patterns and their practical applications in modern software systems.",
        image:
          "https://static-assets.amplication.com/blog/the-role-of-microgateways-in-microservices/hero.png",
      },
    ],
    Videos: [
      {
        category: "TUTORIAL",
        title: "Getting Started with Kubernetes",
        description:
          "Step-by-step video guide to understanding and implementing Kubernetes in your development workflow.",
        image:
          "https://th.bing.com/th/id/OIP.xISx77tuBI3mgYF7th7nOwHaFj?w=1024&h=768&rs=1&pid=ImgDetMain",
      },
      {
        category: "WEBINAR",
        title: "AI Integration Workshop",
        description:
          "Expert-led session on integrating AI capabilities into existing software applications and systems.",
        image:
          "https://th.bing.com/th/id/OIP.nUt7lD4D5KEkGN49lJKdUQHaD5?rs=1&pid=ImgDetMain",
      },
      {
        category: "CASE STUDY",
        title: "Cloud Migration Success Story",
        description:
          "Video presentation of a successful cloud migration project, including challenges faced and solutions implemented.",
        image:
          "https://revdebug.com/wp-content/uploads/2021/02/what-ois-cloud-migration-scaled.jpg",
      },
    ],
  };

  return (
    <div className="w-full mx-auto max-w-full  bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Latest Insights
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto">
              Explore our latest research on cutting-edge tech trends and
              discoveries to stay ahead in this digital-first landscape!
            </p>
          </div>

          {/* Tabs Navigation */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="border-b border-gray-200 w-full">
              <nav className="flex justify-center -mb-px">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`mx-8 py-2 px-8 border-b-2 font-medium text-lg transition-colors duration-200 ${
                      activeTab === tab
                        ? "border-orange-500 text-orange-700"
                        : "border-transparent text-gray-500 hover:text-orange-800"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {insights[activeTab].map((item, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden border-b border-orange-500 group transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-gray-600">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LatestInsights;
