import { Progress } from "@nextui-org/react";
import React from "react";

export default function Loading() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center ">
      <h2 className="font-semibold text-xl">Loading Job Data...</h2>
      <Progress
        size="md"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md"
      />
    </section>
  );
}
