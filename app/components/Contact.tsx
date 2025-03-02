"use client"

import { useState } from "react"
import * as z from "zod"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, "Name must be 5 Characters"),
    email: z.string().email("Please enter your be Email"),
    subject: z.string().min(5, "Subject must be 5 characters"),
    message: z.string().min(10, "Message must be 5 characters"),
})

type FormData = z.infer<typeof formSchema>



export default function Contact() {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSucess, setIsSubmitSucess] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        try {

            await new Promise((resolve) => setTimeout(resolve, 1000))

            setIsSubmitSucess(true)
            reset()
            setTimeout(() => setIsSubmitSucess(false), 3000)
        } catch (error) {
            console.error("Error submit form: ", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return(
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900
         transition-colors duration-300 overflow-hidden relative">

            <div className="container mx-auto px-6 relative z-10">

                <motion.h2 className="text-4xl font-bold mb-12 text-center dark:text-white"

                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                
                
                >
                    
                    Get yours

                </motion.h2>


                <div className="flex flex-col lg:flex-row gap-12">
                    <motion.div
                    className="lg:w-1/3"
                    initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>


                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold mb-6 dark:text-white">Contact Information</h3>

                            <div className="space-y-6">
                                <a href="isseiyudo594@gmail.com"
                                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                                 transition-colors duration-300">
                                    <Mail className="w-6 h-6 mr-3 text-blue-600" />
                                    isseiyudo594@gmail.com
                                 </a>

                                 <a href="isseiyudo594@gmail.com"
                                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                                 transition-colors duration-300">
                                    <Phone className="w-6 h-6 mr-3 text-blue-600" />
                                    09516774822
                                 </a>

                                 <div className="flex items-center text-gray-600 dark:text-gray-300">
                                    <MapPin className="w-6 h-6 mr-3 text-blue-600" />

                                    Philippines

                                    </div>

                            </div>
                        </div>
                    </motion.div>

                    <motion.div>
                        
                    </motion.div>
                </div>

            </div>
        </section>
    )
}