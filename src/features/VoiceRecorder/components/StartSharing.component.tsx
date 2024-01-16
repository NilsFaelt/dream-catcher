import React, { FC } from "react";

interface Props {
  setStartSharing: React.Dispatch<React.SetStateAction<boolean>>;
}
export const StartSharing: FC<Props> = ({ setStartSharing }) => {
  return (
    <div className=' flex flex-col gap-5 justify-center items-center  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 '>
      <h2 className=' text-3xl'>
        <span className='font-bold'>Dream</span> Collector
      </h2>
      <div className=' flex gap-1 flex-col justify-start items-center text-center'>
        <h3 className=' text-xl'> </h3>
        <p>[this webpage will only exist for 3 days]</p>
        <p>Designer: Anna Gyllenklev</p>
        <p>Webpage Developer: Nils Fält</p>
      </div>
      <button
        onClick={() => {
          setStartSharing(true);
        }}
        className=' w-96 hover:bg-blue-100 border border-white p-10 rounded-md shadow-md bg-transparent'
      >
        PRESS HERE TO START SHARING
      </button>
      <div className='flex gap-1 flex-col justify-start items-center text-center'>
        <p className=' text-sm'>
          *The Dream Collector is a part of Anna Gyllenklevs Master Thesis: The
          world I would like to live in, at Konstfack University (Arts, Crafts
          and Design), which explores the relationships and interdependencies
          between humans, human made, and more than human.
        </p>
      </div>
    </div>
  );
};
