import CompanyBro from "../assets/Company-bro.png"

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
           <img src={CompanyBro} className="object-cover hover:scale-105 duration-500 object-bottom h-[30rem] w-full" alt="" />
          </div>
        </div>
      </section>
      <section>
        
      </section>
    </div>
  );
}
