import React from "react";
import style from "../styles/input.module.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Input = () => {
  return (
    <div className="input relative max-w-[775px] w-full px-5 lg:px-0 lg:mt-0 mt-[55px]">
      <input
        type="text"
        name="search"
        id="search"
        className="w-full px-4 py-4 rounded-2xl outline-none"
        placeholder="Merhaba, size nasıl yardım edebilirim?"
      />
      <div className=" absolute right-10 lg:right-5 top-3" id="icon">
        <SearchRoundedIcon fontSize="large" />
      </div>
      <div className=" absolute -bottom-[40px] text-[#e6e6e6] text-center w-full" id="icon">
        <p className="whitespace-nowrap text-[15px]">
          e-Devlet Kapısı ile bilgi ve belgelerinize tek noktadan ulaşabilir,
          başvuru işlemlerinizi hızla gerçekleştirebilirsiniz
        </p>
      </div>
    </div>
  );
};

export default Input;
