"use client";

import { motion } from "framer-motion";
import { useRef, useState, MouseEvent, useEffect } from "react";
import { useTheme } from "next-themes";
import RegulatoryCompliance from "./icons/RegulatoryCompliance";
import TestingAndQualityAssurance from "./icons/TestingAndQualityAssurance";
import DeploymentAndIntegration from "./icons/DeploymentAndIntegration";

const solutions = [
    {
        id: "sovereignty",
        title: "Data Sovereignty",
        description: "Your Data, Kept Local. Deploy powerful AI models entirely within the Kingdom. Ensure 100% data sovereignty, privacy, and compliance.",
        icon: RegulatoryCompliance,
    },
    {
        id: "pentesting",
        title: "Autonomous AI Pen-Testing",
        description: "Offensive Security, Powered by AI. Continuous, automated penetration testing agents that identify, exploit, and report vulnerabilities before attackers do.",
        icon: TestingAndQualityAssurance,
    },
    {
        id: "workspace",
        title: "Workspace Integration",
        description: "Supercharge Workflows. Securely implement Retrieval-Augmented Generation (RAG) for Drive, Meets, and Mail—without exposing proprietary data.",
        icon: DeploymentAndIntegration,
    }
];

function SolutionCard({ solution, index }: { solution: any; index: number }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? theme === "dark" : true;
    const gradientColor = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.10)";

    return (
        <motion.div
            ref={divRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            onMouseMove={handleMouseMove}
            className="group relative flex flex-col p-8 bg-monoblack border border-darkgray rounded-xl hover:border-purewhite shadow-[0_0_0px_rgba(0,0,0,0)] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 overflow-hidden"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 60%)`
                }}
            />

            <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-darkgray text-purewhite mb-6 group-hover:scale-110 group-hover:bg-purewhite group-hover:text-pureblack transition-all duration-300">
                    <solution.icon width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold text-purewhite mb-4">{solution.title}</h3>
                <p className="text-slategray group-hover:text-purewhite transition-colors duration-300 ease-in-out leading-relaxed flex-grow">
                    {solution.description}
                </p>
            </div>
        </motion.div>
    );
}

export function Solutions() {
    return (
        <section id="solutions" className="py-24 bg-pureblack px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-purewhite sm:text-4xl">Core Solutions</h2>
                    <p className="mt-4 text-lg text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out max-w-3xl mx-auto">
                        Engineered exclusively for the Saudi Arabian enterprise context, ensuring uncompromising security.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {solutions.map((solution, index) => (
                        <SolutionCard key={solution.id} solution={solution} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
