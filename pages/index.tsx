import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const boredAudioRef = useRef<HTMLAudioElement | null>(null);
  const wowAudioRef = useRef<HTMLAudioElement | null>(null);

  function clickBored() {
    if (!boredAudioRef.current) {
      boredAudioRef.current = new Audio("/bored-sound-effect.mp3");
    }
    boredAudioRef.current.play();
  }

  function clickWow() {
    if (!wowAudioRef.current) {
      wowAudioRef.current = new Audio("/wow.mp3");
    }
    wowAudioRef.current.play();
  }

  function takeToNeonCat() {
    window.location.href = "https://www.nyan.cat/index.php?cat=original";
  }

  function takeToBaloonCat() {
    window.location.href = "https://www.nyan.cat/index.php?cat=balloon#";
  } 

  return (
    <div>
      <div onClick={takeToNeonCat} className="absolute top-0 left-0 w-[10px] h-[10px] cursor-pointer"></div>
      <div onClick={takeToBaloonCat} className="absolute top-0 right-0 w-[10px] h-[10px] cursor-pointer"></div>

      <h1 className="text-4xl font-extrabold width-full text-center">
        wellcome to the boredome land lad!
      </h1>
      <Image
        src="/kitten-is-sleeping.gif"
        alt="kittySleep"
        className="ml-auto mr-auto mt-[100px] drop-shadow-[0_0_100px_rgba(255,255,255,0.9)]"
        width={500}
        height={24}
        priority
      />

      <h2 className="text-4xl font-extrabold w-full text-center mt-[100px] h-[0px] select-none">
        I am bored man I am very bored yeah, I am bored and I am{" "}
        <span className="hover:opacity-50 active:opacity-20 cursor-pointer" onClick={clickBored}>
          bored
        </span>{" "}
        boredom is boring boreeeed
      </h2>

      <h3 onClick={clickWow} className="text-xl font-extrabold w-[50px] ml-auto mr-auto text-center mt-[50px] h-[20px] select-none hover:opacity-50 active:opacity-20 cursor-pointer">
        wow
      </h3>
    </div>
  );
}
