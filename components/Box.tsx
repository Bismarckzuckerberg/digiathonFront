import React from "react";
import Link from "next/link";
import SyncRoundedIcon from '@mui/icons-material/SyncRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import CallSplitRoundedIcon from '@mui/icons-material/CallSplitRounded';
import FactoryRoundedIcon from '@mui/icons-material/FactoryRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import style from "../styles/box.module.scss";


const Box = (props: any) => {
  const { id, title, desc, href, icon } = props;
  return (
    <Link href={href}>
      <div className={style.box}>
        <span className={style.icon}>
           {icon == 'ehizmetler' && <SyncRoundedIcon />}
           {icon == 'kurumlar' && <BusinessRoundedIcon />}
           {icon == 'belediyeler' && <CallSplitRoundedIcon />}
           {icon == 'firmalar' && <FactoryRoundedIcon />}
           {icon == 'universiteler' && <SchoolRoundedIcon />}
        </span>
        <span className={style.title}>
          {title}
        </span>
        <span className={style.desc}>
          {desc}
        </span>
      </div>
    </Link>
  );
};

export default Box;
