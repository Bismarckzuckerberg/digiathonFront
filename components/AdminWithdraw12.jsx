import React, { useEffect, useRef, useState } from "react";
import { ethers } from "ethers";
import abi from "../contract-abi.json";
import { contractAddress } from "../contractAddress";

export default function BakiyeYukle() {
  const iban = useRef(''); // değerine erişmek için iban.current.value demek gerekiyor
  const [message, setMessage] = useState('');


  const ibanValidation = (val) => {
    return true;
    var expr = /TR[a-zA-Z0-9]{2}\s?([0-9]{4}\s?){1}([0-9]{1})([a-zA-Z0-9]{3}\s?)([a-zA-Z0-9]{4}\s?){3}([a-zA-Z0-9]{2})\s?/;
    var status = true;
    if (!expr.test(val)) {
        status = false;
    }
    return status;
}
  const adminWithdraw = async () => {
    if (typeof window.ethereum !== "undefined") {

      setMessage('');

      let status = ibanValidation(iban.current.value);
      if (!status) {
        setMessage("Lütfen geçerli bir iban giriniz.");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const decimals = 18; // Note: this is a string, e.g. user input

      const amount = ethers.utils.parseUnits(iban.current.value, decimals);

      try {
        const transactionResponse = await contract.adminWithdraw({
          value: amount,
        });
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
          <p className=" flex font-OpenSans font-thin text-[#222] pt-5 ">
            <p className=" text-[#3a89b4]">*</p>IBAN'a Gönder
          </p>
          <input
            type="text"
            id="iban"
            className="border border-[#a8acae] w-full rounded-sm max-w-[700px] p-1"
            ref={iban}
            placeholder="TR** **** **** **** **** ****"
            required

          />
          <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50] pb-4">
           Lütfen, paranın yatırılıcağı IBAN numarasını giriniz.
          </p>
          {message && <p className="text-red-500">{message}</p>}
        </div>
        <div className=" border-t-2 border-[#4284be] flex justify-center bg-[#4284be]/10 h-full min-h-[120px] rounded-b-xl">
          <div className=" bg-[#3b77ac] h-min p-0.5 mt-8 rounded-full text-[#fff]">
            <button
              onClick={adminWithdraw}
              className=" border-t border-[#5d93c2]  rounded-full p-2 px-5  font-OpenSans flex flex-row items-center"
            >
              Gönder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
