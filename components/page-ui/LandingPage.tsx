'use client';

import Link from "next/link";
import { BackgroundBeams } from "../ui/background-beams";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Button } from "../ui/button";

const words = [
    {
        text: 'backend',
        className: 'text-purple-500 dark:text-purple-400'
    },
    {
        text: 'developer',
        className: 'text-purple-500 dark:text-purple-400'
    },
    {
        text: 'with'
    },
    {
        text: 'full stack'
    },
    {
        text: 'experience.'
    },
];

export default function LandingPage() {
  return (
    <div
      id="landing-page"
      className="bg- relative flex  h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" />
      <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base  ">Hello, I&apos;m Tasnim! A computer science student and</p>
      <TypewriterEffectSmooth words={words}/>
      <div className="z-30 flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Link href="https://drive.google.com/file/d/1R89p1LXks_6jJ-bTWvNVBPzzUBmuZZs8/view?usp=sharing" target="_blank">
            <Button>Download CV</Button>
        </Link>
        <Link href="https://github.com/tferdous17" target="_blank">
            <Button variant="secondary">GitHub</Button>
        </Link>
        <Link href="https://www.linkedin.com/in/tferdous17/" target="_blank">
            <Button variant="tertiary">LinkedIn</Button>
        </Link>
        </div>
      <BackgroundBeams />          
    </div>
  );
}