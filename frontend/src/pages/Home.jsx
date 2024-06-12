import Demo from "../assets/imgs/homepaage/demo.jpg";
import Amazon from "../assets/imgs/homepaage/amazon.jpg";
import People from "../assets/imgs/homepaage/people.jpg";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/HeroHighlight";
import {InfiniteMovingCard} from "../components/ui/InfiniteMovingCard"

const cardsCaseStudy = [
  {
    img: Demo,
    location: "Banking, Europe",
    path: "Banking on innovation: How ING uses generative AI to put people first",
    link: "/",
  },
  {
    img: Demo,
    location: "Banking, Europe",
    path: "Banking on innovation: How ING uses generative AI to put people first",
    link: "/",
  },
  {
    img: Demo,
    location: "Banking, Europe",
    path: "Banking on innovation: How ING uses generative AI to put people first",
    link: "/",
  },
  {
    img: Demo,
    location: "Banking, Europe",
    path: "Banking on innovation: How ING uses generative AI to put people first",
    link: "/",
  },
  {
    img: Demo,
    location: "Banking, Europe",
    path: "Banking on innovation: How ING uses generative AI to put people first",
    link: "/",
  },
  {
    img: Demo,
    location: "Banking, Europe",
    path: "Banking on innovation: How ING uses generative AI to put people first",
    link: "/",
  },
];

const ecoSystemCards = [
  {
    path: "/",
    heading:
      "McKinsey and AWS expand existing collaboration to tackle the next horizon of cloud transformation",
    img: Amazon,
  },
  {
    path: "/",
    heading:
      "McKinsey and AWS expand existing collaboration to tackle the next horizon of cloud transformation",
    img: Amazon,
  },
  {
    path: "/",
    heading:
      "McKinsey and AWS expand existing collaboration to tackle the next horizon of cloud transformation",
    img: Amazon,
  },
  {
    path: "/",
    heading:
      "McKinsey and AWS expand existing collaboration to tackle the next horizon of cloud transformation",
    img: Amazon,
  },
  {
    path: "/",
    heading:
      "McKinsey and AWS expand existing collaboration to tackle the next horizon of cloud transformation",
    img: Amazon,
  },
  {
    path: "/",
    heading:
      "McKinsey and AWS expand existing collaboration to tackle the next horizon of cloud transformation",
    img: Amazon,
  },
];

const techCards = [
  {
    path: "/",
    heading: "Unlock the power of AI",
    description: (
      <p>
        QuantumBlack, AI by McKinsey helps organizations transform faster,
        innovate smarter, and anticipate the future, unlocking the power of AI
        to <b>reinvent themselves from the ground up.</b>
      </p>
    ),
  },
  {
    path: "/",
    heading: "Unlock the power of AI",
    description: (
      <p>
        QuantumBlack, AI by McKinsey helps organizations transform faster,
        innovate smarter, and anticipate the future, unlocking the power of AI
        to <b>reinvent themselves from the ground up.</b>
      </p>
    ),
  },
  {
    path: "/",
    heading: "Unlock the power of AI",
    description: (
      <p>
        QuantumBlack, AI by McKinsey helps organizations transform faster,
        innovate smarter, and anticipate the future, unlocking the power of AI
        to <b>reinvent themselves from the ground up.</b>
      </p>
    ),
  },
  {
    path: "/",
    heading: "Unlock the power of AI",
    description: (
      <p>
        QuantumBlack, AI by McKinsey helps organizations transform faster,
        innovate smarter, and anticipate the future, unlocking the power of AI
        to <b>reinvent themselves from the ground up.</b>
      </p>
    ),
  },
];

const featureCards = [
  {
    img: Demo,
    path: "/",
    heading: "Horizon: Helping clients scale AI",
    description: (
      <p>
        QuantumBlack Horizon, a first-of-its-kind product suite, helps leaders
        develop a cohesive, industrialized system for running and scaling AI
        initiatives.
      </p>
    ),
  },
  {
    img: Demo,
    path: "/",
    heading: "Horizon: Helping clients scale AI",
    description: (
      <p>
        QuantumBlack Horizon, a first-of-its-kind product suite, helps leaders
        develop a cohesive, industrialized system for running and scaling AI
        initiatives.
      </p>
    ),
  },
  {
    img: Demo,
    path: "/",
    heading: "Horizon: Helping clients scale AI",
    description: (
      <p>
        QuantumBlack Horizon, a first-of-its-kind product suite, helps leaders
        develop a cohesive, industrialized system for running and scaling AI
        initiatives.
      </p>
    ),
  },
];

const ourCards = [
  {
    img: People,
    path: "/",
    meet: "Meet Laszlo",
    name: "Laszlo Harnoc",
    location: "Principal engineer ll, Budapest",
    description: (
      <p>
        “Building high-performing engineering teams and engineering cultures is
        where I thrive. I believe if you focus on people, they can build amazing
        things.”
      </p>
    ),
  },
  {
    img: People,
    path: "/",
    meet: "Meet Laszlo",
    name: "Laszlo Harnoc",
    location: "Principal engineer ll, Budapest",
    description: (
      <p>
        “Building high-performing engineering teams and engineering cultures is
        where I thrive. I believe if you focus on people, they can build amazing
        things.”
      </p>
    ),
  },
  {
    img: People,
    path: "/",
    meet: "Meet Laszlo",
    name: "Laszlo Harnoc",
    location: "Principal engineer ll, Budapest",
    description: (
      <p>
        “Building high-performing engineering teams and engineering cultures is
        where I thrive. I believe if you focus on people, they can build amazing
        things.”
      </p>
    ),
  },
];




const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default function Home() {
  return (
    <main>
      <section>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className=" text-white w-full md:w-[80%]  leading-relaxed lg:leading-snug text-center md:mx-auto "
          >
            <h1 className="text-6xl my-4">Turning Ideas into</h1>
            <Highlight className="text-white text-lg lg:text-3xl p-2 px-5">
              Creative Digital Solutions
            </Highlight>

            <div className="mt-14">
              <h1 className="text-3xl">Key Areas of Our Expertise</h1>
              <div className="py-5  gap-4 flex flex-wrap  items-center justify-center">
                <span className="py-3 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500 px-6 border bg-black   text-center rounded-full">
                  Software Development
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500   text-center px-6 border bg-black rounded-full">
                  App Development
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500  text-center px-6 border bg-black rounded-full">
                  Web Development
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500  text-center px-6 border bg-black rounded-full">
                  Ecommerce Services
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500  text-center px-6 border bg-black rounded-full">
                  CRM Solutions
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500  text-center px-6 border bg-black rounded-full">
                  Cloud Solutions
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500  text-center px-6 border bg-black rounded-full">
                  AI/ML Solutions
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500  text-center px-6 border bg-black rounded-full">
                  QA & Software Testing
                </span>
              </div>
              <div className="pt-10">
                <a
                  href="#"
                  className=" bg-blue-400 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-800 p-3 rounded"
                >
                  Let's Talk about your Business
                </a>
              </div>
            </div>
          </motion.h1>
        </HeroHighlight>
      </section>

      <section className="py-20 bg-[#000000] text-white relative">
        <div className="md:w-[80%] md:mx-auto px-5 sm:px-0 text-center text-3xl md:text-4xl">
          <div className="md:w-[80%] text-center md:mx-auto ">
            We help clients harness the power of data and AI, modernize core
            technology, build new digital businesses, and fuel growth.
          </div>
        </div>

        <div className="absolute top-0  bg-gradient-to-t from-blue-900  to-transparen h-full w-full opacity-40"></div>
      </section>

      <section className="py-10 bg-[#000000] text-white ">
        <div className="md:w-[80%] md:mx-auto px-5 md:px-0 text-center text-lg ">
          <div className="md:w-[60%] text-start md:mx-auto ">
            Technology is the key to outcompete. It only achieves its
            transformative value when clear strategy, culture, and capabilities
            meet execution and delivery.
          </div>
          <div className="md:w-[60%] text-start mt-6 mx-auto ">
            We bring strategy, tech implementation, and deep domain expertise to
            enable transformation.{" "}
            <b>With McKinsey, it&apos;s never just tech.</b>
          </div>
        </div>
      </section>

      <section className="  bg-[#000000] text-white ">
        <div className="relative py-[4rem]">
          <div className="md:w-[80%] w-full px-5 md:px-0  z-32  md:mx-auto text-center text-lg">
            <div className="flex relative items-center flex-col md:flex-wrap lg:flex-row gap-y-32 md:gap-y-5 sm:py-[5rem]  justify-evenly gap-8">
              <div className=" w-96 relative">
                <div className="z-20 relative">
                  <h3 className="text-8xl">500+</h3>
                  <p>clients we build and deploy tech for each year</p>
                </div>
                <div className="absolute bottom-0 h-full w-96 bg-gradient-to-t from-cyan-900 blur  to-transparent"></div>
              </div>
              <div className=" w-96 relative">
                <div className="z-20 relative">
                  <h3 className="text-8xl">7K</h3>
                  <p>
                    tech experts, engineers, and data scientists building
                    business-led, tech-enabled solutions
                  </p>
                </div>
                <div className="absolute bottom-0 h-full w-96 bg-gradient-to-t from-green-900 blur  to-transparent"></div>
              </div>
              <div className=" w-96 relative">
                <div className="z-20 relative">
                  <h3 className="text-8xl">55%</h3>
                  <p>of our work tech-enables client organizations</p>
                </div>
                <div className="absolute bottom-0 h-full w-96 bg-gradient-to-t from-blue-900 blur  to-transparent"></div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 ">
              <a
                href="#"
                className=" bg-white text-black flex items-center gap-3 px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="  bg-[#000000] py-20 text-white ">
        <div className="md:w-[80%] px-5 flex flex-col items-center z-10 md:mx-auto">
          <p className="text-center py-4">CASE STUDIES</p>
          <h1 className="text-center text-4xl  md:text-6xl py-4">
            Technology’s potential—realized
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-4">
            {cardsCaseStudy.map((items, index) => (
              <div
                key={index}
                className="p-4 hover:shadow-gray-800  hover:bg-white hover:text-black hover:scale-105 duration-500 hover:shadow-lg"
              >
                <img src={items.img} alt="" />

                <div className="mt-3">
                  <p className="italic"> {items.location} </p>
                  <a
                    href="#"
                    className="hover:text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {items.path}{" "}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="#"
              className=" border px-8 py-3 hover:bg-blue-500 hover:text-white duration-300 hover:border-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all case studies
            </a>
          </div>
        </div>
      </section>
      <section className="  bg-[#000000] py-20 bg-gradient-to-r from-cyan-900 to-transparent ">
        <div className="md:w-[80%] px-5 flex flex-col items-center md:mx-auto">
          <p className="text-center py-4 text-white">WHAT WE OFFER</p>
          <h1 className="text-center text-4xl  text-white md:text-6xl py-4">
            Helping our clients outcompete with technology
          </h1>
          <p className="text-start md:text-center text-white py-4">
            McKinsey Digital brings together teams of experts in technology,
            strategy, and industry, plus a global network of partners to help
            clients deliver value at scale.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8">
            {techCards.map((items, index) => (
              <div
                key={index}
                className="p-4 hover:shadow-gray-800 h-auto   text-white hover:bg-white hover:text-black hover:scale-105 duration-500 hover:shadow-lg"
              >
                <a
                  href={items.path}
                  className="flex gap-1 hover:text-blue-500 hover:underline text-lg"
                >
                  {" "}
                  <span>{items.heading}</span>{" "}
                  <span className="text-blue-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                </a>

                <div className="mt-3">
                  <p className="italic "> {items.description} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black h-[30rem]">
        <div className="w-[80%] mx-auto pt-20">
          <div className="my-4">
            <p className="text-center py-2 text-white">TECHNOLOGIES</p>
            <h1 className="text-center text-3xl  text-white md:text-5xl py-4">
              Our Technology Stack and Platforms
            </h1>
            <p className="text-center py-1 text-white">
              Over 1000 experts with 22+ Years of experience in 50+ cutting-edge
              technologies.
            </p>
          </div>
          <div className="h-full  flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCard
              items={testimonials}
              direction="right"
              speed="fast"
            />
            <InfiniteMovingCard
              items={testimonials}
              direction="left"
              speed="slow"
            />
            <InfiniteMovingCard
              items={testimonials}
              direction="right"
              speed="normal"
            />
          </div>
        </div>
      </section>

      <section className="  bg-[#000000] py-20  ">
        <div className="md:w-[80%] px-5 flex flex-col items-center md:mx-auto">
          <p className="text-center py-4 text-white">OUR ECOSYSTEM</p>
          <h1 className="text-center text-4xl  text-white md:text-6xl py-4">
            Bringing the best of the tech industry to every client
          </h1>
          <a className="text-white hover:bg-white hover:text-black flex flex-col md:flex-row p-4 w-full duration-500 md:w-[90%] md:mx-auto ">
            <img src={Demo} className="md:w-56" alt="" />
            <div className="flex flex-col mt-5 gap-4 ml-4 ">
              <a
                href="#"
                target="_blank"
                className="flex gap-1 text-xl font-bold"
                rel="noopener noreferrer"
              >
                <span>
                  McKinsey’s ecosystem of strategic alliances brings the power
                  of generative AI to clients
                </span>
                <span className="text-blue-500 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </a>
              <p>
                <span className="italic">April 2, 2024</span> - QuantumBlack, AI
                by McKinsey, has built a thriving ecosystem of strategic
                alliances that deliver the complex capabilities necessary for
                generative AI implementations.
              </p>
            </div>
          </a>
          <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {ecoSystemCards.map((items, index) => (
              <div
                key={index}
                className="p-4 hover:shadow-gray-800  text-white hover:bg-white hover:text-black hover:scale-105 duration-500 hover:shadow-lg"
              >
                <img src={items.img} alt="" />
                <a
                  href={items.path}
                  className="flex gap-1 hover:text-blue-500 hover:underline text-lg "
                >
                  {" "}
                  <span>{items.heading}</span>{" "}
                  <span className="text-blue-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                </a>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="#"
              className=" border px-8 py-3 hover:bg-blue-500 text-white hover:text-white duration-300 hover:border-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all alliances & acquisitions
            </a>
          </div>
        </div>
      </section>

      <section className="  bg-[#000000] py-20  ">
        <div className="md:w-[80%] px-5 md:mx-auto">
          <p className="text-center py-4 text-white">FEATURED TECH SOLUTIONS</p>
          <h1 className="text-center text-4xl  text-white md:text-6xl py-4">
            Our proprietary assets help our clients{" "}
            <b>scale and capture value from</b>
            tech.
          </h1>

          <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featureCards.map((items, index) => (
              <div
                key={index}
                className="p-4 hover:shadow-gray-800  text-white hover:bg-white hover:text-black hover:scale-105 duration-500 hover:shadow-lg"
              >
                <img src={items.img} className="mb-4" alt="" />
                <a
                  href={items.path}
                  className="flex gap-1 font-semibold hover:text-blue-500 hover:underline text-lg"
                >
                  {" "}
                  <span>{items.heading}</span>{" "}
                  <span className="text-blue-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                </a>
                <p>{items.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="  bg-[#000000] py-20  ">
        <div className="md:w-[80%] px-5 md:mx-auto">
          <p className="text-center py-4 text-white">OUR PEOPLE</p>
          <h1 className="text-center text-4xl  text-white md:text-6xl py-4">
            A community of technologists tech.
          </h1>
          <p className="text-center py-4 text-white">
            Our McKinsey Digital colleagues combine deep domain expertise with
            big picture strategy and cutting-edge AI and tech delivery
            capabilities.{" "}
            <b>
              {" "}
              We partner with clients to create value at every step of their
              tech evolution.
            </b>
          </p>

          <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {ourCards.map((items, index) => (
              <div
                key={index}
                className="p-4 hover:shadow-gray-800  text-white hover:bg-white hover:text-black hover:scale-105 duration-500 hover:shadow-lg"
              >
                <img src={items.img} className="mb-4" alt="" />
                <p className="py-4 text-lg">{items.description}</p>
                <p className="">{items.name}</p>
                <p className="italic text-sm">{items.location}</p>

                <a href={items.path} className="flex py-3 gap-1">
                  {" "}
                  <span>{items.meet}</span>{" "}
                  <span className="text-blue-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 h-56">
        <div className="md:w-[80%] px-5 md:mx-auto">
          <div className="flex flex-col md:flex-row md:items-center py-6 border-b  justify-between ">
            <div>
              <p className="text-3xl sm:text-4xl text-white">
                Connect with NoblesseTech
              </p>
            </div>
            <div>
              <a
                href="#"
                className="flex w-40 text-center justify-start md:justify-center hover:bg-blue-500 hover:text-white duration-500 text-gray-900 mt-6 px-4 py-2 gap-3 bg-white"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <span>Contact Us</span>
              </a>
            </div>
          </div>
          <div className="flex text-white gap-4 py-10">
            <a href="#">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>{" "}
            </a>

            <a href="#">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </span>
            </a>
            <a href="#">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>
            <a href="#">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>
            <a href="#">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
