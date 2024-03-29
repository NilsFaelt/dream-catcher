import React from "react";

export const Spinner = () => {
  return (
    <div
      className=' mt-36 inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-yellow-500 w border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] '
      role='status'
    >
      <span className='!absolute text-yellow-500 !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
        Loading...
      </span>
    </div>
  );
};
