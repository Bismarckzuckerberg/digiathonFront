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
import {contractAddress} from "../contractAddress";
import { GrNext } from 'react-icons/gr';




const contractConfig = {
  addressOrName: contractAddress,
  contractInterface: contractInterface,
};

interface IForm {
  recipientTCVKN: string;
  recipientName: string;
  recipientAddress: string;
  description: string;
  cost: string;
  taxRatio: string;
}

const Home: NextPage = () => {
  const [form, setFormValue] = React.useState<IForm>({
    recipientTCVKN: "",
    recipientName: "",
    recipientAddress: "",
    description: "",
    cost: "",
    taxRatio: "",
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
    functionName: "createInvoice",
    args: [
      form.recipientTCVKN,
      form.recipientName,
      form.recipientAddress,
      form.description,
      form.cost,
      form.taxRatio,
    ],
  });
  const { data: totalSupplyData } = useContractRead({
    ...contractConfig,
    functionName: "getInvoicesByTCVKN",
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
        <div className="flex justify-center flex-col ">
        <p className=" text-3xl font-light text-[#3b77ac] font-OpenSans min-h-[100px] pt-10 pb-8 w-full flex justify-center">
          Fatura Kesme Ekrani
          </p>
        <p className=" px-10 pb-5 mb-4 text-sm font-OpenSans">
        Bu sayfa üzerinde Türkiye Cumhuriyeti Devleti&apos;ne ait temel yasama, yürütme ve yargı kurumları ile Özel Kuruluşların listesini bulabilirsiniz. İlgili bağlantıları kullanarak kurum hakkında bilgi alabilir, e-Devlet Kapısı ve kendi İnternet siteleri üzerinden sunulan elektronik hizmetlerin listesine ulaşabilirsiniz. 
        </p>
      </div>

          <p className=" font-OpenSans text-[#3a89b4]">Fatura Kaydi</p>



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
                  <p className=" flex font-OpenSans font-thin text-[#222]"><p className=" text-[#3a89b4]">*</p>TC kimlik no veya KV no</p>
                  <input 
                    type="text"
                    className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
                    value={form.recipientTCVKN}
                    onChange={(e) => updateForm("recipientTCVKN", e)}
                  />
                  <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50]">Yetki verilecek sirketin cuzdan adresini giriniz.</p>
                </div>
                <div>
                  <p className=" flex font-OpenSans font-thin text-[#222]"><p className=" text-[#3a89b4]">*</p>Fatura Adi</p>
                  <input
                    type="text"
                    className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
                    value={form.recipientName}
                    onChange={(e) => updateForm("recipientName", e)}
                  />
                   <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50]">Yetki verilecek sirketin vergi numarasini giriniz.</p>
                </div>
                <div>
                  <p className=" flex font-OpenSans font-thin text-[#222]"><p className=" text-[#3a89b4]">*</p>Fatura Kesilecek Adres</p>
                  <input
                    type="text"
                    className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
                    value={form.recipientAddress}
                    onChange={(e) => updateForm("recipientAddress", e)}
                  />
                  <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50]">Yetki verilecek sirketin sahibinin ismini giriniz.</p>
                </div>
                <div>
                  <p className=" flex font-OpenSans font-thin text-[#222]"><p className=" text-[#3a89b4]">*</p>Fatura Aciklamasi</p>
                  <input
                    type="text"
                    className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
                    value={form.description}
                    onChange={(e) => updateForm("description", e)}
                  />
                  <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50]">Yetki verilecek sirketin sahibinin ismini giriniz.</p>
                </div>
                <div>
                  <p className=" flex font-OpenSans font-thin text-[#222]"><p className=" text-[#3a89b4]">*</p>Ucret</p>
                  <input
                    type="text"
                    className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
                    value={form.cost}
                    onChange={(e) => updateForm("cost", e)}
                  />
                  <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50]">Yetki verilecek sirketin adresini giriniz.</p>
                </div>
                <div>
                  <p className=" flex font-OpenSans font-thin text-[#222]"><p className=" text-[#3a89b4]">*</p>Vergi Orani</p>
                  <input
                    type="text"
                    className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
                    value={form.taxRatio}
                    onChange={(e) => updateForm("taxRatio", e)}
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
                    <GrNext className=" ml-2 scale-110 " color="white" />
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