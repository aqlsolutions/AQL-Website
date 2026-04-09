"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { DemoModal } from "./DemoModal";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";

export function Navbar() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const [isCompanyHovered, setIsCompanyHovered] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const { language, setLanguage } = useLanguage();

    const d = dictionaries[language].nav;

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? theme === "dark" : false;

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsCompanyHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsCompanyHovered(false);
        }, 150); // slight delay to prevent jitter
    };

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 inset-x-0 z-50 border-b border-darkgray bg-monoblack/80 backdrop-blur-md"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={isDark ? "/Logo_AQL_White.png" : "/Logo_AQL_Black.png"}
                                alt="AQL Solutions"
                                width={240}
                                height={60}
                                className="h-16 w-auto"
                                priority
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-x-8">
                        <Link href="/#services" className="text-sm font-medium text-slategray hover:text-purewhite transition-colors">{d.services}</Link>
                        <Link href="/#methodology" className="text-sm font-medium text-slategray hover:text-purewhite transition-colors">{d.methodology}</Link>
                        <Link href="/#integrations" className="text-sm font-medium text-slategray hover:text-purewhite transition-colors">{d.integrations}</Link>
                    </div>
                    <div className="hidden md:flex items-center gap-x-6">
                        <button 
                            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                            className="text-sm font-medium text-slategray hover:text-purewhite transition-colors uppercase"
                        >
                            {language === 'en' ? 'AR' : 'EN'}
                        </button>
                        <ThemeToggle />

                        {/* Mega Menu Trigger */}
                        <div
                            className="relative h-20 flex items-center"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-slategray hover:text-purewhite transition-colors focus:outline-none h-full">
                                <span>{d.contact}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isCompanyHovered ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            {/* Mega Menu Panel */}
                            {isCompanyHovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-20 end-0 w-[800px] bg-pureblack/95 backdrop-blur-xl border border-darkgray rounded-sm shadow-2xl overflow-hidden"
                                >
                                    <div className="grid grid-cols-3 gap-8 p-8 text-start">

                                        {/* Column 1: Summary */}
                                        <div className="col-span-1">
                                            <h3 className="text-xs font-semibold text-slategray uppercase tracking-wider mb-4">{d.aboutTitle}</h3>
                                            <p className="text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out leading-relaxed">
                                                {d.aboutDesc}
                                            </p>
                                        </div>

                                        {/* Column 2: Contact */}
                                        <div className="col-span-1 border-s border-darkgray ps-8">
                                            <h3 className="text-xs font-semibold text-slategray uppercase tracking-wider mb-4">{d.contactTitle}</h3>
                                            <ul className="space-y-4">
                                                <li className="flex items-start space-x-3 rtl:space-x-reverse">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purewhite mt-0.5 flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                                    <span className="text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out">+966 53 539 0890</span>
                                                </li>
                                                <li className="flex items-start space-x-3 rtl:space-x-reverse">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purewhite mt-0.5 flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                                    <span className="text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out">{d.email}</span>
                                                </li>
                                                <li className="flex items-start space-x-3 rtl:space-x-reverse">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purewhite mt-0.5 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                                    <span className="text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out">{d.location}</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Column 3: Links */}
                                        <div className="col-span-1 border-s border-darkgray ps-8">
                                            <h3 className="text-xs font-semibold text-slategray uppercase tracking-wider mb-4">{d.connect}</h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <Link href="https://linkedin.com/company/aqlsolutions" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out">
                                                        <span>LinkedIn</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 rtl:-scale-x-100"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://x.com/AqlSolutions" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out">
                                                        <span>X</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 rtl:-scale-x-100"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/aqlsolutions.sa/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out">
                                                        <span>Instagram</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 rtl:-scale-x-100"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.tiktok.com/@aqlsolutions" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out">
                                                        <span>TikTok</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 rtl:-scale-x-100"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                                    </Link>
                                                </li>
                                                <li className="pt-6 mt-2 border-t border-darkgray">
                                                    <button
                                                        onClick={() => setIsDemoModalOpen(true)}
                                                        className="flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-sm text-pureblack bg-purewhite hover:bg-purewhite/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-200 w-full"
                                                    >
                                                        {d.bookDemo}
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center md:hidden gap-x-2">
                        <button 
                            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                            className="text-sm font-medium text-slategray hover:text-purewhite transition-colors uppercase px-2"
                        >
                            {language === 'en' ? 'AR' : 'EN'}
                        </button>
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slategray hover:text-purewhite focus:outline-none"
                        >
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="md:hidden bg-monoblack border-b border-darkgray text-start"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/#services" className="block px-3 py-2 text-base font-medium text-slategray hover:text-purewhite transition-colors">{d.services}</Link>
                        <Link href="/#methodology" className="block px-3 py-2 text-base font-medium text-slategray hover:text-purewhite transition-colors">{d.methodology}</Link>
                        <Link href="/#integrations" className="block px-3 py-2 text-base font-medium text-slategray hover:text-purewhite transition-colors">{d.integrations}</Link>

                        {/* Mobile Company Accordion */}
                        <div className="px-3 py-2">
                            <button
                                onClick={() => setIsCompanyHovered(!isCompanyHovered)}
                                className="flex items-center justify-between w-full text-base font-medium text-slategray hover:text-purewhite transition-colors focus:outline-none"
                            >
                                <span>{d.contact}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isCompanyHovered ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            {isCompanyHovered && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="mt-4 ps-4 space-y-4 border-s border-darkgray"
                                >
                                    <div>
                                        <h3 className="text-[11px] font-semibold text-slategray uppercase tracking-wider mb-2">{d.contactTitle}</h3>
                                        <p className="text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out">+966 53 539 0890</p>
                                        <p className="text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out">{d.email}</p>
                                        <p className="text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out">{d.location}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-[11px] font-semibold text-slategray uppercase tracking-wider mb-2">{d.connect}</h3>
                                        <Link href="https://linkedin.com/company/aqlsolutions" target="_blank" rel="noopener noreferrer" className="block text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out mb-2">LinkedIn</Link>
                                        <Link href="https://x.com/AqlSolutions" target="_blank" rel="noopener noreferrer" className="block text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out mb-2">X</Link>
                                        <Link href="https://www.instagram.com/aqlsolutions.sa/" target="_blank" rel="noopener noreferrer" className="block text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out mb-2">Instagram</Link>
                                        <Link href="https://www.tiktok.com/@aqlsolutions" target="_blank" rel="noopener noreferrer" className="block text-sm text-slategray hover:text-purewhite transition-colors duration-300 ease-in-out mb-6">TikTok</Link>
                                        <button onClick={() => setIsDemoModalOpen(true)} className="block px-3 py-2 text-sm font-medium text-center bg-purewhite text-pureblack w-full rounded-sm transition-all duration-200 hover:bg-purewhite/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">{d.bookDemo}</button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
            <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        </motion.nav>
    );
}
