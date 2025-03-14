import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
