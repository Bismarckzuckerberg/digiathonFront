import style from "../styles/header.module.scss";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ConnectModalCustom } from "./CustomConnectButton";
import CompanyModal from '../components/CompanyModal'


/* ======= Icons ======= */
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export default function Header(props: any) {
  const { mode } = props;
  console.log(mode);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const header = document.querySelector("#header");
      document.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 10 ||
          document.documentElement.scrollTop > 10
        ) {
          if (mode == "home") {
            header?.classList.add(style.headerBlur);
          } else {
            header?.classList.add(style.headerBlur);
            header?.classList.remove(style.headerOther);
          }
        } else {
          if (mode == "home") {
            header?.classList.remove(style.headerBlur);
          } else {
            header?.classList.remove(style.headerBlur);
            header?.classList.add(style.headerOther);
          }
        }
      });
    }
  }, []);



  return (
    <div
      id="header"
      className={mode == "home" ? style.header : style.headerOther}
    >
      <div className="flex flex-row justify-between max-w-[1200px] w-full md:flex-row">
        <div className={style.logo}>
          <Link href="/">
            <Image src='/logo.png' width="186" height={46} alt="logo" />
          </Link>
        </div>

        <div className={style.menu}>
          <div className={style.menuitem}>
            <div className={style.icon}>
              <QuestionAnswerOutlinedIcon />
            </div>
            <div className=" font-OpenSans ">Hızlı Çözüm</div>
          </div>

          <div className={style.menuitem}>
            <div className={' bg-[#3b77ac] '}>
              <CompanyModal/>
            </div>
            <div className={style.icon}>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div className={style.button}>
            <ConnectModalCustom/>
          </div>
        </div>
      </div>
    </div>
  );
}