import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../contract-abi.json";
import { contractAddress } from "../contractAddress";

export default function BakiyeYukle() {
  const [input, setInput] = useState();

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };
  const payToGoverment = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const decimals = 18; // Note: this is a string, e.g. user input

      const amount = ethers.utils.parseUnits(input, decimals);

      try {
        const transactionResponse = await contract.payToGoverment({
          value: amount,
        });
        await listenForTransactionMine(transactionResponse, provider);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="mt-4 px-4">
      <div className="border border-[#e7ebed] rounded-2xl min-w-max w-full">
        <p className="pl-10 text-3xl font-light text-[#3b77ac] font-OpenSans min-h-[100px] pt-10 pb-8 w-full flex justify-center">
          Para Yükleme Ekranı
        </p>
        <p className="pl-10 mb-4 text-md font-OpenSans">Bu sayfa üzerinden.</p>
        <p className="pl-10 font-OpenSans text-[#3a89b4]">Fatura Kaydı</p>

        <div className=" flex flex-col w-full ml-10 pb-6">
          <p className=" flex font-OpenSans font-thin text-[#222] pt-5 ">
            <p className=" text-[#3a89b4]">*</p>Hesabınıza para yatırma
          </p>
          <input
            type="number"
            id="inputPassword2"
            className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
            value={input}
            onChange={onChangeHandler}
          />
          <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50] pb-4">
          Ödemek istediğiniz miktarı giriniz.
          </p>
        </div>
        <div className=" border-t-2 border-[#4284be] flex justify-center bg-[#4284be]/10 h-full min-h-[120px] rounded-b-xl">
          <div className=" bg-[#3b77ac] h-min p-0.5 mt-8 rounded-full text-[#fff]">
            <button
              onClick={payToGoverment}
              className=" border-t border-[#5d93c2]  rounded-full p-2 px-5  font-OpenSans flex flex-row items-center"
            >
              Para Yükle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
