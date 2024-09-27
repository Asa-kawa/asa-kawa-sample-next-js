"use client";

import { useState } from "react";
import "./web.css";
import Link from "next/link";

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
      >abc</button>
      <Link href="/display?page=0" className="next">進む</Link>
    </div>
  );
}
