import React from "react";
import Image from "next/image";
import Link from "next/link";
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";

const Slider = () => {
  return (
    <section className="section-3 flex w-full justify-center gap-5 px-10 py-10 bg-[#e8ecef] text-[#4b4e51]">
      <div className="max-w-[300px] bg-white rounded-lg shadow-xl cursor-pointer">
        <Image
          className="object-contain rounded-t-lg "
          src="/Ataturk.jpg"
          alt="Ataturk"
          width={300}
          height={150}
        />
        <Link href="https://www.atam.gov.tr/">
          <span className="px-5 pb-4 flex flex-col">
            <h4 className="font-[600] text-[20px]">ATAM</h4>
            <p className="m-0 text-[.9em] py-[4px] px[20px] break-words">
              Atatürk Araştırma Merkezi Başkanlığı İnternet sitesini ziyaret
              edin.
            </p>
          </span>
        </Link>
      </div>
      <div
        className="w-full bg-white rounded-lg shadow-xl relative"
        style={{ backgroundImage: "url('/toprak.jpg')" }}
      >
        <div className="absolute right-0 top-0 bg-white max-w-[320px] w-full h-full flex flex-col justify-evenly px-7" >
          <h4 className="text-[25px] font-[500]" >Memnuniyet Anketi</h4>
          <p className="text-[.9em] break-words">
            Memnunniyet anketini doldurup geri dönüşlerinizi bizimle paylaşmak ister misiniz? Hemen şimdi anketi başlatın.
          </p>
          <button className="flex items-center gap-1 px-1 py-1 rounded-full text-[14px] border border-blue-500/30 text-[#3b77ac] outline-none [&>svg]:fill-[#3b77ac]">
              <SyncRoundedIcon />
            Memnuniyet Anketi
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
