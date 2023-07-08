"use client";
import React from "react";
import "./styles.css";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const path = usePathname();
  const steps = ["/step-one", "/step-two", "/step-three", "/step-four"];
  const navbarElmnts = ["your info", "select plan", "add-ons", "summary"];
  return (
    <div className="nav-bar w-full h-full md:rounded-md md:p-10 flex md:flex-col gap-5 max-md:justify-center text-white max-md:pt-6">
      {navbarElmnts.map((Element, i) => (
        <div key={i} className="flex max-md:flex-col max-md:items-center  gap-4 cursor-pointer">
          <div
            className={`h-8 w-8 border-2 rounded-full grid justify-center items-center ${
              steps[i] === path ? "bg-LightBlue text-MarineBlue" : ""
            }`}
          >
            {i + 1}
          </div>
          <div className="uppercase text-center">
            <div className="opacity-50 text-sm">step {i + 1}</div>
            <div className="font-bold leading-5">{Element}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
