import React, { useState, useEffect } from "react";
import reviewer from "../assets/reviewer.jpg";
import sponser1 from "../assets/sponser1.jpg";
import sponser2 from "../assets/sponser2.jpg";
import sponser3 from "../assets/sponser3.jpg";
import sponser4 from "../assets/sponser4.jpg";
import sponser5 from "../assets/sponser5.jpg";
import sponser6 from "../assets/sponser6.jpg";
import sponser7 from "../assets/sponser7.jpg";
import sponser8 from "../assets/sponser8.jpg";
import sponser9 from "../assets/sponser9.jpg";
import sponser10 from "../assets/sponser10.jpg";

export default function Review({ review, name, designation, image }) {
  const images = [
    sponser1,
    sponser2,
    sponser3,
    sponser4,
    sponser5,
    sponser6,
    sponser7,
    sponser8,
    sponser9,
    sponser10,
  ];

  const reviews = [
    {
      name: "John Doe",
      review:
        "John is an excellent employee who consistently exceeds expectations. He demonstrates strong problem-solving skills and is always willing to help his teammates. His dedication and attention to detail make him a valuable asset to our team.",
      designation: "Senior Developer",
      image: reviewer,
    },
    {
      name: "Jane Smith",
      review:
        "Jane is a highly skilled project manager with exceptional leadership qualities. She effectively coordinates team efforts and ensures project deadlines are met. Her positive attitude and ability to motivate others contribute significantly to the success of our projects.",
      designation: "Project Manager",
      image: reviewer,
    },
    {
      name: "Michael Johnson",
      review:
        "Michael consistently delivers high-quality work and demonstrates a strong commitment to excellence. He is proactive in finding solutions to complex problems and is always willing to take on new challenges. His contributions have been instrumental in the success of our team.",
      designation: "Software Engineer",
      image: reviewer,
    },
    {
      name: "Emily Brown",
      review:
        "Emily is a highly creative and innovative UI/UX designer. She has a keen eye for detail and consistently delivers designs that exceed expectations. Her ability to think outside the box and adapt to changing requirements makes her a valuable asset to our design team.",
      designation: "UI/UX Designer",
      image: reviewer,
    },
    {
      name: "David Wilson",
      review:
        "David is an exceptional leader with a strategic vision for our company's technology. He provides clear direction and guidance to our development team and is always available to address any concerns. His strong leadership skills have been crucial to our success.",
      designation: "CTO",
      image: reviewer,
    },
    {
      name: "Sarah Lee",
      review:
        "Sarah is a highly effective marketing specialist with a keen understanding of market trends. She consistently delivers creative and impactful marketing campaigns that drive results. Her ability to communicate effectively and work collaboratively with cross-functional teams makes her a valuable asset to our marketing department.",
      designation: "Marketing Specialist",
      image: reviewer,
    },
    {
      name: "Kevin Martinez",
      review:
        "Kevin is a highly analytical and detail-oriented data analyst. He has a strong ability to interpret data and derive actionable insights. His analytical skills have been instrumental in helping our company make informed decisions.",
      designation: "Data Analyst",
      image: reviewer,
    },
    {
      name: "Amanda Taylor",
      review:
        "Amanda is an excellent HR manager with exceptional interpersonal skills. She fosters a positive work environment and ensures that employee needs are met. Her dedication to employee development and well-being has greatly contributed to our company culture.",
      designation: "HR Manager",
      image: reviewer,
    },
    {
      name: "Christopher Clark",
      review:
        "Christopher is an exceptional systems analyst with a strong attention to detail. He thoroughly analyzes requirements and consistently delivers solutions that meet our business needs. His expertise in system design and implementation has been invaluable to our projects.",
      designation: "Systems Analyst",
      image: reviewer,
    },
    {
      name: "Laura Garcia",
      review:
        "Laura is a highly organized and effective product owner. She excels at prioritizing tasks and ensuring that project objectives are met on time and within budget. Her strong leadership and communication skills make her a valuable asset to our product development team.",
      designation: "Product Owner",
      image: reviewer,
    },
    {
      name: "Daniel Rodriguez",
      review:
        "Daniel is a highly skilled software architect with a deep understanding of complex systems. He designs scalable and robust software solutions that meet our technical requirements. His expertise in software architecture has been instrumental in the success of our projects.",
      designation: "Software Architect",
      image: reviewer,
    },
    {
      name: "Maria Hernandez",
      review:
        "Maria is a dedicated customer support specialist with excellent communication skills. She consistently provides exceptional service to our customers and resolves issues in a timely manner. Her professionalism and empathy make her a valuable asset to our customer support team.",
      designation: "Customer Support Specialist",
      image: reviewer,
    },
    {
      name: "James Brown",
      review:
        "James is a great team player and problem solver. He collaborates effectively with colleagues and always brings creative solutions to the table. His positive attitude and willingness to go the extra mile make him a valuable member of our team.",
      designation: "Business Analyst",
      image: reviewer,
    },
    {
      name: "Olivia Davis",
      review:
        "Olivia is a highly skilled executive assistant with strong multitasking abilities. She efficiently manages schedules and ensures that administrative tasks are completed in a timely manner. Her professionalism and attention to detail make her an indispensable member of our team.",
      designation: "Executive Assistant",
      image: reviewer,
    },
    {
      name: "Robert Wilson",
      review:
        "Robert is an exceptional CEO with a strategic vision for our company's growth. He provides strong leadership and fosters a culture of innovation and collaboration. His dedication to our company's success inspires our team to achieve their best.",
      designation: "CEO",
      image: reviewer,
    },
  ];

  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentImages, setCurrentImages] = useState(images.slice(0, 5));
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => {
        const newIndex = (prevIndex + 5) % images.length;
        setCurrentImages(images.slice(newIndex, newIndex + 5));
        return newIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1000; // 1 second

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= duration) {
        setCount(100000);
        setIsComplete(true);
        clearInterval(interval);
      } else {
        setCount(Math.floor(100000 * (elapsedTime / duration)));
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  // Chunking the reviews array into groups of three
  const reviewChunks = chunkArray(reviews, 3);
  return (
    <div className="w-full flex flex-col border h-auto justify-center items-center">
      <div className="rounded-3xl ml-2 mr-2 flex flex-col bg-black h-64 justify-center items-center gap-10 h-max  w-5/6">
        <div className="flex flex-row gap-5">
          <div className="flex flex-col justify-center items-center text-white gap-6 h-48 ">
            <div className="text-6xl ">
              {count}
              {isComplete && "+"}
            </div>
            <div className="text-xl text-slate-500 italic">
              Desginers have built with NoblessTech
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center justify-center w-auto">
            <img src={reviewer} alt="reviewer" className="w-10 " />
            <img src={reviewer} alt="reviewer" className="w-10 h-10 -full" />
            <img src={reviewer} alt="reviewer" className="w-10 h-10 -full" />
            <img src={reviewer} alt="reviewer" className="w-10 h-10 -full" />
            <img src={reviewer} alt="reviewer" className="w-10 h-10 -full" />
          </div>
        </div>
        <div className="flex flex-col itmes-center justify-center text-2xl italic text-slate-500 w-full ">
          <div className="flex flex-row itmes-center justify-center text-2xl italic text-slate-500 w-full border border-white">
            TRUSTED BY DESIGNERS FROM
          </div>
          <div className=" flex flex-row items-center justify-center items-center border border-white">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="w-1/6 p-2 h-20 flex justify-center items-center border border-white"
              >
                <img
                  src={image}
                  alt={`sponsor ${index + 1}`}
                  className="w-full h-8 object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center align-center w-full">
        {reviewChunks.map((chunk, index) => (
          <div key={index} className="flex justify-around w-full">
            {chunk.map((review, reviewIndex) => (
              <ReviewCard
                key={reviewIndex}
                name={review.name}
                review={review.review}
                designation={review.designation}
                image={review.image}
              />
            ))}
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
}

const ReviewCard = ({ name, review, designation, image }) => {
    return (
      <div className="bg-black rounded-lg shadow-md p-6 flex flex-col items-center align-center mx-2 w-1/3">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold mb-2 text-white">{name}</h3>
        <p className="text-gray-600 italic mb-2 text-white">{designation}</p>
        <p className="text-gray-200 text-center text-sm">{review}</p>
      </div>
    );
  };
