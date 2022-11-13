import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../contract-abi.json";
import { contractAddress } from "../contractAddress";

const Withdraw = () => {
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
        const Contract = new ethers.Contract(ContractAddress, abi, signer);

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

  const withdraw = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const Contract = new ethers.Contract(ContractAddress, abi, signer);

        let myAllCompany = await Contract.withdraw();

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
    <div className=" flex justify-center items-center ">
      <div className="border border-[#e7ebed] mx-4 rounded-2xl min-w-max w-full">
        <div className="  flex-col flex gap-6">
          <div className="flex justify-center flex-col ">
            <div className=" flex flex-col gap-2 items-center">
              <p className=" flex items-center text-[#3a89b4] p-6">
                Bakiye: &nbsp;{" "}
                <p className=" flex font-OpenSans font-thin text-[#222]">
                  {Number(companyInfo[3]) / 10 ** 16} DTL
                </p>
              </p>
              <div className="  w-full ">
                <div className=" border-t-2 border-[#4284be] flex items-center justify-center bg-[#4284be]/10 h-full min-h-[120px] rounded-b-xl">
                  <div className=" bg-[#3b77ac] h-min p-0.5  rounded-full text-[#fff]">
                    <button
                      onClick={withdraw}
                      className=" border-t border-[#5d93c2]  rounded-full p-2 px-5  font-OpenSans flex flex-row items-center"
                    >
                      Hesaba Para Cek
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
