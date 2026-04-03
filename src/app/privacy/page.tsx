"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
    const { language } = useLanguage();

    return (
        <main className="flex min-h-screen flex-col bg-pureblack relative">
            <Navbar />
            <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {language === "en" ? <EnglishPrivacy /> : <ArabicPrivacy />}
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}

function EnglishPrivacy() {
    return (
        <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-purewhite mb-2">Privacy Policy</h1>
            <p className="text-slategray mb-10 text-sm">AQL Solutions — Effective 2026</p>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purewhite mb-4">1. Information We Collect</h2>
                <p className="text-slategray leading-relaxed mb-4">
                    We collect information to provide better services and communicate effectively with our clients. The types of data we collect include:
                </p>
                <ul className="space-y-4 text-slategray">
                    <li className="border-s-2 border-darkgray ps-4">
                        <strong className="text-purewhite">Website Usage Data:</strong> Information automatically collected when you visit our site, such as IP addresses, browser types, and analytics regarding how you interact with our pages.
                    </li>
                    <li className="border-s-2 border-darkgray ps-4">
                        <strong className="text-purewhite">Contact Information:</strong> Name, email address, phone number, and company details provided when you fill out forms or request consultations.
                    </li>
                    <li className="border-s-2 border-darkgray ps-4">
                        <strong className="text-purewhite">Diagnostic & Operational Data:</strong> During our &quot;Study and Diagnosis&quot; phase, we may review specific operational workflows to design custom solutions; however, this is always governed by strict Non-Disclosure Agreements (NDAs) prior to collection.
                    </li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purewhite mb-4">2. How We Use Your Information</h2>
                <p className="text-slategray leading-relaxed mb-4">
                    Your data is used strictly to improve your experience and deliver our services:
                </p>
                <ul className="space-y-3 text-slategray list-disc list-inside">
                    <li>To respond to your inquiries and provide requested AI consulting services.</li>
                    <li>To analyze website traffic and optimize our online presence.</li>
                    <li>To communicate updates regarding our services, technical roadmaps, or security protocols.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purewhite mb-4">3. Data Sovereignty and AI Processing</h2>
                <p className="text-slategray leading-relaxed mb-4">
                    As a provider of sovereign AI, we treat your operational and enterprise data differently than standard tech companies:
                </p>
                <div className="space-y-6">
                    <div className="border border-darkgray rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-purewhite mb-2">National Compliance</h3>
                        <p className="text-slategray leading-relaxed">
                            Our solutions are explicitly designed to comply with national data sovereignty and strict security protocols. This ensures absolute trust and full compliance with local Saudi regulations.
                        </p>
                    </div>
                    <div className="border border-darkgray rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-purewhite mb-2">On-Premise Deployment</h3>
                        <p className="text-slategray leading-relaxed">
                            For enterprise clients utilizing our sovereign language engine (LLM Engine), the systems are designed to operate directly on your own servers. This means your sensitive business data never leaves your internal infrastructure to train external public AI models.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purewhite mb-4">4. Data Security</h2>
                <p className="text-slategray leading-relaxed">
                    We implement state-of-the-art administrative, technical, and physical safeguards to protect your personal information. By adhering to strict security protocols, we protect against unauthorized access, alteration, disclosure, or destruction of your data.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purewhite mb-4">5. Sharing Your Information</h2>
                <p className="text-slategray leading-relaxed">
                    We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification with our trusted partners for the purposes outlined above.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purewhite mb-4">6. Changes to This Privacy Policy</h2>
                <p className="text-slategray leading-relaxed">
                    AQL Solutions reserves the right to update this privacy policy at any time. We encourage Users to frequently check this page for any changes.
                </p>
            </section>

            <div className="border-t border-darkgray pt-8 mt-12">
                <Link href="/" className="text-sm text-slategray hover:text-purewhite transition-colors inline-flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    <span>Back to Home</span>
                </Link>
            </div>
        </article>
    );
}

function ArabicPrivacy() {
    return (
        <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-purewhite mb-2">سياسة الخصوصية</h1>
            <p className="text-slategray mb-10 text-sm">شركة عقل للحلول — سارية المفعول 2026</p>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purewhite mb-4">1. المعلومات التي نجمعها</h2>
                <p className="text-slategray leading-relaxed mb-4">
                    نجمع المعلومات لتقديم خدمات أفضل والتواصل بفعالية مع عملائنا. تشمل أنواع البيانات التي نجمعها:
                </p>
                <ul className="space-y-4 text-slategray">
                    <li className="border-e-2 border-darkgray pe-4">
                        <strong className="text-purewhite">بيانات استخدام الموقع:</strong> معلومات تُجمع تلقائيًا عند زيارتك لموقعنا، مثل عناوين IP وأنواع المتصفحات وتحليلات تفاعلك مع صفحاتنا.
                    </li>
                    <li className="border-e-2 border-darkgray pe-4">
                        <strong className="text-purewhite">معلومات الاتصال:</strong> الاسم وعنوان البريد الإلكتروني ورقم الهاتف وتفاصيل الشركة المقدمة عند تعبئة النماذج أو طلب الاستشارات.
                    </li>
                    <li className="border-e-2 border-darkgray pe-4">
                        <strong className="text-purewhite">البيانات التشخيصية والتشغيلية:</strong> خلال مرحلة &quot;الدراسة والتشخيص&quot;، قد نراجع سير عمل تشغيلية محددة لتصميم حلول مخصصة؛ ومع ذلك، يخضع هذا دائمًا لاتفاقيات عدم إفصاح (NDAs) صارمة قبل الجمع.
                    </li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purewhite mb-4">2. كيف نستخدم معلوماتك</h2>
                <p className="text-slategray leading-relaxed mb-4">
                    تُستخدم بياناتك بشكل صارم لتحسين تجربتك وتقديم خدماتنا:
                </p>
                <ul className="space-y-3 text-slategray list-disc list-inside">
                    <li>للرد على استفساراتك وتقديم خدمات استشارات الذكاء الاصطناعي المطلوبة.</li>
                    <li>لتحليل حركة مرور الموقع وتحسين تواجدنا الإلكتروني.</li>
                    <li>لإبلاغك بالتحديثات المتعلقة بخدماتنا أو خرائط الطريق التقنية أو بروتوكولات الأمان.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purewhite mb-4">3. سيادة البيانات ومعالجة الذكاء الاصطناعي</h2>
                <p className="text-slategray leading-relaxed mb-4">
                    بصفتنا مزودًا للذكاء الاصطناعي السيادي، نتعامل مع بياناتك التشغيلية والمؤسسية بشكل مختلف عن شركات التقنية التقليدية:
                </p>
                <div className="space-y-6">
                    <div className="border border-darkgray rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-purewhite mb-2">الامتثال الوطني</h3>
                        <p className="text-slategray leading-relaxed">
                            حلولنا مصممة صراحةً للامتثال لسيادة البيانات الوطنية وبروتوكولات الأمان الصارمة. هذا يضمن ثقة مطلقة وامتثالًا كاملًا للوائح السعودية المحلية.
                        </p>
                    </div>
                    <div className="border border-darkgray rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-purewhite mb-2">النشر المحلي</h3>
                        <p className="text-slategray leading-relaxed">
                            لعملاء المؤسسات الذين يستخدمون محركنا اللغوي السيادي (LLM Engine)، فإن الأنظمة مصممة للعمل مباشرة على خوادمكم الخاصة. هذا يعني أن بياناتكم الحساسة لا تغادر بنيتكم التحتية الداخلية أبدًا لتدريب نماذج ذكاء اصطناعي عامة خارجية.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purewhite mb-4">4. أمن البيانات</h2>
                <p className="text-slategray leading-relaxed">
                    ننفذ ضمانات إدارية وتقنية ومادية متطورة لحماية معلوماتك الشخصية. من خلال الالتزام ببروتوكولات أمان صارمة، نحمي من الوصول غير المصرح به أو التعديل أو الإفصاح أو تدمير بياناتك.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purewhite mb-4">5. مشاركة معلوماتك</h2>
                <p className="text-slategray leading-relaxed">
                    لا نبيع أو نتاجر أو نؤجر معلومات التعريف الشخصية الخاصة بك للآخرين. قد نشارك معلومات ديموغرافية مجمّعة عامة غير مرتبطة بأي تعريف شخصي مع شركائنا الموثوقين للأغراض الموضحة أعلاه.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purewhite mb-4">6. التغييرات على سياسة الخصوصية</h2>
                <p className="text-slategray leading-relaxed">
                    تحتفظ شركة عقل للحلول بالحق في تحديث سياسة الخصوصية هذه في أي وقت. نشجع المستخدمين على مراجعة هذه الصفحة بشكل متكرر للاطلاع على أي تغييرات.
                </p>
            </section>

            <div className="border-t border-darkgray pt-8 mt-12">
                <Link href="/" className="text-sm text-slategray hover:text-purewhite transition-colors inline-flex items-center space-x-2 rtl:space-x-reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180"><path d="m15 18-6-6 6-6"/></svg>
                    <span>العودة للرئيسية</span>
                </Link>
            </div>
        </article>
    );
}
