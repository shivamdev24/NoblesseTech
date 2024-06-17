
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header>
      <nav className="fixed w-full z-50">
        <div className="flex justify-between px-6 sm:px-10 py-3 bg-gray-100 text-black drop-shadow-sm items-center">
          <div className="flex items-center justify-around gap-6">
            <div className="lg:hidden" onClick={toggleMenu}>
              {open ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </div>
            <div className="flex items-center gap-6 w-full">
              <Link path="/" className="text-xl sm:text-2xl md:text-3xl">
                NoblesseTech
              </Link>
              <div className=" hidden lg:block">
                <ul className="flex gap-4 ">
                  <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-6 duration-300">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-6 duration-300">
                    {" "}
                    <Link to="/">Service</Link>
                  </li>
                  {/* <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-6 duration-300">
                    <Link to="/blog">Blog</Link>
                  </li> */}
                  <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-6 duration-300">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div ref={menuRef}>
            {open && (
              <div className="fixed top-12 z-50  md:top-20 left-0 w-56 h-full">
                <ul className="flex flex-col pb-10 gap-1 w-64 px-5 z-20  h-screen bg-white">
                  <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-3  duration-300">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-3 duration-300">
                    {" "}
                    <Link to="/">Service</Link>
                  </li>
                  {/* <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-3 duration-300">
                    <Link to="/blog">Blog</Link>
                  </li> */}
                  <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-3 duration-300">
                    <Link to="/contact">Contact Us</Link>
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

