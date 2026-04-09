"use client";

import { motion } from "framer-motion";
import { Building2, Landmark, Briefcase, HeartPulse } from "lucide-react";
import { useRef, useState, MouseEvent, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";

const sectorIcons = {
    finance: Landmark,
    gov: Building2,
    biz: Briefcase,
    vital: HeartPulse
};

function SectorCard({ sector, index }: { sector: any; index: number }) {
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
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className="relative flex items-start p-8 bg-pureblack border border-darkgray rounded-xl hover:border-purewhite hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 group overflow-hidden"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 60%)`
                }}
            />
            <div className="relative z-10 flex items-start pointer-events-none w-full text-start">
                <div className="bg-monoblack border border-darkgray p-4 rounded-lg me-6 group-hover:bg-purewhite group-hover:text-pureblack transition-all duration-300 text-purewhite flex-shrink-0">
                    <sector.icon size={28} />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-purewhite mb-2">{sector.title}</h4>
                    <p className="text-slategray text-sm leading-relaxed group-hover:text-purewhite transition-colors duration-300">
                        {sector.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export function Sectors() {
    const { language } = useLanguage();
    const d = dictionaries[language].sectors;

    const sectors = [
        {
            title: d.finance,
            description: d.financeDesc,
            icon: sectorIcons.finance
        },
        {
            title: d.gov,
            description: d.govDesc,
            icon: sectorIcons.gov
        },
        {
            title: d.biz,
            description: d.bizDesc,
            icon: sectorIcons.biz
        },
        {
            title: d.vital,
            description: d.vitalDesc,
            icon: sectorIcons.vital
        }
    ];

    return (
        <section id="sectors" className="py-24 bg-monoblack px-4 sm:px-6 lg:px-8 border-t border-darkgray">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:flex md:items-end md:justify-between text-start">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-semibold tracking-widest text-slategray uppercase mb-3">{d.tag}</h2>
                        <h3 className="text-3xl font-extrabold text-purewhite sm:text-4xl">{d.title}</h3>
                        <p className="mt-4 text-lg text-slategray hover:text-purewhite transition-colors duration-300">
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sectors.map((sector, index) => (
                        <SectorCard key={index} sector={sector} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
