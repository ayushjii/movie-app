import React from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import user from "../public/user.png";
import {MdKeyboardArrowRight} from 'react-icons/md'

export const Dashboard = () => {
  return (
    <div className="z-50 fixed w-full h-full max-h-screen overflow-auto p-3 bg-black opacity-90">
      <div className="relative m-auto mt-40 flex justify-center min-h-ad overflow-hidden my-3 mx-auto w-full max-w-3xl sm:flex-col">
      <div className="w-56 h-4"><Image src={logo} alt=""/></div>
        <div className="flex flex-row w-full p-14">
          <div className="w-60 h-80 ">
            <Image src={user} className="" alt="" />
          </div>
          <div className="text-white ml-16 ">
            <h2 className="text-gray-500 font-semibold text-4xl">I want to</h2>
            <h1 className="text-white font-bold text-5xl hover:text-red-500">watch tv show</h1>
            <div className="mt-12 flex flex-row" >
            <Link href="/home" >
              <span className="bg-gray-300 cursor-pointer rounded-3xl w-full font-bold text-base justify-center p-4 items-center text-black">Im a Cinephilla <MdKeyboardArrowRight size={25} className="float-right" color="#000" /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
