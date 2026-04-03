"use client";

import { motion } from "framer-motion";
import TestingAndQualityAssurance from "./icons/TestingAndQualityAssurance";
import DataEngineering2 from "./icons/DataEngineering2";
import MachineLearning from "./icons/MachineLearning";
import AiAgentIntegrationIcon from "./icons/AiAgentIntegrationIcon";
import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";

export function Architecture() {
    const { language } = useLanguage();
    const d = dictionaries[language].architecture;

    return (
        <section id="architecture" className="py-24 bg-monoblack border-y border-darkgray px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-purewhite sm:text-4xl">{d.title}</h2>
                    <p className="mt-4 text-lg text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out max-w-3xl mx-auto">
                        {d.subtitle}
                    </p>
                </div>

                {/* CSS Diagram Wrapper */}
                <div className="relative mx-auto mt-12 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 relative p-8 md:p-12">

                        {/* The Enterprise Firewall Boundary */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative p-8 border-2 border-dashed border-slategray/50 rounded-2xl w-full md:w-2/3 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
                        >
                            <div className="absolute -top-4 start-8 bg-monoblack px-4 flex items-center space-x-2 text-purewhite font-semibold">
                                <TestingAndQualityAssurance width={24} height={24} className="text-slategray" />
                                <span>{d.firewall}</span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 mt-4">
                                <div className="flex-1 bg-darkgray/50 border border-darkgray rounded-xl p-6 flex flex-col items-center justify-center text-center">
                                    <DataEngineering2 width={48} height={48} className="text-purewhite mb-4" />
                                    <span className="font-bold text-purewhite">{d.internalDrive}</span>
                                    <span className="text-xs text-slategray mt-2">{d.localStorage}</span>
                                </div>

                                <div className="hidden sm:flex items-center justify-center text-slategray">
                                    <div className="h-0.5 w-12 bg-slategray/50 relative">
                                        <div className="absolute end-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t-2 border-e-2 border-slategray/50 rtl:rotate-[225deg]"></div>
                                    </div>
                                </div>

                                <div className="flex-1 bg-pureblack border border-darkgray rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(0,0,0,0.15)] group-hover:shadow-[0_0_30px_rgba(0,0,0,0.25)] dark:shadow-[0_0_30px_rgba(255,255,255,0.1)] dark:group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] relative overflow-hidden group transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purewhite/20 dark:via-purewhite/10 to-transparent -translate-x-full group-hover:translate-x-full rtl:translate-x-full rtl:group-hover:-translate-x-full transition-transform duration-1000"></div>
                                    <MachineLearning width={48} height={48} className="text-purewhite mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] dark:group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-all duration-300" />
                                    <span className="font-bold text-purewhite drop-shadow-[0_0_4px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.4)] dark:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300">{d.aqlEngine}</span>
                                    <span className="text-xs text-slategray mt-2">{d.inferencing}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Public Cloud Outside Boundary */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/3 flex flex-col items-center justify-center opacity-40 relative"
                        >
                            {/* Connection blocked line */}
                            <div className="hidden md:block absolute start-0 top-1/2 -translate-y-1/2 -translate-x-12 rtl:translate-x-12 w-12 h-0.5 bg-red-900/50"></div>

                            <div className="bg-pureblack border border-darkgray rounded-xl p-6 flex flex-col items-center justify-center text-center w-full max-w-[200px] relative">
                                <div className="absolute -start-3 top-1/2 -translate-y-1/2 bg-monoblack rounded-full p-1 border border-darkgray text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                </div>
                                <AiAgentIntegrationIcon width={48} height={48} className="text-slategray mb-4" />
                                <span className="font-bold text-slategray line-through">{d.publicCloud}</span>
                                <span className="text-xs text-slategray/60 mt-2">{d.thirdParty}</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
