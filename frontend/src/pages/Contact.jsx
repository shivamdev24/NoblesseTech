import React from "react";
import Awards from "../assets/imgs/awards.png";

function Contact() {
  return (
    <section className="h-full w-ful lg:mt-[6rem] bg-gray-950 text-white">
      <div className="lg:w-[80%] lg:mx-auto w-full px-5 lg:px-0 ">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[40%] py-20">
            <p className="text-purple-400 font-bold">CONTACT US</p>
            <h1 className="text-2xl md:text-6xl font-bold">
              Your Challenges, Our Solution!
            </h1>
            <p>
              Whether you require a simple website, a mobile app, some bespoke
              software, or you’re looking to build your own development team,
              every venture starts with a simple email or phone call.
            </p>
            <div className="mt-4 w-[100%] flex justify-center">
              <img
                src={Awards}
                className=" w-auto object-contain flex justify-center"
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-[60%] py-20 overflow-hidden  h-full">
            <form>
              <div className="flex flex-col gap-4 w-full px-10">
                <p className="font-bold">
                  Fill Out The Form And Our Experts Will Contact You Within
                  24hrs.
                </p>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex flex-col  w-full">
                      <label htmlFor="FullName">FullName*</label>
                      <input
                        type="text"
                        className=" w-full px-3 py-2  outline-none bg-transparent  border-b border-purple-500 focus:border-gray-600 focus:bg-white duration-500 focus:rounded focus:text-black text-white"
                      />
                    </div>
                    <div className="flex flex-col  w-full">
                      <label htmlFor="FullName">E-mail Address*</label>
                      <input
                        type="text"
                        className=" w-full px-3 py-2  outline-none bg-transparent  border-b border-purple-500 focus:border-gray-600 focus:bg-white duration-500 focus:rounded focus:text-black text-white"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex flex-col  w-full">
                      <label htmlFor="FullName">Phone Number*</label>
                      <input
                        type="text"
                        className=" w-full px-3 py-2  outline-none bg-transparent  border-b border-purple-500 focus:border-gray-600 focus:bg-white duration-500 focus:rounded focus:text-black text-white"
                      />
                    </div>
                    <div className="flex flex-col  w-full">
                      <label htmlFor="FullName">Company</label>
                      <input
                        type="text"
                        className=" w-full px-3 py-2  outline-none bg-transparent  border-b border-purple-500 focus:border-gray-600 focus:bg-white duration-500 focus:rounded focus:text-black text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  w-full">
                  <label htmlFor="FullName">Message*</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="50"
                    rows="5"
                    className=" w-full px-3 py-2  outline-none bg-transparent  border-b border-purple-500 focus:border-gray-600 focus:bg-white duration-500 focus:rounded focus:text-black text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-purple-500 hover:bg-purple-700 duration-500 p-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-full   bg-[#121212]">
        <div className="lg:w-[80%] lg:mx-auto border-b py-20 w-full px-5 lg:px-0 ">
          <p className="text-center text-sm">CONNECT WITH US</p>
          <h1 className="text-center text-3xl font-bold mt-4">
            Talk To The Experts And See How Can We Help
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-5">
            <div className="bg-white flex flex-col gap-1 text-black  hover:bg-black hover:text-white duration-500 w-full lg:w-[25rem] p-4 rounded">
              <h1 className="text-2xl font-bold">
                Ready to talk? We're just a phone call away!
              </h1>
              <p className="text-sm text-gray-500 ">
                Whether you need support, have inquiries, or just want to learn
                more about what we do, feel free to give us a call.
              </p>
              <div className="text-gray-600 font-semibold">
                <span>Location : </span>
                <span>+91 0000000000</span>
              </div>
            </div>
            <div className="bg-white flex flex-col gap-1 text-black hover:bg-black hover:text-white duration-500   w-full lg:w-[25rem] p-4 rounded">
              <h1 className="text-2xl font-bold">
                Ready to talk? We're just a phone call away!
              </h1>
              <p className="text-sm text-gray-500">
                Whether you need support, have inquiries, or just want to learn
                more about what we do, feel free to give us a call.
              </p>
              <div className="text-gray-600 font-semibold">
                <span>Location : </span>
                <span>+91 0000000000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
