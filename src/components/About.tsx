"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";

export function About() {
    const { language } = useLanguage();
    const d = dictionaries[language].about;

    return (
        <section id="about" className="py-24 bg-pureblack px-4 sm:px-6 lg:px-8 border-t border-darkgray">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-semibold tracking-widest text-slategray uppercase mb-3">{d.tag}</h2>
                        <h3 className="text-3xl font-extrabold text-purewhite sm:text-4xl mb-6">
                            {d.title}
                        </h3>
                        <p className="text-lg text-slategray leading-relaxed mb-6 hover:text-purewhite transition-colors duration-300">
                            {d.desc1}
                        </p>
                        <p className="text-lg text-slategray leading-relaxed hover:text-purewhite transition-colors duration-300">
                            {d.desc2}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 rounded-xl blur-xl bg-gradient-to-tr from-darkgray/30 to-transparent opacity-50 pointer-events-none" />
                        <div className="relative bg-monoblack border border-darkgray rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.3)] dark:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                            <h4 className="text-xl font-bold text-purewhite mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-purewhite text-pureblack flex items-center justify-center me-3 text-sm">✓</span>
                                {d.commitment}
                            </h4>
                            <p className="text-slategray leading-relaxed">
                                {d.desc3}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
