"use client";
import React, { FC, useEffect, useRef } from "react";
import { Header } from "@/components";
import { VoiceRecorder } from "..";
import { InfoText } from "@/components/InfoText";

interface Props {}

export const VoiceRecorderView: FC<Props> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay error:", error);
      });
    }
  }, []);
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='w-full h-full'>
        <video
          ref={videoRef}
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
