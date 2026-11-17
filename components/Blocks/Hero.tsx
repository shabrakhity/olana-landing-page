"use client"

import { Badge } from '@/components/ui/badge'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { motion, type Variants } from "motion/react"

// Animation variants for staggered children
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
}

const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

const Hero = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Badge */}
            <motion.div
                className="flex items-center justify-center"
                variants={fadeUpVariants}
            >
                <Badge className="h-auto text-sm font-medium px-4 py-2 " variant={'outline'}>
                    Zero Lost Leads System 🎉
                </Badge>
            </motion.div>

            {/* Hero Text */}
            <div className="text-center mt-8">
                <motion.h1
                    className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
                    variants={fadeUpVariants}
                >
                    Zero Lost Leads System.
                </motion.h1>
                <motion.p
                    className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    variants={fadeUpVariants}
                >
                    نظام مبيعات بيضمن مفيش عميل يضيع، لأي شركة عندها فريق مبيعات. كمّل على الواتساب، إحنا بنفتكرلك كل حاجة.
                </motion.p>
            </div>

            {/* Hero Actions */}
            <motion.div
                className="my-6 mb-12 flex items-center justify-center gap-x-4"
                variants={fadeUpVariants}
            >
                <ShimmerButton>ابدأ مجاناً</ShimmerButton>
            </motion.div>

        </motion.div>
    )
}

export default Hero