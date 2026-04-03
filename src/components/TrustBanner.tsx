"use client";

import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";

export function TrustBanner() {
    const { language } = useLanguage();
    const t = dictionaries[language].trustBanner;

    // Duplicate the items so the marquee loops seamlessly
    const items = [t.item1, t.item2, t.item3, t.item4, t.item1, t.item2, t.item3, t.item4];

    return (
        <div className="bg-darkgray py-4 border-y border-slategray/20 overflow-hidden w-full relative h-14 flex items-center" dir="ltr">
            <div className="absolute flex whitespace-nowrap animate-marquee">
                {items.map((text, idx) => (
                    <div key={idx} className="flex items-center mx-8">
                        <span className="text-sm font-semibold tracking-widest text-slategray uppercase">{text}</span>
                        <span className="mx-8 text-slategray/40">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
