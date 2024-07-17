import ShelveshTech from "../assets/imgs/shelvesh2.png";
import Skycandy from "../assets/imgs/skycandy.png";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/HeroHighlight";
import { InfiniteMovingCard } from "../components/ui/InfiniteMovingCard";
import { Link } from "react-router-dom";

const cardsCaseStudy = [
  {
    img: ShelveshTech,
    location: "",
    path: "Sheveshtech",
    link: "/",
  },
  {
    img: Skycandy,
    location: "",
    path: "Skycandy",
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
    heading: "Customized Solutions for your business needs",
    img: "https://img.freepik.com/free-vector/innovation-concept-illustration_114360-5768.jpg?size=626&ext=jpg&ga=GA1.1.635363915.1718627588&semt=ais_user",
  },
  {
    path: "/",
    heading: "Seamless Integration with Your Existing Systems",
    img: "https://img.freepik.com/free-vector/web-programming-analytics-graph-flat-style-vector-illustration_1284-42939.jpg?t=st=1718719554~exp=1718723154~hmac=322130f22c0021784e2c7f1e601377386df79c068668af1c0784ab8981a66fa4&w=740",
  },
  {
    path: "/",
    heading: "Cutting-Edge Technologies",
    img: "https://img.freepik.com/free-vector/flat-hand-drawn-people-analyzing-growth-chart-illustration_23-2148859389.jpg?t=st=1718719673~exp=1718723273~hmac=6aeedd269bfeb679bfa4dada8f608ce8f62db7c8cb59b6320693446f55be7b25&w=900",
  },
  {
    path: "/",
    heading: "Cross-Platform Development",
    img: "https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?t=st=1718719727~exp=1718723327~hmac=23d098e9b34761b4020255a85cc8c8e2068ef765795e5bf36e944928bf16ec50&w=740",
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
            <h2 className="text-6xl my-4 text-white">Turning Ideas into</h2>
            <Highlight className="text-white text-lg lg:text-3xl p-2 px-5">
              Creative Digital Solutions
            </Highlight>

            <div className="mt-14">
              <h2 className="text-3xl text-white">
                Key Areas of Our Expertise
              </h2>
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
                <Link
                  to="contact"
                  className=" bg-blue-400 hover:bg-gradient-to-r font-bold text-white hover:from-indigo-500 hover:to-purple-500 duration-500 p-3 px-6 rounded"
                >
                  Let's talk about your business
                </Link>
              </div>
            </div>
          </motion.h1>
        </HeroHighlight>
      </section>

      <section id="section2" className="py-20 bg-black text-white relative">
        <div className="md:w-[90%] md:mx-auto px-5 sm:px-0 text-center ">
          <h1 className="md:w-[90%] relative z-20 text-center md:mx-auto font-bold text-3xl md:text-5xl ">
            Boost Your business with the Best IT Company around.
          </h1>
          <h3 className="md:w-[80%] relative z-20 text-center text-xl md:text-2xl md:mx-auto ">
            We offer a wide range of software development services, to match
            your business needs and goals with unbeatable cost.
          </h3>
        </div>

        <div className="absolute top-0  z-1 bg-gradient-to-b from-black  to-blue-900 h-full w-full opacity-40"></div>
      </section>

      <section className="  bg-white py-8 lg:py-20 text-black ">
        <div className="md:w-[80%] px-5 flex flex-col items-center justify-center z-10 md:mx-auto">
          <p className="text-center py-4">CASE STUDIES</p>
          <h1 className="text-center text-3xl  md:text-5xl pb-6">
            Technology’s potential—realized
          </h1>
          <div className="flex flex-wrap    gap-6  ">
            {cardsCaseStudy.map((items, index) => (
              <div
                key={index}
                className="rounded overflow-hidden hover:shadow-gray-300  border-gray-200 h-[35vh] w-full lg:w-[25vw] flex flex-col justify-center items-center hover:bg-white hover:text-black text-gray-600 hover:scale-105 duration-500 hover:shadow-lg"
              >
                <img src={items.img} className="object-cover rounded border" alt="" />

                <div className="mt-3 p-2">
                  <p className="text-base "> {items.path} </p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center mt-10">
            <a
              href="#"
              className=" border px-8 py-3 hover:bg-blue-500 hover:text-white duration-300 hover:border-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all case studies
            </a>
          </div> */}
        </div>
      </section>
      <section className="  bg-gray-100 py-8 lg:py-20 ">
        <div className="md:w-[80%] px-5 flex flex-col items-center md:mx-auto">
          <p className="text-center py-4 text-black">WHAT WE OFFER</p>
          <h1 className="text-center text-4xl  text-black md:text-6xl py-4">
            Helping our clients outcompete with technology
          </h1>
          <p className="text-start md:text-center text-xl text-black py-4">
            What make us Different?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8">
            {techCards.map((items, index) => (
              <div
                key={index}
                className="overflow-hidden hover:shadow-blue-100   border border-gray-200 h-auto rounded text-gray-500 hover:bg-blue-100  hover:text-blue-600  hover:scale-105 flex flex-col items-center justify-between gap-2 duration-500 hover:shadow-lg"
              >
                <img
                  src={items.img}
                  className="w-full md:h-56 md:object-cover"
                  alt=""
                />
                <div className="flex gap-1 px-5 py-1 text-base">
                  {" "}
                  <span>{items.heading}</span>
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
