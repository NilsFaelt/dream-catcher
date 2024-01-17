import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div
      className='min-h-screen min-w-full flex items-center justify-center text-white'
      style={{
        position: "relative", // Necessary for the image to cover the entire div
      }}
    >
      <Image
        src='/clouds.png' // Path to your image in the public folder
        alt='Background Image'
        layout='fill'
        objectFit='cover'
      />
      <div className='text-center relative z-10'>
        <h1 className='text-4xl font-bold mb-4'>
          Thank you for uploading your dream!
        </h1>
      </div>
    </div>
  );
};

export default Page;
