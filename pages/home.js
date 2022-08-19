import Head from "next/head";
import React from "react";
import Main from "../Components/Allmovies";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="text-red-400 text-center font-serif font-extrabold text-6xl mt-12">
        Home Page

      </h1>
        <Main/>
    </div>
  );
};

export default Home;
