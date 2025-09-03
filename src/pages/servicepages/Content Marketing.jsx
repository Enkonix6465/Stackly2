import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import contentHeroVideo from "../../assets/contenthero.mp4";
import content1Img from "../../assets/content1.jpg";
import content2Img from "../../assets/content2.jpg";
import faqImg from "../../assets/faq.jpg";

const translations = {
  English: {
    title: "Content Marketing",
    heroDesc: "Attract, engage, and convert your audience with high-quality content tailored to your brand and goals.",
  whyTitle: "Why Content Marketing?",
  whyDesc: "Content marketing builds trust, authority, and lasting relationships with your audience. Great content educates, inspires, and drives action at every stage of the customer journey.",
  whyList: [
    "Increase brand awareness and credibility",
    "Engage your audience with valuable information",
    "Drive organic traffic and generate leads",
    "Support SEO and boost search rankings",
    "Establish your brand as a thought leader in your industry",
    "Educate customers and address their pain points",
    "Encourage social sharing and expand your reach"
  ],
    approachTitle: "Our Approach",
    approachDesc1: "We start by deeply understanding your brand, audience, and goals. Our team researches your industry, competitors, and target personas to craft a content strategy that stands out.",
    approachDesc2: "We develop a content calendar, blending SEO-driven topics with creative storytelling. Every piece is designed to educate, inspire, and convert—whether it’s blogs, videos, infographics, or case studies.",
    approachDesc3: "We optimize for search, distribute across channels, and measure performance to ensure your content delivers real business results. Collaboration and transparency are at the heart of our process.",
    timeline: [
      { title: 'STRATEGY LAUNCH', year: '2020' },
      { title: 'BRAND GROWTH', year: '2021' },
      { title: 'GLOBAL REACH', year: '2022' },
      { title: 'INNOVATION HUB', year: '2023' },
      { title: 'PERFORMANCE FOCUS', year: '2024' },
      { title: 'AI-DRIVEN MARKETING', year: '2025' },
    ],
    benefitsTitle: "Content Marketing Benefits",
    benefits: [
      { title: "Brand Authority", desc: "Position your business as an industry leader with expert, insightful content that builds trust." },
      { title: "Audience Engagement", desc: "Keep your audience coming back with valuable, relevant, and shareable content." },
      { title: "Lead Generation", desc: "Convert readers into leads and customers with strategic calls-to-action and nurturing content." },
      { title: "SEO Support", desc: "Boost your search rankings and organic traffic with optimized, keyword-rich content." },
    ],
    faqsTitle: "Content Marketing FAQs",
    faqs: [
      {
        q: 'What is content marketing?',
        a: 'Content marketing is a strategy focused on creating and distributing valuable, relevant content to attract and retain a clearly defined audience.'
      },
      {
        q: 'What types of content do you create?',
        a: 'We create blogs, articles, infographics, videos, case studies, eBooks, and more—tailored to your brand and goals.'
      },
      {
        q: 'How does content marketing help SEO?',
        a: 'High-quality content improves your search rankings, drives organic traffic, and earns backlinks from other sites.'
      },
      {
        q: 'How do you measure content marketing success?',
        a: 'We track metrics like website traffic, engagement, leads, and conversions to measure the impact of your content.'
      },
      {
        q: 'How often should I publish new content?',
        a: 'Consistency is key. We help you develop a content calendar to keep your audience engaged and your brand top-of-mind.'
      }
    ],
    ctaTitle: "Ready to Grow with Content Marketing?",
    ctaDesc: "Let our content experts help you attract, engage, and convert your audience. Contact us today for a free content strategy session!",
    ctaBtn: "Get Started"
  },
  Arabic: {
    title: "تسويق المحتوى",
    heroDesc: "اجذب جمهورك وشاركهم وحولهم إلى عملاء من خلال محتوى عالي الجودة مصمم خصيصًا لعلامتك التجارية وأهدافك.",
    whyTitle: "لماذا تسويق المحتوى؟",
    whyDesc: "تسويق المحتوى يبني الثقة والسلطة والعلاقات الدائمة مع جمهورك. المحتوى الجيد يثقف ويلهم ويدفع للعمل في كل مرحلة من رحلة العميل.",
    whyList: [
      "زيادة الوعي بالعلامة التجارية والمصداقية",
      "إشراك جمهورك بمعلومات قيمة",
      "زيادة حركة المرور العضوية وتوليد العملاء المحتملين",
      "دعم تحسين محركات البحث وزيادة ترتيب البحث",
      "ترسيخ علامتك التجارية كقائد فكري في مجالك",
      "تثقيف العملاء ومعالجة نقاط الألم لديهم",
      "تشجيع المشاركة الاجتماعية وتوسيع نطاق الوصول"
    ],
    approachTitle: "نهجنا",
    approachDesc1: "نبدأ بفهم عميق لعلامتك التجارية وجمهورك وأهدافك. يبحث فريقنا في صناعتك والمنافسين والشخصيات المستهدفة لصياغة استراتيجية محتوى مميزة.",
    approachDesc2: "نطور تقويم محتوى يمزج بين مواضيع تحسين محركات البحث وسرد القصص الإبداعي. كل قطعة مصممة للتثقيف والإلهام والتحويل—سواء كانت مدونات أو فيديوهات أو رسوم معلوماتية أو دراسات حالة.",
    approachDesc3: "نحسن المحتوى لمحركات البحث، ونوزعه عبر القنوات، ونقيس الأداء لضمان تحقيق نتائج أعمال حقيقية. التعاون والشفافية في صميم عمليتنا.",
    timeline: [
      { title: 'إطلاق الاستراتيجية', year: '2020' },
      { title: 'نمو العلامة التجارية', year: '2021' },
      { title: 'الوصول العالمي', year: '2022' },
      { title: 'مركز الابتكار', year: '2023' },
      { title: 'تركيز الأداء', year: '2024' },
      { title: 'تسويق مدعوم بالذكاء الاصطناعي', year: '2025' },
    ],
    benefitsTitle: "فوائد تسويق المحتوى",
    benefits: [
      { title: "سلطة العلامة التجارية", desc: "ضع عملك كقائد في الصناعة من خلال محتوى خبير وبصير يبني الثقة." },
      { title: "تفاعل الجمهور", desc: "حافظ على عودة جمهورك من خلال محتوى قيم وملائم وقابل للمشاركة." },
      { title: "توليد العملاء المحتملين", desc: "حوّل القراء إلى عملاء محتملين وزبائن من خلال دعوات استراتيجية للعمل ومحتوى محفز." },
      { title: "دعم تحسين محركات البحث", desc: "عزز ترتيب البحث وحركة المرور العضوية من خلال محتوى غني بالكلمات المفتاحية ومحسن لمحركات البحث." },
    ],
    faqsTitle: "أسئلة شائعة حول تسويق المحتوى",
    faqs: [
      {
        q: 'ما هو تسويق المحتوى؟',
        a: 'تسويق المحتوى هو استراتيجية تركز على إنشاء وتوزيع محتوى قيم وملائم لجذب جمهور محدد والاحتفاظ به.'
      },
      {
        q: 'ما أنواع المحتوى الذي تنشئونه؟',
        a: 'ننشئ مدونات ومقالات ورسوم معلوماتية وفيديوهات ودراسات حالة وكتب إلكترونية والمزيد—مصممة خصيصًا لعلامتك التجارية وأهدافك.'
      },
      {
        q: 'كيف يساعد تسويق المحتوى في تحسين محركات البحث؟',
        a: 'المحتوى عالي الجودة يحسن ترتيب البحث، ويزيد حركة المرور العضوية، ويكسب الروابط الخلفية من مواقع أخرى.'
      },
      {
        q: 'كيف تقيسون نجاح تسويق المحتوى؟',
        a: 'نتتبع مقاييس مثل حركة المرور على الموقع، والتفاعل، والعملاء المحتملين، والتحويلات لقياس تأثير المحتوى.'
      },
      {
        q: 'كم مرة يجب أن أنشر محتوى جديد؟',
        a: 'الاتساق هو المفتاح. نساعدك في تطوير تقويم محتوى للحفاظ على تفاعل جمهورك وبقاء علامتك التجارية في الصدارة.'
      }
    ],
    ctaTitle: "جاهز للنمو مع تسويق المحتوى؟",
    ctaDesc: "دع خبراء المحتوى لدينا يساعدونك في جذب جمهورك ومشاركته وتحويله إلى عملاء. تواصل معنا اليوم لجلسة استراتيجية محتوى مجانية!",
    ctaBtn: "ابدأ الآن"
  },
  Hebrew: {
    title: "שיווק תוכן",
    heroDesc: "משכו, רתקו והמירו את הקהל שלכם עם תוכן איכותי המותאם למותג ולמטרות שלכם.",
    whyTitle: "למה שיווק תוכן?",
    whyDesc: "שיווק תוכן בונה אמון, סמכות וקשרים ארוכי טווח עם הקהל שלכם. תוכן טוב מחנך, מעורר השראה ומניע לפעולה בכל שלב במסע הלקוח.",
    whyList: [
      "הגדלת מודעות ומוניטין למותג",
      "רתקו את הקהל שלכם עם מידע בעל ערך",
      "הניעו תנועה אורגנית ויצירת לידים",
      "תמיכה בקידום אתרים והעלאת דירוג החיפוש",
      "ביסוס המותג כמוביל דעה בענף",
      "חינוך לקוחות וטיפול בנקודות כאב",
      "עידוד שיתוף חברתי והרחבת החשיפה"
    ],
    approachTitle: "הגישה שלנו",
    approachDesc1: "אנו מתחילים בהבנה עמוקה של המותג, הקהל והמטרות שלכם. הצוות שלנו חוקר את הענף, המתחרים והפרסונות לבניית אסטרטגיית תוכן ייחודית.",
    approachDesc2: "אנו מפתחים לוח תוכן המשלב נושאים ממוקדי SEO עם סיפור יצירתי. כל יצירה נועדה לחנך, להלהיב ולהמיר—בין אם זה בלוגים, סרטונים, אינפוגרפיקות או מחקרי מקרה.",
    approachDesc3: "אנו מבצעים אופטימיזציה לחיפוש, מפיצים בערוצים ומודדים ביצועים כדי להבטיח שהתוכן שלכם מביא תוצאות עסקיות אמיתיות. שיתוף פעולה ושקיפות הם בלב התהליך שלנו.",
    timeline: [
      { title: 'השקת אסטרטגיה', year: '2020' },
      { title: 'צמיחת מותג', year: '2021' },
      { title: 'הגעה גלובלית', year: '2022' },
      { title: 'מרכז חדשנות', year: '2023' },
      { title: 'מיקוד ביצועים', year: '2024' },
      { title: 'שיווק מבוסס בינה מלאכותית', year: '2025' },
    ],
    benefitsTitle: "יתרונות שיווק תוכן",
    benefits: [
      { title: "סמכות מותג", desc: "מקמו את העסק שלכם כמוביל בענף עם תוכן מקצועי ובעל תובנות שבונה אמון." },
      { title: "מעורבות קהל", desc: "שמרו על הקהל שלכם עם תוכן בעל ערך, רלוונטי וניתן לשיתוף." },
      { title: "יצירת לידים", desc: "המירו קוראים ללידים ולקוחות עם קריאות לפעולה ותוכן מטפח." },
      { title: "תמיכה בקידום אתרים", desc: "שפרו את דירוג החיפוש והתנועה האורגנית עם תוכן עשיר במילות מפתח ומותאם SEO." },
    ],
    faqsTitle: "שאלות נפוצות על שיווק תוכן",
    faqs: [
      {
        q: 'מה זה שיווק תוכן?',
        a: 'שיווק תוכן הוא אסטרטגיה המתמקדת ביצירת והפצת תוכן בעל ערך ורלוונטי למשיכת קהל מוגדר ושימורו.'
      },
      {
        q: 'אילו סוגי תוכן אתם יוצרים?',
        a: 'אנו יוצרים בלוגים, מאמרים, אינפוגרפיקות, סרטונים, מחקרי מקרה, ספרים דיגיטליים ועוד—מותאם למותג ולמטרות שלכם.'
      },
      {
        q: 'איך שיווק תוכן עוזר לקידום אתרים?',
        a: 'תוכן איכותי משפר את דירוג החיפוש, מניע תנועה אורגנית ומקבל קישורים מאתרים אחרים.'
      },
      {
        q: 'איך מודדים הצלחת שיווק תוכן?',
        a: 'אנו עוקבים אחרי תנועת האתר, מעורבות, לידים והמרות כדי למדוד את השפעת התוכן שלכם.'
      },
      {
        q: 'באיזו תדירות כדאי לפרסם תוכן חדש?',
        a: 'עקביות היא המפתח. אנו עוזרים לכם לפתח לוח תוכן לשמירה על מעורבות הקהל ומיצוב המותג.'
      }
    ],
    ctaTitle: "מוכנים לצמוח עם שיווק תוכן?",
    ctaDesc: "תנו למומחי התוכן שלנו לעזור לכם למשוך, לרתק ולהמיר את הקהל שלכם. צרו קשר היום לפגישת אסטרטגיה חינם!",
    ctaBtn: "התחל עכשיו"
  }
};

function getDir(language) {
  return language === "Arabic" || language === "Hebrew" ? "rtl" : "ltr";
}

export default function ContentMarketing({ darkTheme, setDarkTheme, language = "English", setLanguage }) {
  const t = translations[language] || translations["English"];
  const dir = getDir(language);
  return (
    <div dir={dir}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={contentHeroVideo}
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
              src={content1Img} 
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

      <>
             {/* Benefits Section (Content Marketing) - Theme Aware */}
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
                              <img src={content2Img} alt={t.benefitsTitle} className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
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
                              <p className="mt-3 text-black  text-base">{faq.a}</p>
                            </details>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
      
                {/* CTA Section - Theme Aware */}
            <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-black' : 'bg-white'}`}>
              <div className="w-full max-w-3xl mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${darkTheme ? 'text-white' : 'text-[#7c3aed]'}`}>{t.ctaTitle}</h2>
                <p className={`text-lg mb-8 ${darkTheme ? 'text-white' : 'text-[#6d28d9]'}`}>{t.ctaDesc}</p>
                <a href="/contact" className="inline-block bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:from-[#7c3aed] hover:to-[#a78bfa] transition">{t.ctaBtn}</a>
              </div>
            </section>
                  <Footer darkTheme={darkTheme} />
            </>
      </div>
  );
}