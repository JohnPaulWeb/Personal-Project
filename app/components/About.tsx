"use client"

import { Code, Database, Server, Zap } from "lucide-react"


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
         transition-colors">
        </section>
    )
}