import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutUsHero from "../assets/aboutushero.mp4";
import ourMissionImg from "../assets/ourmission.jpg";
import whatWeThinkImg from "../assets/whatwethink.webp";
import uniqueImg from "../assets/unique.avif";
import valuesImg from "../assets/values.jpg";
import Header from "../Header";
import Footer from "../Footer";

export default function AboutUs({ darkTheme, setDarkTheme }) {
  const [language, setLanguage] = React.useState('English');
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  // RTL detection
  const isRTL = language === 'Arabic' || language === 'Hebrew';
  // Content map
  const content = {
    English: {
      heroTitle: 'About us',
      heroSubtitle: 'Your Digital Growth Partners',
      heroDesc: 'We help brands thrive online with creative digital marketing, data-driven strategies, and measurable results. From SEO and social media to PPC and web design, we empower your business to grow in the digital age.',
      growthTitle: 'Our Growth Through Years',
      growthTimeline: [
        { year: '2018', title: 'Started Our Journey', desc: 'Launched as a boutique agency<br/>for local businesses.' },
        { year: '2019', title: 'First SEO Success', desc: 'Achieved top Google rankings<br/>and 200% organic growth.' },
        { year: '2020', title: 'Social Media Expansion', desc: 'Added social media marketing<br/>and boosted engagement.' },
        { year: '2021', title: 'Data-Driven Results', desc: 'Adopted analytics and automation<br/>for measurable ROI.' },
        { year: '2022', title: 'Award-Winning Campaigns', desc: 'Won awards for creative PPC<br/>and content marketing.' },
        { year: '2023', title: 'Full-Service Agency', desc: 'Became a full-service partner<br/>for web, SEO, PPC, social.' },
      ],
      visionTitle: 'Our Vision',
      visionDesc: 'To empower businesses of all sizes to thrive in the digital world by delivering innovative, data-driven marketing solutions that inspire growth and lasting impact.',
      missionTitle: 'Our Mission',
      missionDesc: 'To partner with our clients on their digital journey, providing expert guidance, creative strategies, and measurable results that drive their business forward.',
      uniqueTitle: 'What Makes Us Unique',
      uniqueCards: [
        'Integrated Digital Solutions',
        'Data-Driven Personalization',
        'Expert-Led Innovation',
        'Transparent Communication',
        'Client Collaboration',
        'Continuous Growth'
      ],
      whatWeThinkTitle: 'What We Think',
      whatWeThinkCards: [
        { title: 'Holistic Approach', desc: 'We address the complete business journey not just campaigns, but the root of digital growth through integrated, comprehensive marketing solutions.' },
        { title: 'Personalized Care', desc: 'Every brand is unique. We believe digital marketing solutions should be tailored to your goals, audience, and industry for maximum results.' },
        { title: 'Evidence-Based Practice', desc: 'We combine creative strategy with proven analytics and the latest technology to deliver measurable, sustainable growth for your business.' }
      ],
      valuesTitle: 'Our Values',
      valuesCards: [
        { title: 'Transparency', desc: 'Open, honest reporting on every campaign.' },
        { title: 'Innovation', desc: 'Creative, data-driven digital strategies.' },
        { title: 'Collaboration', desc: 'Working together for your success.' },
        { title: 'Results', desc: 'Focused on measurable growth.' },
        { title: 'Growth', desc: 'Always learning, always improving.' }
      ]
    },
    Arabic: {
      heroTitle: 'من نحن',
      heroSubtitle: 'شركاؤك في النمو الرقمي',
      heroDesc: 'نساعد العلامات التجارية على النجاح عبر الإنترنت من خلال التسويق الرقمي الإبداعي، والاستراتيجيات المدعومة بالبيانات، والنتائج القابلة للقياس. من تحسين محركات البحث ووسائل التواصل الاجتماعي إلى PPC وتصميم المواقع، نمكّن عملك من النمو في العصر الرقمي.',
      growthTitle: 'نموّنا عبر السنوات',
      growthTimeline: [
        { year: '2018', title: 'بداية رحلتنا', desc: 'انطلقنا كوكالة متخصصة<br/>للأعمال المحلية.' },
        { year: '2019', title: 'أول نجاح في SEO', desc: 'حققنا تصنيفات متقدمة في جوجل<br/>ونمواً عضوياً بنسبة 200%.' },
        { year: '2020', title: 'توسيع وسائل التواصل', desc: 'أضفنا التسويق عبر السوشيال<br/>وزدنا التفاعل.' },
        { year: '2021', title: 'نتائج مدعومة بالبيانات', desc: 'اعتمدنا التحليلات والأتمتة<br/>لعائد استثمار قابل للقياس.' },
        { year: '2022', title: 'حملات حائزة على جوائز', desc: 'فزنا بجوائز لحملات PPC<br/>وتسويق المحتوى.' },
        { year: '2023', title: 'وكالة متكاملة الخدمات', desc: 'أصبحنا شريكاً متكاملاً<br/>للمواقع، SEO، PPC، السوشيال.' },
      ],
      visionTitle: 'رؤيتنا',
      visionDesc: 'تمكين الشركات من جميع الأحجام للنمو في العالم الرقمي عبر حلول تسويق مبتكرة ومدعومة بالبيانات تلهم النمو والأثر المستدام.',
      missionTitle: 'مهمتنا',
      missionDesc: 'نكون شركاء لعملائنا في رحلتهم الرقمية، ونقدم الإرشاد والخبرة والاستراتيجيات الإبداعية والنتائج القابلة للقياس لدفع أعمالهم للأمام.',
      uniqueTitle: 'ما الذي يميزنا',
      uniqueCards: [
        'حلول رقمية متكاملة',
        'تخصيص مدعوم بالبيانات',
        'ابتكار بقيادة خبراء',
        'تواصل شفاف',
        'تعاون مع العميل',
        'نمو مستمر'
      ],
      whatWeThinkTitle: 'ما رأينا',
      whatWeThinkCards: [
        { title: 'نهج شامل', desc: 'نعالج رحلة العمل كاملة وليس الحملات فقط، بل جذور النمو الرقمي عبر حلول تسويق متكاملة.' },
        { title: 'رعاية شخصية', desc: 'كل علامة تجارية فريدة. نؤمن أن حلول التسويق الرقمي يجب أن تُصمم لأهدافك وجمهورك وصناعتك لتحقيق أفضل النتائج.' },
        { title: 'ممارسة قائمة على الأدلة', desc: 'نجمع بين الاستراتيجية الإبداعية والتحليلات المثبتة وأحدث التقنيات لتحقيق نمو قابل للقياس ومستدام.' }
      ],
      valuesTitle: 'قيمنا',
      valuesCards: [
        { title: 'الشفافية', desc: 'تقرير مفتوح وصادق عن كل حملة.' },
        { title: 'الابتكار', desc: 'استراتيجيات رقمية إبداعية ومدعومة بالبيانات.' },
        { title: 'التعاون', desc: 'نعمل معاً من أجل نجاحك.' },
        { title: 'النتائج', desc: 'نركز على النمو القابل للقياس.' },
        { title: 'النمو', desc: 'دائماً نتعلم ونتطور.' }
      ]
    },
    Hebrew: {
      heroTitle: 'עלינו',
      heroSubtitle: 'השותפים שלך לצמיחה דיגיטלית',
      heroDesc: 'אנחנו עוזרים למותגים להצליח אונליין עם שיווק דיגיטלי יצירתי, אסטרטגיות מבוססות נתונים ותוצאות מדידות. מ-SEO ומדיה חברתית ועד PPC ועיצוב אתרים, אנו מעצימים את העסק שלך לצמוח בעידן הדיגיטלי.',
      growthTitle: 'הצמיחה שלנו לאורך השנים',
      growthTimeline: [
        { year: '2018', title: 'התחלנו את המסע', desc: 'הושקנו כסוכנות בוטיק<br/>לעסקים מקומיים.' },
        { year: '2019', title: 'הצלחה ראשונה ב-SEO', desc: 'הגענו לדירוגים גבוהים בגוגל<br/>וגידול אורגני של 200%.' },
        { year: '2020', title: 'התרחבות במדיה החברתית', desc: 'הוספנו שיווק במדיה החברתית<br/>והגברנו מעורבות.' },
        { year: '2021', title: 'תוצאות מבוססות נתונים', desc: 'אימצנו אנליטיקות ואוטומציה<br/>לתשואה מדידה.' },
        { year: '2022', title: 'קמפיינים זוכי פרסים', desc: 'זכינו בפרסים ל-PPC<br/>ושיווק תוכן יצירתי.' },
        { year: '2023', title: 'סוכנות שירות מלאה', desc: 'הפכנו לשותף מלא לאתרים, SEO, PPC ומדיה חברתית.' },
      ],
      visionTitle: 'החזון שלנו',
      visionDesc: 'להעצים עסקים מכל גודל להצליח בעולם הדיגיטלי באמצעות פתרונות שיווק חדשניים ומבוססי נתונים שמעוררים צמיחה והשפעה מתמשכת.',
      missionTitle: 'המשימה שלנו',
      missionDesc: 'להיות שותפים ללקוחותינו במסע הדיגיטלי, לספק הדרכה מקצועית, אסטרטגיות יצירתיות ותוצאות מדידות שמקדמות את העסק שלהם.',
      uniqueTitle: 'מה מייחד אותנו',
      uniqueCards: [
        'פתרונות דיגיטליים משולבים',
        'התאמה אישית מבוססת נתונים',
        'חדשנות בהובלת מומחים',
        'תקשורת שקופה',
        'שיתוף פעולה עם הלקוח',
        'צמיחה מתמדת'
      ],
      whatWeThinkTitle: 'מה אנחנו חושבים',
      whatWeThinkCards: [
        { title: 'גישה הוליסטית', desc: 'אנחנו מטפלים בכל מסע העסק, לא רק בקמפיינים, אלא בשורש הצמיחה הדיגיטלית באמצעות פתרונות שיווק משולבים.' },
        { title: 'טיפול אישי', desc: 'כל מותג ייחודי. אנו מאמינים שפתרונות שיווק דיגיטלי צריכים להיות מותאמים למטרותיך, לקהל ולענף שלך לתוצאות מיטביות.' },
        { title: 'פרקטיקה מבוססת ראיות', desc: 'אנו משלבים אסטרטגיה יצירתית עם אנליטיקות מוכחות וטכנולוגיה מתקדמת כדי להוביל לצמיחה מדידה וברת קיימא לעסק שלך.' }
      ],
      valuesTitle: 'הערכים שלנו',
      valuesCards: [
        { title: 'שקיפות', desc: 'דיווח פתוח וכנה על כל קמפיין.' },
        { title: 'חדשנות', desc: 'אסטרטגיות דיגיטליות יצירתיות ומבוססות נתונים.' },
        { title: 'שיתוף פעולה', desc: 'עובדים יחד להצלחתך.' },
        { title: 'תוצאות', desc: 'ממוקדים בצמיחה מדידה.' },
        { title: 'צמיחה', desc: 'תמיד לומדים, תמיד משתפרים.' }
      ]
    }
  };
  return (
    <>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />
      <main className={`w-full min-h-screen ${darkTheme ? 'bg-[#18181c]' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section with Video Background */}
  <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" data-aos="fade-up">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={aboutUsHero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg" style={{color:'#a259c6'}}>{content[language].heroTitle}</h1>
          <p className="text-lg md:text-xl text-white mb-2 max-w-2xl mx-auto drop-shadow-md" style={{color:'#ffb347'}}>{content[language].heroSubtitle}</p>
          <p className="text-base md:text-lg text-white max-w-2xl mx-auto drop-shadow-md">
            {content[language].heroDesc}
          </p>
        </div>
      </section>

      {/* Our Growth Through Years Section (inline, matches image) */}
  <section className={`w-full py-20 flex flex-col items-center ${darkTheme ? 'bg-black' : 'bg-white'}`} data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-wide" style={{color:'#a259c6'}}>{content[language].growthTitle}</h2>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
          {content[language].growthTimeline.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center rounded-xl py-8 px-4 shadow-lg relative h-64 border ${darkTheme ? 'bg-white border-[#2d1b3c]' : 'bg-[#18181c] border-[#2d1b3c]'}`}
            >
              <div
                className={`text-2xl font-bold mb-2 bg-gradient-to-b from-purple-500 to-pink-400 text-transparent bg-clip-text`}
                style={{fontFamily:'monospace'}}
              >
                {item.year}
              </div>
              <div className={`${darkTheme ? 'text-black' : 'text-white'} font-semibold text-base mb-2 tracking-wide`}>{item.title}</div>
              <div className={`${darkTheme ? 'text-black' : 'text-gray-300'} text-sm leading-relaxed  max-w-[180px] mx-auto`} dangerouslySetInnerHTML={{__html: item.desc}}></div>
            </div>
          ))}
        </div>
      </section>
      {/* What Makes Us Unique Section */}
      {/* Our Vision & Our Mission Section */}
  <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-[#232136]' : 'bg-[#c7a6fa]'}`} data-aos="fade-right">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Left: Image */}
          <div className="flex-1 flex items-center justify-center mb-8 md:mb-0" data-aos="zoom-in">
            <div className="w-full max-w-xs md:max-w-sm h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl bg-[#e6f0fa]">
              <img src={ourMissionImg} alt="Vision Mission" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right: Vision & Mission Cards */}
          <div className="flex-1 flex flex-col gap-8 min-w-[260px] max-w-md" data-aos="fade-left">
            <div className={`rounded-[2.5rem] shadow-xl p-8 flex flex-col items-center text-center ${darkTheme ? 'bg-black' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-3" style={{color:'#a259c6'}}>{content[language].visionTitle}</h3>
              <p className={`${darkTheme ? 'text-white' : 'text-gray-700'} text-justify text-base`}>{content[language].visionDesc}</p>
            </div>
            <div className={`rounded-[2.5rem] shadow-xl p-8 flex flex-col items-center text-center ${darkTheme ? 'bg-black' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-3" style={{color:'#a259c6'}}>{content[language].missionTitle}</h3>
              <p className={`${darkTheme ? 'text-white' : 'text-gray-700'} text-justify text-base`}>{content[language].missionDesc}</p>
            </div>
          </div>
        </div>
      </section>
      {/* What Makes Us Unique Section (moved and themed) */}
  <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-black' : 'bg-[#f7f7f7]'}`} data-aos="fade-up">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-wide text-[#a259c6]">{content[language].uniqueTitle}</h2>
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 items-center justify-between px-4">
          {/* Left: Unique Image */}
          <div className="flex-1 flex items-center justify-center mb-8 md:mb-0" data-aos="zoom-in">
            <div className="w-full h-[410px] rounded-3xl overflow-hidden shadow-2xl bg-[#e6f0fa] flex items-center justify-center">
              <img src={uniqueImg} alt="Unique Digital Marketing" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right: Cards in 3 rows, 2 columns */}
            <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-6 min-w-[320px] max-w-xl" data-aos="fade-left">
              {content[language].uniqueCards.map((card, idx) => (
                <div key={idx} className="rounded-2xl shadow-xl p-8 flex flex-col items-start min-h-[110px] bg-white border-l-8 border-[#a259c6]">
                  <h3 className="font-bold text-lg text-[#232136]">{card}</h3>
                </div>
              ))}
            </div>
        </div>
      </section>
      {/* What We Think Section */}
  <section className="w-full py-16 bg-[#c7a6fa] flex flex-col items-center" data-aos="fade-up">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* Left: Content */}
          <div className="flex-1 min-w-0 flex flex-col items-start justify-center pr-0 md:pr-8" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{color:'white'}}>{content[language].whatWeThinkTitle}</h2>
            <div className="space-y-5 w-full">
              {content[language].whatWeThinkCards.map((card, idx) => (
                <div key={idx} className={`rounded-2xl bg-[#232136] bg-opacity-90 text-white p-6 border-l-4 border-[#a259c6] shadow-md`}>
                  <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                  <p className="text-sm text-justify">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Image */}
            <div className="w-full max-w-xl  h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-[#232136] flex items-center justify-center" data-aos="fade-left">
              <img src={whatWeThinkImg} alt="What We Think" className="w-full h-full object-cover" />
            </div>
          
        </div>
      </section>
       
      {/* Our Values Section */}
  <section className={`w-full py-16 flex flex-col items-center ${darkTheme ? 'bg-black' : 'bg-white'}`} data-aos="fade-up">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-wide text-[#a259c6]">{content[language].valuesTitle}</h2>
  <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-4 gap-10">
          {/* Left: Diamond Cards */}
          <div className="flex-1 flex flex-col items-center" data-aos="fade-right">
            <div className="flex flex-row justify-center items-end gap-10 mb-[-30px]">
              {content[language].valuesCards.slice(0,2).map((card, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  <div className={`transform rotate-45 w-40 h-40 border-2 border-[#a259c6] flex flex-col items-center justify-center shadow-xl ${darkTheme ? 'bg-black' : 'bg-white'}`}> 
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl font-bold text-[#a259c6]">{idx+1}</span>
                    <span className={`transform -rotate-45 font-bold text-lg ${darkTheme ? 'text-white' : 'text-[#232136]'}`}>{card.title}</span>
                    <span className={`transform -rotate-45 text-xs text-center mt-2 ${darkTheme ? 'text-white' : 'text-gray-600'}`}>{card.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-center items-center gap-10 mb-[-30px]">
              <div className="relative flex flex-col items-center">
                <div className={`transform rotate-45 w-40 h-40 border-2 border-[#a259c6] flex flex-col items-center justify-center shadow-xl ${darkTheme ? 'bg-black' : 'bg-white'}`}> 
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl font-bold text-[#a259c6]">3</span>
                  <span className={`transform -rotate-45 font-bold text-lg ${darkTheme ? 'text-white' : 'text-[#232136]'}`}>{content[language].valuesCards[2].title}</span>
                  <span className={`transform -rotate-45 text-xs text-center mt-2 ${darkTheme ? 'text-white' : 'text-gray-600'}`}>{content[language].valuesCards[2].desc}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-start gap-10 mt-[-30px]">
              {content[language].valuesCards.slice(3,5).map((card, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  <div className={`transform rotate-45 w-40 h-40 border-2 border-[#a259c6] flex flex-col items-center justify-center shadow-xl ${darkTheme ? 'bg-black' : 'bg-white'}`}> 
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl font-bold text-[#a259c6]">{idx+4}</span>
                    <span className={`transform -rotate-45 font-bold text-lg ${darkTheme ? 'text-white' : 'text-[#232136]'}`}>{card.title}</span>
                    <span className={`transform -rotate-45 text-xs text-center mt-2 ${darkTheme ? 'text-white' : 'text-gray-600'}`}>{card.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-center justify-center" data-aos="fade-left">
            <div className="w-full max-w-xs md:max-w-sm rounded-3xl overflow-hidden shadow-2xl bg-[#e6f0fa]">
              <img src={valuesImg} alt="Our Values" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* More sections will go here */}
      </main>
  <Footer darkTheme={darkTheme} />
    </>
  );
}
