import React from 'react';

import { HeroParallax } from '../ui/hero-paralax';
import { ProjectCard } from '../ui/project-card';
import { Icon } from '../ui/evervault-card';
import Link from 'next/link';
import { FaGolang, FaJava, FaPython } from 'react-icons/fa6';
import { SiSpringboot } from 'react-icons/si';

export function ProjectsSection() {
    return (
        <div className="bg-  w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
            <div className="mx-auto max-w-7xl px-8 pb-8">
                <h1 id="projects" className="max-w-5xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl py-10">
                    Projects
                </h1>
                <div className="grid grid-cols-1 gap-7">
                    {projects.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative mx-auto flex h-[19rem] w-full max-w-full flex-col items-start border border-black/[0.2] rounded-lg p-4 dark:border-white/[0.2]"
                        >
                            {/* <Icon className="absolute -left-3 -top-3 size-6 text-black dark:text-white" /> */}
                            {/* <Icon className="absolute -bottom-3 -left-3 size-6 text-black dark:text-white" /> */}
                            {/* <Icon className="absolute -right-3 -top-3 size-6 text-black dark:text-white" /> */}
                            {/* <Icon className="absolute -bottom-3 -right-3 size-6 text-black dark:text-white" /> */}

                            <ProjectCard title={item.title} icon={item.icon} description={item.description} />
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const projects = [
    {
        title: 'genesis',
        // link: 'https://github.com/tferdous17/genesis',
        icon: <FaGolang />,
        description: 'Genesis is a highly performant, fully distributed storage engine written in pure Golang. Especially engineered for write performance, it can easily handle 104,000+ writes/second. On top of that, with its distributed architecture, it can support hunderds of concurrent, fault-tolerant nodes (shards) with efficient data rebalancing—providing easy horiziontal scalability.'
    },
    {
        title: 'Unity Wallet',
        // link: 'https://github.com/tferdous17/genesis',
        icon: <FaJava />,
        description: 'Unity Wallet is a modern solution for families looking to teach financial responsibility among their children by using virtual cash cards to keep track of account balances and spending habits. Built with Java, Spring Boot, Spring Security, PostgreSQL and tested with JUnit.'
    },
    {
        title: 'KinetiSense',
        // link: 'https://github.com/tferdous17/genesis',
        icon: <FaPython />,
        description: 'KinetiSense is a full-stack, advanced pose recognition software that can track body movements with very high accuracy and provide real-time analytics—usable with any computer webcam. Built with Python, OpenCV, Mediapipe, Flask, HTML/CSS/JavaScript. 1st place winner @ FSC\'s Inaugural Hackathon 2023.'
    },
    {
        title: 'Uno',
        // link: 'https://github.com/tferdous17/genesis',
        icon: <FaJava />,
        description: 'Fully functional desktop-app clone of the popular card game, Uno. Built from scratch using Java and JavaFX. Created as the final project for my Computer Programming II course, it comes equipped with a psuedo-AI opponent to play against and a large suite of features to keep the gameplay engaging and interactive.'
    },
];