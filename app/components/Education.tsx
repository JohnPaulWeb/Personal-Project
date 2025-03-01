"use client"

import AnimatedSection from "./AnimatedSection"


export default function Education() {

    const education = [
        {
            degree: "",
            institution: "",
            period: "",
            achievements: [
                "",
            ],
        },
    ]
    return(
        <section id="education" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900
         transition-colors duration-300 overflow-hidden relative">

            <div className="container mx-auto px-6 relative z-10">
                <AnimatedSection title="Education" />

                <div className="max-w-3xl mx-auto">

                </div>
            </div>
        </section>
    )
}