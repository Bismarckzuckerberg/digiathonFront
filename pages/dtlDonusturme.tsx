import React from "react";
import Header from "../components/Header";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import {useConnectModal} from '@rainbow-me/rainbowkit';
import DtlTransfer from '../components/DtlTransfer'
import Withdraw from '../components/Withdraw'


const Home: NextPage = () => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  useEffect(() => {
    if(!isConnected)
    openConnectModal;
  }, [openConnectModal]);  


  return (
    <div className=" bg-white h-screen ">
      
   
      {isConnected && (
        <>

        <Header/>
           <div className='  min-h-[80px]'>

          </div>
        <div className=" flex flex-col gap-10">
            <DtlTransfer/>
            <Withdraw/>            
        </div>


        </>

      )}
    </div>
  );
};

export default Home;