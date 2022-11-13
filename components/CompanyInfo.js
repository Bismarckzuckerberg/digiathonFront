import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import ContractAbi from "../contract-abi.json";
import { contractAddress } from "../contractAddress";
import Image from "next/image";

function Feed({}) {
  const [companyInfo, setCompanyInfo] = useState([]);

  const ContractAddress = contractAddress;

  const getAllCompany = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const accounts = await provider.listAccounts();
        console.log(accounts[0]);
        const Contract = new ethers.Contract(
          ContractAddress,
          ContractAbi,
          signer  
        );

        let myAllCompany = await Contract.getMyCompanyInfo();

        setCompanyInfo(myAllCompany);
        console.log(myAllCompany);
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCompany();
  }, []);

  return (
    <div className="">
      <div>
        <div className="text-xl  text-[#3b77ac] font-OpenSans pb-4 w-full">Şirket Bilgileri</div>
        <ul className=" border-b-2 pb-4 border-[#3b77ac] " >
          <Image className=" " src='/TOGG_logo.svg.png' width="200" height={46} alt="logo" />
          <li className=" font-OpenSans text-[#4a4e50]" >Şirket No: {Number(companyInfo[0])}</li>
          <li className=" font-OpenSans text-[#4a4e50]"  >Şirket Cüzdan Adresi: {companyInfo[1]}</li>
          <li className=" font-OpenSans text-[#4a4e50]"  >Şirket Vergi Kimlik No: {Number(companyInfo[2])}</li>
          <li className=" font-OpenSans text-[#4a4e50]"  >Şirket Bakiyesi: {Number(companyInfo[3]) / (10**16)} DTL</li>
          <li className=" font-OpenSans text-[#4a4e50]"  >Şirket İsmi: {companyInfo[4]}</li>
          <li className=" font-OpenSans text-[#4a4e50]"  >Şirket Adresi: {companyInfo[5]}</li>
          <li className=" font-OpenSans text-[#4a4e50]"  >Şirket IBAN'ı: {companyInfo[6]}</li>
        </ul>
      </div>
    </div>
  );
}

export default Feed;