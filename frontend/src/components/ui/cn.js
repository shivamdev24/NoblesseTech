import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

// Define the cn function as a React component
const cn: React.FC<{ classNames: ClassValue[] }> = ({ classNames }) => {
  // Call the cn utility function and merge the class names
  return twMerge(clsx(classNames));

};

// Export the CnComponent
export default cn;