"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";

export function Footer() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { language, setLanguage } = useLanguage();
    
    const d = dictionaries[language].footer;

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? theme === "dark" : false;
    return (
        <footer className="border-t border-darkgray bg-monoblack py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 items-start">
                    {/* Col 1: Logo, Tagline & Copyright */}
                    <div className="flex flex-col space-y-4 md:col-span-1">
                        <div className="flex flex-col space-y-1">
                            <Link href="/" className="flex items-center">
                                <Image
                                    src={isDark ? "/Logo_AQL_White.png" : "/Logo_AQL_Black.png"}
                                    alt="AQL Solutions"
                                    width={180}
                                    height={45}
                                    className="h-12 w-auto"
                                />
                            </Link>
                            <p className="text-sm text-slategray font-medium italic">{d.tagline}</p>
                        </div>
                        <div className="text-sm text-slategray">
                            <p>{d.madeIn}</p>
                            <p className="mt-1 text-xs">{d.rights}</p>
                        </div>
                    </div>

                    {/* Col 2: Contact Info */}
                    <div className="flex flex-col space-y-3 md:col-span-1">
                        <h4 className="text-purewhite font-semibold text-sm mb-1">{d.contactUs}</h4>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-slategray hover:text-purewhite transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span>+966 11 XXX XXXX</span>
                        </div>
                        <Link href="mailto:info@aql.solutions" className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-slategray hover:text-purewhite transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            <span>info@aql.solutions</span>
                        </Link>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-slategray hover:text-purewhite transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            <span>{dictionaries[language].nav.location}</span>
                        </div>
                    </div>

                    {/* Col 3: Social Media */}
                    <div className="flex flex-col space-y-3 md:col-span-1">
                        <h4 className="text-purewhite font-semibold text-sm mb-1">{language === "ar" ? "تابعنا" : "Follow Us"}</h4>
                        <Link
                            href="https://linkedin.com/company/aqlsolutions"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-slategray hover:text-purewhite transition-colors group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <span className="group-hover:underline">linkedin.com/aqlsolutions</span>
                        </Link>
                        <Link
                            href="https://x.com/aqlsolutions"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-slategray hover:text-purewhite transition-colors group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                            <span className="group-hover:underline">x.com/aqlsolutions</span>
                        </Link>
                    </div>

                    {/* Col 4: Links & Language */}
                    <div className="flex flex-col space-y-4 items-start md:items-end md:col-span-1">
                        <Link href="/privacy" className="text-sm text-slategray hover:text-purewhite transition-colors">
                            {d.privacy}
                        </Link>
                        <button 
                            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                            className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-slategray hover:text-purewhite transition-colors group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-purewhite"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                            <span>{d.language}</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
