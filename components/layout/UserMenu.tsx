"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useCallback, useEffect, useState } from "react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   const toggleOpen = useCallback(() => {
  //     setIsOpen(!isOpen);
  //   }, [isOpen]);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.querySelector(".menu") as HTMLElement;
      if (menu && !menu.contains(event.target as HTMLElement)) {
        setIsOpen(false);
        document.removeEventListener("click", handleClickOutside);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <div className="flex flex-row gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={() => {}}
        >
          AirBnB your Home
        </div>
        <div
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
          onClick={toggleOpen}
        >
          <AiOutlineMenu />

          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="menu absolute rounded-lg shadow-md w-[40vw] md:w-[65%] bg-white overflow-hidden right-0 top-12 text-sm ">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem label="Login" onClick={() => {}} />
              <MenuItem label="Sign Up" onClick={() => {}} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
