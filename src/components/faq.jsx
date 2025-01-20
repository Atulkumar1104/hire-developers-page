import React from "react";
import { motion } from "framer-motion";


import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordianfaq";
const BulletList = ({ items }) => (
  <ul className="list-none space-y-3">
    {items.map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-center"
      >
        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mr-3"></div>
        <span className="text-white/90">{item}</span>
      </motion.li>
    ))}
  </ul>
);

const FAQSection = () => {
  const faqData = [
    {
      question: "How does your software developer company ensure  security?",
      answer:
        "Our company implements comprehensive security measures throughout the development lifecycle.",
      type: "text",
    },
    {
      question: "What standards, laws, and regulations do you comply with?",
      answer:
        "We adhere to industry-standard regulations and compliance frameworks to ensure quality and security.",
      type: "text",
    },
    {
      question: "What standards, laws, and regulations do you comply with?",
      answer:
        "We adhere to industry-standard regulations and compliance frameworks to ensure quality and security.",
      type: "text",
    },
    {
      question: "What benefits do you get as a result of our experience?",
      answer: [
        "Deep industry expertise",
        "Proven methodologies",
        "Faster development cycles",
        "Better quality solutions",
      ],
      type: "list",
    },
    {
      question: "What expertise does your development software company have?",
      answer: [
        "Cloud and DevOps",
        "Internet of Things (IoT)",
        "Cybersecurity",
        "Data science",
        "Machine learning (ML) and artificial intelligence (AI)",
      ],
      type: "list",
      introduction: "Our technical expertise includes:",
    },
    {
      question: "What is your approach to project management?",
      answer:
        "We use Agile methodologies to ensure flexibility and continuous improvement throughout the project lifecycle.",
      type: "text",
    },
    {
      question: "How do you handle data privacy?",
      answer:
        "We implement strict data privacy policies and comply with GDPR and other relevant regulations.",
      type: "text",
    },
    {
      question: "What technologies do you specialize in?",
      answer: [
        "JavaScript (React, Node.js)",
        "Python",
        "Java",
        "Cloud platforms (AWS, Azure, GCP)",
      ],
      type: "list",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance services to ensure your software remains up-to-date and secure.",
      type: "text",
    },
    {
      question: "Can you work with existing systems?",
      answer:
        "Absolutely, we can integrate with your existing systems and enhance them with our solutions.",
      type: "text",
    },
  ];

  const renderAnswer = (item) => {
    if (item.type === "list") {
      return (
        <div className="space-y-4">
          {item.introduction && (
            <p className="text-white/90">{item.introduction}</p>
          )}
          <BulletList items={item.answer} />
        </div>
      );
    }
    return <p className="text-white/90">{item.answer}</p>;
  };

  const half = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, half);
  const rightColumn = faqData.slice(half);

  return (
    <div className="relative mx-auto max-w-full bg-gradient-to-b from-gray-900 to-black  bg-[#1c1e24] py-12">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Find answers to common questions about our software development
            services and expertise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-2">
              {leftColumn.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <span className="text-left text-white/90 group-hover:text-orange-400 transition-colors">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    {renderAnswer(item)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-2">
              {rightColumn.map((item, index) => (
                <AccordionItem
                  key={index + half}
                  value={`item-${index + half}`}
                  className="border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <span className="text-left text-white/90 group-hover:text-orange-400 transition-colors">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    {renderAnswer(item)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
