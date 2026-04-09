"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function PartnersTicker() {
    const { language } = useLanguage();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === "dark";

    // Now pointing directly to the actual image logo files in public/partners/
    const partners = [
        { name: "NVIDIA", filename: "Nvidia.svg", hasDark: true },
        { name: "Microsoft", filename: "Microsoft.svg" },
        { name: "Amazon", filename: "Amazon.svg" },
        { name: "Google", filename: "Google.svg" },
        { name: "Oracle", filename: "Oracle.svg" },
        { name: "IBM", filename: "IBM.svg" },
        { name: "SDAIA", filename: "SDAIA.svg", hasDark: true },
        { name: "STC", filename: "STC.svg" },
        { name: "Saudi Aramco", filename: "Aramco.svg" }
    ];

    // Duplicate array multiple times for smooth infinite scroll
    const items = [...partners, ...partners, ...partners];

    const title = language === "ar" 
        ? "شركاؤنا الاستراتيجيون" 
        : "Strategic Partners";

    return (
        <section className="py-12 bg-pureblack overflow-hidden border-t border-darkgray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <h3 className="text-sm font-semibold tracking-widest text-slategray uppercase">
                    {title}
                </h3>
            </div>
            
            {/* Ticker Container */}
            <div className="relative w-full overflow-hidden flex items-center h-20" dir="ltr">
                {/* Left gradient mask */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-pureblack to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex animate-marquee hover:animation-pause items-center">
                    {items.map((partner, idx) => {
                        const imageSrc = isDark && partner.hasDark 
                            ? `/partners/${partner.filename.replace('.svg', '-dark.svg')}`
                            : `/partners/${partner.filename}`;

                        return (
                            <div 
                                key={idx} 
                                className="flex items-center justify-center mx-12 w-40 h-16 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                            >
                                <img 
                                    src={imageSrc} 
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Right gradient mask */}
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-pureblack to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
}
