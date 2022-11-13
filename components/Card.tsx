import React from "react";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const Card = (props: any) => {
  const { icon, title, desc, href } = props;
  return (
    <div className="transition-all duration-300 max-w-[380px] w-full flex flex-col gap-1 items-center justify-center px-5 py-6 bg-white shadow-lg hover:shadow-bottom rounded-lg cursor-pointer">
      <span className="bg-[#eef0f3] rounded-full p-6">
        {icon == "icon1" && <span className="[&>svg]:scale-[200%] [&>svg]:fill-[#0fc9eb]"><BusinessCenterRoundedIcon /></span>}
        {icon == "icon2" && <span className="[&>svg]:scale-[200%] [&>svg]:fill-[#30d193]"><CampaignRoundedIcon /></span>}
        {icon == "icon3" && <span className="[&>svg]:scale-[200%] [&>svg]:fill-[#105a9c]"><DescriptionRoundedIcon /></span>}
      </span>
      <h4 className="font-[500] text-[17px]">{title}</h4>
      <p className="text-[#4b4e51] text-sm">{desc}</p>
      <button className="text-[#3b77ac] [&>svg]:fill-[#3b77ac] text-[15px]">
        Tümü<ChevronRightRoundedIcon />
      </button>
    </div>
  );
};

export default Card;
