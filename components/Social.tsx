import React from "react";
import Image from "next/image";

const Social = () => {
  return (
    <section>
      <Image
        src="/appstores.png"
        width={1264}
        height={467}
        alt=""
        layout="responsive"
      />
      <Image
        src="/social.png"
        width={1222}
        height={552}
        alt="Social Medias"
        layout="responsive"
      />
      <Image
        src="/numbers.png"
        width={1226}
        height={550}
        alt="Numbers"
        layout="responsive"
      />
    </section>
  );
};

export default Social;
