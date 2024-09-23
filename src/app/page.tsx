"use client";

import { useState } from "react";
import "./web.css";

export default function Home() {
  return (
    <div>
      <p>Sample-next-js</p>
      <button
      className="red"
      onClick={() => {
        alert("Sample-next-js");
      }}
      >
        ???
      </button><br />
      <button
      className="blue"
      onClick={() => {
        alert("Sample-next-js");
      }}
      >
        abc
      </button>
      <p className="blue">abc</p>
      <button
      className="advance"
      onClick={() => {
        location.href = `/display?page=0`;
      }}
      >
        進む
      </button>
    </div>
  );
}