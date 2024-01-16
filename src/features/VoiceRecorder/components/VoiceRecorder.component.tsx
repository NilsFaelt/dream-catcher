"use client";
import React, { FC, useEffect, useState } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { AudioRecorder } from "react-audio-voice-recorder";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { useRouter } from "next/navigation";
import { Spinner } from "@/ui";
import { StartSharing } from "./StartSharing.component";
import { DisplayRecording } from "./DisplayRecording.component";

export const VoiceRecorder: FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const { stopRecording, recordingBlob, startRecording } = useAudioRecorder();
  const [startSharing, setStartSharing] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("Non Added");
  const [blob, setBlob] = useState<any>(null);
  const [recording, setRecording] = useState(false);
  const [loading, setLoding] = useState(false);
  const recorder = useAudioRecorder();
  const router = useRouter();

  console;
  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    console.log(blob);
    setBlob(blob);
  };
  const startRecordingOnClick = () => {
    setRecording(true);
    recorder.startRecording();
  };
  const stopRecordingOnClick = () => {
    recorder.stopRecording();
    setBlob(recorder.recordingBlob);
    setRecording(false);
  };

  console.log(blob);
  const postDream = async () => {
    setLoding(true);
    addAudioElement;
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("mail", mail);
      formData.append(
        "blob",
        recorder.recordingBlob ? recorder.recordingBlob : ""
      );

      const response = await fetch("/api/dream", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      router.push("/greeting");
      const data = await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoding(false);
    }
  };

  if (loading) return <Spinner />;
  return (
    <>
      {startSharing ? (
        <div className='items-center flex flex-col gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4'>
          <h2 className=' text-center text-1xl'>
            <span className='font-bold'>What are you</span> Dreaming about
          </h2>

          {/* <AudioRecorder
            showVisualizer={true}
            onRecordingComplete={addAudioElement}
          /> */}

          {transcript}
          <input
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='Name'
            className=' placeholder:text-black rounded-md border p-5 bg-transparent'
          />

          {recording && <DisplayRecording />}
          {recorder.recordingBlob && (
            <audio controls src={URL.createObjectURL(recorder.recordingBlob)} />
          )}
          <div className='flex flex-row gap-5'>
            <button
              onClick={(e) => {
                e.preventDefault();
                startRecordingOnClick();
              }}
              className=' hover:bg-blue-100 border border-white p-10 rounded-md shadow-md bg-transparent'
            >
              START RECORDING
            </button>
            {
              <button
                onClick={(e) => {
                  e.preventDefault();
                  stopRecordingOnClick();
                }}
                className=' hover:bg-blue-100 border border-white p-10 rounded-md shadow-md bg-transparent'
              >
                STOP RECORDING
              </button>
            }
          </div>
          {recorder.recordingBlob && (
            <button
              onClick={(e) => {
                e.preventDefault();
                postDream();
              }}
              className=' hover:bg-blue-100 border border-white p-10 rounded-md shadow-md bg-transparent'
            >
              UPLOAD RECORDING
            </button>
          )}
        </div>
      ) : (
        <StartSharing setStartSharing={setStartSharing} />
      )}
    </>
  );
};
