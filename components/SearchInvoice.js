import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import ContractAbi from "../contract-abi.json";
import { contractAddress } from "../contractAddress";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


function Feed({}) {
  const [posts, setPosts] = useState([]);
  const [tcno, setTcno] = useState();
  const [open, setOpen] = React.useState(false);

  const ContractAddress = contractAddress;
  const getMyUpdatedInvoices = (myAllInvoices) => {
    let myUpdatedInvoices = [];
    for (let i = 0; i < myAllInvoices.length; i++) {
      let invoice = {
        id: myAllInvoices[i].id,
        recipientTCVKN: myAllInvoices[i].tcVkn,
        recipientName: myAllInvoices[i].customerName,
        recipientAddress: myAllInvoices[i].customerLocation,
        description: myAllInvoices[i].description,
        cost: myAllInvoices[i].cost,
        taxRatio: myAllInvoices[i].taxRatio,
        kcompanyAddress: myAllInvoices[i].companyAddress,

      };
      myUpdatedInvoices.push(invoice);
    }
    return myUpdatedInvoices;
  };

  const onChangeHandler = (event) => {
    setTcno(event.target.value);
  };

  const getAllMyInvoices = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const Contract = new ethers.Contract(
          ContractAddress,
          ContractAbi,
          signer
        );

        let myAllInvoices = await Contract.getInvoicesByTCVKN(tcno);
        setPosts(getMyUpdatedInvoices(myAllInvoices, ethereum.selectedAddress));
        console.log(myAllInvoices);
        
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (error) {
      console.log(error);
    }
  };

 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  


  return (
    <div className="">
      <div className="className= border border-[#e7ebed] m-4 rounded-2xl">
      <div className="flex ml-10 flex-col">
      <div className="flex justify-center flex-col ">
        <p className=" text-3xl font-light text-[#3b77ac] font-OpenSans min-h-[100px] pt-10 pb-8 w-full flex justify-center">
          Fatura Aratma Ekranı
          </p>
        <p className=" px-10 pb-5 mb-4 text-sm font-OpenSans">
            Bu sayfa üzerinde faturaları aratabilir ve inceleyebilirsiniz. 
        </p>
      </div>
        <p className=' font-OpenSans text-[#3a89b4] py-6'>TC/VKN Fatura Arat</p>
      </div>

        
          <div className=" flex flex-col w-full ml-10 pb-6">
            <p className=" flex font-OpenSans font-thin text-[#222] "><p className=" text-[#3a89b4]">*</p>Şirket Vergi Numarası</p>
            <input
            type="number"
            id="inputPassword2"
            className="border border-[#a8acae] w-full rounded-sm max-w-[700px]"
            value={tcno}
            onChange={onChangeHandler}
            />
            <p className=" font-OpenSans font-extralight text-sm text-[#4a4e50] pb-4">Yetki verilecek şirketin vergi numarasını giriniz.</p>

          </div>
            <div className=" border-t-2 border-[#4284be] flex justify-center bg-[#4284be]/10 h-full min-h-[120px] rounded-b-xl">
              <div className=" bg-[#3b77ac] h-min p-0.5 mt-8 rounded-full text-[#fff]">
                <button type="" className=" border-t border-[#5d93c2]  rounded-full p-2 px-5  font-OpenSans flex flex-row items-center"
                onClick={() => {
                  getAllMyInvoices();
                  handleOpen();
                }} >Arat</button>  
              </div>
              
            </div>

      </div>
      {posts.map((post) => (
        <div className="">
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  
                  <Box sx={style}>
                  <div className=' mx-10 mt-10 min-w-[1100px] max-w-[1300px] max-h-[700px] overflow-y-auto flex-col flex'>
                        <div className='flex-row w-full flex justify-between gap-6'>
                                <div className=' text-black/70 font-OpenSans'>
                                        <div className=' border-y-4 border-black max-w-[400px]'>
                                            <p className=' text-transform: uppercase '>medine mekke ulasim a.s</p>
                                            <p>Şirket Cüzdan Adresi:0x08e2922D0773F1969fB1D29b08D564B8b34b992a</p>
                                            <p>VKN: 124123123321</p>
                                            <p>Şirket Adresi: İstanbul</p>
                                        </div>
                                        <div className=' border-y-4 border-black max-w-[400px] mt-12'>
                                            <p className=' text-transform: uppercase '>Sayin</p>
                                            <p>{post.recipientName}</p>
                                            <p>Cüzdan Adresi: {post.companyAddress}  </p>
                                            <p>VKN: {Number(post.recipientTCVKN)} </p>
                                            <p>Adresi: {post.recipientAddress} </p>
                                        </div>
                                        <p className=' font-bold flex flex-row'>ETTN:  <p className=' font-normal'>57948ac9­0059­4499­96ef­01670d538686</p></p>        
                                </div>
                                <div className=' w-full  flex  items-center justify-center flex-col mb-40'>
                                    <img 
                                        width={150}
                                        height={150}
                                        className=' min-h-[150px] min-w-[150px]'
                                        src="/hazinabak.png"
                                    />
                                    <p className=' ml-2 font-extrabold font-OpenSans text-black/60 '>E Fatura Arsiv</p>
                                </div>
                                <div className=' h-full  w-full ml-44 flex flex-col '>
                                    <img 
                                        width={150}
                                        height={150}
                                        className=' min-h-[180px] min-w-[180px] ml-28 '
                                        src="/Totally_not_a_Rickroll_QR_code.png"
                                    />
                                    <div className='flex flex-row border-2 justify-end mt-12 border-black/70 max-w-[293px] text-black/70 font-OpenSans text-sm'>
                                        <div className='min-w-[170px] '>
                                        <p className='flex flex-row border-b-2 font-extrabold border-black/70 p-1'>
                                            Özelleştirme No:
                                        </p>
                                        <p  className='flex flex-row border-b-2 font-extrabold border-black/70 p-1'>
                                            Fatura Tarihi:
                                        </p>
                                        <p  className='flex flex-row border-b-2 font-extrabold border-black/70 p-1'>
                                            Fatura Tipi:
                                        </p>
                                        <p  className='flex flex-row border-b-2 font-extrabold border-black/70 p-1'>
                                            Gönderim Şekli:
                                        </p>
                                        <p  className='flex flex-row border-b-2 font-extrabold border-black/70 p-1'>
                                            Düzenleme Tarihi:
                                        </p>
                                        <p  className='flex flex-row font-extrabold  p-1'>
                                            Düzenleme Zamanı:
                                        </p>
                                        </div>
                                        <div className='min-w-[120px]'>
                                            <p className='flex flex-row border-b-2 border-l-2 border-black/70 p-1'>
                                                TR1.2
                                            </p>
                                            <p className='flex flex-row border-b-2 border-l-2 border-black/70 p-1'>
                                                25­10­2022
                                            </p>
                                            <p className='flex flex-row border-b-2 border-l-2 border-black/70 p-1'>
                                                SATIŞ
                                            </p>
                                            <p className='flex flex-row border-b-2 border-l-2 border-black/70 p-1'>
                                                ELEKTRONİK
                                            </p>
                                            <p className='flex flex-row border-b-2 border-l-2 border-black/70 p-1'>
                                                25­10­2022
                                            </p>
                                            <p className='flex flex-row  border-l-2 border-black/70 p-1'>
                                                00:00
                                            </p>           
                                        </div>

                                    </div>            
                                </div>
                          
                        </div>
                        <div className=' h-full w-full mx-auto mt-10'>
                                <div className='flex flex-col  w-full  border-4 border-black/70  text-black/70 font-OpenSans text-sm mx-auto'>

                                    <div className=' flex-row flex  border-b-2 border-black/70'>
                                    <p className='  w-full min-w-[150px] max-w-[225px] justify-center font-bold flex p-1'>
                                        Sıra No
                                    </p>
                                    <p className=' border-l-2 border-black w-full min-w-[150px] justify-center font-bold flex  max-w-[224px] p-1'>
                                        TC/VKN
                                    </p>
                                    <p  className=' border-l-2 border-black w-full min-w-[150px] justify-center font-bold flex  max-w-[224px] p-1'>
                                        Mal Hizmet Adı
                                    </p>
                                    <p  className=' border-l-2 border-black w-full min-w-[150px] justify-center font-bold flex  max-w-[225px]  p-1'>
                                        Fatura Adresi
                                    </p>
                                    
                                    <p  className=' border-l-2 border-black w-full min-w-[150px] justify-center font-bold flex  max-w-[225px]  p-1'>
                                        KDV Oranı
                                    </p>
                                    <p  className=' border-l-2 border-black w-full min-w-[150px] justify-center font-bold flex  max-w-[225px]  p-1'>
                                        Diğer Vergiler
                                    </p>
                                    <p  className=' border-l-2 border-black w-full min-w-[150px] justify-center font-bold flex  max-w-[225px]  p-1'>
                                        Mal Hizmet Tutarı
                                    </p>
                                    </div>
                                    <div className='min-w-[150px] flex-row flex'>
                                        <p className='  border-black w-full max-w-[225px] justify-center  flex  p-1'>
                                            1
                                        </p>
                                        <p className=' border-l-2 border-black w-full min-w-[150px] max-w-[225px] justify-center  flex  p-1'>
                                            {Number(post.recipientTCVKN)}
                                        </p>
                                        <p className=' border-l-2 border-black w-full min-w-[150px] max-w-[225px] justify-center  flex  p-1'>
                                            {post.recipientName}
                                        </p>
                                        <p className=' border-l-2 border-black w-full min-w-[150px] max-w-[225px] justify-center  flex   p-1'>
                                            {post.recipientAddress}
                                        </p>
                                        <p className=' border-l-2 border-black w-full min-w-[150px] max-w-[225px] justify-center  flex   p-1'>
                                            %{Number(post.taxRatio)}
                                        </p>
                                        <p className=' border-l-2 border-black w-full min-w-[150px] max-w-[225px] justify-center  flex   p-1'>
                                            
                                        </p>
                                        <p className='  border-l-2 border-black w-full min-w-[150px] max-w-[225px] justify-center  flex   p-1'>
                                            {Number(post.cost)}TL
                                        </p>           
                                    </div>

                                </div>
                                <div className=' h-full  w-full  flex justify-end mt-10'>
                                <div className='flex flex-row border-4 border-black/70 max-w-[450px] text-black/70 font-OpenSans text-sm'>
                                    <div className='min-w-[200px] font-extrabold '>
                                    <p className='flex flex-row justify-end border-b-2 border-black/70 p-1'>
                                        Mal Hizmet Toplam Tutarı:
                                    </p>
                                    <p  className='flex flex-row justify-end border-b-2 border-black/70 p-1'>
                                        Toplam Iskonto:
                                    </p>
                                    <p  className='flex flex-row justify-end border-b-2 border-black/70 p-1'>
                                        Hesaplanan KDV(%{Number(post.taxRatio)}):
                                    </p>
                                    <p  className='flex flex-row justify-end border-b-2 border-black/70 p-1'>
                                        Vergiler Dahil Toplam Tutar:
                                    </p>
                                    <p  className='flex flex-row justify-end  p-1'>
                                        Odenecek Tutar:
                                    </p>

                                    </div>
                                    <div className='min-w-[200px]'>
                                        <p className='flex flex-row justify-end border-b-2 border-l-2 border-black/70 p-1'>
                                            {Number(post.cost)}TL
                                        </p>
                                        <p className='flex flex-row  justify-end border-b-2 border-l-2 border-black/70 p-1'>
                                            0TL
                                        </p>
                                        <p className='flex flex-row justify-end border-b-2 border-l-2 border-black/70 p-1'>
                                          {Number(post.cost * (post.taxRatio / 100))}TL
                                        </p>
                                        <p className='flex flex-row justify-end border-b-2 border-l-2 border-black/70 p-1'>
                                          {Number(post.cost) + Number(post.cost * (post.taxRatio / 100))}TL
                                        </p>
                                        <p className='flex flex-row justify-end  border-l-2 border-black/70 p-1'>
                                          {Number(post.cost) + Number(post.cost * (post.taxRatio / 100))}TL
                                        </p>           
                                    </div>

                                </div>            
                            </div>        
                                <div className=' mt-12 border-4 border-black/70'>
                                <p className=' ml-2 font-bold text-black/70 flex flex-row'>Not: &nbsp; <p className=' font-medium t'> Ödenecek tutar #***********#</p></p>
                                    <p className=' ml-2 font-bold text-black/70 flex flex-row'>Not: &nbsp; <p className=' font-medium'> e-Arşiv izni kapsamında blockchain ortamında hazırlanmıştır.</p></p>
                                </div>            
                            </div>        

                    </div>
                  </Box>
                </Modal>
        </div>
      ))}
    </div>
  );
}

export default Feed;