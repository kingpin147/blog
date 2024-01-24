import React from "react";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-black p-4 sticky top-0 drop-shawdow-xl z-10">

      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">

        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">

          <Link
            href="/"
            className="text-white no-underline hover:text-white/75"
          >
            Kingpin Devops
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            className="text-red-500 hover:text-white"
            href="https://www.youtube.com/watch?v=Bo-nEZrOnH4&list=PLFRm7nYIypQF618y6D_JO4d8vrj988wJf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaYoutube />
            {/* i have used this code rel="noopener noreferrer" target="_blank" this for to open link in new page */}
          </Link>
          <Link
            className="text-pink-500 hover:text-white"
            href="https://www.instagram.com/kingpin.147/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            className="text-white/75 hover:text-white"
            href="https://github.com/kingpin147"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/50 hover:text-white"
            href="https://noumanattiqueoffic1.wixsite.com/m-noumanattiq"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLaptop />
          </Link>
        </div>
      </div>
    </nav>
  );
}
