"use client";
import React, { useEffect, useState } from "react";
interface Dream {
  name: string;
  mail: string;
  blob: string;
}
export const DisplayDreams = () => {
  const [dreams, setDreams] = useState<Dream[] | null>(null);
  const fetchDreams = async () => {
    const data = fetch("/api/dream", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setDreams(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchDreams();
  }, []);
  console.log(dreams, "stststet");
  return (
    <div className=' mt-20 flex flex-col items-center'>
      {dreams?.map((dream, i) => {
        return (
          <div key={i}>
            <p>Name: {dream.name}</p>
            <p>Mail: {dream.mail}</p>
            <audio controls src={`data:audio/mpeg;base64,${dream.blob}`} />
          </div>
        );
      })}
    </div>
  );
};