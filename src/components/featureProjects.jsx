import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

const StatusBadge = ({ status }) => (
  <div className="absolute top-3 left-4 z-50 bg-transparent backdrop-blur-sm px-3 rounded-full">
    <span className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
      <span className="text-white text-sm font-medium">
        {status || "Ongoing"}
      </span>
    </span>
  </div>
);

const BlurImage = ({ height, width, src, className, alt, fill, ...rest }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      className={`transition duration-300 ${
        isLoading ? "blur-sm" : "blur-0"
      } ${className}`}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt || "Background of a beautiful view"}
      style={
        fill
          ? {
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              objectFit: "cover",
            }
          : {}
      }
      {...rest}
    />
  );
};

const Card = ({ card, index, layout = false }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        onCardClose(index);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, index, onCardClose]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl relative"
            >
              <StatusBadge status={card.status} />
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={() => setOpen(true)}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 md:h-96 lg:h-[32rem] w-full overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <StatusBadge status={card.status} />
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

const Carousel = ({ items = [] }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const demoItems = [
    {
      category: "Nature",
      title: "Mountain View",
      status: "In Progress",
      src: "https://i.pinimg.com/736x/9d/80/0f/9d800f4353018e02d8310d057830ebc5.jpg",
      content: <div>Detailed content about the mountain view</div>,
    },
    {
      category: "Urban",
      title: "City Lights",
      status: "In Progress",
      src: "https://i.pinimg.com/736x/b3/50/3e/b3503e08719914ed2180999b9bac8f5d.jpg",
      content: <div>Information about the city scene</div>,
    },
    {
      category: "Technology",
      title: "Digital World",
      status: "Ongoing",
      src: "https://i.pinimg.com/736x/1e/bd/85/1ebd85fd33f98b6e17f85055c2b69032.jpg",
      content: <div>Exploring the digital landscape</div>,
    },
    {
      category: "Technology",
      title: "AI Innovation",
      status: "In Review",
      src: "https://i.pinimg.com/736x/87/89/c0/8789c0c834781599ea59fc123e1f051e.jpg",
      content: <div>Exploring AI innovations</div>,
    },
  ];

  const displayItems = items.length > 0 ? items : demoItems;
  const visibleItems = displayItems.slice(startIndex, startIndex + 3);

  // If we need more items to show, wrap around to the beginning
  if (visibleItems.length < 3) {
    const remainingCount = 3 - visibleItems.length;
    const wrappedItems = displayItems.slice(0, remainingCount);
    visibleItems.push(...wrappedItems);
  }

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % displayItems.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? displayItems.length - 1 : prevIndex - 1
    );
  };

  const handleCardClose = (index) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="max-w-[1300px] mx-auto px-4 p-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between -mt-10 -mb-7 gap-8">
          <h2 className="text-4xl md:text-5xl  lg:text-5xl font-bold text-gray-300 md:max-w-2xl">
            Featured Projects
          </h2>

          <p className="text-lg md:text-[20px] text-gray-400 md:max-w-xl">
            Explore our collection of innovative projects spanning across
            different domains. From breathtaking natural landscapes to
            cutting-edge technology, each card represents a unique journey of
            creativity and excellence.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <div className="relative w-full">
            <div className="flex w-full py-10 md:py-20 overflow-hidden">
              <div className="grid grid-cols-3 gap-4 w-full">
                {visibleItems.map((item, index) => (
                  <motion.div
                    key={`${item.title}-${
                      (startIndex + index) % displayItems.length
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.1 * index,
                        ease: "easeOut",
                      },
                    }}
                    className="rounded-3xl"
                  >
                    <Card
                      card={item}
                      index={(startIndex + index) % displayItems.length}
                      layout={true}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-2 mr-2 -mt-12">
              <button
                className="relative z-40 h-10 w-10 rounded-full bg-orange-500 hover:bg-orange-700 flex items-center justify-center"
                onClick={handlePrev}
              >
                <ArrowLeft className="h-6 w-6 text-white" />
              </button>
              <button
                className="relative z-40 h-10 w-10 rounded-full bg-orange-500 hover:bg-orange-700 flex items-center justify-center"
                onClick={handleNext}
              >
                <ArrowRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
