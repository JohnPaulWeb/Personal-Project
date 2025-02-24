"use client"


const CodePattern = () => (
    <svg className="absolute inset-0 w-full h-full">
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
           
        </section>
    )
}