"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";

export function Impact() {
    const { language } = useLanguage();
    const d = dictionaries[language].impact;

    const impacts = [
        {
            title: d.cost,
            description: d.costDesc
        },
        {
            title: d.efficiency,
            description: d.efficiencyDesc
        },
        {
            title: d.decisions,
            description: d.decisionsDesc
        },
        {
            title: d.compliance,
            description: d.complianceDesc
        }
    ];

    const technologies = [
        d.rpa + " - " + d.rpaDesc,
        d.ml + " - " + d.mlDesc,
        d.genai + " - " + d.genaiDesc
    ];

    return (
        <section id="impact" className="py-24 bg-pureblack px-4 sm:px-6 lg:px-8 border-t border-darkgray">
            <div className="max-w-7xl mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                   {/* Impact Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-semibold tracking-widest text-slategray uppercase mb-3">{d.tag}</h2>
                        <h3 className="text-3xl font-extrabold text-purewhite sm:text-4xl mb-8">{d.impactSub}</h3>
                        <div className="space-y-6 text-start">
                            {impacts.map((impact, idx) => (
                                <div key={idx} className="flex flex-col border-s-2 border-darkgray ps-6 hover:border-purewhite transition-all duration-300">
                                    <h4 className="text-xl font-bold text-purewhite mb-2">{impact.title}</h4>
                                    <p className="text-slategray hover:text-purewhite transition-colors duration-300">
                                        {impact.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technologies Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-monoblack border border-darkgray rounded-xl p-10 flex flex-col justify-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-darkgray/10 to-transparent pointer-events-none" />
                        <h2 className="text-sm font-semibold tracking-widest text-slategray uppercase mb-3 relative z-10 text-start">{d.title}</h2>
                        <h3 className="text-3xl font-extrabold text-purewhite sm:text-4xl mb-8 relative z-10 text-start">{d.modelsSub}</h3>
                        
                        <ul className="space-y-4 relative z-10">
                            {technologies.map((tech, idx) => (
                                <li key={idx} className="flex items-center text-lg text-slategray group-hover:text-purewhite transition-colors duration-300 text-start">
                                    <svg className="w-5 h-5 me-4 text-purewhite flex-shrink-0 rtl:-scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>{tech}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
               </div>
            </div>
        </section>
    );
}
