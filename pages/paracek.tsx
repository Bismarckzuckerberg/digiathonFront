import React from "react";
import Header from "../components/Header";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import Withdraw from "../components/Withdraw";

const DTLDonusturme: NextPage = () => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  useEffect(() => {
    if (!isConnected) openConnectModal;
  }, [openConnectModal]);

  return (
    <div className=" bg-white h-screen ">
      {isConnected && (
        <>
          <Header />
          <div className=" min-h-[80px] bg-[#3b77ac]"></div>
          <img className=" w-full  z-20 flex " src="/bg2.png" />
          <div className=" flex flex-col gap-10">
            <div className="justify-center  flex">
              <div className=" bg-[#fff] w-full max-w-[1200px] h-full p- -mt-12 border border-[#a9acaf]/50 rounded-lg shadow-lg">
                <div className="flex flex-row gap-20 justify-center font-OpenSans text-[#4b4e51] font-medium border-b border-[#a9acaf]/50 shadow-lg pt-2 ">
                  <p className=" p-2">
                    <Link href="/parayukle">Dijital Varlık Yatır</Link>
                  </p>
                  <p className=" font-semibold  text-[#3b77ac] border-b-2 border-[#3b77ac] p-2 ">
                    Banka Hesabına Para Çek
                  </p>
                </div>
                <Withdraw />
              </div>
            </div>
          </div>
          <div className="mt-4 max-w-[1200px]"></div>
        </>
      )}
    </div>
  );
};

export default DTLDonusturme;
