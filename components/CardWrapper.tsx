import React from "react";
import Card from "./Card";

const CardWrapper = () => {
  return (
    <section className="flex justify-center gap-5 px-5 w-full bg-gradient-to-r from-[#417aac] to-[#76a9ce] py-11">
      <Card icon="icon1" title="Şirket Hizmetleri" desc="Yetkilisi Olduğunuz Şirket Hizmetleri" href="/sirkethizmetleri" />
      <Card icon="icon2" title="Yeni Hizmetler" desc="e-Devlet Kapısı'na en son eklenen Hizmetler" href="/yenihizmeler" />
      <Card icon="icon3" title="Evrak Doğrulama Hizmetleri" desc="e-Devlet Kapısı'ndan alınmış" href="/evrakdogrulama" />
    </section>
  );
};

export default CardWrapper;
