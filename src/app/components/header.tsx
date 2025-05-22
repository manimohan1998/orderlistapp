"use client";
import React from "react";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-4">
      <button onClick={toggleSidebar} className="text-xl mr-4">
        ☰
      </button>
      <h1 className="text-lg font-semibold text-teal-600">Restaurant App</h1>
    </header>
  );
};

export default Header;
