
// import { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";


// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setOpen(!open);
//   };

//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (open) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [open]);

//   return (
//     <header>
//       <nav className="fixed w-full z-50">
//         <div className="flex justify-between px-6 sm:px-10 py-3 bg-gray-100 text-black drop-shadow-sm items-center">
//           <div className="flex items-center justify-around gap-6">
//             <div className="lg:hidden" onClick={toggleMenu}>
//               {open ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="size-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="size-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
//                   />
//                 </svg>
//               )}
//             </div>
//             <div className="flex items-center gap-6 w-full">
//               <Link path="/" className="text-xl sm:text-2xl md:text-3xl">
//                 NoblesseTech
//               </Link>
//               <div className=" hidden lg:block">
//                 <ul className="flex gap-4 ">
//                   <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-6 duration-300">
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-6 duration-300">
//                     {" "}
//                     <Link to="/">Service</Link>
//                   </li>
//                   {/* <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-6 duration-300">
//                     <Link to="/blog">Blog</Link>
//                   </li> */}
//                   <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-6 duration-300">
//                     <Link to="/contact">Contact Us</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div ref={menuRef}>
//             {open && (
//               <div className="fixed top-12 z-50  md:top-20 left-0 w-56 h-full">
//                 <ul className="flex flex-col pb-10 gap-1 w-64 px-5 z-20  h-screen bg-white">
//                   <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-3  duration-300">
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-3 duration-300">
//                     {" "}
//                     <Link to="/">Service</Link>
//                   </li>
//                   {/* <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-3 duration-300">
//                     <Link to="/blog">Blog</Link>
//                   </li> */}
//                   <li className="hover:text-blue-500 hover:border-b-4 border-b-4 border-gray-100 hover:border-blue-500 py-3 duration-300">
//                     <Link to="/contact">Contact Us</Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }


import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Contact us", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white mx-auto fixed top-0 w-full z-40">
      {({ open }) => (
        <>
          <div className="  bg-white max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="  flex  h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className="font-bold text-2xl">
                    NoblesseTech
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 bg-blue-100  rounded-md px-3 py-2 text-sm font-medium"
                            : "text-gray-700 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600  hover:text-blue-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden h-screen w-64 fixed top-16 right-0 bg-white z-30">
            <div className=" px-2 pt-5 flex flex-col">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 bg-blue-100 rounded-md px-3 py-2 text-sm font-medium"
                      : "text-gray-300  hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
