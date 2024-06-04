import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import { useState, useEffect, useRef } from 'react';


export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);



  const handleOnClick = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: product1,
      hoverColor: 'fuchsia-100',
      hoverTextColor: 'text-purple-700',
      hoverBorderColor: 'border-purple-700',
    },
    {
      id: 2,
      name: 'Product 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: product2,
      hoverColor: 'lime-50',
      hoverTextColor: 'text-lime-500',
      hoverBorderColor: 'border-lime-500',
    },
    {
      id: 3,
      name: 'Product 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: product3,
      hoverColor: 'sky-100',
      hoverTextColor: 'text-sky-500',
      hoverBorderColor: 'border-sky-500',
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, navbarRef]);


  return (
    <div className="relative">
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-black"
      >
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-900 font-semibold">Logo</span>
            <button onClick={handleOnClick} className="text-lg">
              {showMenu ? '- Close' : '+ More'}
            </button>
            <button
              className={`rounded h-8 w-20 bg-black text-white ${
                showMenu ? 'visible' : 'invisible'
              }`}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
      <div
        ref={dropdownRef}
        className={`fixed top-16 left-0 right-0 z-40 overflow-hidden transition-max-height duration-1000 ease-in-out ${
          showMenu ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-4 p-4 bg-white">
          <h1 className="text-xl font-semibold">Our Products</h1>
          <div className="flex flex-wrap md:flex-nowrap w-full gap-2 p-1.5">
            {products.map((product) => (
              <div
                key={product.id}
                className={`group flex flex-col w-full md:w-4/12 overflow-hidden grayscale hover:grayscale-0 rounded-lg border ${
                  hoveredProduct === product.id
                    ? product.hoverBorderColor
                    : 'border-grey-700'
                } p-1.5 hover:bg-${product.hoverColor}`}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={handleMouseLeave}
              >
                <h2
                  className={`${
                    hoveredProduct === product.id
                      ? `${product.hoverTextColor} transition-transform duration-300 transform translate-x-2`
                      : 'text-black transition-transform duration-300 transform translate-x-0'
                  } text-xl font-semibold`}
                >
                  {product.name}
                </h2>
                <p
                  className={`${
                    hoveredProduct === product.id
                      ? 'transition-transform duration-300 transform translate-x-2'
                      : 'transition-transform duration-300 transform translate-x-0'
                  }`}
                >
                  {product.description}
                </p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}