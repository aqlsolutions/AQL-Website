"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NetworkBackground } from "./NetworkBackground";
import { useState } from "react";
import { DemoModal } from "./DemoModal";
import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";

export function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { language } = useLanguage();
    const d = dictionaries[language].hero;

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-pureblack">
            {/* Interactive Network Background */}
            <div className="absolute inset-0 z-0">
                <NetworkBackground />
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-darkgray/20 rounded-full blur-[120px] pointer-events-none"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-purewhite mb-6">
                        {d.title1} <br className="hidden md:block" />
                        <span className="text-slategray">{d.title2}</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-4 max-w-3xl mx-auto text-xl text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out mb-10"
                >
                    {d.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse"
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-sm text-pureblack bg-purewhite hover:bg-purewhite/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-200 w-full sm:w-auto"
                    >
                        <span>{d.bookDemo}</span>
                        <ArrowRight className="ms-2 rtl:-scale-x-100" size={20} />
                    </button>
                    <Link
                        href="/#services"
                        className="inline-flex items-center justify-center px-8 py-4 border border-darkgray text-base font-medium rounded-sm text-purewhite bg-monoblack hover:border-purewhite hover:bg-darkgray/50 transition-all duration-300 w-full sm:w-auto"
                    >
                        {d.exploreServices}
                    </Link>
                </motion.div>
            </div>

            <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
