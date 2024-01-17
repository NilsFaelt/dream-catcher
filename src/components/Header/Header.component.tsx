import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export const Header = () => {
  return (
    <div className=' flex flex-row justify-start px-1 pt-8 z-10 bg-transparent absolute top-0 left-0 right-0 bg-transparent'>
      <Image src={"/vase.png"} width={100} height={100} alt='vase' />
    </div>
  );
};
