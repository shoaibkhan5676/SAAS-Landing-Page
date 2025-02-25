"use client"
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png"
import designExample2Image from "@/assets/images/design-example-2.png"
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg"

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate()
    const [leftPointerScope, leftPointerAnimate] = useAnimate()
    const [rightDesignScope, rightDesignAnimate] = useAnimate()
    const [rightPointerScope, rightPointerAnimate] = useAnimate()

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }]

        ])
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { x: -100, y: 0 }, { duration: 0.5 }],
            [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: "easeInOut" }]

        ])
        rightDesignAnimate([
            [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }]

        ])
        rightPointerAnimate([
            [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }]

        ])

    }, [])

    return <section className="py-24 overflow-x-clip  " style={{cursor:`url(${cursorYouImage.src}) auto`}}>

        <div className="container relative ">

            <motion.div
                ref={leftDesignScope}
                drag
                
                className="absolute -left-32 top-16 hidden lg:block"
                initial={{ opacity: 0, x: -100, y: 100 }}
            >
                <Image src={designExample1Image} draggable='false' alt="design example image 1" />
            </motion.div>
            <motion.div
                ref={leftPointerScope}
                initial={{ opacity: 0, x: -200, y: 100 }}
                className="absolute left-56 top-96 hidden lg:block">
                <Pointer name="Shoaib" />
            </motion.div>

            <motion.div
                drag
                ref={rightDesignScope}
                className="absolute -right-64 -top-16 hidden lg:block"
                initial={{ opacity: 0, x: 100, y: 100 }}
            >
                <Image draggable="false" src={designExample2Image} alt="design example image 2" />
            </motion.div>
            <motion.div ref={rightPointerScope}
                initial={{ opacity: 0, x: 275, y: 100 }} className="absolute right-80 -top-4 hidden lg:block">
                <Pointer name="Khan" color="red" />
            </motion.div>

            <div className="flex justify-center">

                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 text-semibold rounded-full text-neutral-950">$7.5M seed round raised </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-medium lg:text-8xl text-center mt-6">Impactful design, createed effortlessly</h1>

            <p className="text-center text-white/50 text-xl mx-auto max-w-2xl mt-8">Design tools shouldn't slow you down. Layers combine powerful features with an intuitive interface that keeps youin your creative flow.</p>
            <form action="" className="flex border border-white/15 max-w-lg rounded-full p-2 mt-8 mx-auto">
                <input type="email" name="" className="bg-transparent w-full flex-1   px-4" placeholder="Enter your email" id="" />
                <Button type="submit" variant="primary" className="whitespace-nowrap" size="sm">Sign Up</Button>
            </form>
        </div>
    </section>;
}
