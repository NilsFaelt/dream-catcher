import React, { FC } from "react";
import { Header } from "@/components";
import { VoiceRecorder } from "..";

interface Props {}

export const VoiceRecorderView: FC<Props> = () => {
  return (
    <div className=' '>
      <Header />
      <div>
        <video
          autoPlay
          loop
          muted
          className=' absolute left-0 right-0 bottom-0 top-0 object-cover w-full h-full'
        >
          <source src='/backdrop.MP4' type='video/mp4' />
        </video>
        <VoiceRecorder />
      </div>
    </div>
  );
};
