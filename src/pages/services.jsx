export default function Services({ darkTheme, setDarkTheme }) {
    const [language, setLanguage] = React.useState('English');
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);
    const isRTL = language === 'Arabic' || language === 'Hebrew';
    const content = {
        English: {
            heroTitle: 'Our Services',
            heroDesc: 'Discover the full suite of digital marketing solutions we offer to grow your business online.',
            servicesTitle: 'Our Services',
            servicesCards: [
                {
                    title: 'Search Engine Optimization (SEO)',
                    desc: 'Boost your visibility and rank higher on search engines with expert SEO strategies tailored to your business.'
                },
                {
                    title: 'Social Media Marketing (SMM)',
                    desc: 'Engage your audience and grow your brand with targeted social media campaigns across all major platforms.'
                },
                {
                    title: 'Pay-Per-Click Advertising (PPC)',
                    desc: 'Drive instant traffic and leads with high-converting PPC campaigns managed by certified experts.'
                },
                {
                    title: 'Content Marketing',
                    desc: 'Attract, inform, and convert with compelling content strategies that build authority and trust.'
                },
                {
                    title: 'Email Marketing & Automation',
                    desc: 'Nurture leads and boost retention with personalized, automated email campaigns that drive results.'
                },
                {
                    title: 'Website Design & Development',
                    desc: 'Get a stunning, high-performing website that converts visitors into loyal customers and supports your growth.'
                }
            ],
            howWeWorkTitle: 'How We Work',
            howWeWorkSteps: [
                {
                    title: 'Discovery & Consultation',
                    desc: 'We start by understanding your business, goals, and audience to craft a tailored digital marketing plan.'
                },
                {
                    title: 'Strategy & Planning',
                    desc: 'We develop a data-driven strategy, select the right channels, and set clear KPIs for your campaign.'
                },
                {
                    title: 'Execution & Optimization',
                    desc: 'We launch your campaigns, monitor performance, and optimize continuously for the best results.'
                },
                {
                    title: 'Reporting & Growth',
                    desc: 'We provide transparent reports and insights, helping you scale and achieve long-term digital growth.'
                }
            ],
            industriesTitle: 'Industries We Serve',
            industriesDesc: 'We empower a diverse range of industries with tailored digital marketing strategies that drive measurable results and sustainable growth.',
            industriesCards: [
                {
                    title: 'Healthcare & Wellness',
                    desc: 'Grow your practice and connect with more patients through targeted healthcare digital marketing and reputation management.'
                },
                {
                    title: 'E-Commerce & Retail',
                    desc: 'Boost online sales and brand loyalty with conversion-driven e-commerce marketing, SEO, and social media campaigns.'
                },
                {
                    title: 'Education & EdTech',
                    desc: 'Attract students and build your institution’s reputation with digital campaigns, content marketing, and lead generation.'
                },
                {
                    title: 'Real Estate & Construction',
                    desc: 'Showcase properties, generate leads, and close deals faster with innovative real estate digital marketing solutions.'
                }
            ],
            awardsTitle: 'Awards & Recognitions',
            awardsDesc: 'Our commitment to excellence has been recognized by industry leaders and trusted organizations. These achievements reflect our dedication to delivering outstanding digital marketing results for our clients.',
            awardsList: [
                'Google Partner Agency',
                'Clutch Top Digital Marketing Company 2025',
                'Meta Business Partner',
                'Featured in MarketingProfs & HubSpot Blog'
            ],
            awardsNote: 'Building trust and positioning us as a digital marketing authority.',
            ctaTitle: 'Ready to Grow Your Business Online?',
            ctaDesc: 'Join hundreds of businesses who have accelerated their digital marketing success with our expert team and proven strategies.',
            ctaBtn1: 'Get Started Today',
            ctaBtn2: 'Learn More'
        },
        Arabic: {
            heroTitle: 'خدماتنا',
            heroDesc: 'اكتشف مجموعة حلول التسويق الرقمي الكاملة التي نقدمها لنمو عملك عبر الإنترنت.',
            servicesTitle: 'خدماتنا',
            servicesCards: [
                {
                    title: 'تحسين محركات البحث (SEO)',
                    desc: 'عزّز ظهورك وارتقِ في نتائج البحث مع استراتيجيات SEO متخصصة لعملك.'
                },
                {
                    title: 'تسويق وسائل التواصل الاجتماعي',
                    desc: 'تفاعل مع جمهورك ونمّي علامتك التجارية عبر حملات سوشيال ميديا مستهدفة.'
                },
                {
                    title: 'إعلانات الدفع مقابل النقرة (PPC)',
                    desc: 'احصل على زيارات فورية ونتائج ملموسة عبر حملات PPC يديرها خبراء.'
                },
                {
                    title: 'تسويق المحتوى',
                    desc: 'اجذب وعرّف وحوّل العملاء عبر استراتيجيات محتوى تبني الثقة والسلطة.'
                },
                {
                    title: 'التسويق عبر البريد الإلكتروني والأتمتة',
                    desc: 'نمّي العملاء وحقق الولاء عبر حملات بريد إلكتروني مخصصة وآلية تحقق النتائج.'
                },
                {
                    title: 'تصميم وتطوير المواقع',
                    desc: 'احصل على موقع رائع عالي الأداء يحوّل الزوار إلى عملاء دائمين ويدعم نموك.'
                }
            ],
            howWeWorkTitle: 'كيف نعمل',
            howWeWorkSteps: [
                {
                    title: 'الاكتشاف والاستشارة',
                    desc: 'نبدأ بفهم عملك وأهدافك وجمهورك لصياغة خطة تسويق رقمية مخصصة.'
                },
                {
                    title: 'الاستراتيجية والتخطيط',
                    desc: 'نطور استراتيجية مدعومة بالبيانات ونختار القنوات المناسبة ونحدد مؤشرات الأداء.'
                },
                {
                    title: 'التنفيذ والتحسين',
                    desc: 'نطلق الحملات ونراقب الأداء ونحسّن باستمرار لتحقيق أفضل النتائج.'
                },
                {
                    title: 'التقارير والنمو',
                    desc: 'نقدم تقارير شفافة ورؤى تساعدك على التوسع وتحقيق نمو رقمي طويل الأمد.'
                }
            ],
            industriesTitle: 'القطاعات التي نخدمها',
            industriesDesc: 'نمكن مجموعة متنوعة من القطاعات عبر استراتيجيات تسويق رقمي مخصصة تحقق نتائج قابلة للقياس ونمو مستدام.',
            industriesCards: [
                {
                    title: 'الرعاية الصحية والعافية',
                    desc: 'نمّي عيادتك وتواصل مع المزيد من المرضى عبر تسويق صحي رقمي وإدارة السمعة.'
                },
                {
                    title: 'التجارة الإلكترونية وتجارة التجزئة',
                    desc: 'عزّز المبيعات والولاء عبر حملات تسويق إلكتروني وتحسين محركات البحث والسوشيال.'
                },
                {
                    title: 'التعليم والتقنية التعليمية',
                    desc: 'اجذب الطلاب وابنِ سمعة مؤسستك عبر حملات رقمية وتسويق محتوى وتوليد العملاء.'
                },
                {
                    title: 'العقارات والبناء',
                    desc: 'اعرض العقارات وولّد العملاء وأغلق الصفقات بسرعة عبر حلول تسويق عقاري مبتكرة.'
                }
            ],
            awardsTitle: 'الجوائز والتكريمات',
            awardsDesc: 'تم الاعتراف بالتزامنا بالتميز من قبل قادة الصناعة والمنظمات الموثوقة. تعكس هذه الإنجازات تفانينا في تقديم نتائج تسويق رقمي متميزة لعملائنا.',
            awardsList: [
                'وكالة شريك جوجل',
                'أفضل شركة تسويق رقمي في  لعام 2025',
                'شريك أعمال ميتا',
                'ظهور في مدونة ماركتينج بروفس و هبسبوت'
            ],
            awardsNote: 'نبني الثقة ونرسخ مكانتنا كسلطة في التسويق الرقمي.',
            ctaTitle: 'جاهز لنمو عملك عبر الإنترنت؟',
            ctaDesc: 'انضم إلى مئات الشركات التي سرّعت نجاحها الرقمي مع فريقنا الخبير واستراتيجياتنا المثبتة.',
            ctaBtn1: 'ابدأ اليوم',
            ctaBtn2: 'اعرف المزيد'
        },
        Hebrew: {
            heroTitle: 'השירותים שלנו',
            heroDesc: 'גלה את כל פתרונות השיווק הדיגיטלי שאנו מציעים לצמיחת העסק שלך אונליין.',
            servicesTitle: 'השירותים שלנו',
            servicesCards: [
                {
                    title: 'קידום אתרים (SEO)',
                    desc: 'הגבר נראות ודורג גבוה יותר במנועי חיפוש עם אסטרטגיות SEO מותאמות לעסק שלך.'
                },
                {
                    title: 'שיווק במדיה חברתית',
                    desc: 'הפעל את הקהל שלך וגדל את המותג עם קמפיינים ממוקדים במדיה החברתית.'
                },
                {
                    title: 'פרסום בתשלום לפי קליק (PPC)',
                    desc: 'הבא תנועה מיידית ולידים עם קמפיינים PPC מנוהלים על ידי מומחים.'
                },
                {
                    title: 'שיווק תוכן',
                    desc: 'משוך, ידע והמר לקוחות עם אסטרטגיות תוכן שמבנות סמכות ואמון.'
                },
                {
                    title: 'שיווק בדוא"ל ואוטומציה',
                    desc: 'טפח לידים והגדל נאמנות עם קמפיינים בדוא"ל מותאמים ואוטומטיים.'
                },
                {
                    title: 'עיצוב ופיתוח אתרים',
                    desc: 'קבל אתר מדהים וביצועי שממיר מבקרים ללקוחות נאמנים ותומך בצמיחה שלך.'
                }
            ],
            howWeWorkTitle: 'איך אנחנו עובדים',
            howWeWorkSteps: [
                {
                    title: 'גילוי וייעוץ',
                    desc: 'מתחילים בהבנת העסק, המטרות והקהל שלך כדי לבנות תוכנית שיווק דיגיטלית מותאמת.'
                },
                {
                    title: 'אסטרטגיה ותכנון',
                    desc: 'מפתחים אסטרטגיה מבוססת נתונים, בוחרים ערוצים מתאימים ומגדירים מדדי הצלחה.'
                },
                {
                    title: 'ביצוע ואופטימיזציה',
                    desc: 'משיקים קמפיינים, עוקבים אחרי ביצועים ומשפרים כל הזמן לתוצאות מיטביות.'
                },
                {
                    title: 'דיווח וצמיחה',
                    desc: 'מספקים דוחות שקופים ותובנות, עוזרים לך להתרחב ולהשיג צמיחה דיגיטלית ארוכת טווח.'
                }
            ],
            industriesTitle: 'ענפים בהם אנו פועלים',
            industriesDesc: 'אנו מעצימים מגוון ענפים עם אסטרטגיות שיווק דיגיטלי מותאמות שמובילות לתוצאות מדידות וצמיחה בת קיימא.',
            industriesCards: [
                {
                    title: 'בריאות ורווחה',
                    desc: 'הגדל את המרפאה שלך ותחבר יותר מטופלים עם שיווק דיגיטלי רפואי וניהול מוניטין.'
                },
                {
                    title: 'מסחר אלקטרוני וקמעונאות',
                    desc: 'הגדל מכירות אונליין ונאמנות מותג עם קמפיינים ממוקדי המרה, SEO ומדיה חברתית.'
                },
                {
                    title: 'חינוך וטכנולוגיה חינוכית',
                    desc: 'משוך תלמידים ובנה מוניטין מוסדך עם קמפיינים דיגיטליים, שיווק תוכן והפקת לידים.'
                },
                {
                    title: 'נדל"ן ובנייה',
                    desc: 'הצג נכסים, הפק לידים וסגור עסקאות מהר יותר עם פתרונות שיווק נדל"ן חדשניים.'
                }
            ],
            awardsTitle: 'פרסים והוקרות',
            awardsDesc: 'המחויבות שלנו למצוינות זכתה להכרה ממובילי תעשייה וארגונים אמינים. הישגים אלו משקפים את המסירות שלנו להעניק תוצאות שיווק דיגיטלי יוצאות דופן ללקוחותינו.',
            awardsList: [
                'סוכנות שותפה של ',
                'חברת השיווק הדיגיטלי המובילה ב- לשנת 2025',
                'שותף עסקי של מטא',
                'הופעה בבלוג  ו'
            ],
            awardsNote: 'בונים אמון ומבססים אותנו כסמכות בשיווק דיגיטלי.',
            ctaTitle: 'מוכן לצמיחת העסק שלך אונליין?',
            ctaDesc: 'הצטרף למאות עסקים שהאיצו את הצלחתם הדיגיטלית עם הצוות המומחה שלנו והאסטרטגיות המוכחות.',
            ctaBtn1: 'התחל היום',
            ctaBtn2: 'למידע נוסף'
        }
    };
    return (
        <>
            <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />
            {/* Hero Section */}
            <section className={`relative w-full h-screen flex items-center justify-center overflow-hidden ${darkTheme ? 'bg-black' : ''}`} data-aos="fade-up" dir={isRTL ? 'rtl' : 'ltr'}>
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={servicesHero}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
                <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
                    <h1 className={`text-4xl md:text-6xl font-extrabold mb-2 drop-shadow-lg ${darkTheme ? 'text-white' : 'text-[#a259c6]'}`}>{content[language].heroTitle}</h1>
                    <p className={`text-lg md:text-xl mb-2 max-w-2xl mx-auto drop-shadow-md ${darkTheme ? 'text-white' : 'text-white'}`}>{content[language].heroDesc}</p>
                </div>
            </section>
             

            {/* Our Services Section */}
            <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-[#18181c]' : 'bg-[#f3e8ff]'}`} data-aos="fade-up" dir={isRTL ? 'rtl' : 'ltr'}>
                <h2 className={`text-3xl md:text-4xl font-extrabold mb-12 tracking-wide ${darkTheme ? 'text-white' : 'text-[#232136]'}`}>{content[language].servicesTitle}</h2>
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {content[language].servicesCards.map((card, idx) => (
                        <div key={idx} className={`rounded-3xl p-8 ${idx%2===0 ? 'bg-gradient-to-br from-[#2d1b3c] to-[#18181c]' : 'bg-gradient-to-br from-[#7c5dc7] to-[#232136]'} text-white shadow-2xl flex flex-col min-h-[220px] relative overflow-hidden`}>
                            <span className={`text-[7rem] font-extrabold ${idx%2===0 ? 'text-[#a259c6]' : 'text-[#fff]'} opacity-20 absolute left-0 top-0 leading-none z-0 select-none`} style={{ lineHeight: '0.9', letterSpacing: '-0.1em' }}>{String(idx+1).padStart(2,'0')}</span>
                            <div className="relative z-10 mt-8">
                                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                                <p className="text-base text-gray-200">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* How We Work Section */}
            <section className={`w-full py-16 flex text-justify flex-col items-center ${darkTheme ? 'bg-[#232136]' : 'bg-[#c7a6fa]'}`} data-aos="fade-right" dir={isRTL ? 'rtl' : 'ltr'}>
                <h2 className={`text-3xl md:text-4xl font-extrabold mb-12 tracking-wide ${darkTheme ? 'text-white' : 'text-[#232136]'}`}>{content[language].howWeWorkTitle}</h2>
                <div className="w-full max-w-3xl mx-auto flex flex-col gap-0 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-2 flex flex-col items-center z-0">
                        <div className="h-8 w-2"></div>
                        <div className="flex-1 w-1 bg-gradient-to-b from-[#a259c6] to-[#232136] rounded-full"></div>
                        <div className="h-8 w-2"></div>
                    </div>
                    {content[language].howWeWorkSteps.map((step, idx) => (
                        <div key={idx} className="flex md:flex-row flex-col items-center mb-8 relative z-10">
                            <div className={`md:w-1/2 w-full flex ${idx%2===0 ? 'justify-end md:pr-8 order-2 md:order-1' : 'justify-start md:pl-8 order-1 md:order-2'}`}> 
                                <div className={`${idx%2===0 ? 'bg-[#a259c6]' : 'bg-[#232136] border border-[#a259c6]'} text-white rounded-2xl shadow-lg px-8 py-6 max-w-md w-full flex flex-col ${idx%2===0 ? 'items-end' : 'items-start'} ${idx%2===0 ? '' : 'md:ml-auto md:mr-0 ml-0 mr-auto'}`}> 
                                    <div className="flex items-center mb-2">
                                        <span className="text-2xl font-bold mr-2">{isRTL ? `שלב ${String(idx+1).padStart(2,'0')}` : `Step ${String(idx+1).padStart(2,'0')}`}</span>
                                        <span className={`bg-white text-[#a259c6] rounded-full p-2 ml-2`}><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" /></svg></span>
                                    </div>
                                    <div className={idx%2===0 ? 'text-right' : ''}>
                                        <div className="font-bold text-lg mb-1">{step.title}</div>
                                        <div className="text-sm">{step.desc}</div>
                                    </div>
                                </div>
                            </div>
                            <div className={`md:w-1/2 w-full flex ${idx%2===0 ? 'justify-center md:justify-start order-1 md:order-2' : ''}`}></div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Industries We Serve Section (Home1 color theme) */}
            <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-black' : 'bg-gradient-to-br from-[#f5f3ff] via-[#f3e8ff] to-[#f8fafc]'}`} data-aos="fade-up" dir={isRTL ? 'rtl' : 'ltr'}>
                <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 tracking-wide text-center ${darkTheme ? 'text-white' : 'text-[#7c5dc7]'}`}>{content[language].industriesTitle}</h2>
                <p className="text-lg text-[#232136] mb-10 text-center max-w-2xl">{content[language].industriesDesc}</p>
                <div className="w-full max-w-6xl grid text-justify grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {content[language].industriesCards.map((card, idx) => (
                        <div key={idx} className="rounded-xl shadow-lg bg-white flex flex-col min-h-[220px] overflow-hidden">
                            <div className={idx%2===0 ? "bg-[#a259c6] px-6 py-4" : "bg-[#7c5dc7] px-6 py-4"}>
                                <span className="text-2xl font-bold text-white">{String(idx+1).padStart(2,'0')}</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className={`text-lg font-bold ${idx%2===0 ? 'text-[#a259c6]' : 'text-[#7c5dc7]'} mb-2`}>{card.title}</h3>
                                <p className="text-[#232136] text-sm">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Awards & Recognitions Section */}
            <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-[#232136]' : 'bg-[#c7a6fa]'}`} data-aos="fade-left" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 px-4">
                    {/* Left: Info */}
                    <div className="md:w-1/2 w-full flex flex-col items-start">
                        <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 tracking-wide ${darkTheme ? 'text-white' : 'text-[#000]'}`}>{content[language].awardsTitle}</h2>
                        <p className="text-lg text-justify text-[#232136] mb-6">{content[language].awardsDesc}</p>
                        <ul className="mb-6 space-y-3">
                            {content[language].awardsList.map((award, idx) => (
                                <li key={idx} className="flex items-center"><span className={`inline-block w-3 h-3 rounded-full ${idx%2===0 ? 'bg-[#a259c6]' : 'bg-[#7c5dc7]'} mr-3`}></span><span className="font-semibold text-[#232136]">{award}</span></li>
                            ))}
                        </ul>
                        <div className="text-sm text-gray-500">{content[language].awardsNote}</div>
                    </div>
                    {/* Right: Image */}
                    <div className="md:w-1/2 w-full flex justify-center">
                        <img src={awardsImg} alt={content[language].awardsTitle} className="max-w-xs w-full rounded-2xl shadow-xl border border-[#f3e8ff] bg-[#f8fafc]" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-black' : 'bg-gradient-to-br from-[#f5f3ff] via-[#f3e8ff] to-[#f8fafc]'}`} data-aos="fade-up" dir={isRTL ? 'rtl' : 'ltr'}>
                <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-4 ${darkTheme ? 'text-white' : 'text-[#7c5dc7]'}`}>{content[language].ctaTitle}</h2>
                <p className="text-lg text-[#232136] mb-8 text-center max-w-2xl">{content[language].ctaDesc}</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="bg-[#7c5dc7] hover:bg-[#a259c6] text-white font-semibold px-10 py-3 rounded-xl shadow-lg transition-all text-lg">{content[language].ctaBtn1}</button>
                    <button className="border-2 border-[#7c5dc7] text-[#7c5dc7] font-semibold px-10 py-3 rounded-xl bg-white hover:bg-[#f5fafd] transition-all text-lg">{content[language].ctaBtn2}</button>
                </div>
            </section>
            <Footer darkTheme={darkTheme} />
        </>
    );
}
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header";
import Footer from "../Footer";
import servicesHero from "../assets/serviceshero.mp4";
import awardsImg from "../assets/awards.jpg";
