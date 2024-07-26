"use client";

import React, { useCallback, useEffect, useState } from "react";

import { DailyAudio, useAppMessage, useDaily, useParticipantIds } from "@daily-co/daily-react";
import AudioIndicator from "./audio-indicator";

type State =
  | "idle"
  | "connecting"
  | "connected"
  | "started"
  | "finished"
  | "error";


export const MyAI =  ()=> {
  const daily = useDaily();

  const [state, setState] = useState<State>("idle");
  const [room, setRoom] = useState<string | null>(null);

  const start = useCallback(async ()=> {
    setState("connecting");

    if (!daily) return;

    // Create a new room for the story session
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_AI_URL}/start_bot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { room_url, token } = await response.json();

      // Keep a reference to the room url for later
      setRoom(room_url);

      // Join the WebRTC session
      await daily.join({
        url: room_url,
        token,
        videoSource: false,
        startAudioOff: true,
      });

      setState("connected");

      // Disable local audio, the bot will say hello first
      daily.setLocalAudio(false);

      setState("started");

      
    } catch (error) {
      setState("error");
    }
  }, [daily]);

  async function leave() {
    await daily?.leave();
    setState("finished");
  }

  useEffect(()=>{
    start();
  }, [start]);

  
  const participantIds = useParticipantIds({ filter: "remote" });
  const [storyState, setStoryState] = useState<"user" | "assistant">(
    "assistant"
  );

  useAppMessage({
    onAppMessage: (e) => {
      

      if (!daily || !e.data?.cue) return;

      // Determine the UI state from the cue sent by the bot
      if (e.data?.cue === "user_turn") {
        // Delay enabling local mic input to avoid feedback from LLM
        setTimeout(() => daily.setLocalAudio(true), 500);
        setStoryState("user");
      } else {
        daily.setLocalAudio(false);
        setStoryState("assistant");
      }
    },
  });


  if (state === "error") {
    return (
      <div className="flex items-center mx-auto">
        <p className="text-red-500 font-semibold bg-white px-4 py-2 shadow-xl rounded-lg">
          This demo is currently at capacity. Please try again later.
        </p>
      </div>
    );
  }

  if (state === "started") {
    return (<div>Started  
      <DailyAudio />
    </div>)
  }

  return <div>SETUP</div>
}