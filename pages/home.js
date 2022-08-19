import Head from "next/head";
import React from "react";
import Main from "../Components/Allmovies";
import { Navbar } from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <Main />
    </div>
  );
};

export default Home;
