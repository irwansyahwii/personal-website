"use client";

import React from "react";
import { DailyProvider, useCallObject } from "@daily-co/daily-react";
import { Main } from "./main";

export const ClientSide = ()=> {
  const callObject = useCallObject({});

  return (
    <DailyProvider callObject={callObject}>
      <Main/>
    </DailyProvider>
  );
}