"use client";
import { useState } from "react";
import Header from "@/components/Header";

export default function Main() {
  const [selected, setSeletcted] = useState("");

  return (
    <main className={selected === "main" ? "animate-pulse" : "animate-none"}>
      <Header
        height="h-[50px]"
        width="w-full fixed"
        background="bg-[#212121]"
        padding="pl-[20px] pr-[20px]"
        selected={selected}
      />
    </main>
  );
}
