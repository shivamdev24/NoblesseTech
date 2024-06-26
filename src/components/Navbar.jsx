

// import { useEffect, useRef, useState } from "react";
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link, NavLink } from "react-router-dom";
// import LogoDark from "../assets/imgs/LogoDark.png";
// import LogoWhite from "../assets/imgs/LogoWhite.png";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Service", href: "/service" },
//   { name: "Contact us", href: "/contact" },
// ];

// export default function Navbar() {
//   const navbarRef = useRef(null);
//   const [logoSrc, setLogoSrc] = useState(LogoWhite);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section2 = document.getElementById("section2");
//       if (section2) {
//         const section2Top = section2.getBoundingClientRect().top;
//         if (section2Top <= 0) {
//           navbarRef.current.classList.add("bg-white", "text-black");
//           navbarRef.current.classList.remove("bg-black", "text-white");
//            setLogoSrc(LogoDark);
//         } else if (window.scrollY === 0)  {
//           navbarRef.current.classList.add("bg-black", "text-white");
//           navbarRef.current.classList.remove("bg-white", "text-black");
//           setLogoSrc(LogoWhite);
//         }
//       }
//     };

   
  

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <Disclosure
//       as="nav"
//       className="bg-black text-white mx-auto shadow duration-500 fixed top-0 w-full z-40"
//       ref={navbarRef}
//     >
//       {({ open }) => (
//         <>
//           <div className=" max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="flex h-16 items-center justify-between">
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <Link to="/" className="font-bold text-sm flex items-end">
//                     <img src={logoSrc} className="w-8" alt="" />
//                     <span>NoblesseTech</span>
//                   </Link>
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <NavLink
//                         key={item.name}
//                         to={item.href}
//                         className={({ isActive }) =>
//                           isActive
//                             ? "text-blue-500 bg-blue-100 rounded-md px-3 py-2 text-sm font-medium"
//                             : " hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
//                         }
//                       >
//                         {item.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2  duration-500 ease-in-out">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </DisclosureButton>
//               </div>
//             </div>
//           </div>

//           <DisclosurePanel className="sm:hidden h-screen w-64 duration-500 fixed top-16 right-0 bg-white z-30">
//             <div className="px-2 pt-5 flex flex-col">
//               {navigation.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.href}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-500 bg-blue-100 rounded-md px-3 py-2 text-sm font-medium"
//                       : "text-gray-700 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}
//             </div>
//           </DisclosurePanel>
//         </>
//       )}
//     </Disclosure>
//   );
// }


import { useEffect, useRef, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import LogoDark from "../assets/imgs/LogoDark.png";
import LogoWhite from "../assets/imgs/LogoWhite.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const navbarRef = useRef(null);
  const [logoSrc, setLogoSrc] = useState(LogoWhite);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section2 = document.getElementById("section2");
      if (section2) {
        const section2Top = section2.getBoundingClientRect().top;
        if (section2Top <= 0) {
          navbarRef.current.classList.add("bg-white", "text-black");
          navbarRef.current.classList.remove("bg-black", "text-white");
          setLogoSrc(LogoDark);
        } else if (window.scrollY === 0) {
          navbarRef.current.classList.add("bg-black", "text-white");
          navbarRef.current.classList.remove("bg-white", "text-black");
          setLogoSrc(LogoWhite);
        }
      }
    };

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className="bg-black text-white mx-auto shadow duration-500 fixed top-0 w-full z-40"
    >
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/" className="font-bold text-sm flex items-end">
                <img src={logoSrc} className="w-8" alt="" />
                <span>NoblesseTech</span>
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
                        ? "text-blue-500 bg-blue-100 rounded-md px-3 py-2 text-sm font-medium"
                        : "hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              className="relative inline-flex items-center justify-center rounded-md p-2 duration-500 ease-in-out"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden h-screen w-64 duration-500 fixed top-16 right-0 bg-white z-30">
          <div className="px-2 pt-5 flex flex-col">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 bg-blue-100 rounded-md px-3 py-2 text-sm font-medium"
                    : "text-gray-700 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
