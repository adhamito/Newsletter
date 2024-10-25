import React from "react";
import img from "../../public/assets/images/illustration-sign-up-desktop.svg";
import Image from "next/image";

const SectionImg = () => {
  return (
    <div className=" items-center md:py-4 ">
      <Image src={img} alt="signup" width={500} />
    </div>
  );
};

export default SectionImg;
