"use client";

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
      {/*<button
      className="advance"
      onClick={() => {
        alert("a");
        //ここのボタンはまだ作り途中です。
      }}
      >
        進む
      </button>*/}
    </div>
  );
}