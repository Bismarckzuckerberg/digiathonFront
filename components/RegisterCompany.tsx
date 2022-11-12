import React from "react";
import type { NextPage } from "next";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
 } from "wagmi";
 import contractInterface from "../contract-abi.json";
 import {contractAddress} from "../contractAddress"
 import { GrNext } from 'react-icons/gr'

 const contractConfig = {
   addressOrName: contractAddress,
  contractInterface: contractInterface,
};
interface IForm {
  companyAddress: string;
  companyTaxNumber: string;
  ownerName: string;
  location: string;
  companyIBAN: string;
}
const Home: NextPage = () => {
  const [form, setFormValue] = React.useState<IForm>({
    companyAddress: "",
    companyTaxNumber: "",
    ownerName: "",
    location: "",
    companyIBAN: "",
  });
  const [names, setNames] = React.useState<string[]>([]);
  const { isConnected } = useAccount();
  const updateForm = (
    formKey: keyof IForm,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setFormValue({
      ...form,
      [formKey]: value,
    });
  };
 
  const { config: contractWriteConfig } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "registerCompany",
    args: [
      form.companyAddress,
      form.companyTaxNumber,
      form.ownerName,
      form.location,
      form.companyIBAN,
    ],
  });
  const { data: totalSupplyData } = useContractRead({
    ...contractConfig,
    functionName: "getMyInvoices",
    watch: true,
  });
  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite(contractWriteConfig);
  const { isSuccess: txSuccess, error: txError } = useWaitForTransaction({
    hash: mintData?.hash,
  });
  React.useEffect(() => {
    if (totalSupplyData) {
      setNames((prevNames) => [String(totalSupplyData)]);
    }
   }, [totalSupplyData]);

   return (
     <div className="">
       <div className="">
         <div className="border border-[#e7ebed] mx-4 rounded-2xl">
           <div className=" m-4 flex-col flex gap-6">

             <p className=" font-OpenSans text-[#3a89b4]">Sirket Kaydi</p>



            {mintError && (
              <p style={{ marginTop: 24, color: "#FF6257" }}>
                Error: {mintError.message}
              </p>
            )}
            {txError && (
              <p style={{ marginTop: 24, color: "#FF6257" }}>
                Error: {txError.message}
              </p>
             )}

             {isConnected && (
               <div className="flex-col flex gap-6">
                 <form  className="flex-col flex gap-6"> 
                   <div>
                     <p className=" flex font-OpenSans font-thin text-[#222]"><p className=" text-[#3a89b4]">*</p>Sirket Cuzdan Adresi</p>
                     <input 
                       type="text"
                       className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
                       value={form.companyAddress}
                       onChange={(e) => updateForm("companyAddress", e)}
                     />
                     <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50]">Yetki verilecek sirketin cuzdan adresini giriniz.</p>
                   </div>
                   <div>
                     <p className=" flex font-OpenSans font-thin text-[#222]"><p className=" text-[#3a89b4]">*</p>Sirket Vergi Numarasi</p>
                     <input
                       type="text"
                       className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
                       value={form.companyTaxNumber}
                       onChange={(e) => updateForm("companyTaxNumber", e)}
                     />
                      <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50]">Yetki verilecek sirketin vergi numarasini giriniz.</p>
                   </div>
                   <div>
                     <p className=" flex font-OpenSans font-thin text-[#222]"><p className=" text-[#3a89b4]">*</p>Sirket Sahibinin Ismi</p>
                     <input
                       type="text"
                       className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
                       value={form.ownerName}
                       onChange={(e) => updateForm("ownerName", e)}
                     />
                     <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50]">Yetki verilecek sirketin sahibinin ismini giriniz.</p>
                   </div>
                   <div>
                     <p className=" flex font-OpenSans font-thin text-[#222]"><p className=" text-[#3a89b4]">*</p>Sirket Adresi</p>
                     <input
                       type="text"
                       className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
                       value={form.location}
                       onChange={(e) => updateForm("location", e)}
                     />
                     <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50]">Yetki verilecek sirketin adresini giriniz.</p>
                   </div>
                   <div>
                     <p className=" flex font-OpenSans font-thin text-[#222]"><p className=" text-[#3a89b4]">*</p>Sirketin </p>
                     <input
                       type="text"
                       className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
                       value={form.companyIBAN}
                       onChange={(e) => updateForm("companyIBAN", e)}
                     />
                     <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50]">Yetki verilecek sirketin adresini giriniz.</p>
                   </div>
                 </form>
                 <div className=" border-t-2 border-[#4284be] flex justify-center bg-[#4284be]/10 h-full min-h-[120px] rounded-b-xl">
                   <div className=" bg-[#3b77ac] h-min p-0.5 mt-8 rounded-full text-[#fff]">
                     <button 

                       disabled={isMintLoading}
                       className=" border-t border-[#5d93c2]  rounded-full p-2 px-5  font-OpenSans flex flex-row items-center"
                       data-mint-loading={isMintLoading}
                       data-mint-started={isMintStarted}
                       onClick={() => mint?.()}
                     >
                       {isMintLoading && "Waiting for approval"}
                       {isMintStarted && "Kaydet"}
                       {!isMintLoading && !isMintStarted && "Kaydet"}
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>

                     </button>


                   </div>
                 </div>
               </div>
             )}
           </div>
        </div>
      </div>
    </div>
  );
};
export default Home;