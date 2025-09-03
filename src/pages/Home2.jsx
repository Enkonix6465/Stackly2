import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header";
import Footer from "../Footer";
import home2hero from "../assets/home2hero.mp4";
import whychoose from "../assets/whychoose.jpg";
import ceoBg from "../assets/ceo.jpg";

// Team members array and TeamCarousel component
const teamMembers = [
  {
    name: "Helena Farse",
    role: "SEO Specialist | 10+ years in digital marketing",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dan Pitts",
    role: "Content Strategist | 5 years in digital campaigns",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Tomas Willens",
    role: "Social Media Manager | 5 years in brand growth",
    img: "https://randomuser.me/api/portraits/men/97.jpg",
  },
  {
    name: "Priya Sharma",
    role: "PPC Expert | 7 years in paid advertising",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Alex Kim",
    role: "Email Marketing Lead | 6 years in automation",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Sara Lee",
    role: "Web Designer | 8 years in UI/UX",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "John Carter",
    role: "Analytics Specialist | 9 years in data insights",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emily Tran",


// ...existing code for TeamCarousel, TrendsTips, Home2, and export default Home2...
    role: "Brand Manager | 6 years in digital branding",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Carlos Rivera",
    role: "Video Content Creator | 4 years in digital media",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];

function TeamCarousel() {
  // Translation-aware team members
  const { language } = React.useContext(TeamCarousel.LanguageContext);
  const teamMembersMap = {
    English: [
      { name: "Aaren Davis", role: "MARKETING EXPERT", img: "https://randomuser.me/api/portraits/men/32.jpg" },
      { name: "Cadence Daniel", role: "ADVERTISING HEAD", img: "https://randomuser.me/api/portraits/women/44.jpg" },
      { name: "Oliver Wilson", role: "CONTENT CREATOR", img: "https://randomuser.me/api/portraits/women/68.jpg" },
      { name: "Beatrice Dubois", role: "GRAPHICS DESIGNER", img: "https://randomuser.me/api/portraits/men/45.jpg" },
      { name: "Crystal Jerry", role: "CAMPAIGN LEAD", img: "https://randomuser.me/api/portraits/men/76.jpg" },
      { name: "Sulema Silva", role: "DIGITAL LEADER", img: "https://randomuser.me/api/portraits/women/65.jpg" }
    ],
    Arabic: [
      { name: "آرين ديفيس", role: "خبير تسويق", img: "https://randomuser.me/api/portraits/men/32.jpg" },
      { name: "كادينس دانيال", role: "رئيس الإعلانات", img: "https://randomuser.me/api/portraits/women/44.jpg" },
      { name: "أوليفر ويلسون", role: "منشئ محتوى", img: "https://randomuser.me/api/portraits/women/68.jpg" },
      { name: "بياتريس دوبوا", role: "مصمم جرافيك", img: "https://randomuser.me/api/portraits/men/45.jpg" },
      { name: "كريستال جيري", role: "قائد الحملات", img: "https://randomuser.me/api/portraits/men/76.jpg" },
      { name: "سوليما سيلفا", role: "قائدة رقمية", img: "https://randomuser.me/api/portraits/women/65.jpg" }
    ],
    Hebrew: [
      { name: "ארן דיוויס", role: "מומחה שיווק", img: "https://randomuser.me/api/portraits/men/32.jpg" },
      { name: "קדנס דניאל", role: "ראש פרסום", img: "https://randomuser.me/api/portraits/women/44.jpg" },
      { name: "אוליבר וילסון", role: "יוצר תוכן", img: "https://randomuser.me/api/portraits/women/68.jpg" },
      { name: "ביאטריס דובואה", role: "מעצב גרפי", img: "https://randomuser.me/api/portraits/men/45.jpg" },
      { name: "קריסטל ג'רי", role: "ראש קמפיינים", img: "https://randomuser.me/api/portraits/men/76.jpg" },
      { name: "סולימה סילבה", role: "מנהיגה דיגיטלית", img: "https://randomuser.me/api/portraits/women/65.jpg" }
    ]
  };
  const teamMembers = teamMembersMap[language];
  const [start, setStart] = React.useState(0);
  const visible = 3;
  const end = start + visible;
  const canPrev = start > 0;
  const canNext = end < teamMembers.length;
  const handlePrev = () => { if (canPrev) setStart(start - 1); };
  const handleNext = () => { if (canNext) setStart(start + 1); };
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-8 w-full justify-center">
        {teamMembers.slice(start, end).map((member) => (
          <div key={member.name} className="bg-white rounded-3xl shadow-2xl flex flex-col items-center p-14 min-h-[500px] w-[400px]">
            <img src={member.img} alt={member.name} className="w-56 h-56 rounded-3xl object-cover object-center mb-8" />
            <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{member.role}</p>
            <div className="flex gap-3 mt-2"></div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-8">
        <button onClick={handlePrev} disabled={!canPrev} className={`px-4 py-2 rounded-full bg-gray-300 text-gray-700 font-bold transition-colors ${!canPrev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}>{'<'}</button>
        <button onClick={handleNext} disabled={!canNext} className={`px-4 py-2 rounded-full bg-gray-300 text-gray-700 font-bold transition-colors ${!canNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}>{'>'}</button>
      </div>
    </div>
  );
}
TeamCarousel.LanguageContext = React.createContext({ language: 'English' });





// TrendsTips Section
function TrendsTips() {
  const { language } = React.useContext(TrendsTips.LanguageContext);
  const tipsMap = {
    English: [
      "Leverage video content for higher engagement.",
      "Optimize for voice search in 2025.",
      "Personalize your email marketing.",
      "Focus on mobile-first design.",
      "Utilize AI for smarter ad targeting.",
      "Build trust with authentic storytelling.",
      "Invest in SEO for long-term growth.",
      "Embrace short-form video trends.",
      "Use analytics to refine your strategy.",
      "Engage with your audience on social media."
    ],
    Arabic: [
      "استخدم الفيديو لزيادة التفاعل.",
      "حسّن لمحتوى البحث الصوتي في 2025.",
      "خصص حملات البريد الإلكتروني.",
      "ركز على تصميم متوافق مع الجوال.",
      "استفد من الذكاء الاصطناعي لاستهداف الإعلانات.",
      "ابنِ الثقة بقصص واقعية.",
      "استثمر في تحسين محركات البحث للنمو الطويل.",
      "اعتمد الفيديوهات القصيرة الرائجة.",
      "استخدم التحليلات لتحسين الاستراتيجية.",
      "تفاعل مع جمهورك على وسائل التواصل الاجتماعي."
    ],
    Hebrew: [
      "השתמשו בתוכן וידאו להגדלת מעורבות.",
      "בצעו אופטימיזציה לחיפוש קולי ב-2025.",
      "התאימו אישית את שיווק הדוא\"ל.",
      "התמקדו בעיצוב מובייל תחילה.",
      "השתמשו ב-AI למיקוד חכם בפרסום.",
      "בנו אמון עם סיפור אותנטי.",
      "השקיעו ב-SEO לצמיחה ארוכת טווח.",
      "אמצו טרנדים של וידאו קצר.",
      "השתמשו באנליטיקות לשיפור אסטרטגיה.",
      "התחברו עם הקהל במדיה החברתית."
    ]
  };
  const tips = tipsMap[language];
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tips.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [tips.length]);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-xl md:text-2xl font-semibold text-[#53295a] mb-4 min-h-[48px] transition-all duration-500">
        {tips[index]}
      </div>
      <div className="flex gap-2 mt-2">
        {tips.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-[#a259c6]' : 'bg-gray-300'} transition-colors`}
          />
        ))}
      </div>
    </div>
  );
}
TrendsTips.LanguageContext = React.createContext({ language: 'English' });


const Home2 = ({ darkTheme, setDarkTheme }) => {
  const [language, setLanguage] = React.useState('English');
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  // RTL detection
  const isRTL = language === 'Arabic' || language === 'Hebrew';
  // Content map
  const content = {
    English: {
      heroTitle: 'Elevate Your Brand with',
      heroGradient: 'Digital Marketing',
      heroDesc: 'Unlock your business potential with data-driven strategies, creative campaigns, and the latest in digital marketing technology. Grow your audience, boost engagement, and achieve measurable results with our expert team.',
      meetTeam: 'Meet The Team',
      meetTeamDesc: 'Behind The Creative Process Of Building Your Brand',
      meetCEO: 'Meet Our',
      ceo: 'CEO',
      ceoName: 'Alexandra Bennett',
      ceoRole: 'Founder & Chief Executive Officer',
      ceoDesc: 'Alexandra brings over 15 years of experience in digital marketing, brand strategy, and business. Her vision and passion for innovation have driven our agency to the forefront of the industry.',
      ceoList: [
        'Expert in multi-channel marketing and growth strategies',
        'Featured speaker at top marketing conferences',
        'Mentor to young entrepreneurs and startups',
        'Believes in data-driven creativity and client success'
      ],
      ceoQuote: 'My mission is to empower brands to reach their full potential through innovative digital solutions and a relentless focus on results.',
      whyChoose: 'Why Choose Us',
      whyDesc: "Discover what sets us apart: expertise, data-driven results, 24/7 support, and a proven track record of successful website projects. Partner with us for your website's digital growth and online success.",
      expertTeam: 'Expert Team',
      expertTeamDesc: 'Certified professionals with proven website project track records.',
      dataDriven: 'Data-Driven',
      dataDrivenDesc: 'Website results backed by analytics and insights.',
      support: '24/7 Support',
      supportDesc: 'Round-the-clock website assistance for your success.',
      provenResults: 'Proven Results',
      provenResultsDesc: 'Proven track record of successful campaigns.',
      trendsTips: 'Trends & Tips Corner',
      insightsTitle: 'Digital Marketing Insights',
      insightsDesc: 'Discover the latest trends, research, and expert insights in digital marketing. Our comprehensive analysis helps you make informed decisions to grow your brand, reach your audience, and maximize ROI in the digital era.',
      insights1: 'Data-Driven Strategies',
      insights1Desc: 'All our recommendations are backed by analytics, industry research, and proven digital methodologies.',
      insights2: 'Personalized Campaigns',
      insights2Desc: 'Tailored marketing strategies that adapt to your unique business goals and audience.',
      insights3: 'Community & Support',
      insights3Desc: 'Join a supportive network of marketers and get expert help on your digital journey.',
      exploreInsights: 'Explore Insights'
    },
    Arabic: {
      heroTitle: 'ارتقِ بعلامتك التجارية مع',
      heroGradient: 'التسويق الرقمي',
      heroDesc: 'اكتشف إمكانيات عملك مع استراتيجيات قائمة على البيانات وحملات إبداعية وأحدث تقنيات التسويق الرقمي. نمِّ جمهورك، وزد التفاعل، وحقق نتائج ملموسة مع فريقنا الخبير.',
      meetTeam: 'تعرف على الفريق',
      meetTeamDesc: 'وراء عملية بناء علامتك التجارية',
      meetCEO: 'تعرف على',
      ceo: 'المدير التنفيذي',
      ceoName: 'ألكسندرا بينيت',
      ceoRole: 'المؤسسة والمديرة التنفيذية',
      ceoDesc: 'تتمتع ألكسندرا بخبرة تزيد عن 15 عامًا في التسويق الرقمي واستراتيجية العلامة التجارية والأعمال. رؤيتها وشغفها بالابتكار دفعا وكالتنا إلى صدارة المجال.',
      ceoList: [
        'خبيرة في التسويق متعدد القنوات واستراتيجيات النمو',
        'متحدثة في مؤتمرات التسويق الكبرى',
        'مرشدة لرواد الأعمال والشركات الناشئة',
        'تؤمن بالإبداع المدعوم بالبيانات ونجاح العملاء'
      ],
      ceoQuote: 'مهمتي هي تمكين العلامات التجارية من تحقيق إمكانياتها الكاملة من خلال حلول رقمية مبتكرة وتركيز لا يتزعزع على النتائج.',
      whyChoose: 'لماذا نحن',
      whyDesc: "اكتشف ما يميزنا: خبرة، نتائج مدعومة بالبيانات، دعم على مدار الساعة، وسجل حافل من المشاريع الناجحة. كن شريكنا لنمو موقعك ونجاحك الرقمي.",
      expertTeam: 'فريق خبراء',
      expertTeamDesc: 'محترفون معتمدون بسجل مشاريع ناجحة.',
      dataDriven: 'مدعوم بالبيانات',
      dataDrivenDesc: 'نتائج المواقع مدعومة بالتحليلات والرؤى.',
      support: 'دعم 24/7',
      supportDesc: 'مساعدة مستمرة لنجاح موقعك.',
      provenResults: 'نتائج مثبتة',
      provenResultsDesc: 'سجل مثبت لحملات ناجحة.',
      trendsTips: 'ركن الاتجاهات والنصائح',
      insightsTitle: 'رؤى التسويق الرقمي',
      insightsDesc: 'اكتشف أحدث الاتجاهات والأبحاث والرؤى في التسويق الرقمي. تحليلاتنا الشاملة تساعدك على اتخاذ قرارات مدروسة لنمو علامتك التجارية والوصول لجمهورك وزيادة العائد في العصر الرقمي.',
      insights1: 'استراتيجيات مدعومة بالبيانات',
      insights1Desc: 'جميع توصياتنا مدعومة بالتحليلات والأبحاث والمنهجيات الرقمية المثبتة.',
      insights2: 'حملات مخصصة',
      insights2Desc: 'استراتيجيات تسويق مصممة خصيصًا لأهداف عملك وجمهورك.',
      insights3: 'مجتمع ودعم',
      insights3Desc: 'انضم إلى شبكة داعمة من المسوقين واحصل على مساعدة خبراء في رحلتك الرقمية.',
      exploreInsights: 'استكشف الرؤى'
    },
    Hebrew: {
      heroTitle: 'העצם את המותג שלך עם',
      heroGradient: 'שיווק דיגיטלי',
      heroDesc: 'גלה את הפוטנציאל העסקי שלך עם אסטרטגיות מבוססות נתונים, קמפיינים יצירתיים והטכנולוגיה החדישה ביותר בשיווק דיגיטלי. הגדל את הקהל, שפר מעורבות והשג תוצאות מדידות עם הצוות המומחה שלנו.',
      meetTeam: 'הכירו את הצוות',
      meetTeamDesc: 'מאחורי תהליך בניית המותג שלך',
      meetCEO: 'הכירו את',
      ceo: 'המנכ"לית',
      ceoName: 'אלכסנדרה בנט',
      ceoRole: 'מייסדת ומנכ"לית',
      ceoDesc: 'אלכסנדרה מביאה מעל 15 שנות ניסיון בשיווק דיגיטלי, אסטרטגיית מותג ועסקים. החזון והתשוקה שלה לחדשנות הובילו את הסוכנות שלנו לחזית הענף.',
      ceoList: [
        'מומחית בשיווק רב-ערוצי ואסטרטגיות צמיחה',
        'מרצה בכנסים מובילים בשיווק',
        'מנטורית ליזמים צעירים וסטארטאפים',
        'מאמינה ביצירתיות מבוססת נתונים והצלחת לקוחות'
      ],
      ceoQuote: 'המשימה שלי היא להעצים מותגים להגיע לפוטנציאל המלא שלהם באמצעות פתרונות דיגיטליים חדשניים ומיקוד בלתי מתפשר בתוצאות.',
      whyChoose: 'למה לבחור בנו',
      whyDesc: "גלה מה מייחד אותנו: מומחיות, תוצאות מבוססות נתונים, תמיכה 24/7, ורקורד מוכח של פרויקטים מוצלחים. היה שותף שלנו לצמיחה דיגיטלית והצלחה מקוונת.",
      expertTeam: 'צוות מומחים',
      expertTeamDesc: 'מקצוענים מוסמכים עם רקורד מוכח.',
      dataDriven: 'מונע נתונים',
      dataDrivenDesc: 'תוצאות אתרים מגובות באנליטיקות ותובנות.',
      support: 'תמיכה 24/7',
      supportDesc: 'סיוע מתמשך להצלחת האתר שלך.',
      provenResults: 'תוצאות מוכחות',
      provenResultsDesc: 'רקורד מוכח של קמפיינים מוצלחים.',
      trendsTips: 'פינת טרנדים וטיפים',
      insightsTitle: 'תובנות שיווק דיגיטלי',
      insightsDesc: 'גלה את הטרנדים, המחקרים והתובנות העדכניות ביותר בשיווק דיגיטלי. הניתוחים המקיפים שלנו עוזרים לך לקבל החלטות מושכלות לצמיחת המותג, הגעה לקהל ומקסום ROI בעידן הדיגיטלי.',
      insights1: 'אסטרטגיות מבוססות נתונים',
      insights1Desc: 'כל ההמלצות שלנו מגובות באנליטיקות, מחקרי ענף ומתודולוגיות דיגיטליות מוכחות.',
      insights2: 'קמפיינים מותאמים אישית',
      insights2Desc: 'אסטרטגיות שיווק מותאמות למטרות העסק והקהל שלך.',
      insights3: 'קהילה ותמיכה',
      insights3Desc: 'הצטרף לרשת תומכת של משווקים וקבל עזרה מקצועית במסע הדיגיטלי שלך.',
      exploreInsights: 'גלה תובנות'
    }
  };
  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${darkTheme ? 'bg-black text-white' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />
      {/* Hero Section with Video Background */}
      <section className={`relative h-screen flex items-center justify-center overflow-hidden ${darkTheme ? 'bg-black' : ''}`} data-aos="fade-up">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100%', minWidth: '100%' }}
        >
          <source src={home2hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Subtle Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        {/* Hero Content */}
        <div className={`relative z-20 flex flex-col items-center justify-center text-center px-4 animate-fade-in-up w-full ${darkTheme ? 'text-white' : ''}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {content[language].heroTitle}
            <span className="ml-3 bg-clip-text text-transparent inline-block" style={{
              background: 'linear-gradient(to right, #b57edc, #a259c6, #8d4bb7, #7b3fa2, #6c3483)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>{content[language].heroGradient}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {content[language].heroDesc}
          </p>
        </div>
      </section>
      {/* Meet Our Team Section (redesigned) */}
      <TeamCarousel.LanguageContext.Provider value={{ language }}>
        <section className={`relative z-20 py-20 ${darkTheme ? 'bg-black text-white' : 'bg-white'}`} data-aos="fade-right">
          <div className="max-w-5xl mx-auto px-4 animate-fade-in-up">
            <h2 className={`text-4xl md:text-5xl font-bold mb-2 text-center ${darkTheme ? 'text-white' : 'text-[#222]'}`} style={{ fontFamily: 'serif' }}>{content[language].meetTeam}</h2>
            <p className={`text-lg text-center mb-10 ${darkTheme ? 'text-white' : 'text-gray-600'}`}>{content[language].meetTeamDesc}</p>
            <TeamCarousel />
          </div>
        </section>
      </TeamCarousel.LanguageContext.Provider>
      {/* Meet Our CEO Section */}
      <section
        className="relative z-20 py-20 px-0 flex items-left justify-left"
        style={{
          backgroundImage: `url(${ceoBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        data-aos="fade-left"
      >
        <div className="w-full pl-20 mx-auto flex flex-col md:flex-row items-start  px-4 animate-fade-in-up">
          {/* Left: CEO Content (fully left-aligned) */}
          <div className="flex-1 flex flex-col  items-start text-left bg-opacity-90 rounded-3xl shadow-xl">
            <div className="flex items-left mb-4">
              <svg className="w-8 h-8 text-[#a259c6] mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A7.003 7.003 0 0 0 2 13c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1c-.28 0-.53.11-.71.29l-.12.12zM17.17 6.17A7.003 7.003 0 0 0 12 13c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1c-.28 0-.53.11-.71.29l-.12.12z"/></svg>
              <span className="text-[#fff] font-bold text-lg">{content[language].meetCEO}</span>
              <span className="ml-2 bg-[#a259c6] text-white font-extrabold text-2xl px-4 py-2 rounded-xl shadow-lg">{content[language].ceo}</span>
            </div>
            <h3 className="text-2xl font-bold text-[#fff] mb-2 text-left">{content[language].ceoName}</h3>
            <p className="text-[#fff] font-semibold mb-2 text-left">{content[language].ceoRole}</p>
            <p className="text-white text-lg mb-2 text-left">{content[language].ceoDesc}</p>
            <ul className="list-disc pl-5 text-white mb-2 text-left">
              {content[language].ceoList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <p className="text-white text-base mt-2 text-left">"{content[language].ceoQuote}"</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section (Who We Are) */}
  <section className={`relative w-full py-20 flex items-center justify-center ${darkTheme ? 'bg-black text-white' : 'bg-white'}`} data-aos="fade-right">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-0 md:gap-8 px-4 md:px-0">
          {/* Left: Image */}
          <div className="flex-1 flex items-center justify-center relative mt-10 md:mt-0">
            {/* Decorative dots */}
            <div className="absolute left-0 top-0 z-10 hidden md:block" style={{ transform: 'translate(-30px, -30px)' }}>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {Array.from({ length: 5 }).map((_, row) => (
                  Array.from({ length: 5 }).map((_, col) => (
                    <rect key={row + '-' + col} x={col * 12} y={row * 12} width="6" height="6" rx="2" fill="#a259c6" />
                  ))
                ))}
              </svg>
            </div>
            <div className="w-full max-w-md md:max-w-lg h-96 md:h-[25rem] rounded-3xl shadow-2xl overflow-hidden bg-gray-100">
              <img src={whychoose} alt="Who We Are Visual" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right: Content inside white box with dark purple icons */}
          <div className="flex-1 flex flex-col justify-center items-start md:pr-8">
              <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${darkTheme ? 'text-white' : 'text-[#53295a]'}`}>{content[language].whyChoose}</h2>
              <p className={`mb-8 max-w-md ${darkTheme ? 'text-white' : 'text-gray-600'}`}>{content[language].whyDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {/* All icons in same dark purple (#53295a) */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#53295a] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h3 className={`${darkTheme ? 'text-white' : 'text-gray-600'} font-semibold text-[#53295a] mb-1`}>{content[language].expertTeam}</h3>
                    <p className={`text-sm ${darkTheme ? 'text-white' : 'text-gray-600'}`}>{content[language].expertTeamDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#53295a] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#fff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h3 className={`${darkTheme ? 'text-white' : 'text-gray-600'} font-semibold text-[#53295a] mb-1`}>{content[language].dataDriven}</h3>
                    <p className={`text-sm ${darkTheme ? 'text-white' : 'text-gray-600'}`}>{content[language].dataDrivenDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#53295a] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                  </div>
                  <div>
                    <h3 className={`${darkTheme ? 'text-white' : 'text-gray-600'} font-semibold text-[#53295a] mb-1`}>{content[language].support}</h3>
                    <p className={`text-sm ${darkTheme ? 'text-white' : 'text-gray-600'}`}>{content[language].supportDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#53295a] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 17v-6a4 4 0 018 0v6" /></svg>
                  </div>
                  <div>
                    <h3 className={`${darkTheme ? 'text-white' : 'text-gray-600'} font-semibold text-[#53295a] mb-1`}>{content[language].provenResults}</h3>
                    <p className={`text-sm ${darkTheme ? 'text-white' : 'text-gray-600'}`}>{content[language].provenResultsDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Trends  Tips Corner Section (inlined) */}
      <TrendsTips.LanguageContext.Provider value={{ language }}>
        <section className="w-full py-20 flex flex-col items-center" style={{ background: '#BF77F6' }} data-aos="fade-up">
          <div className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl bg-white p-8 md:p-12 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#a259c6] mb-6 text-center">{content[language].trendsTips}</h2>
            <TrendsTips />
          </div>
        </section>
      </TrendsTips.LanguageContext.Provider>

      {/* Insights Section */}
  <section className={`w-full py-20 flex justify-center items-center ${darkTheme ? 'bg-black text-white' : 'bg-white'}`}> 
          {/* Left: Image */}
          <div className="flex-1 flex items-center justify-center min-h-300" data-aos="fade-left">
            <div className="w-full max-w-lg h-[30rem] rounded-3xl shadow-2xl overflow-hidden bg-gray-100 flex items-center justify-center relative">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80" alt="Digital Marketing Insights Visual" className="w-full h-full object-cover" />
              {/* Decorative circles */}
              <div className="absolute left-[-30px] bottom-[-30px] w-24 h-24 bg-[#a259c6] opacity-20 rounded-full z-10"></div>
              <div className="absolute right-[-30px] top-[-30px] w-16 h-16 bg-[#a259c6] opacity-20 rounded-full z-10"></div>
            </div>
          </div>
          {/* Right: Content */}
          <div className="flex-1 flex flex-col justify-center items-start min-h-80" data-aos="fade-right">
            <h2 className="text-4xl font-extrabold mb-4">
              <span className={darkTheme ? 'text-white' : 'text-[#222]'}>{content[language].insightsTitle}</span>
            </h2>
            <p className={`mb-8 max-w-xl ${darkTheme ? 'text-white' : 'text-gray-700'}`}>
              {content[language].insightsDesc}
            </p>
            <div className="flex flex-col gap-6 mb-8 w-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a259c6] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h3 className={`${darkTheme ? 'text-white' : 'text-gray-600'} font-bold text-[#53295a] mb-1`}>{content[language].insights1}</h3>
                  <p className={`text-sm ${darkTheme ? 'text-white' : 'text-gray-600'}`}>{content[language].insights1Desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a259c6] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h3 className={`${darkTheme ? 'text-white' : 'text-gray-600'} font-bold text-[#53295a] mb-1`}>{content[language].insights2}</h3>
                  <p className={`text-sm ${darkTheme ? 'text-white' : 'text-gray-600'}`}>{content[language].insights2Desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a259c6] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V6a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0" /></svg>
                </div>
                <div>
                  <h3 className={`${darkTheme ? 'text-white' : 'text-gray-600'} font-bold text-[#53295a] mb-1`}>{content[language].insights3}</h3>
                  <p className={`text-sm ${darkTheme ? 'text-white' : 'text-gray-600'}`}>{content[language].insights3Desc}</p>
                </div>
              </div>
            </div>
            <button
              className="mt-2 px-6 py-3 rounded bg-[#a259c6] text-white font-semibold shadow hover:bg-[#7b3fa2] transition"
              onClick={() => navigate('/blog')}
            >
              {content[language].exploreInsights}
            </button>
          </div>
      </section>
  <Footer darkTheme={darkTheme} />
    </div>
  );
};

export default Home2;
