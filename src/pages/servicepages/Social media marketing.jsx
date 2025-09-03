import faqImg from "../../assets/faq.jpg";
import social2Img from "../../assets/social2.jpg";
import social1Img from "../../assets/social1.jpg";
import socialHeroVideo from "../../assets/socialhero.mp4";

import Header from "../../Header";
import Footer from "../../Footer";

export default function SocialMediaMarketing({ darkTheme, setDarkTheme, language, setLanguage }) {
  const isRTL = language === 'Arabic' || language === 'Hebrew';
  const content = {
    English: {
      heroTitle: 'Social Media Marketing',
      heroDesc: "Amplify your brand’s presence and engage your audience with our expert social media marketing solutions.",
      whyTitle: 'Why Social Media Marketing?',
      whyDesc: 'Social media is where your customers spend their time. A strong social presence builds brand awareness, drives engagement, and turns followers into loyal customers.',
      whyList: [
        'Grow your audience and reach new customers',
        'Boost engagement with creative, shareable content',
        'Build brand loyalty and community',
        'Drive website traffic and conversions'
      ],
      approachTitle: 'Our Approach',
      approachDesc: [
        'We start by understanding your brand voice, audience, and goals. Our team researches trends, competitors, and platform algorithms to craft a social strategy that gets results.',
        'We create engaging content calendars, design eye-catching visuals, and manage campaigns across all major platforms. Every post is optimized for reach, engagement, and conversion.',
        'We monitor analytics, adapt to trends, and provide transparent reporting so you always know your social impact.'
      ],
      approachTimeline: [
        { title: 'STRATEGY LAUNCH', year: '2020' },
        { title: 'BRAND GROWTH', year: '2021' },
        { title: 'GLOBAL REACH', year: '2022' },
        { title: 'INNOVATION HUB', year: '2023' },
        { title: 'PERFORMANCE FOCUS', year: '2024' },
        { title: 'AI-DRIVEN MARKETING', year: '2025' },
      ],
      benefitsTitle: 'Social Media Marketing Benefits',
      benefitsCards: [
        { title: 'Brand Awareness', desc: 'Expand your brand’s reach and recognition across all major social platforms with consistent, creative content.' },
        { title: 'Audience Engagement', desc: 'Connect with your audience through interactive posts, stories, and campaigns that spark conversations and loyalty.' },
        { title: 'Lead Generation', desc: 'Drive targeted traffic to your website and generate quality leads with strategic social media advertising.' },
        { title: 'Performance Tracking', desc: 'Measure your success with in-depth analytics and reporting to optimize your campaigns for maximum ROI.' }
      ],
      faqsTitle: 'Social Media Marketing FAQs',
      faqs: [
        { q: 'What is social media marketing?', a: 'Social media marketing uses platforms like Facebook, Instagram, LinkedIn, and Twitter to promote your brand, engage your audience, and drive business growth.' },
        { q: 'Which platforms should my business use?', a: 'The best platforms depend on your audience and goals. We help you choose and focus on the channels where your customers are most active.' },
        { q: 'How often should I post on social media?', a: 'Consistency is key. We create a tailored content calendar to keep your brand active and relevant without overwhelming your audience.' },
        { q: 'Can social media marketing generate leads?', a: 'Absolutely! With the right strategy, social media can drive targeted traffic, generate leads, and increase conversions.' },
        { q: 'How do you measure social media success?', a: 'We track engagement, reach, website traffic, and conversions to measure ROI and continually improve your campaigns.' }
      ],
      ctaTitle: 'Ready to Grow with Social Media?',
      ctaDesc: 'Let our experts help you build your brand, engage your audience, and drive results through social media. Contact us today for a free consultation!',
      ctaBtn: 'Get Started'
    },
    Arabic: {
      heroTitle: 'تسويق وسائل التواصل الاجتماعي',
      heroDesc: 'عزّز حضور علامتك التجارية وتفاعل مع جمهورك عبر حلولنا المتخصصة في تسويق وسائل التواصل الاجتماعي.',
      whyTitle: 'لماذا تسويق وسائل التواصل الاجتماعي؟',
      whyDesc: 'وسائل التواصل الاجتماعي هي المكان الذي يقضي فيه عملاؤك وقتهم. الحضور القوي يبني الوعي بالعلامة التجارية ويزيد التفاعل ويحوّل المتابعين إلى عملاء دائمين.',
      whyList: [
        'نمّي جمهورك ووسّع قاعدة عملائك',
        'عزّز التفاعل بمحتوى إبداعي قابل للمشاركة',
        'ابنِ الولاء والمجتمع حول علامتك التجارية',
        'ادفع زيارات الموقع والتحويلات'
      ],
      approachTitle: 'نهجنا',
      approachDesc: [
        'نبدأ بفهم صوت علامتك التجارية وجمهورك وأهدافك. يبحث فريقنا في الاتجاهات والمنافسين وخوارزميات المنصات لصياغة استراتيجية اجتماعية تحقق النتائج.',
        'ننشئ جداول محتوى جذابة، نصمم صوراً لافتة، وندير الحملات عبر جميع المنصات الرئيسية. كل منشور مُحسّن للوصول والتفاعل والتحويل.',
        'نراقب التحليلات، نواكب الاتجاهات، ونقدم تقارير شفافة لتعرف دائماً أثرك الاجتماعي.'
      ],
      approachTimeline: [
        { title: 'إطلاق الاستراتيجية', year: '2020' },
        { title: 'نمو العلامة التجارية', year: '2021' },
        { title: 'الوصول العالمي', year: '2022' },
        { title: 'مركز الابتكار', year: '2023' },
        { title: 'تركيز الأداء', year: '2024' },
        { title: 'تسويق مدعوم بالذكاء الاصطناعي', year: '2025' },
      ],
      benefitsTitle: 'فوائد تسويق وسائل التواصل الاجتماعي',
      benefitsCards: [
        { title: 'زيادة الوعي بالعلامة التجارية', desc: 'وسّع انتشار علامتك وحقق حضوراً قوياً عبر جميع المنصات الاجتماعية بمحتوى إبداعي متواصل.' },
        { title: 'تفاعل الجمهور', desc: 'تواصل مع جمهورك عبر منشورات وقصص وحملات تفاعلية تبني الولاء.' },
        { title: 'توليد العملاء المحتملين', desc: 'ادفع زيارات مستهدفة لموقعك وولّد عملاء محتملين بجودة عالية عبر الإعلانات الاجتماعية.' },
        { title: 'تتبع الأداء', desc: 'قِس نجاحك بتحليلات وتقارير معمقة لتحسين الحملات وتحقيق أقصى عائد.' }
      ],
      faqsTitle: 'أسئلة شائعة حول تسويق وسائل التواصل الاجتماعي',
      faqs: [
        { q: 'ما هو تسويق وسائل التواصل الاجتماعي؟', a: 'تسويق وسائل التواصل الاجتماعي يستخدم منصات مثل فيسبوك، إنستغرام، لينكدإن، وتويتر للترويج للعلامة التجارية، التفاعل مع الجمهور، وتحقيق نمو الأعمال.' },
        { q: 'ما هي المنصات الأنسب لعملي؟', a: 'أفضل المنصات تعتمد على جمهورك وأهدافك. نساعدك في اختيار القنوات التي يتواجد فيها عملاؤك أكثر.' },
        { q: 'كم مرة يجب أن أنشر على وسائل التواصل؟', a: 'الاستمرارية مهمة. ننشئ جدول محتوى مخصص ليبقى حضورك نشطاً وفعالاً دون إزعاج الجمهور.' },
        { q: 'هل يمكن لتسويق وسائل التواصل توليد عملاء؟', a: 'بالتأكيد! مع الاستراتيجية الصحيحة، يمكن لوسائل التواصل الاجتماعي دفع زيارات مستهدفة وتوليد عملاء وزيادة التحويلات.' },
        { q: 'كيف تقيسون نجاح التسويق الاجتماعي؟', a: 'نتابع التفاعل، الوصول، زيارات الموقع، والتحويلات لقياس العائد وتحسين الحملات باستمرار.' }
      ],
      ctaTitle: 'جاهز للنمو عبر وسائل التواصل؟',
      ctaDesc: 'دع خبراءنا يساعدونك في بناء علامتك، تفاعل مع جمهورك، وحقق نتائج عبر وسائل التواصل الاجتماعي. تواصل معنا اليوم لاستشارة مجانية!',
      ctaBtn: 'ابدأ الآن'
    },
    Hebrew: {
      heroTitle: 'שיווק במדיה חברתית',
      heroDesc: 'הגבר את נוכחות המותג שלך ותחבר את הקהל שלך עם פתרונות שיווק מדיה חברתית מקצועיים.',
      whyTitle: 'למה שיווק במדיה חברתית?',
      whyDesc: 'המדיה החברתית היא המקום בו הלקוחות שלך מבלים. נוכחות חזקה בונה מודעות למותג, מגבירה מעורבות והופכת עוקבים ללקוחות נאמנים.',
      whyList: [
        'הגדל את הקהל שלך והגיע ללקוחות חדשים',
        'הגבר מעורבות עם תוכן יצירתי שניתן לשיתוף',
        'בנה נאמנות וקהילה סביב המותג שלך',
        'הגדל תנועה לאתר והמרות'
      ],
      approachTitle: 'הגישה שלנו',
      approachDesc: [
        'מתחילים בהבנת קול המותג, הקהל והמטרות שלך. הצוות שלנו חוקר טרנדים, מתחרים ואלגוריתמים של פלטפורמות כדי לבנות אסטרטגיה חברתית שמביאה תוצאות.',
        'יוצרים לוחות תוכן מרתקים, מעצבים ויזואלים מושכים ומנהלים קמפיינים בכל הפלטפורמות המרכזיות. כל פוסט מותאם להגעה, מעורבות והמרה.',
        'עוקבים אחרי אנליטיקות, מתאימים לטרנדים ומספקים דוחות שקופים כדי שתדע תמיד את ההשפעה החברתית שלך.'
      ],
      approachTimeline: [
        { title: 'השקת אסטרטגיה', year: '2020' },
        { title: 'צמיחת מותג', year: '2021' },
        { title: 'הגעה גלובלית', year: '2022' },
        { title: 'מרכז חדשנות', year: '2023' },
        { title: 'מיקוד ביצועים', year: '2024' },
        { title: 'שיווק מונע AI', year: '2025' },
      ],
      benefitsTitle: 'יתרונות שיווק במדיה חברתית',
      benefitsCards: [
        { title: 'מודעות למותג', desc: 'הרחב את החשיפה וההכרה של המותג שלך בכל הפלטפורמות החברתיות עם תוכן יצירתי ועקבי.' },
        { title: 'מעורבות קהל', desc: 'התחבר עם הקהל שלך דרך פוסטים, סטוריז וקמפיינים אינטראקטיביים שמגבירים נאמנות.' },
        { title: 'הפקת לידים', desc: 'הבא תנועה ממוקדת לאתר שלך והפק לידים איכותיים עם פרסום חברתי אסטרטגי.' },
        { title: 'מעקב ביצועים', desc: 'מדוד הצלחה עם אנליטיקות ודוחות מעמיקים כדי לשפר קמפיינים ולהשיג ROI מקסימלי.' }
      ],
      faqsTitle: 'שאלות נפוצות על שיווק במדיה חברתית',
      faqs: [
        { q: 'מה זה שיווק במדיה חברתית?', a: 'שיווק במדיה חברתית משתמש בפלטפורמות כמו פייסבוק, אינסטגרם, לינקדאין וטוויטר לקידום המותג, מעורבות הקהל והגדלת העסק.' },
        { q: 'באילו פלטפורמות כדאי לעסק שלי להשתמש?', a: 'הפלטפורמות הטובות ביותר תלויות בקהל ובמטרות שלך. אנו עוזרים לבחור ולהתמקד בערוצים בהם הלקוחות שלך פעילים.' },
        { q: 'כמה פעמים כדאי לפרסם במדיה החברתית?', a: 'עקביות היא המפתח. אנו יוצרים לוח תוכן מותאם כדי לשמור על נוכחות פעילה ורלוונטית מבלי להעמיס על הקהל.' },
        { q: 'האם שיווק במדיה חברתית יכול להפיק לידים?', a: 'בהחלט! עם אסטרטגיה נכונה, המדיה החברתית יכולה להביא תנועה ממוקדת, לידים והמרות.' },
        { q: 'איך מודדים הצלחת שיווק חברתי?', a: 'אנו עוקבים אחרי מעורבות, חשיפה, תנועה לאתר והמרות כדי למדוד ROI ולשפר קמפיינים.' }
      ],
      ctaTitle: 'מוכן לצמוח עם מדיה חברתית?',
      ctaDesc: 'תן למומחים שלנו לעזור לך לבנות מותג, להתחבר לקהל ולהשיג תוצאות דרך מדיה חברתית. צור קשר היום לייעוץ חינם!',
      ctaBtn: 'התחל עכשיו'
    }
  };
  return (
    <>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={socialHeroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">{content[language].heroTitle}</h1>
          <p className="text-lg md:text-xl text-white mb-2 max-w-2xl mx-auto drop-shadow-md">{content[language].heroDesc}</p>
        </div>
      </section>
      {/* Why This Service Matters Section */}
      <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-black' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="md:w-1/2 w-full flex justify-center items-center mb-8 md:mb-0 min-h-[350px]">
            <img src={social1Img} alt={content[language].whyTitle} className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-start">
            <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 tracking-wide ${darkTheme ? 'text-white' : 'text-[#7c5dc7]'}`}>{content[language].whyTitle}</h2>
            <p className={`text-lg mb-4 text-justify ${darkTheme ? 'text-white' : 'text-[#232136]'}`}>{content[language].whyDesc}</p>
            <ul className={`list-disc pl-6 space-y-2 text-justify ${darkTheme ? 'text-white' : 'text-[#232136]'}`}>
              {content[language].whyList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Our Approach Section */}
      <section className="w-full py-16 bg-[#c7a6fa] text-white flex flex-col items-center" dir={isRTL ? 'rtl' : 'ltr'}>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-black text-center">{content[language].approachTitle}</h2>
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="md:w-1/2 w-full flex flex-col items-start">
            {content[language].approachDesc.map((desc, idx) => (
              <p key={idx} className="text-lg mb-4 text-justify">{desc}</p>
            ))}
          </div>
          <div className="md:w-1/2 w-full flex flex-wrap justify-center gap-6">
            {content[language].approachTimeline.map((item, idx) => (
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
      {/* Benefits Section */}
      <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-black' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-center ${darkTheme ? 'text-white' : 'text-[#7c3aed]'}`}>{content[language].benefitsTitle}</h2>
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="md:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-8 order-1 md:order-1">
            {content[language].benefitsCards.map((card, idx) => (
              <div key={idx} className={
                idx === 0 ? "rounded-tl-3xl rounded-br-[60px] bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] p-6 shadow-lg text-white" :
                idx === 1 ? `${darkTheme ? 'bg-[#232136] text-white' : 'bg-white text-[#7c3aed]'} rounded-tr-3xl rounded-bl-[60px] p-6 shadow-lg` :
                idx === 2 ? `${darkTheme ? 'bg-[#232136] text-white' : 'bg-white text-[#7c3aed]'} rounded-bl-3xl rounded-tr-[60px] p-6 shadow-lg` :
                "rounded-br-3xl rounded-tl-[60px] bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] p-6 shadow-lg text-white"
              }>
                <h3 className={`font-bold text-lg mb-2 ${idx === 0 || idx === 3 ? 'text-white' : darkTheme ? 'text-white' : 'text-[#7c3aed]'}`}>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 order-2 md:order-2">
            <img src={social2Img} alt={content[language].benefitsTitle} className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
          </div>
        </div>
      </section>
      {/* FAQs Section */}
      <section className="w-full py-16 bg-[#c7a6fa] text-white flex flex-col items-center" dir={isRTL ? 'rtl' : 'ltr'}>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-black text-center">{content[language].faqsTitle}</h2>
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 min-h-full">
            <img src={faqImg} alt={content[language].faqsTitle} className="rounded-2xl shadow-xl max-w-md w-full object-cover h-full min-h-[400px]" />
          </div>
          <div className="md:w-1/2 w-full min-h-full flex flex-col justify-center">
            <div className="divide-y divide-violet-200 rounded-xl bg-white shadow-lg">
              {content[language].faqs.map((faq, idx) => (
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
      {/* CTA Section */}
      <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-black' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="w-full max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${darkTheme ? 'text-white' : 'text-[#7c3aed]'}`}>{content[language].ctaTitle}</h2>
          <p className={`text-lg mb-8 ${darkTheme ? 'text-white' : 'text-[#6d28d9]'}`}>{content[language].ctaDesc}</p>
          <a href="/contact" className="inline-block bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:from-[#7c3aed] hover:to-[#a78bfa] transition">{content[language].ctaBtn}</a>
        </div>
      </section>
      <Footer darkTheme={darkTheme} />
    </>
  );
}
// ...existing code...
