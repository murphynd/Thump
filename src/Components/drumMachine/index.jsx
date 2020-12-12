import React, { useEffect, useState } from "react";
import * as Tone from "tone";
import "../drumMachine/drumMachine.css";
import p5 from "..p5";

function DrumMachine() {
  function startSeq() {
    Tone.start();
    Tone.Transport.start();
  }

  function stopSeq() {
    Tone.Transport.stop();
  }

  return (
    <React.Fragment>
      <div className="drumMachine">
        <button onClick={startSeq}>start</button>
        <button onClick={stopSeq}>stop</button>
      </div>
    </React.Fragment>
  );
}
export default DrumMachine;

// var startSound = document.querySelector
// useEffect(() => {
//  document.querySelector("button")?.addEventListener("click", async () => {
//     await Tone.start();
//     console.log("audio is ready");
//   });
// }, [start]);

// const synth = new Tone.MembraneSynth().toMaster();
// const [start, setStart] = {
//   startButton: document.querySelector,
// };
