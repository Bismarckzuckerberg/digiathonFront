import React from "react";
import type { NextPage } from "next";

import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className=" bg-white h-screen">
      <Header />
    </div>
  );
};

export default Home;
