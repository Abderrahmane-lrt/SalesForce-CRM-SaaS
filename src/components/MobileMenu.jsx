
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className={`lg:hidden pt-1 z-50`}>
      <div className="flex flex-col gap-1" onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`w-6 h-1 bg-black rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-black rounded-sm ${
            isOpen ? "opacity-0" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-black rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>
      {isOpen && (
        <div className="bg-white absolute left-0 top-24 h-[calc(100vh-96px)] w-full flex flex-col items-center justify-center text-xl font-medium gap-5">
          <a href={"/"}>Home</a>
          <a href={"#about"}>About</a>
          <a href={"#pricing"}>Pricing</a>
          <a href={"#features"}>Features</a>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
