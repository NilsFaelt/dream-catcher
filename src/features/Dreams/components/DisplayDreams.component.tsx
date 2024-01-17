"use client";
import { Spinner } from "@/ui";
import React, { useEffect, useState } from "react";
interface Dream {
  name: string;
  mail: string;
  blob: string;
}
export const DisplayDreams = () => {
  const [dreams, setDreams] = useState<Dream[] | null>(null);
  const [loading, setLoading] = useState(false);
  const fetchDreams = async () => {
    setLoading(true);
    const data = fetch("/api/dream", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLoading(false);
        setDreams(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchDreams();
  }, []);
  if (loading) return <Spinner />;
  if (!dreams) return <h2>Could Not Get Dreams</h2>;

  return (
    <div className=' mt-20 flex flex-col items-center'>
      {dreams?.map((dream, i) => {
        return (
          <div key={i}>
            <p>Name: {dream.name}</p>
            <p>Mail: {dream.mail}</p>
            <audio controls src={`data:audio/mpeg;base64,${dream?.blob}`} />
          </div>
        );
      })}
    </div>
  );
};
