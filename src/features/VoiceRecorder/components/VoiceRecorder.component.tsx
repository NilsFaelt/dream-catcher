"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { AudioRecorder } from "react-audio-voice-recorder";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { InfoText } from "@/components/InfoText";

export const VoiceRecorder: FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [startSharing, setStartSharing] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
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

  const postDream = async () => {
    try {
      fetch("/api/post_dream", {
        method: "POST",
        body: JSON.stringify({ name: name, mail: mail, blob: "blob" }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      {startSharing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postDream();
          }}
          className='items-center flex flex-col gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4'
        >
          <h2 className=' text-center text-1xl'>
            <span className='font-bold'>What are you</span> Dreaming about
          </h2>
          <AudioRecorder
            // downloadOnSavePress={true}
            showVisualizer={true}
            onRecordingComplete={addAudioElement}
          />
          {transcript}
          <input
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='Name'
            className=' placeholder:text-black rounded-md border p-5 bg-transparent'
          />
          <input
            onChange={(e) => setMail(e.target.value)}
            required
            placeholder='Mail'
            className=' placeholder:text-black rounded-md border p-5 bg-transparent '
          />
          {recording && <h2>RECORDING</h2>}
          <button className=' hover:bg-blue-100 border border-white p-10 rounded-md shadow-md bg-transparent'>
            SAVE RECORDING
          </button>{" "}
        </form>
      ) : (
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
              *The Dream Collector is a part of Anna Gyllenklevs Master Thesis:
              The world I would like to live in, at Konstfack University (Arts,
              Crafts and Design), which explores the relationships and
              interdependencies between humans, human made, and more than human.
            </p>
          </div>
        </div>
      )}
    </>
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
