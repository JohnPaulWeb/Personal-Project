import AnimatedSection from "./AnimatedSection"


export default function Experience() {


    const experience = [
        {
            company: "The Rakuzan",
            location: "Company",
            period: "2025 - Yakuza",
            role: "Person",
            resposibilities: [
                "I want to create a web application for landing page",
                "I want to create a web application for landing page",
                "I want to create a web application for landing page",
                "I want to create a web application for landing page",
            ],
        },

        {
            company: "The Rakuzan",
            location: "Company",
            period: "2025 - Yakuza",
            role: "Person",
            resposibilities: [
                "I want to create a web application for landing page",
                "I want to create a web application for landing page",
                "I want to create a web application for landing page",
                "I want to create a web application for landing page",
            ],
        },

        {
            company: "The Rakuzan",
            location: "Company",
            period: "2025 - Yakuza",
            role: "Person",
            resposibilities: [
                "I want to create a web application for landing page",
                "I want to create a web application for landing page",
                "I want to create a web application for landing page",
                "I want to create a web application for landing page",
            ],
        },
    ]


    return(
        <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors
         duration-300 overflow-hidden relative">
            
            <div className="container mx-auto px-6 relative z-10">
                <AnimatedSection />
            </div>
        </section>
    )
}