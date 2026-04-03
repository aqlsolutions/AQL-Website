"use client";

import { motion } from "framer-motion";
import RegulatoryCompliance from "./icons/RegulatoryCompliance";
import DeploymentAndIntegration from "./icons/DeploymentAndIntegration";
import TestingAndQualityAssurance from "./icons/TestingAndQualityAssurance";
import { useRef, useState, MouseEvent, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";

const reasonIcons = {
    sov: RegulatoryCompliance,
    eng: DeploymentAndIntegration,
    impact: TestingAndQualityAssurance,
};

function ReasonCard({ reason, index }: { reason: any; index: number }) {
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            onMouseMove={handleMouseMove}
            className="relative flex flex-col items-center text-center bg-pureblack border border-darkgray rounded-xl p-8 hover:border-purewhite hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 group overflow-hidden"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 60%)`
                }}
            />
            <div className="relative z-10 flex flex-col items-center w-full pointer-events-none">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-darkgray text-purewhite mb-6 group-hover:scale-110 group-hover:bg-purewhite group-hover:text-pureblack transition-all duration-300">
                    <reason.icon width={32} height={32} />
                </div>
                <h4 className="text-xl font-bold text-purewhite mb-4">{reason.title}</h4>
                <p className="text-slategray group-hover:text-purewhite transition-colors duration-300 leading-relaxed">
                    {reason.description}
                </p>
            </div>
        </motion.div>
    );
}

export function WhyAQL() {
    const { language } = useLanguage();
    const d = dictionaries[language].why;

    const reasons = [
        {
            title: d.sovTitle,
            description: d.sovDesc,
            icon: reasonIcons.sov
        },
        {
            title: d.engTitle,
            description: d.engDesc,
            icon: reasonIcons.eng
        },
        {
            title: d.impactTitle,
            description: d.impactDesc,
            icon: reasonIcons.impact
        }
    ];

    return (
        <section id="whyus" className="py-24 bg-monoblack px-4 sm:px-6 lg:px-8 border-t border-darkgray">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold tracking-widest text-slategray uppercase mb-3">{d.tag}</h2>
                    <h3 className="text-3xl font-extrabold text-purewhite sm:text-4xl">{d.title}</h3>
                    <p className="mt-4 text-lg text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out max-w-3xl mx-auto">
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <ReasonCard key={index} reason={reason} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
