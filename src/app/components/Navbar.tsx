"use client";
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-50 text-gray-700 shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center font-bold text-gray-900">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
            B
          </div>
          <span className="ml-3 text-xl">Bideez</span>
        </a>

        {/* Hamburger Button (mobile) */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu Links */}
        <nav
          className={`${
            open ? "flex" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-gray-50 md:flex md:items-center md:space-x-8 flex-col md:flex-row border-t md:border-0`}
        >
          <a href="/" className="py-2 px-4 hover:text-gray-900">
            Home
          </a>
          <a href="#about" className="py-2 px-4 hover:text-gray-900">
            About
          </a>
          <a href="#team" className="py-2 px-4 hover:text-gray-900">
            Team
          </a>
          <a href="#portfolio" className="py-2 px-4 hover:text-gray-900">
            Portfolio
          </a>
          <a href="#testimonials" className="py-2 px-4 hover:text-gray-900">
            Testimonials
          </a>
          <a href="#blog" className="py-2 px-4 hover:text-gray-900">
            Blog
          </a>

          {/* Contact button inside menu on mobile / inline on desktop */}
           <a href="#contact" className="">
          <button className="mt-2 md:mt-0 md:ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Contact
          </button>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
