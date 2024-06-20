


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



export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white mx-auto shadow fixed top-0 w-full z-40">
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
                            : "text-gray-800 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
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
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900  hover:text-blue-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                      : "text-gray-700  hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
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
