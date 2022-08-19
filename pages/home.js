import Head from "next/head";
import React from "react";
import Main from "../Components/Allmovies";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Main />
    </div>
  );
};

export default Home;
