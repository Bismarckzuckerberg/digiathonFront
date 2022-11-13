import React from "react";
import { clouds } from "./Image";
import Input from "./Input";

const Background = () => {
  return (
    <section className="section-1">
      <div
        className="flex justify-center items-center cloud h-[300px] bg-right filter brightness-[.95]"
        style={{ backgroundImage: "url(" + clouds.src + ")" }}
      >
        <Input />
      </div>
    </section>
  );
};

export default Background;
