"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string, section?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        // Retrieve language from localStorage on mount if available
        const storedLang = localStorage.getItem("aql-lang") as Language | null;
        if (storedLang && (storedLang === "en" || storedLang === "ar")) {
            setLanguageState(storedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("aql-lang", lang);
    };

    useEffect(() => {
        // Update html dir attribute when language changes
        const html = document.documentElement;
        html.lang = language;
        html.dir = language === "ar" ? "rtl" : "ltr";
    }, [language]);

    // We'll import dictionaries directly in components for type safety, 
    // but a global 't' function can be useful for simpler generic keys if needed.
    const t = (key: string, section?: string) => {
        return key; // Placeholder for simple translation logic if required
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
