"use client"

import { Code, Cpu, Database, GitBranch, Globe, Layers, Layout, Server, Terminal, Workflow } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const SkillIcon = ({ icon: Icon, color }: {icon: any; color: string }) => (
    <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
        <Icon className={`w-6 h-6 ${color}`} />
    </div>
)


const skills = [
    {
        icon: Code,
        name: "Frontend Dev",
        tech: "Reactjs",
        description: "Build responsive website",
        color: "text-blue-500",
    },

    {
        icon: Server,
        name: "Frontend Dev",
        tech: "Reactjs",
        description: "Build responsive website",
        color: "text-blue-500",
    },

    {
        icon: Database,
        name: "Frontend Dev",
        tech: "Reactjs",
        description: "Build responsive website",
        color: "text-blue-500",
    },

    {
        icon: Layout,
        name: "Frontend Dev",
        tech: "Reactjs",
        description: "Build responsive website",
        color: "text-blue-500",
    },

    {
        icon: GitBranch,
        name: "Frontend Dev",
        tech: "Reactjs",
        description: "Build responsive website",
        color: "text-blue-500",
    },

    {
        icon: Terminal,
        name: "Frontend Dev",
        tech: "Reactjs",
        description: "Build responsive website",
        color: "text-blue-500",
    },

    {
        icon: Layers,
        name: "Frontend Dev",
        tech: "Reactjs",
        description: "Build responsive website",
        color: "text-blue-500",
    },

    {
        icon: Cpu,
        name: "Frontend Dev",
        tech: "Reactjs",
        description: "Build responsive website",
        color: "text-blue-500",
    },

    {
        icon: Globe,
        name: "Frontend Dev",
        tech: "Reactjs",
        description: "Build responsive website",
        color: "text-blue-500",
    },

    {
        icon: Workflow,
        name: "Frontend Dev",
        tech: "Reactjs",
        description: "Build responsive website",
        color: "text-blue-500",
    },
]

export default function Skills() {
    return(
        <section id="skills" className="py-20 relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">

            </div>

        <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="">
                <defs>
                    <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="50" cy="50" r="20" fill="none" stroke="currenColor" strokeWidth="2" />

                        <path d="M50 3- L50 m30 50 L70 50" stroke="currentColor" strokeWidth="2" />

                    </pattern>
                </defs>

                <rect x="0" y="0" width="100%" height="1000%" fill="url (#skill-pattern)" />
            </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection title="Ayanokoji Kiyotaka" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                         group ">
                            <div className="flex items-center mb-4">
                                <SkillIcon icon={skill.icon} color={skill.color} />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover-text-blue-400 transition-colors
                                     duration-300">
                                        {skill.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                {skill.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>


        </section>
    )
}