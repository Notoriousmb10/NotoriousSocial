"use client";
import React from "react";
import { useState } from "react";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div>
      <div
        className="flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={`w-6 h-1 bg-blue-500 rounded-sm transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-1 bg-blue-500 rounded-sm transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-1 bg-blue-500 rounded-sm transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </div>
    </div>
      {isOpen && (
        <div className="flex flex-col text-center justoft-center gap-4 bg-white p-4
         absolute top-56 left-28 z-10">
          <a href="/">Home</a>
          <a href="/about">Friends</a>
          <a href="/contact">Groups</a>
          <a href="/contact">Stories</a>
          <a href="/contact">Profile</a>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
