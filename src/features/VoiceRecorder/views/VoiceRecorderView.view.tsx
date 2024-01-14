import React, { FC } from "react";
import { VoiceRecorder } from "..";
import { Header } from "@/components";

interface Props {}

export const VoiceRecorderView: FC<Props> = () => {
  return (
    <div className=''>
      <Header />
      <div>
        <video
          autoPlay
          loop
          muted
          className=' absolute left-0 object-cover w-full h-full'
        >
          <source src='/backdrop.mp4' type='video/mp4' />
        </video>
      </div>
    </div>
  );
};
