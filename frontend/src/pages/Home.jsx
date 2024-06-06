import CompanyBro from "../assets/Company-bro.png"
import HomeCard from "../components/HomeCard";
import step1 from "../assets/step1.jpg";
import step2 from "../assets/step2.jpg";
import step3 from "../assets/step3.jpg";
import step4 from "../assets/step4.jpg";
import step1_buttom from "../assets/step1_buttom.jpg";
import step2_buttom from "../assets/step2_buttom.jpg";
import step3_buttom from "../assets/step3_buttom.jpg";
import step4_buttom from "../assets/step4_buttom.jpg";

import Review from "../components/Review";

// import StackCards from "../components/StackCards";
import MainComponent from "../components/ui/card-stack.jsx"


const steps = [
  {
    id: 1,
    title: "Ideate",
    image: step1,
    image_buttom: step1_buttom,
    hoverColor: 'sky-100',
    hoverTextColor: 'text-sky-500',
    hoverBorderColor: 'sky-500',
  },
  {
    id: 2,
    title: "Design",
    image: step2,
    image_buttom: step2_buttom,
    hoverColor: 'fuchsia-100',
    hoverTextColor: 'text-purple-700',
    hoverBorderColor: 'purple-700',
  },
  {
    id: 3,
    title: "Develop",
    image: step3,
    image_buttom: step3_buttom,
    hoverColor: 'red-100',
    hoverTextColor: 'text-red-500',
    hoverBorderColor: 'red-500',

  },
  {
    id: 4,
    title: "Deploy",
    image: step4,
    image_buttom: step4_buttom,
    hoverColor: 'lime-50',
    hoverTextColor: 'text-lime-500',
    hoverBorderColor: 'border-lime-500',
  },
];

















const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, I want to use them in my project. Framer motion
        is a godsend ngl tbh fam 🙏
      </p>
    ),
    customClasses: "bg-red-500",
    bgcolor: "bg-red-200",
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing, deleting it right away because yolo.
        Instead, I would like to call it X.com so that it can easily be confused
        with adult sites.
      </p>
    ),
    customClasses: "bg-green-500",
    bgcolor: "bg-green-200",
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of Fight Club is that you do not talk about fight club.
        The second rule of Fight club is that you DO NOT TALK about fight club.
      </p>
    ),
    customClasses: "bg-blue-500",
    bgcolor: "bg-blue-200",
  },
];





export default function Home() {
  return (
    <div>
      <section className="py-10">
        <div className="flex flex-col justify-center text-center">
          <div className="italic flex flex-col gap-4">
            <h1 className="text-6xl">Design Products,Inhumanly Fast</h1>
            <h2 className="text-2xl">
              Brainstorm, ideate, and design faster than ever with NoblesseTech
            </h2>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <a className="bg-black text-white px-4 py-2 rounded-lg" href="#">
              Explore Now
            </a>
            <a
              className="border border-black text-black px-4 py-2 rounded-lg"
              href="#"
            >
              Book a demo{" "}
            </a>
          </div>
        </div>
        <div>
          <div className="py-5">
            <img
              src={CompanyBro}
              className="object-cover hover:scale-105 duration-500 object-bottom h-[30rem] w-full"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center text-center gap-5 ">
          <div className="italic flex flex-col gap-8">
            <h1 className="text-6xl">Bring in your craziest product ideas</h1>
            <h2 className="text-2xl">
              Leave the boring work to us, and watch the magic unfold
            </h2>
          </div>
          <div className="flex flex-row gap-4 w-full h-auto justify-center border p-2">
            <div className="w-1/12 border rounded" />
            {steps.map((step) => (
              <HomeCard
                key={step.id}
                id={step.id}
                title={step.title}
                image={step.image}
                image_buttom={step.image_buttom}
                hoverColor={step.hoverColor}
                hoverTextColor={step.hoverTextColor}
                hoverBorderColor={step.hoverBorderColor}
              />
            ))}
            <div className="w-1/12 border rounded" />
          </div>

          <section className="h-auto ">
            <div className=" ">
              <MainComponent  />
            </div>
          </section>
        </div>
      </section>
      <section>
        <Review/>
      </section>
    </div>
  );
}
