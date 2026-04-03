"use client";

import { motion } from "framer-motion";
import { useRef, useState, MouseEvent, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";
import AiPoweredAppDevelopment from "./icons/AiPoweredAppDevelopment";
import AiAgentIntegrationIcon from "./icons/AiAgentIntegrationIcon";
import AimlStrategyConsulting from "./icons/AimlStrategyConsulting";

const serviceIcons = {
    "ai-solutions": AiPoweredAppDevelopment,
    "ai-agents": AiAgentIntegrationIcon,
    "ai-consulting": AimlStrategyConsulting,
};

function ServiceCard({ service, index }: { service: any; index: number }) {
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

            <div className="relative z-10 flex flex-col h-full pointer-events-none text-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-darkgray text-purewhite mb-6 group-hover:scale-110 group-hover:bg-purewhite group-hover:text-pureblack transition-all duration-300">
                    <service.icon width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold text-purewhite mb-4">{service.title}</h3>
                <p className="text-slategray group-hover:text-purewhite transition-colors duration-300 ease-in-out leading-relaxed flex-grow">
                    {service.description}
                </p>
            </div>
        </motion.div>
    );
}

export function CoreServices() {
    const { language } = useLanguage();
    const d = dictionaries[language].services;

    const services = [
        {
            id: "ai-solutions",
            title: d.aiSolutionsTitle,
            description: d.aiSolutionsDesc,
            icon: serviceIcons["ai-solutions"],
        },
        {
            id: "ai-agents",
            title: d.aiAgentsTitle,
            description: d.aiAgentsDesc,
            icon: serviceIcons["ai-agents"],
        },
        {
            id: "ai-consulting",
            title: d.aiConsultingTitle,
            description: d.aiConsultingDesc,
            icon: serviceIcons["ai-consulting"],
        }
    ];

    return (
        <section id="services" className="py-24 bg-pureblack px-4 sm:px-6 lg:px-8 border-t border-darkgray">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold tracking-widest text-slategray uppercase mb-3">{d.tag}</h2>
                    <h3 className="text-3xl font-extrabold text-purewhite sm:text-4xl">{d.title}</h3>
                    <p className="mt-4 text-lg text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out max-w-3xl mx-auto">
                        {d.subtitle}
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
