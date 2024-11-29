'use client';

import { BackgroundBeams } from "../ui/background-beams";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

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
      <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base  ">Hello, I'm Tasnim! A computer science student and</p>
      <TypewriterEffectSmooth words={words}/>
      <BackgroundBeams />          
    </div>
  );
}