import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import emailHeroVideo from "../../assets/emailhero.mp4";
import email1Img from "../../assets/email1.jpg";
import email2Img from "../../assets/email2.jpg";
import faqImg from "../../assets/faq.jpg";

const translations = {
    English: {
        title: "Email Marketing & Automation",
        heroDesc: "Nurture leads, boost engagement, and drive conversions with targeted email campaigns and smart automation.",
        whyTitle: "Why Email Marketing & Automation?",
        whyDesc: "Email marketing delivers your message directly to your audience’s inbox. Automation ensures the right message reaches the right person at the right time—every time.",
        whyList: [
            "Build lasting relationships with personalized emails",
            "Automate follow-ups and nurture leads efficiently",
            "Increase engagement and drive repeat business",
            "Track results and optimize every campaign",
            "Deliver targeted messages based on user behavior",
            "Boost customer retention with timely offers",
            "Reduce manual workload and save valuable time"
        ],
        approachTitle: "Our Approach",
        approachDesc1: "We begin by analyzing your audience, business goals, and current email performance. Our experts segment your list, identify key touchpoints, and design personalized journeys for every subscriber.",
        approachDesc2: "We craft compelling email copy and visuals, set up automation flows, and rigorously test every campaign. Our approach combines creativity with data-driven optimization for maximum engagement.",
        approachDesc3: "We monitor results, refine strategies, and provide transparent reporting so you always know the impact of your email marketing efforts.",
        timeline: [
            { title: 'STRATEGY LAUNCH', year: '2020' },
            { title: 'BRAND GROWTH', year: '2021' },
            { title: 'GLOBAL REACH', year: '2022' },
            { title: 'INNOVATION HUB', year: '2023' },
            { title: 'PERFORMANCE FOCUS', year: '2024' },
            { title: 'AI-DRIVEN MARKETING', year: '2025' },
        ],
        benefitsTitle: "Email Marketing & Automation Benefits",
        benefits: [
            { title: "Personalized Messaging", desc: "Send the right message to the right person at the right time with advanced segmentation and automation." },
            { title: "Automated Workflows", desc: "Save time and increase efficiency with automated welcome series, follow-ups, and drip campaigns." },
            { title: "Higher Engagement", desc: "Boost open and click rates with compelling content and targeted offers your audience loves." },
            { title: "Measurable Results", desc: "Track every open, click, and conversion to optimize your campaigns and prove ROI." },
        ],
        faqsTitle: "Email Marketing FAQs",
        faqs: [
            {
                q: 'What is email marketing?',
                a: 'Email marketing is a direct way to communicate with your audience, promote your brand, and drive sales through targeted messages.'
            },
            {
                q: 'What is marketing automation?',
                a: 'Automation uses technology to send personalized emails at the right time, improving engagement and efficiency.'
            },
            {
                q: 'How do you grow my email list?',
                a: 'We use lead magnets, sign-up forms, and ethical list-building strategies to grow your subscriber base.'
            },
            {
                q: 'How do you measure email campaign success?',
                a: 'We track open rates, click-through rates, conversions, and ROI to measure campaign effectiveness.'
            },
            {
                q: 'Do you comply with email regulations?',
                a: 'Yes, we follow all major regulations (GDPR, CAN-SPAM) to keep your campaigns compliant and your audience protected.'
            }
        ],
        ctaTitle: "Ready to Grow with Email Marketing?",
        ctaDesc: "Let our email marketing experts help you nurture leads and grow your business. Contact us today for a free strategy session!",
        ctaBtn: "Get Started"
    },
    Arabic: {
        title: "التسويق عبر البريد الإلكتروني والأتمتة",
        heroDesc: "نمّي العملاء المحتملين، وزد التفاعل، وحقق التحويلات من خلال حملات بريد إلكتروني مستهدفة وأتمتة ذكية.",
        whyTitle: "لماذا التسويق عبر البريد الإلكتروني والأتمتة؟",
        whyDesc: "التسويق عبر البريد الإلكتروني يوصّل رسالتك مباشرة إلى صندوق وارد جمهورك. الأتمتة تضمن وصول الرسالة الصحيحة إلى الشخص المناسب في الوقت المناسب—دائمًا.",
        whyList: [
            "بناء علاقات دائمة مع رسائل بريد إلكتروني مخصصة",
            "أتمتة المتابعات ورعاية العملاء المحتملين بكفاءة",
            "زيادة التفاعل وتحفيز تكرار الأعمال",
            "تتبع النتائج وتحسين كل حملة",
            "توصيل رسائل مستهدفة بناءً على سلوك المستخدم",
            "تعزيز الاحتفاظ بالعملاء من خلال العروض في الوقت المناسب",
            "تقليل العمل اليدوي وتوفير الوقت الثمين"
        ],
        approachTitle: "نهجنا",
        approachDesc1: "نبدأ بتحليل جمهورك وأهداف عملك وأداء البريد الإلكتروني الحالي. يقوم خبراؤنا بتقسيم قائمتك، وتحديد نقاط التواصل الرئيسية، وتصميم رحلات مخصصة لكل مشترك.",
        approachDesc2: "نكتب نصوص بريد إلكتروني جذابة، ونصمم صورًا، وننشئ تدفقات أتمتة، ونختبر كل حملة بدقة. يجمع نهجنا بين الإبداع والتحسين المستند إلى البيانات لتحقيق أقصى تفاعل.",
        approachDesc3: "نراقب النتائج، ونحسن الاستراتيجيات، ونقدم تقارير شفافة حتى تعرف دائمًا تأثير جهود التسويق عبر البريد الإلكتروني.",
        timeline: [
            { title: 'إطلاق الاستراتيجية', year: '2020' },
            { title: 'نمو العلامة التجارية', year: '2021' },
            { title: 'الوصول العالمي', year: '2022' },
            { title: 'مركز الابتكار', year: '2023' },
            { title: 'تركيز الأداء', year: '2024' },
            { title: 'تسويق مدعوم بالذكاء الاصطناعي', year: '2025' },
        ],
        benefitsTitle: "فوائد التسويق عبر البريد الإلكتروني والأتمتة",
        benefits: [
            { title: "رسائل مخصصة", desc: "أرسل الرسالة الصحيحة للشخص المناسب في الوقت المناسب من خلال التقسيم والأتمتة المتقدمة." },
            { title: "تدفقات عمل مؤتمتة", desc: "وفر الوقت وزد الكفاءة من خلال سلاسل الترحيب المؤتمتة والمتابعات وحملات التنقيط." },
            { title: "تفاعل أعلى", desc: "زد معدلات الفتح والنقر من خلال محتوى جذاب وعروض مستهدفة يحبها جمهورك." },
            { title: "نتائج قابلة للقياس", desc: "تتبع كل عملية فتح ونقر وتحويل لتحسين حملاتك وإثبات العائد على الاستثمار." },
        ],
        faqsTitle: "أسئلة شائعة حول التسويق عبر البريد الإلكتروني",
        faqs: [
            {
                q: 'ما هو التسويق عبر البريد الإلكتروني؟',
                a: 'التسويق عبر البريد الإلكتروني هو وسيلة مباشرة للتواصل مع جمهورك، وتعزيز علامتك التجارية، وزيادة المبيعات من خلال رسائل مستهدفة.'
            },
            {
                q: 'ما هي الأتمتة في التسويق؟',
                a: 'تستخدم الأتمتة التكنولوجيا لإرسال رسائل بريد إلكتروني مخصصة في الوقت المناسب، مما يزيد التفاعل والكفاءة.'
            },
            {
                q: 'كيف تنمون قائمتي البريدية؟',
                a: 'نستخدم مغريات الاشتراك ونماذج التسجيل واستراتيجيات بناء القوائم الأخلاقية لتنمية قاعدة المشتركين لديك.'
            },
            {
                q: 'كيف تقيسون نجاح حملات البريد الإلكتروني؟',
                a: 'نتتبع معدلات الفتح والنقر والتحويل والعائد على الاستثمار لقياس فعالية الحملات.'
            },
            {
                q: 'هل تلتزمون بتنظيمات البريد الإلكتروني؟',
                a: 'نعم، نلتزم بجميع التنظيمات الرئيسية (GDPR، CAN-SPAM) للحفاظ على امتثال حملاتك وحماية جمهورك.'
            }
        ],
        ctaTitle: "جاهز للنمو مع التسويق عبر البريد الإلكتروني؟",
        ctaDesc: "دع خبراء التسويق عبر البريد الإلكتروني يساعدونك في رعاية العملاء المحتملين وتنمية عملك. تواصل معنا اليوم لجلسة استراتيجية مجانية!",
        ctaBtn: "ابدأ الآن"
    },
    Hebrew: {
        title: "שיווק בדוא\"ל ואוטומציה",
        heroDesc: "טפחו לידים, הגבירו מעורבות והניעו המרות עם קמפיינים ממוקדים ואוטומציה חכמה בדוא\"ל.",
        whyTitle: "למה שיווק בדוא\"ל ואוטומציה?",
        whyDesc: "שיווק בדוא\"ל מעביר את המסר שלך ישירות לתיבת הדואר של הקהל שלך. אוטומציה מבטיחה שהמסר הנכון יגיע לאדם הנכון בזמן הנכון—תמיד.",
        whyList: [
            "בנו קשרים ארוכי טווח עם הודעות דוא\"ל מותאמות אישית",
            "אוטומציה של מעקבים וטיפוח לידים ביעילות",
            "הגבירו מעורבות והניעו רכישות חוזרות",
            "עקבו אחרי תוצאות ושפרו כל קמפיין",
            "שלחו מסרים ממוקדים לפי התנהגות המשתמש",
            "הגבירו שימור לקוחות עם הצעות בזמן הנכון",
            "הפחיתו עבודה ידנית וחסכו זמן יקר"
        ],
        approachTitle: "הגישה שלנו",
        approachDesc1: "אנו מתחילים בניתוח הקהל, מטרות העסק וביצועי הדוא\"ל הנוכחיים. המומחים שלנו מחלקים את הרשימה, מזהים נקודות מגע מרכזיות ומעצבים מסעות מותאמים אישית לכל נרשם.",
        approachDesc2: "אנו יוצרים תוכן דוא\"ל מושך, מעצבים ויזואלים, בונים זרימות אוטומציה ובודקים כל קמפיין בקפידה. הגישה שלנו משלבת יצירתיות עם אופטימיזציה מבוססת נתונים למעורבות מקסימלית.",
        approachDesc3: "אנו עוקבים אחרי תוצאות, משפרים אסטרטגיות ומספקים דוחות שקופים כדי שתמיד תדע את השפעת מאמצי השיווק בדוא\"ל שלך.",
        timeline: [
            { title: 'השקת אסטרטגיה', year: '2020' },
            { title: 'צמיחת מותג', year: '2021' },
            { title: 'הגעה גלובלית', year: '2022' },
            { title: 'מרכז חדשנות', year: '2023' },
            { title: 'מיקוד ביצועים', year: '2024' },
            { title: 'שיווק מבוסס בינה מלאכותית', year: '2025' },
        ],
        benefitsTitle: "יתרונות שיווק בדוא\"ל ואוטומציה",
        benefits: [
            { title: "הודעות מותאמות אישית", desc: "שלח את המסר הנכון לאדם הנכון בזמן הנכון עם סגמנטציה ואוטומציה מתקדמת." },
            { title: "זרימות עבודה אוטומטיות", desc: "חסוך זמן והגבר יעילות עם סדרות קבלת פנים, מעקבים וקמפיינים אוטומטיים." },
            { title: "מעורבות גבוהה יותר", desc: "הגבר שיעורי פתיחה והקלקה עם תוכן מושך והצעות ממוקדות שהקהל שלך אוהב." },
            { title: "תוצאות מדידות", desc: "עקוב אחרי כל פתיחה, הקלקה והמרה כדי לשפר קמפיינים ולהוכיח ROI." },
        ],
        faqsTitle: "שאלות נפוצות על שיווק בדוא\"ל",
        faqs: [
            {
                q: 'מה זה שיווק בדוא"ל?',
                a: 'שיווק בדוא"ל הוא דרך ישירה לתקשר עם הקהל שלך, לקדם את המותג ולהניע מכירות באמצעות מסרים ממוקדים.'
            },
            {
                q: 'מהי אוטומציה בשיווק?',
                a: 'אוטומציה משתמשת בטכנולוגיה לשליחת הודעות דוא"ל מותאמות אישית בזמן הנכון, לשיפור מעורבות ויעילות.'
            },
            {
                q: 'איך אתם מגדילים את רשימת הדוא"ל שלי?',
                a: 'אנו משתמשים במגנטים לידים, טפסי הרשמה ואסטרטגיות בניית רשימות אתיות להגדלת בסיס המנויים שלך.'
            },
            {
                q: 'איך מודדים הצלחת קמפיין דוא"ל?',
                a: 'אנו עוקבים אחרי שיעורי פתיחה, הקלקה, המרות ו-ROI כדי למדוד אפקטיביות.'
            },
            {
                q: 'האם אתם עומדים בתקנות הדוא"ל?',
                a: 'כן, אנו עומדים בכל התקנות המרכזיות (GDPR, CAN-SPAM) כדי לשמור על תאימות הקמפיינים ולהגן על הקהל שלך.'
            }
        ],
        ctaTitle: "מוכנים לצמוח עם שיווק בדוא\"ל?",
        ctaDesc: "תן למומחי הדוא\"ל שלנו לעזור לך לטפח לידים ולגדל את העסק שלך. צור קשר היום לפגישת אסטרטגיה חינם!",
        ctaBtn: "התחל עכשיו"
    }
};

function getDir(language) {
    return language === "Arabic" || language === "Hebrew" ? "rtl" : "ltr";
}

export default function EmailMarketingAutomation({ darkTheme, setDarkTheme, language = "English", setLanguage }) {
    const t = translations[language] || translations["English"];
    const dir = getDir(language);
    return (
        <div dir={dir}>
            <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />
            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={emailHeroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
                <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
                        {t.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-2 max-w-2xl mx-auto drop-shadow-md">
                        {t.heroDesc}
                    </p>
                </div>
            </section>

            {/* Why This Service Matters Section (Theme Aware) */}
            <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-black' : 'bg-white'}`}>
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 px-4">
                    {/* Left: Image */}
                    <div className="md:w-1/2 w-full flex justify-center items-center mb-8 md:mb-0 min-h-[350px]">
                        <img 
                            src={email1Img} 
                            alt={t.whyTitle} 
                            className="rounded-2xl shadow-xl max-w-lg w-full object-cover h-auto md:h-full" 
                            style={{ maxHeight: '420px', height: '100%' }}
                        />
                    </div>
                    {/* Right: Content */}
                    <div className="md:w-1/2 w-full flex flex-col items-start">
                        <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 tracking-wide ${darkTheme ? 'text-white' : 'text-[#7c5dc7]'}`}>{t.whyTitle}</h2>
                        <p className={`text-lg mb-4 text-justify ${darkTheme ? 'text-white' : 'text-[#232136]'}`}>{t.whyDesc}</p>
                        <ul className={`list-disc pl-6 space-y-2 text-justify ${darkTheme ? 'text-white' : 'text-[#232136]'}`}>
                            {t.whyList.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="w-full py-16 bg-[#c7a6fa] text-white flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-black text-left">{t.approachTitle}</h2>
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
                    {/* Left: Text Content - Expanded */}
                    <div className="md:w-1/2 w-full flex flex-col items-start">
                        <p className="text-lg mb-4 text-justify">{t.approachDesc1}</p>
                        <p className="text-base mb-4 text-justify">{t.approachDesc2}</p>
                        <p className="text-base mb-4 text-justify">{t.approachDesc3}</p>
                    </div>
                    {/* Right: Timeline or Image */}
                    <div className="md:w-1/2 w-full flex flex-wrap justify-center gap-6">
                        {t.timeline.map((item, idx) => (
                            <div key={idx} className="w-36 h-40 flex flex-col items-center justify-center relative">
                                <svg viewBox="0 0 100 115" className="w-full h-full">
                                    <polygon points="50,5 95,32.5 95,82.5 50,110 5,82.5 5,32.5" fill="#fff" stroke="#a78bfa" strokeWidth="2" />
                                </svg>
                                <div className="absolute top-10 left-0 w-full flex flex-col items-center px-2">
                                    <span className="text-sm text-[#7c3aed] font-semibold tracking-wide mb-1 text-center">{item.title}</span>
                                    <span className="text-2xl text-[#6d28d9] font-bold text-center">{item.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section (Theme Aware) */}
            <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-black' : 'bg-white'}`}>
                <h2 className={`text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-center ${darkTheme ? 'text-white' : 'text-[#7c3aed]'}`}>{t.benefitsTitle}</h2>
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
                    {/* Left: Content (2x2 Grid of Cards) */}
                    <div className="md:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-8 order-1 md:order-1">
                        {t.benefits.map((card, idx) => (
                            <div key={idx} className={
                                idx % 2 === 0
                                    ? "rounded-tl-3xl rounded-br-[60px] bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] p-6 shadow-lg text-white"
                                    : `${darkTheme ? 'bg-[#232136] text-white' : 'bg-white text-[#7c3aed]'} rounded-tr-3xl rounded-bl-[60px] p-6 shadow-lg`
                            }>
                                <h3 className={`font-bold text-lg mb-2 ${idx % 2 === 0 ? 'text-white' : (darkTheme ? 'text-white' : 'text-[#7c3aed]')}`}>{card.title}</h3>
                                <p>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                    {/* Right: Image */}
                    <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 order-2 md:order-2">
                        <img src={email2Img} alt={t.benefitsTitle} className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="w-full py-16 bg-[#c7a6fa] text-white flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-black text-center">{t.faqsTitle}</h2>
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
                    {/* Left: FAQ Image */}
                    <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 min-h-full">
                        <img src={faqImg} alt={t.faqsTitle} className="rounded-2xl shadow-xl max-w-md w-full object-cover h-full min-h-[400px]" />
                    </div>
                    {/* Right: FAQ Accordion */}
                    <div className="md:w-1/2 w-full min-h-full flex flex-col justify-center">
                        <div className="divide-y divide-violet-200 rounded-xl bg-white shadow-lg">
                            {t.faqs.map((faq, idx) => (
                                <details key={idx} className="group p-6 cursor-pointer">
                                    <summary className="font-semibold text-lg text-black group-open:text-[#a78bfa] transition-colors flex items-center justify-between">
                                        {faq.q}
                                        <span className="ml-2 group-open:rotate-90 transition-transform">
                                            <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#7c3aed] border-2 border-[#6d28d9] shadow">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <polygon points="5,3 12,8 5,13" fill="#fff" />
                                                </svg>
                                            </span>
                                        </span>
                                    </summary>
                                    <p className="mt-3 text-black text-base">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer darkTheme={darkTheme} />
        </div>
    );
}