import React from "react";

export const InfoText = () => {
  return (
    <div className=' w-4/5 absolute mt-10 left-10 gap-10 top-40 z-10 fon-black  z-10 w- gap-2 flex flex-col justify-start items-start'>
      <div className='w-full flex gap-1 flex-col justify-start items-start'>
        <h3 className=' text-xl'>
          {" "}
          <span className='font-bold'>About</span> The Collector
        </h3>
        <p className=''>
          Imagine a world where dreams are a part of every city, every municipal
          and every governmental future development plans. A world where we
          nourish and take care of peoples dreams. A world where we believe that
          one fundamental principle of societal development is dreaming and that
          dreaming is a prerequisite for both imagination and change. In this
          world the biggest threat we have is that people don’t have time for
          dreaming anymore, and if humans don’t nourish their dreams, they
          mentality will slowly degrade to become ‘aggressive beings’.
        </p>
      </div>
      <div className='w-full flex gap-1 flex-col justify-start items-start'>
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
