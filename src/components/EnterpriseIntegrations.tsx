"use client";

import { motion } from "framer-motion";
import DataEngineering2 from "./icons/DataEngineering2";
import MachineLearning from "./icons/MachineLearning";
import AiCoPilot from "./icons/AiCoPilot";
import { useRef, useState, MouseEvent, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";

const integrationIcons = {
    "smart-knowledge": DataEngineering2,
    "meeting-assistants": AiCoPilot,
    "sovereign-llms": MachineLearning,
};

function IntegrationCard({ integration, index }: { integration: any; index: number }) {
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className="relative flex flex-col md:flex-row items-center bg-monoblack border border-darkgray rounded-xl p-8 hover:border-purewhite hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 group overflow-hidden"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 60%)`
                }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-center w-full pointer-events-none text-center md:text-start">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:me-8 border border-darkgray bg-pureblack p-6 rounded-full group-hover:scale-110 group-hover:bg-purewhite group-hover:text-pureblack transition-all duration-300 text-purewhite">
                    <integration.icon width={40} height={40} />
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-purewhite mb-3">{integration.title}</h4>
                    <p className="text-lg text-slategray group-hover:text-purewhite transition-colors duration-300 leading-relaxed">
                        {integration.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export function EnterpriseIntegrations() {
    const { language } = useLanguage();
    const d = dictionaries[language].integrations;

    const integrations = [
        {
            id: "smart-knowledge",
            title: d.repoTitle,
            description: d.repoDesc,
            icon: integrationIcons["smart-knowledge"],
        },
        {
            id: "meeting-assistants",
            title: d.meetingTitle,
            description: d.meetingDesc,
            icon: integrationIcons["meeting-assistants"],
        },
        {
            id: "sovereign-llms",
            title: d.llmTitle,
            description: d.llmDesc,
            icon: integrationIcons["sovereign-llms"],
        }
    ];

    return (
        <section id="integrations" className="py-24 bg-pureblack px-4 sm:px-6 lg:px-8 border-t border-darkgray">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold tracking-widest text-slategray uppercase mb-3">{d.tag}</h2>
                    <h3 className="text-3xl font-extrabold text-purewhite sm:text-4xl">{d.title}</h3>
                    <p className="mt-4 text-lg text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out max-w-3xl mx-auto">
                        {d.subtitle}
                    </p>
                </div>

                <div className="space-y-8">
                    {integrations.map((integration, index) => (
                        <IntegrationCard key={integration.id} integration={integration} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
