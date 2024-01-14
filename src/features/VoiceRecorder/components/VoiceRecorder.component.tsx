"use client";
import React, { FC, useEffect, useState } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { AudioRecorder } from "react-audio-voice-recorder";
import { useAudioRecorder } from "react-audio-voice-recorder";

export const VoiceRecorder: FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [recording, setRecording] = useState(false);
  const startRecording = () => {
    setRecording(true);
    SpeechRecognition.startListening();
  };
  const { recordingBlob } = useAudioRecorder();
  const stopRecording = () => {
    setRecording(false);
    SpeechRecognition.stopListening();
  };

  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    console.log(audio, "audoii");
    console.log(audio, "url");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  useEffect(() => {
    if (!recordingBlob) return;
    console.log("Recording Blob:", recordingBlob);
  }, [recordingBlob]);
  return (
    <form className='flex flex-col gap-5'>
      <AudioRecorder
        // downloadOnSavePress={true}
        showVisualizer={true}
        onRecordingComplete={addAudioElement}
      />
      {transcript}
      <input required placeholder='Name' className=' rounded-md border p-5' />
      <input required placeholder='Mail' className=' rounded-md border p-5' />
      {recording && <h2>RECORDING</h2>}
      <button
        onClick={() => {
          setRecording(false);
        }}
        className=' hover:bg-blue-100 border border-white p-10 rounded-md shadow-md bg-white'
      >
        SAVE RECORDING
      </button>{" "}
    </form>
  );
};

{
  /* <div className='flex flex-row gap-5'>
<button
  onClick={() => {
    startRecording();
  }}
  className='hover:bg-blue-100 border border-white p-10 rounded-md shadow-md bg-white'
>
  START RECORDING
</button>
<button
  onClick={() => {
    stopRecording();
  }}
  className=' hover:bg-blue-100 border border-white p-10 rounded-md shadow-md bg-white'
>
  STOP RECORDING
</button>
</div>
<button
onClick={() => {
  setRecording(false);
}}
className=' hover:bg-blue-100 border border-white p-10 rounded-md shadow-md bg-white'
>
SAVE RECORDING
</button> */
}
