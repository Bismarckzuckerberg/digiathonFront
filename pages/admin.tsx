import React from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import SirketKaydetme from "../components/RegisterCompany";
import Header from "../components/Header";

const Home: NextPage = () => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  useEffect(() => {
    if (!isConnected) openConnectModal;
  }, [openConnectModal]);

  return (
    <div className=" bg-white h-screen">
      {isConnected && (
        <>
          <Header />
          <div className=" max-h-[80px] h-full"></div>
          <SirketKaydetme />
        </>
      )}
    </div>
  );
};

export default Home;
