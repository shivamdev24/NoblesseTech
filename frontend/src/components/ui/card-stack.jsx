import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


import CardIcon1 from "../../assets/cardIcon1-icon.png"
import CardIcon2 from "../../assets/cardIcon2-icon.png"
import CardIcon3 from "../../assets/cardIcon3-icon.png"
import CardIcon4 from "../../assets/cardIcon4-icon.png"

import CardImg1 from "../../assets/cardImg1-img.png"
import CardImg2 from "../../assets/cardImg2-img.png"
import CardImg3 from "../../assets/cardImg3-img.png"
import CardImg4 from "../../assets/cardImg4-img.png"





const offerings = [
  {
    title: "Find Ideas",
    description:
      "Discover and generate the best inspirations for your ideas with Figr.",
    src: CardImg1,
    icons: CardIcon1,
    color: "#F0F8FF",
    border: "#EBF6FF",
  },
  {
    title: "Chart out flows",
    description:
      "Create user journeys and map out the screen flows at insane speed with AI.",
    src: CardImg2,
    icons: CardIcon2,
    color: "#FAF5FF",
    border: "#FAF5FF",
  },
  {
    title: "Draft Wireframes",
    description:
      "Witness ideas coming together, where features, ideations, and flows all merge to shape your product.",
    src: CardImg3,
    icons: CardIcon3,
    color: "#FFF1F2",
    border: "#FFF3F4",
  },
  {
    title: "Set Design Systems",
    description:
      "Turn your styles into systems with variables, style guides, and component library all set up instantly.",
    src: CardImg4,
    icons: CardIcon4,
    color: "#FBFFE5",
    border: "#FDFFEF",
  },
];

const OfferingCard = ({
  i,
  title,
  description,
  src,
  color,
  border,
  icons,
  progress,
  range,
  targetScale,
  currentIndex,
  setCurrentIndex,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);
  const {
    ref: inViewRef,
    inView,
    entry,
  } = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      setCurrentIndex(i);
    } else if (currentIndex === i) {
      setCurrentIndex(i - 1);
    }
  }, [inView, entry]);

  return (
    <div
      id={i === 0 ? "offerings" : ""}
      ref={ref}
      className="h-[100vh] flex items-center justify-center sticky top-0 z-10"
    >
      <motion.div
        style={{ scale: cardScale, top: `calc(-5vh + ${i * 50}px)` }}
        className="flex flex-col relative -top-1/4 h-[65%] md:h-[60%] w-[95%] md:w-[70%] transform-origin-top"
        ref={inViewRef}
      >
        <div className="flex flex-col items-center justify-center w-full h-full p-2 border md:flex-row rounded-[20px] gap-2 md:gap-10 bg-white">
          <div
            className="flex flex-col items-start justify-center flex-1 h-full gap-4 rounded-[10px] px-5 py-5"
            style={{ backgroundColor: color, borderColor: border }}
          >
            <div className="w-[20%] md:w-[30%] md:mb-6">
              <img src={icons} alt="icon" />
            </div>
            <div>
              <h2 className="m-0 text-xl text-left md:text-2xl font-literata">
                {title}
              </h2>
            </div>
            <div>
              <p className="text-sm md:text-base font-generalSans text-[#666]">
                {description}
              </p>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                const urls = ["/"];
                window.open(urls[i] || urls[2], "_blank");
              }}
            >
              <button className="btn-explore">Explore</button>
            </div>
          </div>
          <div className="relative flex items-center justify-center flex-1 overflow-hidden rounded-[20px] md:mr-7 mb-5">
            <motion.div className="w-full h-full" style={{ scale }}>
              <img src={src} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


// bg images
// const E = "/assets/graphics-BGgqFDx5.png";
// const q = "/assets/graphicsMobile-DqJDZkYs.png";

const MainComponent = () => {
  const colors = ["#F0F8FF", "#FAF5FF", "#FFF1F2", "#FBFFE5"];
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={ref}
      className="mt-[10vh] transition-all duration-200 ease-in-out z-10"
      style={{
        backgroundColor: currentIndex === -1 ? "" : colors[currentIndex],
      }}
    >
      <div className="content-[''] w-full h-[40vh]" />
      {offerings.map((offering, index) => {
        const targetScale = 1 - (offerings.length - index) * 0.05;
        return (
          <OfferingCard
            key={index}
            i={index}
            {...offering}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        );
      })}
      {/* bg images div  */}
      {/* <div className="sticky bottom-0 z-0 hidden w-full md:block">
        <img src={E} alt="graphic" />
      </div>
      <div className="sticky bottom-0 z-0 w-full md:hidden">
        <img src={q} alt="graphic" />
      </div> */}
    </main>
  );
};

export default MainComponent;
