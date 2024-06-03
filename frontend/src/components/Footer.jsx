import React from "react";

function Footer() {
  return (
    <div className="bg-gray-100 h-auto py-10">
      <div className="w-[90%] mx-auto  ">
        <div className="flex  ">
          <div className="border border-gray-200  w-[70%]">
            <div className="border">
              <div className="bg-white  m-4 rounded-lg p-4 h-80  justify-between flex flex-col">
                <div className="rounded-lg  h-36 p-4 ">
                  <h1 className="text-6xl">NobleseeTech</h1>
                  <p className="text-base  leading-10 text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, pariatur.
                  </p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <a
                      href="#"
                      className="text-base font-bold hover:text-purple-400 "
                    >
                      Lorem
                    </a>
                    <p className="text-sm text-gray-400 italic font-serif">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-base font-bold hover:text-blue-400 "
                    >
                      Lorem
                    </a>
                    <p className="text-sm text-gray-400 italic font-serif">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-base font-bold hover:text-red-400 "
                    >
                      Lorem
                    </a>
                    <p className="text-sm text-gray-400 italic font-serif">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t">
                <div
                  href="#"
                  className="border m-4  p-4 hover:bg-gray-200 bg-white rounded-lg"
                >
                  <h1 className="text-5xl p-2 w-[50%] ">
                    Genrative Design System
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="border w-[30%] ">
            <div className="grid grid-cols-4 items-center h-56 ">
              <div className="col-span-2  p-4 ">
                <a
                  href="#"
                  className="flex  border p-2 rounded-lg bg-white hover:bg-gray-200 justify-between"
                >
                  <p>Reach Out</p>
                  <span>icon</span>
                </a>
              </div>

              <div className=" flex items-center justify-center col-span-1 p-2 mr-2 -ml-2   ">
                <a
                  className="p-3 bg-white border rounded-lg hover:bg-gray-200"
                  href="#"
                >
                  icon
                </a>
              </div>
              <div className=" flex items-center justify-center col-span-1 p-2 mr-2 -ml-2   ">
                <a
                  className="p-3 bg-white border rounded-lg hover:bg-gray-200"
                  href="#"
                >
                  icon
                </a>
              </div>
              <div className=" flex items-center justify-center col-span-1 p-2 mr-2 -ml-2  ">
                <a
                  className="p-3 bg-white border rounded-lg hover:bg-gray-200"
                  href="#"
                >
                  icon
                </a>
              </div>
              <div className=" flex items-center justify-center col-span-1 p-2 mr-2 -ml-2   ">
                <a
                  className="p-3 bg-white border rounded-lg hover:bg-gray-200"
                  href="#"
                >
                  icon
                </a>
              </div>
              <div className=" flex items-center justify-center col-span-1 p-2 mr-2 -ml-2 ">
                <a
                  className="p-3 bg-white border rounded-lg hover:bg-gray-200"
                  href="#"
                >
                  icon
                </a>
              </div>
              <div className=" flex items-center justify-center col-span-1 p-2 mr-2 -ml-2  ">
                <a
                  className="p-3 bg-white border rounded-lg hover:bg-gray-200"
                  href="#"
                >
                  icon
                </a>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white border flex flex-col justify-between rounded-lg p-4 h-56">
                <div>
                  <h1 className="text-4xl">Business?</h1>
                  <p className="text-sm mt-2 text-gray-400">
                    We work closely with our partner organizations to suit your
                    specific needs
                  </p>
                </div>
                <a
                  className="px-4 py-2 bg-black text-center text-white rounded-lg"
                  href="#"
                >
                  Talk to us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-4">
          <div>
            <span>
              © 2024 Product of NobelsseTech Private Limited. All rights
              reserved
            </span>
          </div>
          <div className="flex gap-4">
            <a className="hover:text-blue-400" href="#">
              Terms & Conditons
            </a>
            <a className="hover:text-blue-400" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
