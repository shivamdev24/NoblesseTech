import Demo from "../assets/imgs/homepaage/demo.jpg";
import Amazon from "../assets/imgs/homepaage/amazon.jpg";
import People from "../assets/imgs/homepaage/people.jpg";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/HeroHighlight";
import {InfiniteMovingCard} from "../components/ui/InfiniteMovingCard"

const cardsCaseStudy = [
  {
    img: Demo,
    location: "Medical Equipment",
    path: "ShelvesTech",
    link: "/",
  },
  {
    img: Demo,
    location: "",
    path: "TruckingTool",
    link: "/",
  },
  {
    img: Demo,
    location: "",
    path: "Hepldesk (Ticketing Tool)",
    link: "/",
  },
  
];

// const ecoSystemCards = [
//   {
//     path: "/",
//     heading:
//       "McKinsey and AWS expand existing collaboration to tackle the next horizon of cloud transformation",
//     img: Amazon,
//   },
//   {
//     path: "/",
//     heading:
//       "McKinsey and AWS expand existing collaboration to tackle the next horizon of cloud transformation",
//     img: Amazon,
//   },
//   {
//     path: "/",
//     heading:
//       "McKinsey and AWS expand existing collaboration to tackle the next horizon of cloud transformation",
//     img: Amazon,
//   },
//   {
//     path: "/",
//     heading:
//       "McKinsey and AWS expand existing collaboration to tackle the next horizon of cloud transformation",
//     img: Amazon,
//   },
//   {
//     path: "/",
//     heading:
//       "McKinsey and AWS expand existing collaboration to tackle the next horizon of cloud transformation",
//     img: Amazon,
//   },
//   {
//     path: "/",
//     heading:
//       "McKinsey and AWS expand existing collaboration to tackle the next horizon of cloud transformation",
//     img: Amazon,
//   },
// ];

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

// const featureCards = [
//   {
//     img: Demo,
//     path: "/",
//     heading: "Horizon: Helping clients scale AI",
//     description: (
//       <p>
//         QuantumBlack Horizon, a first-of-its-kind product suite, helps leaders
//         develop a cohesive, industrialized system for running and scaling AI
//         initiatives.
//       </p>
//     ),
//   },
//   {
//     img: Demo,
//     path: "/",
//     heading: "Horizon: Helping clients scale AI",
//     description: (
//       <p>
//         QuantumBlack Horizon, a first-of-its-kind product suite, helps leaders
//         develop a cohesive, industrialized system for running and scaling AI
//         initiatives.
//       </p>
//     ),
//   },
//   {
//     img: Demo,
//     path: "/",
//     heading: "Horizon: Helping clients scale AI",
//     description: (
//       <p>
//         QuantumBlack Horizon, a first-of-its-kind product suite, helps leaders
//         develop a cohesive, industrialized system for running and scaling AI
//         initiatives.
//       </p>
//     ),
//   },
// ];

// const ourCards = [
//   {
//     img: People,
//     path: "/",
//     meet: "Meet Laszlo",
//     name: "Laszlo Harnoc",
//     location: "Principal engineer ll, Budapest",
//     description: (
//       <p>
//         “Building high-performing engineering teams and engineering cultures is
//         where I thrive. I believe if you focus on people, they can build amazing
//         things.”
//       </p>
//     ),
//   },
//   {
//     img: People,
//     path: "/",
//     meet: "Meet Laszlo",
//     name: "Laszlo Harnoc",
//     location: "Principal engineer ll, Budapest",
//     description: (
//       <p>
//         “Building high-performing engineering teams and engineering cultures is
//         where I thrive. I believe if you focus on people, they can build amazing
//         things.”
//       </p>
//     ),
//   },
//   {
//     img: People,
//     path: "/",
//     meet: "Meet Laszlo",
//     name: "Laszlo Harnoc",
//     location: "Principal engineer ll, Budapest",
//     description: (
//       <p>
//         “Building high-performing engineering teams and engineering cultures is
//         where I thrive. I believe if you focus on people, they can build amazing
//         things.”
//       </p>
//     ),
//   },
// ];





const testimonials = [
  {
    name: "Java",
    svg: "https://www.vectorlogo.zone/logos/java/java-ar21.svg",
  },
  {
    name: "Kotlin",
    svg: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  },
  {
    name: "Swift",
    svg: "https://www.vectorlogo.zone/logos/swift/swift-icon.svg",
  },
  {
    name: "Objective-C",
    svg: "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg",
  },
  {
    name: "Dart",
    svg: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
  },
  {
    name: "JavaScript",
    svg: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  },
  {
    name: "TypeScript",
    svg: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },

  {
    name: "Python",
    svg: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },

  {
    name: "Go",
    svg: "https://www.vectorlogo.zone/logos/golang/golang-official.svg",
  },
  {
    name: "Rust",
    svg: "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg",
  },
  {
    name: "Ruby",
    svg: "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
  },
  {
    name: "PHP",
    svg: "https://www.vectorlogo.zone/logos/php/php-ar21.svg",
  },
  {
    name: "Bash",
    svg: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
  },

  {
    name: "SQL",
    svg: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
  },
  {
    name: "MongoDB",
    svg: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "PostgreSQL",
    svg: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    name: "Julia",
    svg: "https://www.vectorlogo.zone/logos/julialang/julialang-icon.svg",
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
            className=" text-black w-full md:w-[80%]  leading-relaxed lg:leading-snug text-center md:mx-auto "
          >
            <h1 className="text-6xl my-4 text-white">Turning Ideas into</h1>
            <Highlight className="text-white text-lg lg:text-3xl p-2 px-5">
              Creative Digital Solutions
            </Highlight>

            <div className="mt-14">
              <h1 className="text-3xl text-white">
                Key Areas of Our Expertise
              </h1>
              <div className="py-5  gap-4 flex flex-wrap  items-center justify-center">
                <span className="py-3 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500 px-6 border bg-white font-bold  hover:text-white text-center rounded-full">
                  Software Development
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500   text-center px-6 border bg-white font-bold hover:text-white rounded-full">
                  App Development
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500  text-center px-6 border bg-white font-bold hover:text-white rounded-full">
                  Web Development
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500  text-center px-6 border bg-white font-bold hover:text-white rounded-full">
                  Ecommerce Services
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500  text-center px-6 border bg-white font-bold hover:text-white rounded-full">
                  CRM Solutions
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500  text-center px-6 border bg-white font-bold hover:text-white rounded-full">
                  Cloud Solutions
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500  text-center px-6 border bg-white font-bold hover:text-white rounded-full">
                  AI/ML Solutions
                </span>
                <span className="py-2 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300 duration-500  text-center px-6 border bg-white font-bold hover:text-white rounded-full">
                  QA & Software Testing
                </span>
              </div>
              <div className="pt-10">
                <a
                  href="#"
                  className=" bg-blue-400 hover:bg-gradient-to-r font-bold text-white hover:from-indigo-500 hover:to-purple-500 duration-500 p-3 px-6 rounded"
                >
                  Let's talk about your business
                </a>
              </div>
            </div>
          </motion.h1>
        </HeroHighlight>
      </section>

      <section className="py-20 bg-black text-white relative">
        <div className="md:w-[80%] md:mx-auto px-5 sm:px-0 text-center text-3xl md:text-4xl">
          <div className="md:w-[80%] relative z-20 text-center md:mx-auto ">
            We help clients harness the power of data and AI, modernize core
            technology, build new digital businesses, and fuel growth.
          </div>
        </div>

        <div className="absolute top-0  z-1 bg-gradient-to-b from-purple-500  to-blue-500 h-full w-full opacity-40"></div>
      </section>

      <section className="  bg-white py-20 text-black ">
        <div className="md:w-[80%] px-5 flex flex-col items-center z-10 md:mx-auto">
          <p className="text-center py-4">CASE STUDIES</p>
          <h1 className="text-center text-4xl  md:text-6xl py-4">
            Technology’s potential—realized
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-4">
            {cardsCaseStudy.map((items, index) => (
              <div
                key={index}
                className="p-4 hover:shadow-blue-300  hover:bg-white hover:text-black hover:scale-105 duration-500 hover:shadow-lg"
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
      <section className="  bg-gray-100 py-20 ">
        <div className="md:w-[80%] px-5 flex flex-col items-center md:mx-auto">
          <p className="text-center py-4 text-black">WHAT WE OFFER</p>
          <h1 className="text-center text-4xl  text-black md:text-6xl py-4">
            Helping our clients outcompete with technology
          </h1>
          <p className="text-start md:text-center text-black py-4">
            McKinsey Digital brings together teams of experts in technology,
            strategy, and industry, plus a global network of partners to help
            clients deliver value at scale.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8">
            {techCards.map((items, index) => (
              <div
                key={index}
                className="p-4 hover:shadow-blue-100 h-auto   text-black hover:bg-white hover:text-black hover:scale-105 duration-500 hover:shadow-lg"
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

      <section className="bg-black h-auto">
        <div className="w-[80%] mx-auto py-20">
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
              speed="slow"
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

      {/* <section className="  bg-[#121212] py-20  ">
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

      <section className="  bg-[#121212] py-20  ">
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

      <section className="  bg-[#121212] py-20  ">
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
      </section> */}
    </main>
  );
}
