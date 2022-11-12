import React from 'react'
import Header from '/components/Header.tsx'
import Link from 'next/link'
import CreateInvoice from '../components/CreateInvoice'

const FaturaKesmeEkrani = () => {
  return (
    <div className=' bg-white'>

         <Header/>
           <div className=' h-full min-h-[80px]'>

          </div>
          <img className=' w-full  z-20 flex'
          src='/bg2.png'
          />
     
      <div className='justify-center  flex'>
        <div className=' bg-[#fff] w-full max-w-[1200px] h-full p- -mt-12 border border-[#a9acaf]/50 rounded-lg shadow-lg'>
          <div className='flex flex-row gap-20 justify-center font-OpenSans text-[#4b4e51] font-medium border-b border-[#a9acaf]/50 shadow-lg pt-2 '>
            <p className=' font-semibold  text-[#3b77ac] border-b-2 border-[#3b77ac] p-2 '>Fatura Kesme</p>
            <p className=' p-2'><Link href='/FaturaAratma'>Fatura Aratma</Link></p>
            <p className=' p-2'><Link href='/FaturalarimiGorme'>Kestiğim Faturalar</Link></p>
          </div>
          <CreateInvoice/>
        </div>
      </div>
      
      
      
    </div>
  )
}

export default FaturaKesmeEkrani