"use client";
import React from "react";

export default function errorBoundry({ error }: { error: Error }) {
  return (
    <div>
      <h2>{error.message}</h2>
    </div>
  );
}
