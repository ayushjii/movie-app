import Link from "next/link";
import { MdLocalMovies } from "react-icons/md";

import React from "react";

export const Navabr = () => {
  return (
    <nav className="h-32 p-3 bg-black flex-row text-white justify-center flex items-center list-none">
      <div className="text-4xl ">
        <div className="flex">
          {" "}
          <MdLocalMovies />
          <MdLocalMovies />
        </div>

        <Link href="/home">ENTERTAINMENT SHOW</Link>
        <div className="flex">
          {" "}
          <MdLocalMovies />
          <MdLocalMovies />
        </div>
      </div>
    </nav>
  );
};
