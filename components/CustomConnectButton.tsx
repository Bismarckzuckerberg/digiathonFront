
import {
    useConnectModal,
    useAccountModal,
    useChainModal,
  } from '@rainbow-me/rainbowkit';
  
  
  
  
  
  export const ConnectModalCustom = () => {
    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
  
    return (
      <>
  
        {openConnectModal && (
          <button onClick={openConnectModal} type="button" className=' bg-white/90 border border-[#e5e7eb] rounded-lg p-1 px-3 '>
              <p className=" font-OpenSans text-sm flex  text-[#4284be]">Giriş Yap 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 19" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
              </p>
  
          </button>
        )} 
  
  
        {openAccountModal && (
          <button onClick={openAccountModal} type="button" className=' bg-white/90 border border-[#e5e7eb] rounded-lg p-1 px-3 flex'>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 19" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[#4284be]">
           <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>        
          <p className=" font-OpenSans text-sm flex  text-[#4284be] px-1">Şirket Bilgileri</p>
  
      </button>
        )}
  
      </>
    );
  };