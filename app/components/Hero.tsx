"use client"

import { motion } from "framer-motion"

const CodePattern = () => (
    <svg className="absolute inset-0 w-full h-full opacity-5" xmlnsXlink="https://www.svgrepo.com/svg/530357/peach">
        <pattern
        id="pattern-circles"
        x="0"
        y="0"
        width="50"
        height="50"
        patternUnits="user"
        patternContentUnits="userSpaceOnUse">

            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000">
                
            </circle>
        </pattern>
        <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url (#pattern-circles)"></rect>
    </svg>
)


export default function Hero() {
    return(
        <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
            
            <div className="absolute inset-0 z-0">
                <CodePattern />
            </div>

            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-gradient-x">

                </div>
            </div>

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <motion.div
                    className="lg:w-1/2 text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600
                         dark:from-blue-400 dark:to-purple-400">Ayanokoji</h1>

                         <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
                            Full Stack Web Dev
                         </h2>

                         <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"> Full Stack Web Dev is not easy to choice, sometimes its hard to create some application its hard to learn something that you dont have idea</p>

                         <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                            {/* <a href="#" className="p-3 rounded-full" */}
                         </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}