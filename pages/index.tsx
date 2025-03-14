import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
