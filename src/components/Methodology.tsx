"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";

export function Methodology() {
    const { language } = useLanguage();
    const d = dictionaries[language].methodology;

    const steps = [
        {
            number: "01",
            title: d.step1Title,
            description: d.step1Desc
        },
        {
            number: "02",
            title: d.step2Title,
            description: d.step2Desc
        },
        {
            number: "03",
            title: d.step3Title,
            description: d.step3Desc
        },
        {
            number: "04",
            title: d.step4Title,
            description: d.step4Desc
        }
    ];

    return (
        <section id="methodology" className="py-24 bg-monoblack border-t border-darkgray px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:flex md:items-end md:justify-between text-start">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-semibold tracking-widest text-slategray uppercase mb-3">{d.tag}</h2>
                        <h3 className="text-3xl font-extrabold text-purewhite sm:text-4xl">{d.title}</h3>
                        <p className="mt-4 text-lg text-slategray hover:text-purewhite transition-colors duration-300">
                            {d.subtitle}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative flex flex-col pt-8 group text-start"
                        >
                            {/* Decorative Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 start-[15%] w-full h-[1px] bg-darkgray -z-10" />
                            )}
                            
                            <div className="mb-6">
                                <span className="text-5xl font-black text-darkgray/50 group-hover:text-purewhite group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300">{step.number}</span>
                            </div>
                            
                            <h4 className="text-xl font-bold text-purewhite mb-4">{step.title}</h4>
                            <p className="text-slategray hover:text-purewhite transition-colors duration-300 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
