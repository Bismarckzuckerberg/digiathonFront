import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../contract-abi.json";
import {contractAddress} from "../contractAddress";



export default function AdminWithdraw() {   
   const [input, setInput] = useState();


    const onChangeHandler = (event) => {
      setInput(event.target.value);
    };
    const adminWithdraw = async () => {

      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);


        try {
          const transactionResponse = await contract.adminWithdraw('');
          await listenForTransactionMine(transactionResponse, provider);
        } catch (error) {
          console.log(error);
        }
      } 
    };
  return (
    <div className=" px-4">
        <div className="border border-[#e7ebed] rounded-2xl min-w-max w-full">
      <div className=" flex flex-col w-full ml-10 pb-6">

            <p className=" flex font-OpenSans font-thin text-[#222] pt-5 "><p className=" text-[#3a89b4]">*</p>Deposit</p>
            <input
            type=""
            id="inputPassword2"
            className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
            value={input}
            onChange={onChangeHandler}
            />
            <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50] pb-4">Yetki verilecek sirketin vergi numarasini giriniz.</p>

          </div>
            <div className=" border-t-2 border-[#4284be] flex justify-center bg-[#4284be]/10 h-full min-h-[120px] rounded-b-xl">
            <div className=" bg-[#3b77ac] h-min p-0.5 mt-8 rounded-full text-[#fff]">
            <button onClick={adminWithdraw} className=" border-t border-[#5d93c2]  rounded-full p-2 px-5  font-OpenSans flex flex-row items-center">Gönder</button>
            </div>
          </div>
          </div>

    </div>
  );
}