import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";
import React from "react";

export const Navabr = () => {
  return (
    <nav className="h-32 p-3 bg-black text-white flex items-center list-none">
        <div className="float-right">
          <Link href="/home"><Image src={Logo} alt="" /></Link>
        </div>
    </nav>
  );
};
