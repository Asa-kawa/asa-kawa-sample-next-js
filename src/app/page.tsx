"use client";

import { useState } from "react";
import "./web.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>sample-next-js</p>
      <button
      className="red"
      onClick={() => {
        alert("sample-next-js");
      }}
      >
        ???
      </button><br />
      <button
      className="blue"
      onClick={() => {
        alert("sample-next-js");
      }}
      >abc</button><br />
      <Link href="/display?page=0" className="next">進む</Link>
    </div>
  );
}
