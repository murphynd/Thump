let hh, clap, bass; //highhat server as a contaiener that holds a sound
let hPat, cPat, bPat; //HiHat patteern that will be and arry of number to hold beats 0 is rest 1 is on
let hPhrase, cPhrase, bPhrase; // hiHat phrase which defines how the hihat pattern is interpred.
let drums; // part parts and phrases work together. we will attach the phrase to the part which will server as our trasport to drive the phrase.

function preload() {
  hh = loadSound("audio/hh_sample.mp3");
  clap = loadSound("audio/clap_sample.mp3");
  base = loadSound("audio/base_sample.mp3");
}

function setup() {
  createCanvas(400, 400);

  hh.loadSound();
  clap.loadSound();
  base.loadSound();

  hPat = [0, 0, 0, 0];
  cPat = [0, 0, 0, 1];
  bPat = [0, 1, 1, 0];

  hPhrase = new p5.Phrase(
    "hh",
    (time) => {
      hh.play(time);
      console.log(time);
    },
    hPat
  );

  cPhrase = new p5.Phrase(
    "clap",
    (time) => {
      clap.play(time);
      console.log(time);
    },
    cPat
  );

  bPhrase = new p5.Phrase(
    "base",
    (time) => {
      base.play(time);
      console.log(time);
    },
    bPat
  );

  drums = new p5.Part();

  drums.addPhrase(hPhrase);
  drums.addPhrase(cPhrase);
  drums.addPhrase(bPhrase);
}

function keyPressed() {
  if (key === " ") {
    if (!drums.isPlaying) {
      drums.loop();
    } else {
      drums.stop();
    }
  }
}
