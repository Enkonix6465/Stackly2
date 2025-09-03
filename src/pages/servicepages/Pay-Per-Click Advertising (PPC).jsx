import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import ppcHeroVideo from "../../assets/ppchero.mp4";
import ppc1Img from "../../assets/ppc1.jpg";
import ppc2Img from "../../assets/ppc2.jpg";
import faqImg from "../../assets/faq.jpg";

const translations = {
  English: {
    title: "Pay-Per-Click Advertising (PPC)",
    heroDesc: "Drive instant, targeted traffic to your business and maximize ROI with our expert PPC management services.",
    whyTitle: "Why PPC?",
    whyDesc: "PPC puts your business at the top of search results instantly. Reach your ideal customers, control your budget, and see measurable results from day one.",
    whyList: [
      "Instantly drive qualified traffic to your website",
      "Target your ideal audience with precision",
      "Control your ad spend and maximize ROI",
      "Get measurable, real-time results"
    ],
    approachTitle: "Our Approach",
    approachDesc1: "We start with a comprehensive audit of your current PPC campaigns and business objectives. Our team researches keywords, competitors, and audience segments to build a strategy that maximizes ROI.",
    approachDesc2: "We create compelling ad copy, design high-converting landing pages, and set up precise targeting. Every campaign is monitored and optimized in real time for best results.",
    approachDesc3: "We provide transparent reporting and ongoing consultation, so you’re always informed and in control of your ad spend.",
    timeline: [
      { title: 'STRATEGY LAUNCH', year: '2020' },
      { title: 'BRAND GROWTH', year: '2021' },
      { title: 'GLOBAL REACH', year: '2022' },
      { title: 'INNOVATION HUB', year: '2023' },
      { title: 'PERFORMANCE FOCUS', year: '2024' },
      { title: 'AI-DRIVEN MARKETING', year: '2025' },
    ],
    benefitsTitle: "PPC Benefits",
    benefits: [
      { title: "Immediate Results", desc: "Launch campaigns and start seeing traffic and leads right away—no waiting for organic growth." },
      { title: "Precise Targeting", desc: "Reach your ideal customers by targeting specific keywords, locations, devices, and demographics." },
      { title: "Flexible Budget", desc: "Set your own budget and adjust spending anytime to maximize your return on investment." },
      { title: "Transparent Analytics", desc: "Track every click, conversion, and dollar spent with detailed, real-time reporting." },
    ],
    faqsTitle: "PPC Advertising FAQs",
    faqs: [
      {
        q: 'What is PPC advertising?',
        a: 'PPC (Pay-Per-Click) is a digital advertising model where advertisers pay each time a user clicks on their ad.'
      },
      {
        q: 'Which platforms do you use for PPC?',
        a: 'We manage PPC campaigns on Google Ads, Bing Ads, Facebook, Instagram, LinkedIn, and more.'
      },
      {
        q: 'How do you optimize PPC campaigns?',
        a: 'We use keyword research, ad copy testing, audience targeting, and ongoing performance analysis to maximize ROI.'
      },
      {
        q: 'What budget is needed for PPC?',
        a: 'Budgets vary by industry and goals. We help you set a budget that aligns with your objectives and maximizes results.'
      },
      {
        q: 'How do you measure PPC success?',
        a: 'We track metrics like clicks, conversions, cost-per-click, and return on ad spend to measure campaign effectiveness.'
      }
    ],
    ctaTitle: "Ready to Grow with PPC?",
    ctaDesc: "Let our PPC experts help you reach your goals faster. Contact us today for a free PPC strategy session!",
    ctaBtn: "Get Started"
  },
  Arabic: {
    title: "إعلانات الدفع مقابل النقرة (بي بي سي)",
    heroDesc: "ادفع حركة مرور مستهدفة وفورية إلى عملك وزد العائد على الاستثمار مع خدمات إدارة الدفع مقابل النقرة الاحترافية لدينا.",
    whyTitle: "لماذا الدفع مقابل النقرة؟",
    whyDesc: "تضع إعلانات الدفع مقابل النقرة عملك في أعلى نتائج البحث فورًا. الوصول إلى العملاء المثاليين، التحكم في الميزانية، ورؤية النتائج من اليوم الأول.",
    whyList: [
      "جذب حركة مرور مؤهلة إلى موقعك فورًا",
      "استهداف جمهورك المثالي بدقة",
      "التحكم في الإنفاق الإعلاني وزيادة العائد على الاستثمار",
      "الحصول على نتائج قابلة للقياس في الوقت الحقيقي"
    ],
    approachTitle: "نهجنا",
    approachDesc1: "نبدأ بتدقيق شامل لحملات PPC الحالية وأهداف العمل. يبحث فريقنا عن الكلمات الرئيسية والمنافسين والفئات المستهدفة لبناء استراتيجية تزيد العائد على الاستثمار.",
    approachDesc2: "ننشئ نصوص إعلانية جذابة، نصمم صفحات هبوط عالية التحويل، ونحدد الاستهداف بدقة. تتم مراقبة وتحسين كل حملة في الوقت الحقيقي لتحقيق أفضل النتائج.",
    approachDesc3: "نوفر تقارير شفافة واستشارات مستمرة، حتى تكون دائمًا على اطلاع وتحكم في إنفاقك الإعلاني.",
    timeline: [
      { title: 'إطلاق الاستراتيجية', year: '2020' },
      { title: 'نمو العلامة التجارية', year: '2021' },
      { title: 'الوصول العالمي', year: '2022' },
      { title: 'مركز الابتكار', year: '2023' },
      { title: 'تركيز الأداء', year: '2024' },
      { title: 'تسويق مدعوم بالذكاء الاصطناعي', year: '2025' },
    ],
  benefitsTitle: "فوائد الدفع مقابل النقرة",
    benefits: [
      { title: "نتائج فورية", desc: "أطلق الحملات وابدأ في رؤية حركة المرور والعملاء المحتملين فورًا—دون انتظار النمو العضوي." },
      { title: "استهداف دقيق", desc: "الوصول إلى العملاء المثاليين من خلال استهداف كلمات رئيسية ومواقع وأجهزة وفئات سكانية محددة." },
      { title: "ميزانية مرنة", desc: "حدد ميزانيتك وعدّل الإنفاق في أي وقت لتعظيم العائد على الاستثمار." },
      { title: "تحليلات شفافة", desc: "تتبع كل نقرة وتحويل ودولار يتم إنفاقه من خلال تقارير مفصلة وفي الوقت الحقيقي." },
    ],
  faqsTitle: "أسئلة شائعة حول الدفع مقابل النقرة",
    faqs: [
      {
        q: 'ما هي إعلانات الدفع مقابل النقرة؟',
        a: 'الدفع مقابل النقرة هو نموذج إعلان رقمي يدفع فيه المعلنون في كل مرة ينقر فيها المستخدم على إعلانهم.'
      },
      {
        q: 'ما هي المنصات التي تستخدمونها للدفع مقابل النقرة؟',
        a: 'ندير حملات الدفع مقابل النقرة على Google Ads و Bing Ads و Facebook و Instagram و LinkedIn والمزيد.'
      },
      {
        q: 'كيف تقومون بتحسين حملات الدفع مقابل النقرة؟',
        a: 'نستخدم بحث الكلمات الرئيسية واختبار النص الإعلاني واستهداف الجمهور والتحليل المستمر للأداء لتعظيم العائد على الاستثمار.'
      },
      {
        q: 'ما الميزانية المطلوبة للدفع مقابل النقرة؟',
        a: 'تختلف الميزانيات حسب الصناعة والأهداف. نساعدك في تحديد ميزانية تتماشى مع أهدافك وتزيد النتائج.'
      },
      {
        q: 'كيف تقيسون نجاح الدفع مقابل النقرة؟',
        a: 'نتتبع مقاييس مثل النقرات والتحويلات وتكلفة النقرة والعائد على الإنفاق الإعلاني لقياس فعالية الحملة.'
      }
    ],
  ctaTitle: "جاهز للنمو مع الدفع مقابل النقرة؟",
  ctaDesc: "دع خبراء الدفع مقابل النقرة لدينا يساعدونك في تحقيق أهدافك بسرعة أكبر. تواصل معنا اليوم لجلسة استراتيجية مجانية!",
  ctaBtn: "ابدأ الآن"
  },
  Hebrew: {
    title: "פרסום בתשלום לפי קליק (פי פי סי)",
    heroDesc: "הניעו תנועה ממוקדת ומיידית לעסק שלכם והגדילו את ההחזר על ההשקעה עם שירותי ניהול בתשלום לפי קליק מקצועיים.",
    whyTitle: "למה בתשלום לפי קליק?",
    whyDesc: "פרסום בתשלום לפי קליק מציב את העסק שלכם בראש תוצאות החיפוש באופן מיידי. הגיעו ללקוחות האידיאליים, שלטו בתקציב וראו תוצאות מדידות מהיום הראשון.",
    whyList: [
      "הניעו תנועה איכותית לאתר שלכם באופן מיידי",
      "כוונו לקהל היעד שלכם בדיוק",
      "שליטה בהוצאות הפרסום והגדלת ה-ROI",
      "קבלת תוצאות מדידות בזמן אמת"
    ],
    approachTitle: "הגישה שלנו",
    approachDesc1: "אנו מתחילים בבדיקת עומק של קמפיינים קיימים ומטרות העסק. הצוות שלנו חוקר מילות מפתח, מתחרים וקבוצות קהל לבניית אסטרטגיה שממקסמת ROI.",
    approachDesc2: "אנו יוצרים טקסטים פרסומיים מושכים, מעצבים דפי נחיתה ממירים ומגדירים מיקוד מדויק. כל קמפיין מנוטר ומותאם בזמן אמת לתוצאות מיטביות.",
    approachDesc3: "אנו מספקים דוחות שקופים וייעוץ מתמשך, כך שתמיד תהיו מעודכנים ובשליטה על תקציב הפרסום שלכם.",
    timeline: [
      { title: 'השקת אסטרטגיה', year: '2020' },
      { title: 'צמיחת מותג', year: '2021' },
      { title: 'הגעה גלובלית', year: '2022' },
      { title: 'מרכז חדשנות', year: '2023' },
      { title: 'מיקוד ביצועים', year: '2024' },
      { title: 'שיווק מבוסס בינה מלאכותית', year: '2025' },
    ],
  benefitsTitle: "יתרונות בתשלום לפי קליק",
    benefits: [
      { title: "תוצאות מיידיות", desc: "השיקו קמפיינים והתחילו לראות תנועה ולידים מיד—בלי לחכות לצמיחה אורגנית." },
      { title: "מיקוד מדויק", desc: "הגיעו ללקוחות האידיאליים על ידי מיקוד במילות מפתח, מיקומים, מכשירים ודמוגרפיה." },
      { title: "תקציב גמיש", desc: "קבעו תקציב משלכם והתאימו את ההוצאות בכל עת למקסום ההחזר על ההשקעה." },
      { title: "אנליטיקה שקופה", desc: "עקבו אחרי כל קליק, המרה ודולר שהושקע באמצעות דוחות מפורטים ובזמן אמת." },
    ],
  faqsTitle: "שאלות נפוצות על בתשלום לפי קליק",
    faqs: [
      {
        q: 'מה זה פרסום בתשלום לפי קליק?',
        a: 'בתשלום לפי קליק הוא מודל פרסום דיגיטלי שבו מפרסמים משלמים בכל פעם שמשתמש לוחץ על המודעה שלהם.'
      },
      {
        q: 'באילו פלטפורמות אתם משתמשים לבתשלום לפי קליק?',
        a: 'אנו מנהלים קמפיינים בתשלום לפי קליק ב-Google Ads, Bing Ads, Facebook, Instagram, LinkedIn ועוד.'
      },
      {
        q: 'איך אתם ממקסמים קמפיינים בתשלום לפי קליק?',
        a: 'אנו משתמשים במחקר מילות מפתח, בדיקות טקסטים, מיקוד קהל וניתוח ביצועים שוטף.'
      },
      {
        q: 'איזה תקציב נדרש לבתשלום לפי קליק?',
        a: 'התקציב משתנה לפי ענף ומטרות. אנו עוזרים לקבוע תקציב שמתאים למטרות וממקסם תוצאות.'
      },
      {
        q: 'איך מודדים הצלחה בתשלום לפי קליק?',
        a: 'אנו עוקבים אחרי קליקים, המרות, עלות לקליק והחזר על ההשקעה למדידת אפקטיביות.'
      }
    ],
  ctaTitle: "מוכנים לצמוח עם בתשלום לפי קליק?",
  ctaDesc: "תנו למומחי בתשלום לפי קליק שלנו לעזור לכם להגיע למטרות מהר יותר. צרו קשר היום לפגישת אסטרטגיה חינם!",
    ctaBtn: "התחל עכשיו"
  }
};

function getDir(language) {
  return language === "Arabic" || language === "Hebrew" ? "rtl" : "ltr";
}

export default function PayPerClickAdvertising({ darkTheme, setDarkTheme, language = "English", setLanguage }) {
  const t = translations[language] || translations["English"];
  const dir = getDir(language);
  return (
    <div dir={dir}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={ppcHeroVideo}
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
            <img src={ppc1Img} alt={t.whyTitle} className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
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
            <img src={ppc2Img} alt={t.benefitsTitle} className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
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
