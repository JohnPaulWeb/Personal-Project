"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

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
                         dark:from-blue-400 dark:to-purple-400">Ayanokoji Kiyotaka</h1>

                         <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
                            Full Stack Web Dev
                         </h2>

                         <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"> Full Stack Web Dev is not easy to choice, sometimes its hard to create some application its hard to learn something that you dont have idea</p>

                         <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                            <a href="#" className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors
                             duration-300 shadow-lg hover:shadow-xl" aria-label="Github Profile">
                                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                             </a>

                             <a href="#" className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors
                             duration-300 shadow-lg hover:shadow-xl" aria-label="LinkedIn Profile">
                                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                             </a>

                             <a href="#" className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors
                             duration-300 shadow-lg hover:shadow-xl" aria-label="Email Contact">
                                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                             </a>
                         </div>

                         <motion.button
                         onClick={() => document.getElementById("about")?.scrollIntoView({
                            behavior: "smooth"
                         })}

                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700
                           hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                           whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                           
                           >

                            Get More

                            <ArrowDown className="w-4 h-4" />
                          </motion.button>
                    </motion.div>

                    <motion.div
                    className="lg:w-1/2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ opacity: 0.6, scale: 0.2 }}
                    >

                        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-700 dark:to-purple-600
                             rounded-3xl transform rotate-6 opacity-50">
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-blue-700 dark:to-purple-600
                             rounded-3xl transform -rotate-6 opacity-50">
                            </div>

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image src="/ayano.jpg" alt="Ayanokoji" fill className="object-cover" priority />
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>


            <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ opacity: 0.8, duration: 0.6 }}>

                <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full animate-pulse">
                    
                </div>
            </motion.div>
        </section>
    )
}