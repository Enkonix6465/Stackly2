import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

import webheroVideo from "../../assets/webhero.mp4";


import web1Img from "../../assets/web1.jpg";
import web2Img from "../../assets/web2.jpg";
import faqImg from "../../assets/faq.jpg";



// Removed duplicate export and component definition. Use the single export below with translations logic.

                        const translations = {
                          English: {
                            title: "Website Design & Development",
                            heroDesc: "Build a stunning, high-performing website that captivates your audience and drives business growth.",
                            whyTitle: "Why Website Design & Development?",
                            whyDesc: "Your website is your digital storefront. A beautiful, user-friendly site builds trust, engages visitors, and turns them into loyal customers.",
                            whyList: [
                              "Make a powerful first impression with modern design",
                              "Deliver seamless experiences on any device",
                              "Convert visitors into leads and customers",
                              "Showcase your brand and services 24/7"
                            ],
                            approachTitle: "Our Approach",
                            approachDesc1: "We begin by learning your brand, goals, and audience. Our designers and developers research competitors, trends, and best practices to create a site that stands out.",
                            approachDesc2: "We wireframe, design, and build your site for speed, accessibility, and SEO. Every page is crafted for conversion and a seamless user experience.",
                            approachDesc3: "We test, launch, and provide ongoing support, ensuring your website grows with your business and delivers lasting results.",
                            timeline: [
                              { title: 'STRATEGY LAUNCH', year: '2020' },
                              { title: 'BRAND GROWTH', year: '2021' },
                              { title: 'GLOBAL REACH', year: '2022' },
                              { title: 'INNOVATION HUB', year: '2023' },
                              { title: 'PERFORMANCE FOCUS', year: '2024' },
                              { title: 'AI-DRIVEN MARKETING', year: '2025' },
                            ],
                            benefitsTitle: "Website Design & Development Benefits",
                            benefits: [
                              { title: "Modern Design", desc: "Impress visitors with a beautiful, professional website that reflects your brand identity." },
                              { title: "Mobile Responsive", desc: "Deliver a seamless experience on every device—desktop, tablet, and mobile." },
                              { title: "Conversion Focused", desc: "Turn visitors into leads and customers with clear calls-to-action and optimized layouts." },
                              { title: "SEO & Speed Optimized", desc: "Get found on Google and keep users engaged with fast load times and best SEO practices." },
                            ],
                            faqsTitle: "Website Design & Development FAQs",
                            faqs: [
                              {
                                q: 'What is website design & development?',
                                a: 'It’s the process of creating a website’s look, feel, and functionality to deliver a great user experience and achieve business goals.'
                              },
                              {
                                q: 'Do you build custom websites?',
                                a: 'Yes! We design and develop custom sites tailored to your brand, audience, and goals.'
                              },
                              {
                                q: 'Is my website mobile-friendly?',
                                a: 'All our websites are fully responsive and optimized for mobile devices.'
                              },
                              {
                                q: 'How do you ensure my site is secure?',
                                a: 'We use best practices for security, including SSL, regular updates, and secure hosting.'
                              },
                              {
                                q: 'Do you offer ongoing support?',
                                a: 'Yes, we provide maintenance, updates, and support to keep your site running smoothly.'
                              }
                            ],
                            ctaTitle: "Ready to Build Your Dream Website?",
                            ctaDesc: "Let our web design experts help you create a site that stands out and delivers results. Contact us today for a free consultation!",
                            ctaBtn: "Get Started"
                          },
                          Arabic: {
                            title: "تصميم وتطوير المواقع الإلكترونية",
                            heroDesc: "أنشئ موقعًا مذهلاً عالي الأداء يجذب جمهورك ويعزز نمو أعمالك.",
                            whyTitle: "لماذا تصميم وتطوير المواقع الإلكترونية؟",
                            whyDesc: "موقعك هو واجهتك الرقمية. الموقع الجميل وسهل الاستخدام يبني الثقة ويجذب الزوار ويحولهم إلى عملاء دائمين.",
                            whyList: [
                              "اترك انطباعًا قويًا بتصميم عصري",
                              "قدم تجربة سلسة على أي جهاز",
                              "حوّل الزوار إلى عملاء محتملين ودائمين",
                              "اعرض علامتك التجارية وخدماتك على مدار الساعة"
                            ],
                            approachTitle: "نهجنا",
                            approachDesc1: "نبدأ بالتعرف على علامتك التجارية وأهدافك وجمهورك. يقوم المصممون والمطورون لدينا بدراسة المنافسين والاتجاهات وأفضل الممارسات لإنشاء موقع مميز.",
                            approachDesc2: "نصمم ونبني موقعك للسرعة وسهولة الوصول وتحسين محركات البحث. كل صفحة مصممة للتحويل وتجربة مستخدم سلسة.",
                            approachDesc3: "نختبر ونطلق ونوفر الدعم المستمر، لضمان نمو موقعك مع عملك وتحقيق نتائج دائمة.",
                            timeline: [
                              { title: 'إطلاق الاستراتيجية', year: '2020' },
                              { title: 'نمو العلامة التجارية', year: '2021' },
                              { title: 'الوصول العالمي', year: '2022' },
                              { title: 'مركز الابتكار', year: '2023' },
                              { title: 'تركيز الأداء', year: '2024' },
                              { title: 'تسويق مدعوم بالذكاء الاصطناعي', year: '2025' },
                            ],
                            benefitsTitle: "فوائد تصميم وتطوير المواقع الإلكترونية",
                            benefits: [
                              { title: "تصميم عصري", desc: "أبهر الزوار بموقع جميل واحترافي يعكس هوية علامتك التجارية." },
                              { title: "متجاوب مع الجوال", desc: "قدم تجربة سلسة على جميع الأجهزة—كمبيوتر، جهاز لوحي، وجوال." },
                              { title: "تركيز على التحويل", desc: "حوّل الزوار إلى عملاء محتملين ودائمين من خلال دعوات واضحة لاتخاذ إجراء وتصاميم محسنة." },
                              { title: "محسن لمحركات البحث والسرعة", desc: "كن ظاهرًا في جوجل واحتفظ بالمستخدمين من خلال سرعة التحميل وأفضل ممارسات تحسين محركات البحث." },
                            ],
                            faqsTitle: "أسئلة شائعة حول تصميم وتطوير المواقع الإلكترونية",
                            faqs: [
                              {
                                q: 'ما هو تصميم وتطوير المواقع الإلكترونية؟',
                                a: 'هي عملية إنشاء مظهر ووظائف الموقع لتقديم تجربة مستخدم رائعة وتحقيق أهداف العمل.'
                              },
                              {
                                q: 'هل تبنون مواقع مخصصة؟',
                                a: 'نعم! نصمم ونطور مواقع مخصصة تلبي علامتك التجارية وجمهورك وأهدافك.'
                              },
                              {
                                q: 'هل موقعي متجاوب مع الجوال؟',
                                a: 'جميع مواقعنا متجاوبة بالكامل ومحسنة للأجهزة المحمولة.'
                              },
                              {
                                q: 'كيف تضمنون أمان موقعي؟',
                                a: 'نستخدم أفضل الممارسات للأمان، بما في ذلك SSL والتحديثات المنتظمة والاستضافة الآمنة.'
                              },
                              {
                                q: 'هل تقدمون دعمًا مستمرًا؟',
                                a: 'نعم، نقدم الصيانة والتحديثات والدعم للحفاظ على تشغيل موقعك بسلاسة.'
                              }
                            ],
                            ctaTitle: "جاهز لبناء موقع أحلامك؟",
                            ctaDesc: "دع خبراء تصميم المواقع يساعدونك في إنشاء موقع يبرز ويحقق النتائج. تواصل معنا اليوم لاستشارة مجانية!",
                            ctaBtn: "ابدأ الآن"
                          },
                          Hebrew: {
                            title: "עיצוב ופיתוח אתרים",
                            heroDesc: "בנה אתר מדהים ובעל ביצועים גבוהים שמרתק את הקהל שלך ומקדם את העסק.",
                            whyTitle: "למה עיצוב ופיתוח אתרים?",
                            whyDesc: "האתר שלך הוא החזית הדיגיטלית שלך. אתר יפה וידידותי למשתמש בונה אמון, מושך מבקרים והופך אותם ללקוחות נאמנים.",
                            whyList: [
                              "השאר רושם ראשוני חזק עם עיצוב מודרני",
                              "ספק חוויה חלקה בכל מכשיר",
                              "הפוך מבקרים ללידים וללקוחות",
                              "הצג את המותג והשירותים שלך 24/7"
                            ],
                            approachTitle: "הגישה שלנו",
                            approachDesc1: "אנו מתחילים בלמידת המותג, המטרות והקהל שלך. המעצבים והמתכנתים שלנו חוקרים מתחרים, מגמות ושיטות עבודה מומלצות כדי ליצור אתר בולט.",
                            approachDesc2: "אנו מעצבים ובונים את האתר שלך למהירות, נגישות וקידום אתרים. כל עמוד נבנה להמרה ולחוויית משתמש חלקה.",
                            approachDesc3: "אנו בודקים, משיקים ומספקים תמיכה מתמשכת, כדי להבטיח שהאתר שלך יגדל עם העסק שלך ויביא תוצאות מתמשכות.",
                            timeline: [
                              { title: 'השקת אסטרטגיה', year: '2020' },
                              { title: 'צמיחת מותג', year: '2021' },
                              { title: 'הגעה גלובלית', year: '2022' },
                              { title: 'מרכז חדשנות', year: '2023' },
                              { title: 'מיקוד ביצועים', year: '2024' },
                              { title: 'שיווק מבוסס בינה מלאכותית', year: '2025' },
                            ],
                            benefitsTitle: "יתרונות עיצוב ופיתוח אתרים",
                            benefits: [
                              { title: "עיצוב מודרני", desc: "רשום רושם על מבקרים עם אתר יפה ומקצועי המשקף את זהות המותג שלך." },
                              { title: "מותאם לנייד", desc: "ספק חוויה חלקה בכל מכשיר—מחשב, טאבלט ונייד." },
                              { title: "ממוקד המרה", desc: "הפוך מבקרים ללידים וללקוחות עם קריאות ברורות לפעולה ועיצובים אופטימליים." },
                              { title: "מותאם לקידום אתרים ומהירות", desc: "הופע בגוגל ושמור על משתמשים עם זמני טעינה מהירים ושיטות SEO הטובות ביותר." },
                            ],
                            faqsTitle: "שאלות נפוצות על עיצוב ופיתוח אתרים",
                            faqs: [
                              {
                                q: 'מה זה עיצוב ופיתוח אתרים?',
                                a: 'זו תהליך יצירת מראה, תחושה ופונקציונליות של אתר כדי לספק חוויית משתמש מצוינת ולהשיג מטרות עסקיות.'
                              },
                              {
                                q: 'האם אתם בונים אתרים מותאמים אישית?',
                                a: 'כן! אנו מעצבים ומפתחים אתרים מותאמים אישית למותג, לקהל ולמטרות שלך.'
                              },
                              {
                                q: 'האם האתר שלי מותאם לנייד?',
                                a: 'כל האתרים שלנו מותאמים לחלוטין לניידים.'
                              },
                              {
                                q: 'איך אתם מבטיחים שהאתר שלי מאובטח?',
                                a: 'אנו משתמשים בשיטות עבודה מומלצות לאבטחה, כולל SSL, עדכונים שוטפים ואחסון מאובטח.'
                              },
                              {
                                q: 'האם אתם מציעים תמיכה מתמשכת?',
                                a: 'כן, אנו מספקים תחזוקה, עדכונים ותמיכה כדי לשמור על האתר שלך פועל בצורה חלקה.'
                              }
                            ],
                            ctaTitle: "מוכן לבנות את אתר החלומות שלך?",
                            ctaDesc: "תן למומחי עיצוב האתרים שלנו לעזור לך ליצור אתר שמבליט ומביא תוצאות. צור קשר היום לייעוץ חינם!",
                            ctaBtn: "התחל עכשיו"
                          }
                        };

                        function getDir(language) {
                          return language === "Arabic" || language === "Hebrew" ? "rtl" : "ltr";
                        }

                        export default function WebsiteDesignDevelopment({ darkTheme, setDarkTheme, language = "English", setLanguage }) {
                          const t = translations[language] || translations["English"];
                          const dir = getDir(language);
                          return (
                            <div dir={dir}>
                              <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />
                              {/* Hero Section */}
                              <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                                <video
                                  className="absolute inset-0 w-full h-full object-cover z-0"
                                  src={webheroVideo}
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
                                    <img src={web1Img} alt={t.title} className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
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
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-black text-center">{t.approachTitle}</h2>
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
                                    <img src={web2Img} alt={t.benefitsTitle} className="rounded-2xl shadow-xl max-w-md w-full object-cover" />
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

                              {/* CTA Section (Theme Aware) */}
                              <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-black' : 'bg-white'}`}>
                                <div className="w-full max-w-3xl mx-auto text-center">
                                  <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${darkTheme ? 'text-white' : 'text-[#7c3aed]'}`}>{t.ctaTitle}</h2>
                                  <p className={`text-lg mb-8 ${darkTheme ? 'text-white' : 'text-[#6d28d9]'}`}>{t.ctaDesc}</p>
                                  <a href="/contact" className="inline-block bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:from-[#7c3aed] hover:to-[#a78bfa] transition">{t.ctaBtn}</a>
                                </div>
                              </section>
                              <Footer darkTheme={darkTheme} />
                            </div>
                          );
                        }