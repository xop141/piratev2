"use client";
import React, { useState } from "react";
import { Film, Moon, Sun, ChevronDown, Search, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Genre from "@/components/Genre";
import SearchButton from "./SearchButton";

const Header = () => {
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const [isBAR, setIsBAR] = useState("hidden");

  const JumpHOME = () => {
    router.push(`/`);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const showBAR = () => {
    setIsBAR(isBAR === "hidden" ? "flex" : "hidden");
  };

  return (
    <div className="w-full h-fit p-5 flex justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex w-full h-fit justify-between items-center lg:w-[80%] relative">
      
        <div
          className={`${
            isBAR === "hidden" ? "hidden" : "flex"
          } ${theme === "dark" ? "bg-gray-900" : "bg-white"} 
          absolute top-0 left-0 w-full h-full items-center z-50 p-5 gap-[10px] flex justify-between`}
        >
          <div className="bg-gray-300 lg:p-2 md:p-4 sm:p-2 rounded-md w-min ">
            <Genre />
          </div>
          <SearchButton />
          <X onClick={showBAR} className="cursor-pointer" />
        </div>

      
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={JumpHOME}
        >
          <Film />
        <p className={`${theme === "dark" ? "bg-gray-900" : ""} text-bold font-[600]`} >Movie Z</p>
        </div>

 
        <div className="hidden md:flex md:gap-3">
          <Genre />
          <SearchButton />
        </div>

        <div className="flex gap-3">
          <div
            className="p-3 md:hidden border border-gray-300 shadow-sm rounded-md cursor-pointer"
            onClick={showBAR}
          >
            <Search />
          </div>
          <div
            className="p-3 border border-gray-300 shadow-sm rounded-md cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
