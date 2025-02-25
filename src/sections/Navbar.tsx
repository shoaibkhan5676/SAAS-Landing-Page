
"use client"
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg"
import Button from "@/components/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";


const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)


    return (
    <>
  
    
    <section className="py-4 fixed w-full top-0 z-50 lg:py-8">
        <div className="container max-w-5xl">
            <div className="border bg-neutral-950/70 backdrop-blur border-white/15 md:rounded-full rounded-[27px]">
                <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">

                    <div className="">
                        <Image src={logoImage} className="h-9 md:h-auto w-auto " alt="Layers Logo" />
                    </div>
                    <div className="lg:flex justify-center items-center hidden">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map((element) => (
                                <a href={element.href} key={element.label}>{element.label}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="flex justify-end items-center gap-4">
                        <svg onClick={() => { setIsOpen(!isOpen) }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather md:hidden feather-menu">
                            <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition", isOpen && "rotate-45 -translate-y-1")}></line>
                            <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition", isOpen && "opacity-0")}></line>
                            <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition", isOpen && "-rotate-45 translate-y-1")}></line>
                        </svg>

                        <Button variant="secondary" className="md:inline-flex hidden items-center">Log In</Button>
                        <Button variant="primary" className="md:inline-flex hidden items-center">Sign Up</Button>
                    </div>

                </div>

                <AnimatePresence>
                    {isOpen &&
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                            >

                            <div className="flex flex-col items-center gap-4 py-4 ">
                                {navLinks.map((element) => {
                                    return (
                                        <a className="" key={element.label} href={element.href}>{element.label}</a>
                                    )
                                })}
                            

                            <Button variant="secondary">Log In</Button>
                            <Button variant="primary">Sign Up</Button>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>

        </div>
    </section>
    <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]">

    </div>
    </>)
    ;
}
