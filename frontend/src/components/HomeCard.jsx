import { useState } from 'react';

export default function HomeCard({
  id,
  title,
  image,
  image_buttom,
  hoverColor,
  hoverTextColor,
  hoverBorderColor,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`flex flex-col w-1/5 h-[30rem] overflow-hidden grayscale ${
        isHovered ? 'hover:grayscale-0' : ''
      } rounded-lg border ${
        isHovered && hoverBorderColor ? `border-${hoverBorderColor}` : 'border-gray-700'
      } p-1.5 ${isHovered && hoverColor ? `bg-${hoverColor}` : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1
        className={`${
          isHovered && hoverTextColor
            ? `${hoverTextColor} transition-transform duration-300 transform -translate-x-2`
            : 'text-black transition-transform duration-300 transform'
        } text-center mb-4 text-3xl font-bold mt-4`}
      >
        {title}
      </h1>
      <div className="flex flex-col items-end relative h-1/2 overflow-hidden mt-4">
        <img
          src={image}
          alt={title}
          className={`object-cover w-5/6 h-5/6 transform transition-transform duration-100 ${
            isHovered ? '-translate-x-[5px] scale-105' : ''
          }`}
        />
      </div>
      <div className="relative h-1/2 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image_buttom}
            alt={title}
            className={`object-cover w-full h-full transform transition-transform duration-100 ${
              isHovered
                ? 'translate-y-0 rotate-2 scale-110 shadow-lg -rotate-2'
                : 'translate-y-10'
            }`}
          />
        </div>
      </div>
    </div>
  );
}