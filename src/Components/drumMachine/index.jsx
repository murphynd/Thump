import React from "react";
import * as Tone from "tone";
const synth = new Tone.MembraneSynth().toMaster();

function playSynth() {
  synth.triggerAttackRelease("C2", "8n");
}

const DrumMachine = () => {
  return (
    <React.Fragment>
      <section className="drumkit">
        <div className="pad"></div>
        <div className="pad"></div>
        <div className="pad"></div>
        <div className="pad"></div>
        <div className="pad"></div>
        <div className="pad"></div>
      </section>
    </React.Fragment>
  );
};
export default DrumMachine;
