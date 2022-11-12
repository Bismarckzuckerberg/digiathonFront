import React from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import {useConnectModal} from '@rainbow-me/rainbowkit';


const Home: NextPage = () => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  useEffect(() => {
    if(!isConnected)
    openConnectModal;
  }, [openConnectModal]);  


  return (
    <div className=" bg-white h-screen">
      
   
      {isConnected && (
        <>

        <div className=" justify-center flex flex-col">

          <div className="flex justify-center p-4">
          </div>
          

        </div>        
        </>

      )}
    </div>
  );
};

export default Home;