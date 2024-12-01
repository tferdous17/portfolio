import { cn } from "@/lib/utils";
import { useState } from "react";
import { Icon } from "./evervault-card";
import { TracingBeam } from "./tracing-beams";


export const ProjectCard = ({ title, icon, description }: { title?: string; icon?: React.ReactNode; description?: string }) => {
    return (
        <div className={cn('p-0.5  aspect-square bg-[#0c0c0c] flex items-center justify-center w-full h-full relative', title)}>
            <div
                className="group/card relative flex overflow-wrap rounded-3xl bg-transparent"
            >   
                <div className="relative z-10 flex items-center justify-center gap-14 ml-3">
                    <div className="">
                        <span className="whitespace-wrap text-7xl">{icon}</span>
                    </div>
                    <div className="relative flex flex-col text-xl text-white gap-5">
                        <span className="z-20 whitespace-wrap text-4xl font-bold drop-shadow-glow" style={{color: "white"}}>{title}</span>
                        <span className="z-20 mt-4 whitespace-wrap text-black text-lg dark:text-white">{description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 0a0a0a