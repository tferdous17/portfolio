'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '../ui/tracing-beams';

export function ExperienceSection() {
    return (
        <div className="bg- relative flex  h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-2xl text-black dark:text-white font-bold')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-md italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-md text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </div>
    );
}

const experience = [
    {
        title: 'Software Engineer Intern - ML Team',
        description: (
            <ul className="list-disc">
                <li>Led the full-stack development of an in-house data analytics tool comprehensively profiling and visualizing medical
                device data from 11,000+ hospitals across the U.S., utilizing Vue, TypeScript, Node, and Python.</li>
                <li>Optimized processing of 45 million surgical state records by 22% and streamlined data pipelines by using AWS Glue and
                writing ETL scripts in Python in collaboration with senior engineers.</li>
                <li>Achieved 95%+ code coverage in full stack unit testing leveraging Vitest and Jest, and designed a parallelized
                CI/CD pipeline for automated build, test, and deployment processes.</li>
            </ul>
        ),
        badge: 'Arthrex | May - November 2024'
    },
    {
        title: 'Artificial Intelligence Club President',
        description: (
            <ul className="list-disc">
                <li>Built an active community of 60+ members on campus by leading a board of 5 officers, organizing bi-weekly
                presentations and workshops with a 70% average turnout rate.</li>
                <li>Partnered with Supporting Women in Computing (SWiC) to host a guest speaker on responsible A.I., boosting
                attendance by 35%.</li>
            </ul>
        ),
        badge: 'Farmingdale State College | December 2023 - Present'
    },
    {
        title: 'Computer Science Peer Tutor',
        description: (
            <ul className="list-disc">
                <li>Tutored university-level programming courses to over 40 active students per semester, providing support for
                subjects such as Java Programming I & II and Data Structures and Algorithms.</li>
                <li>Created 100+ personalized practice questions to reinforce key concepts and established a 90% student return rate
                across semesters.</li>
            </ul>
        ),
        badge: 'Farmingdale State College | August 2023 - May 2024'
    }
]