import React from "react";
import Box from "./Box";
import style from "../styles/box.module.scss";

const Boxes = () => {
  const boxes = [
    {
      id: 1,
      icon: "ehizmetler",
      title: `Fatura Hizmetleri`,
      desc: "Fatura Kesme, Sorgulama ve Gösterme ekranı.",
      href: '/FaturaKesmeEkrani'
    },
    {
      id: 2,
      icon: "kurumlar",
      title: `Dijital Varlık Yönetimi`,
      desc: "Dijital Türk Lirası Dönüşümü ve Coin .",
      href: '/dtlDonusturme'
    },
    {
      id: 3,
      icon: "belediyeler",
      title: `Admin Paneli`,
      desc: "Şirket kaydı ve Kontrattaki ibana para aktarımı.",
      href: '/AdminKayit'
    },
  ];
  return (
    <section className={style.boxContainer}>
      {boxes &&
        boxes.length > 0 &&
        boxes.map((box) => {
          return <Box key={box.id} {...box} />;
        })}
    </section>
  );
};

export default Boxes;
