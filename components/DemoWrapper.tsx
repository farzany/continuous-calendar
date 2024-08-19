'use client';

import React, { useState } from "react";
import { useSnack } from "@/app/SnackProvider";
import { ContinuousCalendar } from "@/components/ContinuousCalendar";

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function DemoWrapper() {
  const { createSnack } = useSnack();

  const onClickHandler = (day: number, month: number, year: number) => {
    const snackMessage = `Clicked on ${monthNames[month]} ${day}, ${year}`
    createSnack(snackMessage, 'success');
  }

  return (
    <ContinuousCalendar onClick={onClickHandler} />
  );
}
