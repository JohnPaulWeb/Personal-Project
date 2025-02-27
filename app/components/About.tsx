"use client"

import { Code, Database, Server, Zap } from "lucide-react"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {


    const skills = [
        {
            icon: <Code className="w-8 h-8 text-blue-500" />,
            title: "Front End",
            descripton: "Html, Css, Js",
        },

        {
            icon: <Server className="w-8 h-8 text-yellow-500" />,
            title: "Backend",
            descripton: "Html, Css, Js",
        },

        {
            icon: <Database className="w-8 h-8 text-blue-500" />,
            title: "Front End",
            descripton: "Html, Css, Js",
        },

        {
            icon: <Zap className="w-8 h-8 text-blue-500" />,
            title: "Front End",
            descripton: "Html, Css, Js",
        },
    ]

    return(
        <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to bg-indigo-100 dark:from-gray-900 dark:to-indigo-900
         transition-colors duration-300 overflow-hidden relative">

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                 className="text-4xl font-bold mb-8 text-center dark:text-white"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}>

                    About You
                 </motion.h2>

                 <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                    className="md:w-1/2 mb-8 md:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>

                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        Ayanokōji Kiyotaka is the main protagonist of the You-Zitsu series. He is currently a second-year student of Advanced Nurturing High School.
                         Following the entrance exam in which he scored precisely 50 points in every subject, he was placed in D-Class. In the anime adaptation,
                         he sits at the rear left corner of the class seat next to Suzune Horikita.
                        </p>

                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        Kiyotaka is a tall and lean young man with brown hair, brown eyes, and a fair complexion. 
                        He is usually seen wearing a standard school uniform. Outside of school, 
                        he wears a white hoodie covering a green shirt with an orange stripe along with brown pants. 
                        He is also seen wearing a blue vest over a white shirt and brown pants.
                         He has grown taller since his first arrival at the school.
                        </p>
                    </motion.div>

                    <motion.div
                    className="md:w-1/2 grid grid-cols-2 gap-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>

                        {skills.map((skill, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                {skill.icon}
                                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{skill.descripton}</p>
                            </div>
                        ))}
                    </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
                    <Image src="/ayano.jpg" alt="Ayanokoji" width={256} height={256} />
                </div>
        </section>
    )
}