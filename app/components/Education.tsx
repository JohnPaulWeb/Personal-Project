"use client"

import { Award, Calendar, GraduationCap } from "lucide-react"
import AnimatedSection from "./AnimatedSection"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Education() {

    const education = [
        {
            degree: "BSIT",
            institution: "Universidad De Dagupan",
            period: "2025-2026",
            achievements: [
                "High Schoo;",
                "Senior High School",
            ],
        },
    ]
    return(
        <section id="education" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900
         transition-colors duration-300 overflow-hidden relative">

            <div className="container mx-auto px-6 relative z-10">
                <AnimatedSection title="Education" />
                
                <div className="max-w-3xl mx-auto">
                    {education.map((edu, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 50 }}
                       viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden">

                            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-br-full z-0 opacity-50">
                                <div className="relative z-10">
                                    <h3>
                                        <GraduationCap className="w-6 h-6 mr-2" />
                                        {edu.degree}
                                    </h3>

                                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                                        {edu.institution}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        {edu.period}
                                    </p>
                                    <h4 className="text-lg font-medium mb-2 dark:text-gray-200 flex items-center">
                                        <Award className="w-5 h-5 mr-2" />
                                        
                                        Ayanokoji Kiyotaka
                                    </h4>

                                    <ul className="list disc list-inside space-y-2">
                                        {edu.achievements.map((achievement, idx) => (
                                            <li key={idx} className="text-gray-700 dark:text-gray-300">
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">

                <Image src="/ayano.jpg" alt="Ayanokoji Kiyotaka" width={256} height={256} />
            </div>
        </section>
    )
}