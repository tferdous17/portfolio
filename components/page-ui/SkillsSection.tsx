import Link from 'next/link';
import React from 'react';
import { FaJava, FaReact, FaPython, FaJs, FaNode, FaVuejs, FaHtml5, FaGoogle } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { SiAmazonwebservices, SiC, SiCplusplus, SiExpress, SiGooglecloud, SiPostgresql, SiSpringboot, SiTensorflow, SiTypescript } from 'react-icons/si';
import { EvervaultCard, Icon } from '../ui/evervault-card';

export function SkillsSection() {
    return (
        <div className="bg-  w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
            <div className="mx-auto max-w-7xl px-8 pb-8">
                <h1 id="skills" className="max-w-5xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                    Skills
                </h1>
                <div className={'grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-5'}>
                    {skills.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.link}
                            className="relative mx-auto flex h-[13rem] w-full max-w-full flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]"
                        >
                            <Icon className="absolute -left-3 -top-3 size-6 text-black dark:text-white" />
                            <Icon className="absolute -bottom-3 -left-3 size-6 text-black dark:text-white" />
                            <Icon className="absolute -right-3 -top-3 size-6 text-black dark:text-white" />
                            <Icon className="absolute -bottom-3 -right-3 size-6 text-black dark:text-white" />

                            <EvervaultCard text={item.title} icon={item.icon} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

const skills = [
    {
        title: 'Java',
        link: 'https://www.oracle.com/java/',
        icon: <FaJava />
    },
    {
        title: 'Python',
        link: 'https://www.python.org/',
        icon: <FaPython />
    },
    {
        title: 'Go',
        link: 'https://go.dev/',
        icon: <FaGolang />
    },
    {
        title: 'JavaScript',
        link: 'https://www.javascript.com/',
        icon: <FaJs />
    },
    {
        title: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        icon: <SiTypescript />
    },
    {
        title: 'C',
        link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
        icon: <SiC />
    },
    {
        title: 'C++',
        link: 'https://en.wikipedia.org/wiki/C%2B%2B',
        icon: <SiCplusplus />
    },
    {
        title: 'Protobuf',
        link: 'https://protobuf.dev/',
        icon: <FaGoogle />
    },
    {
        title: 'HTML/CSS',
        link: 'https://en.wikipedia.org/wiki/HTML',
        icon: <FaHtml5 />
    },
    {
        title: 'Spring Boot',
        link: 'https://spring.io/projects/spring-boot',
        icon: <SiSpringboot />
    },
    {
        title: 'Vue',
        link: 'https://vuejs.org/',
        icon: <FaVuejs />
    },
    {
        title: 'React',
        link: 'https://react.dev/',
        icon: <FaReact />
    },
    {
        title: 'Express.js',
        link: 'https://expressjs.com/',
        icon: <SiExpress />
    },
    {
        title: 'Node.js',
        link: 'https://nodejs.org/en',
        icon: <FaNode />
    },
    {
        title: 'TensorFlow',
        link: 'https://www.tensorflow.org/',
        icon: <SiTensorflow />
    },
    {
        title: 'AWS',
        link: 'https://aws.amazon.com/',
        icon: <SiAmazonwebservices />
    },
    {
        title: 'GCP',
        link: 'https://cloud.google.com/',
        icon: <SiGooglecloud />
    },
    {
        title: 'PostgreSQL',
        link: 'https://www.postgresql.org/',
        icon: <SiPostgresql />
    },
    {
        title: 'gRPC',
        link: 'https://grpc.io/',
        icon: <FaGoogle />
    }
];