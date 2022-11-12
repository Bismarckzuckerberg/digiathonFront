import React from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import {useConnectModal} from '@rainbow-me/rainbowkit';
import SirketKaydetme from '../components/SirketKaydetme'


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

        <SirketKaydetme/>

        </>

      )}
    </div>
  );
};

export default Home;