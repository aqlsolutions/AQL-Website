"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
    const [mounted, setMounted] = useState(false);
    const { language } = useLanguage();
    const t = dictionaries[language].demoModal;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-pureblack/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-monoblack border border-darkgray rounded-xl shadow-2xl overflow-hidden z-10"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-darkgray">
                            <h2 className="text-2xl font-bold text-purewhite">{t.title}</h2>
                            <button
                                onClick={onClose}
                                className="text-slategray hover:text-purewhite transition-colors p-1"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slategray">{t.fullName}</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 bg-pureblack border border-darkgray rounded-md text-purewhite placeholder:text-darkgray focus:outline-none focus:border-purewhite transition-colors"
                                    placeholder={t.fullNamePlaceholder}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slategray">{t.email}</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 bg-pureblack border border-darkgray rounded-md text-purewhite placeholder:text-darkgray focus:outline-none focus:border-purewhite transition-colors"
                                        placeholder={t.emailPlaceholder}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slategray">{t.phone}</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-2 bg-pureblack border border-darkgray rounded-md text-purewhite placeholder:text-darkgray focus:outline-none focus:border-purewhite transition-colors"
                                        placeholder={t.phonePlaceholder}
                                        dir="ltr"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slategray">{t.demoType}</label>
                                <select
                                    required
                                    defaultValue=""
                                    className="w-full px-4 py-2 bg-pureblack border border-darkgray rounded-md text-purewhite focus:outline-none focus:border-purewhite transition-colors appearance-none"
                                >
                                    <option value="" disabled>{t.selectOption}</option>
                                    <option value="enterprise">{t.optEnterprise}</option>
                                    <option value="security">{t.optSecurity}</option>
                                    <option value="consulting">{t.optConsulting}</option>
                                    <option value="other">{t.optOther}</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slategray">{t.message}</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-2 bg-pureblack border border-darkgray rounded-md text-purewhite placeholder:text-darkgray focus:outline-none focus:border-purewhite transition-colors resize-none"
                                    placeholder={t.messagePlaceholder}
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 bg-purewhite text-pureblack font-bold rounded-md hover:opacity-80 transition-colors duration-200"
                                >
                                    {t.submit}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
