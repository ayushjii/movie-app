import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";
import React from "react";

export const Navabr = () => {
  return (
    <nav className="h-32 p-3 bg-black text-white flex items-center list-none">
        <div className="float-right">
          <Image src={Logo} alt="" />
        </div>
      <ul className="flex justify-center mx-4 my-1 items-center">
        <li className="mx-4 my-1">
          <Link href="/">HOME</Link>
        </li>
        <li className="">
          <Link href="details">DETAILS</Link>
        </li>
      </ul>
    </nav>
  );
};
