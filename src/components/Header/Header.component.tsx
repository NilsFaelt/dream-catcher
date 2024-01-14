import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div className=' flex flex-row justify-start px-5 pt-5  z-10 absolute left-0 right-0 bg-transparent'>
      <Image src={"/vase.png"} width={100} height={100} alt='vase' />
    </div>
  );
};
