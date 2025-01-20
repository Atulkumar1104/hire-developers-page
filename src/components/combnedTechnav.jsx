import React, { useState } from "react";
import {
  Layout,
  Database,
  Smartphone,
  Cloud,
  BrainCircuit,
  FileType,
  FileCode,
  Code2,
  Atom,
  MonitorSmartphone,
  Share2,
  Palette,
  BookOpen,
  FileJson,
  Scissors,
  Package,
  Box,
  Coffee,
  Zap,
  RefreshCw,
  Settings,
  Flame,
  Network,
  LineChart,
  Binary,
  MessageSquare,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvasEffect";

// Define tech categories with their cards and descriptions
const techCategories = {
  frontend: {
    icon: Layout,
    title: "Frontend & Backend",
    heading: "Create Stunning User Interfaces",
    description:
      "Master the art of building responsive, interactive web applications using modern frontend technologies.",
    cards: [
      {
        title: "jQuery",
        icon: <FileType className="h-10 w-10" />,
        bgColor: "bg-orange-600",
        colors: [[255, 99, 71]],
      },
      {
        title: "Bootstrap",
        icon: <Palette className="h-10 w-10" />,
        bgColor: "bg-blue-600",
        colors: [[0, 120, 215]],
      },
      {
        title: "React JS",
        icon: <Atom className="h-10 w-10" />,
        bgColor: "bg-sky-500",
        colors: [[97, 218, 251]],
      },
      {
        title: "Angular JS",
        icon: <Atom className="h-10 w-10" />,
        bgColor: "bg-sky-500",
        colors: [[97, 218, 251]],
      },
      {
        title: "Vue JS",
        icon: <MonitorSmartphone className="h-10 w-10" />,
        bgColor: "bg-emerald-500",
        colors: [[66, 184, 131]],
      },
      {
        title: "Next JS",
        icon: <MonitorSmartphone className="h-10 w-10" />,
        bgColor: "bg-emerald-500",
        colors: [[66, 184, 131]],
      },
      {
        title: "Node JS",
        icon: <MonitorSmartphone className="h-10 w-10" />,
        bgColor: "bg-emerald-500",
        colors: [[66, 184, 131]],
      },
      {
        title: "Express JS",
        icon: <MonitorSmartphone className="h-10 w-10" />,
        bgColor: "bg-emerald-500",
        colors: [[66, 184, 131]],
      },
      {
        title: "PHP",
        icon: <MonitorSmartphone className="h-10 w-10" />,
        bgColor: "bg-emerald-500",
        colors: [[66, 184, 131]],
      },
      {
        title: "Ruby on Rails",
        icon: <MonitorSmartphone className="h-10 w-10" />,
        bgColor: "bg-emerald-500",
        colors: [[66, 184, 131]],
      },
      {
        title: "Java",
        icon: <MonitorSmartphone className="h-10 w-10" />,
        bgColor: "bg-emerald-500",
        colors: [[66, 184, 131]],
      },
    ],
  },
  backend: {
    icon: Database,
    title: "State Management & Bundlers",
    heading: "Power Your Applications",
    description:
      "Build robust server-side applications with scalable architectures and efficient data management systems.",
    cards: [
      {
        title: "Node.js",
        icon: <FileCode className="h-10 w-10" />,
        bgColor: "bg-green-600",
        colors: [[48, 128, 20]],
      },
      {
        title: "Python",
        icon: <Code2 className="h-10 w-10" />,
        bgColor: "bg-blue-500",
        colors: [[48, 105, 152]],
      },
      {
        title: "Java",
        icon: <Coffee className="h-10 w-10" />,
        bgColor: "bg-red-700",
        colors: [[183, 73, 73]],
      },
      {
        title: "PostgreSQL",
        icon: <Database className="h-10 w-10" />,
        bgColor: "bg-blue-600",
        colors: [[51, 103, 145]],
      },
      {
        title: "MongoDB",
        icon: <Database className="h-10 w-10" />,
        bgColor: "bg-green-700",
        colors: [[67, 133, 61]],
      },
    ],
  },
  mobile: {
    icon: Smartphone,
    title: "Databases & Hosting",
    heading: "Create Native Mobile Experiences",
    description:
      "Develop engaging mobile applications for iOS and Android platforms using cutting-edge frameworks and tools.",
    cards: [
      {
        title: "Flutter",
        icon: <MonitorSmartphone className="h-10 w-10" />,
        bgColor: "bg-blue-400",
        colors: [[69, 182, 245]],
      },
      {
        title: "Swift",
        icon: <Code2 className="h-10 w-10" />,
        bgColor: "bg-orange-500",
        colors: [[255, 122, 0]],
      },
      {
        title: "Kotlin",
        icon: <FileCode className="h-10 w-10" />,
        bgColor: "bg-purple-600",
        colors: [[143, 75, 222]],
      },
      {
        title: "iOS",
        icon: <Smartphone className="h-10 w-10" />,
        bgColor: "bg-gray-800",
        colors: [[51, 51, 51]],
      },
      {
        title: "Ionic",
        icon: <Zap className="h-10 w-10" />,
        bgColor: "bg-blue-600",
        colors: [[58, 129, 247]],
      },
    ],
  },
  cloud: {
    icon: Cloud,
    title: "Server & Orchestration",
    heading: "Scale Your Infrastructure",
    description:
      "Harness the power of cloud computing to build scalable, reliable, and cost-effective solutions for modern applications.",
    cards: [
      {
        title: "AWS",
        icon: <Cloud className="h-10 w-10" />,
        bgColor: "bg-orange-600",
        colors: [[255, 153, 0]],
      },
      {
        title: "Azure",
        icon: <Cloud className="h-10 w-10" />,
        bgColor: "bg-blue-600",
        colors: [[0, 120, 212]],
      },
      {
        title: "Kubernetes",
        icon: <Box className="h-10 w-10" />,
        bgColor: "bg-blue-600",
        colors: [[51, 126, 194]],
      },
      {
        title: "CI/CD",
        icon: <RefreshCw className="h-10 w-10" />,
        bgColor: "bg-green-600",
        colors: [[72, 175, 87]],
      },
      {
        title: "DevOps",
        icon: <Settings className="h-10 w-10" />,
        bgColor: "bg-purple-600",
        colors: [[145, 85, 253]],
      },
    ],
  },
  ai: {
    icon: BrainCircuit,
    title: "Testing Frameworks & UI",
    heading: "Explore Artificial Intelligence",
    description:
      "Dive into the world of artificial intelligence and machine learning with powerful frameworks and innovative solutions.",
    cards: [
      {
        title: "TensorFlow",
        icon: <BrainCircuit className="h-10 w-10" />,
        bgColor: "bg-orange-500",
        colors: [[255, 138, 61]],
      },
      {
        title: "PyTorch",
        icon: <Flame className="h-10 w-10" />,
        bgColor: "bg-red-600",
        colors: [[238, 68, 68]],
      },
      {
        title: "NLP",
        icon: <MessageSquare className="h-10 w-10" />,
        bgColor: "bg-indigo-600",
        colors: [[99, 102, 241]],
      },
      {
        title: "Computer Vision",
        icon: <BrainCircuit className="h-10 w-10" />,
        bgColor: "bg-purple-600",
        colors: [[147, 51, 234]],
      },
      {
        title: "Deep Learning",
        icon: <Network className="h-10 w-10" />,
        bgColor: "bg-blue-600",
        colors: [[59, 130, 246]],
      },
    ],
  },
  ui: {
    icon: BrainCircuit,
    title: "Testing Platform & Reporting",
    heading: "Explore Artificial Intelligence",
    description:
      "Dive into the world of artificial intelligence and machine learning with powerful frameworks and innovative solutions.",
    cards: [
      {
        title: "TensorFlow",
        icon: <BrainCircuit className="h-10 w-10" />,
        bgColor: "bg-orange-500",
        colors: [[255, 138, 61]],
      },
      {
        title: "PyTorch",
        icon: <Flame className="h-10 w-10" />,
        bgColor: "bg-red-600",
        colors: [[238, 68, 68]],
      },
      {
        title: "NLP",
        icon: <MessageSquare className="h-10 w-10" />,
        bgColor: "bg-indigo-600",
        colors: [[99, 102, 241]],
      },
      {
        title: "Computer Vision",
        icon: <BrainCircuit className="h-10 w-10" />,
        bgColor: "bg-purple-600",
        colors: [[147, 51, 234]],
      },
      {
        title: "Deep Learning",
        icon: <Network className="h-10 w-10" />,
        bgColor: "bg-blue-600",
        colors: [[59, 130, 246]],
      },
    ],
  },
  ki: {
    icon: BrainCircuit,
    title: "Version Control & IDE",
    heading: "Explore Artificial Intelligence",
    description:
      "Dive into the world of artificial intelligence and machine learning with powerful frameworks and innovative solutions.",
    cards: [
      {
        title: "TensorFlow",
        icon: <BrainCircuit className="h-10 w-10" />,
        bgColor: "bg-orange-500",
        colors: [[255, 138, 61]],
      },
      {
        title: "PyTorch",
        icon: <Flame className="h-10 w-10" />,
        bgColor: "bg-red-600",
        colors: [[238, 68, 68]],
      },
      {
        title: "NLP",
        icon: <MessageSquare className="h-10 w-10" />,
        bgColor: "bg-indigo-600",
        colors: [[99, 102, 241]],
      },
      {
        title: "Computer Vision",
        icon: <BrainCircuit className="h-10 w-10" />,
        bgColor: "bg-purple-600",
        colors: [[147, 51, 234]],
      },
      {
        title: "Deep Learning",
        icon: <Network className="h-10 w-10" />,
        bgColor: "bg-blue-600",
        colors: [[59, 130, 246]],
      },
    ],
  },
  Ai: {
    icon: BrainCircuit,
    title: "Operating System & AI ",
    heading: "Explore Artificial Intelligence",
    description:
      "Dive into the world of artificial intelligence and machine learning with powerful frameworks and innovative solutions.",
    cards: [
      {
        title: "TensorFlow",
        icon: <BrainCircuit className="h-10 w-10" />,
        bgColor: "bg-orange-500",
        colors: [[255, 138, 61]],
      },
      {
        title: "PyTorch",
        icon: <Flame className="h-10 w-10" />,
        bgColor: "bg-red-600",
        colors: [[238, 68, 68]],
      },
      {
        title: "NLP",
        icon: <MessageSquare className="h-10 w-10" />,
        bgColor: "bg-indigo-600",
        colors: [[99, 102, 241]],
      },
      {
        title: "Computer Vision",
        icon: <BrainCircuit className="h-10 w-10" />,
        bgColor: "bg-purple-600",
        colors: [[147, 51, 234]],
      },
      {
        title: "Deep Learning",
        icon: <Network className="h-10 w-10" />,
        bgColor: "bg-blue-600",
        colors: [[59, 130, 246]],
      },
    ],
  },
  ci: {
    icon: BrainCircuit,
    title: "Project Management & Communications",
    heading: "Explore Artificial Intelligence",
    description:
      "Dive into the world of artificial intelligence and machine learning with powerful frameworks and innovative solutions.",
    cards: [
      {
        title: "TensorFlow",
        icon: <BrainCircuit className="h-10 w-10" />,
        bgColor: "bg-orange-500",
        colors: [[255, 138, 61]],
      },
      {
        title: "PyTorch",
        icon: <Flame className="h-10 w-10" />,
        bgColor: "bg-red-600",
        colors: [[238, 68, 68]],
      },
      {
        title: "NLP",
        icon: <MessageSquare className="h-10 w-10" />,
        bgColor: "bg-indigo-600",
        colors: [[99, 102, 241]],
      },
      {
        title: "Computer Vision",
        icon: <BrainCircuit className="h-10 w-10" />,
        bgColor: "bg-purple-600",
        colors: [[147, 51, 234]],
      },
      {
        title: "Deep Learning",
        icon: <Network className="h-10 w-10" />,
        bgColor: "bg-blue-600",
        colors: [[59, 130, 246]],
      },
    ],
  },
};

const Card = ({ title, icon, colors, bgColor }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-[calc(20%-1rem)] h-32 p-4 relative"
    >
      <CornerIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-orange-500" />
      <CornerIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-orange-500" />
      <CornerIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-orange-500" />
      <CornerIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-orange-500" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName={bgColor}
              colors={[colors]}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center mt-10 text-white group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const CornerIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default function CombinedTechNav() {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  return (
    <div className="flex flex-col p-24 bg-gradient-to-b from-black to-gray-900 ">
      {/* New Heading Section */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl max-w-5xl mx-auto font-bold text-white mb-4">
          Our Next.js Developers Specialize In
        </h1>
        <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
          This section showcases the breadth of your team's expertise.
        </p>
      </div>
      <div className="flex w-full h-[500PX] gap-4">
        {/* Side Navigation Bar */}
        <nav className="w-72 shadow-lg p-4 rounded-xl bg-gradient-to-b from-gray-800 to-gray-950 h-full overflow-y-auto custom-scrollbar">
          <ul className="space-y-2">
            {Object.entries(techCategories).map(([key, category]) => (
              <li key={key}>
                <button
                  onClick={() => setSelectedCategory(key)}
                  className={`flex items-center gap-3 w-full text-white p-3 rounded-lg transition-all duration-200 ${
                    selectedCategory === key
                      ? "font-bold text-orange-500 bg-gradient-to-r from-orange-500/30 to-transparent"
                      : "hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-transparent hover:text-orange-500"
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span className="text-sm font-medium text-left">{category.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tech Cards Grid with Header */}
        <div className="flex-1 overflow-y-auto rounded-xl bg-gradient-to-b from-gray-800 to-gray-950 bg-red-500">
          <div className="px-8 pt-8 pb-6 max-w-6xl mx-auto">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl mt-0 font-bold text-left text-white mb-3">
                {techCategories[selectedCategory].heading}
              </h2>
              <p className="text-white text-left text-base mx-auto">
                {techCategories[selectedCategory].description}
              </p>
            </motion.div>
          </div>
          <div className="flex flex-wrap items-start justify-between mt-5 w-full gap-5 mx-auto px-8">
            {techCategories[selectedCategory].cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                icon={card.icon}
                colors={card.colors}
                bgColor={card.bgColor}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        * {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }

        *::-webkit-scrollbar {
          display: none !important;
        }

        .custom-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }

        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
