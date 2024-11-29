'use cilent';

import { TracingBeam } from "../ui/tracing-beams";

export function AboutMe() {
    return (
        <>
        <div
            className="bg- relative flex  w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
        >
            <h1 id="about-me" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                About Me
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    <h1 className="text-2xl font-bold">Hello!</h1>
                    My names Tasnim Ferdous. I'm a third-year computer science student at Farmingdale State College, NY, with a passion
                    for building scalable and efficient backend systems. My primary focus, especially career-wise, is backend development where I'm pursuing interests
                    in <span style={{color: "#cd75ff"}}>distributed systems</span>, <span style={{color: "#cd75ff"}}>high-performance computing</span>, 
                    and <span style={{color: "#cd75ff"}}>API development</span>. Alongside that, I also occasionally dabble in full-stack development.
                    <br></br>
                    <br></br>
                    On campus, I hold leadership roles across various organizations—primarily the Artificial Intelligence Club @ FSC where I, along with my fellow officers,
                    have built an active community of 50+ members for those with a shared interest in A.I.
                    <br></br>
                    <br></br>
                    When I'm not coding, you can find me going on long-distance runs, playing video games, traveling, or learning a new skill for fun (lately, creative coding).
                </div>
            </TracingBeam>
        </div>
        </>
    );
}