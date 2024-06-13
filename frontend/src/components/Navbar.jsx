

import { useState } from "react";


export default function Navbar() {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
setOpen(!open);
  }

  return (
    <header>
      <nav className="fixed w-full z-50">
        <div className="flex justify-between px-6 sm:px-10 py-3  bg-[#121212] text-white items-center">
          <div className="flex items-center gap-6 ">
            <div onClick={toggleMenu}>
              {open ? (
                <>
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </>
              ) : (
                <>
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
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </>
              )}
            </div>

            <div className="text-xl sm:text-2xl md:text-3xl ">NoblesseTech</div>

            <div className=" hidden lg:block">
              <ul className="flex gap-4 ">
                <li className="hover:text-purple-200 hover:border-b-4 border-b-4 border-[#121212] hover:border-purple-200 py-6 duration-300">
                  <a href="#">How We Help Clients</a>
                </li>
                <li className="hover:text-purple-200 hover:border-b-4 border-b-4 border-[#121212] hover:border-purple-200 py-6 duration-300">
                  {" "}
                  <a href="#">Our Insights</a>
                </li>
                <li className="hover:text-purple-200 hover:border-b-4 border-b-4 border-[#121212] hover:border-purple-200 py-6 duration-300">
                  <a href="#">Our People</a>
                </li>
                <li className="hover:text-purple-200 hover:border-b-4 border-b-4 border-[#121212] hover:border-purple-200 py-6 duration-300">
                  <a href="#">Case Studies</a>
                </li>
                <li className="hover:text-purple-200 hover:border-b-4 border-b-4 border-[#121212] hover:border-purple-200 py-6 duration-300">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div>
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div> */}

          <div>
            {open && (
              <div className=" fixed top-12 z-50 md:top-20 left-0  w-full  h-full">
                <div className="fixed h-full w-full z-[-1] bg-[#121212] opacity-40"></div>
                <ul className="flex flex-col gap-4 w-56 px-5 z-20 bg-gray-900 h-full">
                  <li className="hover:text-purple-200 hover:border-b-4 border-b-4 border-gray-900 hover:border-purple-200 py-6 duration-300">
                    <a href="#">How We Help Clients</a>
                  </li>
                  <li className="hover:text-purple-200 hover:border-b-4 border-b-4 border-gray-900 hover:border-purple-200 py-6 duration-300">
                    {" "}
                    <a href="#">Our Insights</a>
                  </li>
                  <li className="hover:text-purple-200 hover:border-b-4 border-b-4 border-gray-900 hover:border-purple-200 py-6 duration-300">
                    <a href="#">Our People</a>
                  </li>
                  <li className="hover:text-purple-200 hover:border-b-4 border-b-4 border-gray-900 hover:border-purple-200 py-6 duration-300">
                    <a href="#">Case Studies</a>
                  </li>
                  <li className="hover:text-purple-200 hover:border-b-4 border-b-4 border-gray-900 hover:border-purple-200 py-6 duration-300">
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
