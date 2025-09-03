import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bloghero from "../assets/bloghero.mp4";
import Header from "../Header";
import Footer from "../Footer";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.png";
import image3 from "../assets/3.jpeg";
import quiz from "../assets/digital quiz.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const translations = {
  English: {
    heroTitle: "Insights & Strategies for the Digital Era",
    heroDesc: "Stay ahead with expert tips, marketing trends, and growth hacks from industry leaders.",
    exploreBtn: "Explore",
    latestBlogs: "Latest Blogs",
    featuredArticles: "Featured Articles",
    categories: "Categories",
    categoriesDesc: "Explore our main marketing categories, carefully curated to help you master every facet of digital marketing. Whether you're aiming to improve your search rankings, craft compelling content, manage social media channels, or optimize paid advertising campaigns, our expert insights and strategies will empower you to grow your brand and reach your audience effectively.",
    categoriesGain: "Here’s what you’ll gain from exploring these categories:",
    categoriesList: [
      "SEO",
      "Content Marketing",
      "Social Media",
      "Email Marketing",
      "PPC Advertising",
      "Analytics"
    ],
    cards: [
      { id: 1, title: "SEO Basics", description: "Learn how to optimize your website for search engines." },
      { id: 2, title: "Content Strategy", description: "Create engaging content that drives traffic and conversions." },
      { id: 3, title: "Social Media Tactics", description: "Boost your brand presence on social platforms." },
      { id: 4, title: "Email Campaigns", description: "Design effective email marketing campaigns." },
      { id: 5, title: "PPC Fundamentals", description: "Get the most out of paid advertising budgets." },
      { id: 6, title: "Data Analytics", description: "Understand your marketing performance with analytics." }
    ],
    articles: [
      { id: 1, title: "Boost Your SEO with These Proven Techniques", excerpt: "Learn the latest SEO strategies that can help your website rank higher and attract more organic traffic.", imgSrc: image1, link: "/blog/article/1" },
      { id: 2, title: "Mastering Social Media Advertising in 2025", excerpt: "Discover how to create compelling social media campaigns that convert followers into customers.", imgSrc: image2, link: "/blog/article/2" },
      { id: 3, title: "Email Marketing Best Practices for 2025", excerpt: "Maximize your email marketing ROI with these updated tips and tricks for building engagement.", imgSrc: image3, link: "/blog/article/3" }
    ],
    mythsAndFacts: [
      { myth: "You need a lot of money to start investing.", fact: "You can start investing with small amounts thanks to fractional shares and micro-investing apps." },
      { myth: "Checking your credit score hurts it.", fact: "Checking your own credit score is a soft inquiry and does not affect your score." },
      { myth: "Investing is just like gambling.", fact: "Investing is based on research, strategy, and long-term growth, unlike gambling which relies mostly on chance." },
      { myth: "Financial planning is only for the wealthy.", fact: "Financial planning helps anyone manage money better, regardless of income level." },
      { myth: "Credit cards lead to debt and should be avoided.", fact: "Used responsibly, credit cards can build your credit score and offer rewards." },
      { myth: "You should avoid all risk in investing.", fact: "Taking calculated risks is essential for growing your investments over time." }
    ],
    quizQuestions: [
      { question: "What does SEO stand for?", options: ["Search Engine Optimization", "Social Engagement Operation", "Systematic Email Outreach", "Sales Effective Outreach"], correctIndex: 0 },
      { question: "Which platform is best for B2B marketing?", options: ["Instagram", "LinkedIn", "Facebook", "Pinterest"], correctIndex: 1 },
      { question: "What is a PPC campaign?", options: ["Pay Per Click advertising", "Private Product Communication", "Public Personal Content", "Product Placement Campaign"], correctIndex: 0 },
      { question: "Name a popular email marketing tool.", options: ["HubSpot", "Slack", "Zoom", "Dropbox"], correctIndex: 0 },
      { question: "What is a landing page?", options: ["A homepage", "A page users land on after clicking an ad", "An about us page", "A contact page"], correctIndex: 1 },
      { question: "Which metric shows website traffic sources?", options: ["Bounce rate", "Traffic source", "Conversion rate", "CTR"], correctIndex: 1 },
      { question: "What is content marketing?", options: ["Promoting products by creating valuable content", "Cold calling customers", "Email spam", "Television advertising"], correctIndex: 0 },
      { question: "Name one key social media metric.", options: ["Likes", "Emails", "Clicks on a PDF", "Web server logs"], correctIndex: 0 },
      { question: "What does CTA stand for?", options: ["Call To Action", "Click Through Average", "Content Target Audience", "Customer Trend Analysis"], correctIndex: 0 },
      { question: "Why is mobile optimization important?", options: ["Most users browse on mobile devices", "Mobile sites are faster to build", "Desktops are obsolete", "Mobile optimization increases bounce rate"], correctIndex: 0 }
    ],
    mythsTitle: "Myths & Facts",
    toolsTitle: "Digital Marketing Tools Comparison",
    quizTitle: "Digital Marketing Quiz",
    questionOf: "Question",
    of: "of",
    prev: "Previous",
    next: "Next",
    readMore: "Read More →",
    toolsTableHeaders: [
      "User Rating",
      "Best For",
      "Features",
      "Pricing",
      "Tool"
    ],
    toolsTableRows: [
      { rating: "4.7/5", bestFor: "All Businesses", features: "Web analytics, traffic tracking", pricing: "Free", tool: "Google Analytics", toolTranslated: "Google Analytics" },
      { rating: "4.5/5", bestFor: "Marketers, Agencies", features: "SEO, PPC, content marketing", pricing: "month/$119.95", tool: "SEMrush", toolTranslated: "SEMrush" },
      { rating: "4.4/5", bestFor: "SMBs to Enterprises", features: "CRM, email marketing, automation", pricing: "Free - Custom pricing", tool: "HubSpot", toolTranslated: "HubSpot" },
      { rating: "4.3/5", bestFor: "Small to Medium Businesses", features: "Email marketing, automation", pricing: "Free - $299/month", tool: "Mailchimp", toolTranslated: "Mailchimp" },
      { rating: "4.2/5", bestFor: "Social media teams", features: "Social media management", pricing: "month/$49", tool: "Hootsuite", toolTranslated: "Hootsuite" },
      { rating: "4.6/5", bestFor: "Advertisers", features: "PPC advertising platform", pricing: "Pay per click", tool: "Google Ads", toolTranslated: "Google Ads" }
    ]
  },
  Arabic: {
    heroTitle: "رؤى واستراتيجيات لعصر الرقمنة",
    heroDesc: "ابق في الصدارة مع نصائح الخبراء واتجاهات التسويق وحيل النمو من قادة الصناعة.",
    exploreBtn: "استكشف",
    latestBlogs: "أحدث المدونات",
    featuredArticles: "مقالات مميزة",
    categories: "الفئات",
    categoriesDesc: "استكشف الفئات الرئيسية للتسويق لدينا، المصممة بعناية لمساعدتك على إتقان كل جانب من جوانب التسويق الرقمي. سواء كنت تهدف لتحسين ترتيب البحث، أو إنشاء محتوى جذاب، أو إدارة قنوات التواصل الاجتماعي، أو تحسين حملات الإعلانات المدفوعة، ستساعدك رؤى واستراتيجيات خبرائنا على تنمية علامتك التجارية والوصول إلى جمهورك بفعالية.",
    categoriesGain: "ستحصل على ما يلي من استكشاف هذه الفئات:",
    categoriesList: [
      "تقنيات تحسين محركات البحث لزيادة ظهور موقعك",
      "نصائح لإنشاء محتوى يجذب ويحول جمهورك",
      "استراتيجيات وسائل التواصل لبناء مجتمعك",
      "ممارسات التسويق عبر البريد الإلكتروني لزيادة معدلات الفتح والنقر",
      "معرفة الإعلان بالدفع لكل نقرة لتعظيم إنفاقك الإعلاني"
    ],
    cards: [
      { id: 1, title: "أساسيات تحسين محركات البحث", description: "تعلم كيفية تحسين موقعك لمحركات البحث." },
      { id: 2, title: "استراتيجية المحتوى", description: "إنشاء محتوى جذاب يزيد من حركة المرور والتحويلات." },
      { id: 3, title: "تكتيكات وسائل التواصل الاجتماعي", description: "تعزيز وجود علامتك التجارية على منصات التواصل الاجتماعي." },
      { id: 4, title: "حملات البريد الإلكتروني", description: "تصميم حملات تسويق عبر البريد الإلكتروني فعالة." },
      { id: 5, title: "أساسيات الدفع لكل نقرة", description: "استفد إلى أقصى حد من ميزانيات الإعلانات المدفوعة." },
      { id: 6, title: "تحليلات البيانات", description: "افهم أداء تسويقك من خلال التحليلات." }
    ],
    articles: [
      { id: 1, title: "عزز تحسين محركات البحث الخاصة بك مع هذه التقنيات المثبتة", excerpt: "تعلم أحدث استراتيجيات تحسين محركات البحث التي يمكن أن تساعد موقعك على الظهور بشكل أعلى وجذب المزيد من حركة المرور العضوية.", imgSrc: image1, link: "/blog/article/1" },
      { id: 2, title: "إتقان الإعلان عبر وسائل التواصل الاجتماعي في 2025", excerpt: "اكتشف كيفية إنشاء حملات وسائط اجتماعية جذابة تحول المتابعين إلى عملاء.", imgSrc: image2, link: "/blog/article/2" },
      { id: 3, title: "أفضل ممارسات التسويق عبر البريد الإلكتروني لعام 2025", excerpt: "قم بزيادة عائد استثمارك في التسويق عبر البريد الإلكتروني مع هذه النصائح والحيل المحدثة لبناء التفاعل.", imgSrc: image3, link: "/blog/article/3" }
    ],
    mythsAndFacts: [
      { myth: "צריך הרבה כסף כדי להתחיל להשקיע.", fact: "אפשר להתחיל להשקיע עם סכומים קטנים בזכות מניות חלקיות ואפליקציות השקעה מזעריות." },
      { myth: "בדיקת דירוג האשראי שלך פוגעת בו.", fact: "בדיקת דירוג האשראי שלך היא חקירה רכה ואינה משפיעה על הדירוג שלך." },
      { myth: "השקעה היא כמו הימורים.", fact: "השקעה מבוססת על מחקר, אסטרטגיה וצמיחה לטווח ארוך, בניגוד להימורים שתלויים בעיקר במזל." },
      { myth: "תכנון פיננסי הוא רק עבור עשירים.", fact: "תכנון פיננסי עוזר לכל אחד לנהל את כספו טוב יותר, ללא קשר לרמת ההכנסה." },
      { myth: "כרטיסי אשראי מובילים לחובות ויש להימנע מהם.", fact: "שימוש אחראי יכול לבנות את דירוג האשראי שלך ולהציע תגמולים." },
      { myth: "צריך להימנע מכל סיכון בהשקעה.", fact: "לקיחת סיכונים מחושבים היא חיונית לצמיחת ההשקעות שלך עם הזמן." }
    ],
    quizQuestions: [
  { question: "ما المشترك بين تحسين محركات البحث (سيو) والتسويق عبر محركات البحث (سيم)؟", options: ["تحسين محركات البحث والتسويق عبر محركات البحث", "تحليل البيانات والتسويق عبر البريد الإلكتروني", "إعلانات الدفع لكل نقرة والتسويق عبر المحتوى", "وسائل التواصل الاجتماعي وتحليلات الويب"], correctIndex: 0 },
      { question: "أي من هذه المنصات هو الأفضل للتسويق بين الشركات؟", options: ["إنستجرام", "لينكدإن", "فيسبوك", "بينترست"], correctIndex: 1 },
      { question: "ما هي حملة PPC؟", options: ["إعلانات الدفع لكل نقرة", "اتصالات منتج خاصة", "محتوى شخصي عام", "حملة وضع المنتج"], correctIndex: 0 },
      { question: "اذكر أداة شائعة للتسويق عبر البريد الإلكتروني.", options: ["HubSpot", "Slack", "Zoom", "Dropbox"], correctIndex: 0 },
      { question: "ما هي صفحة الهبوط؟", options: ["الصفحة الرئيسية", "الصفحة التي يصل إليها المستخدمون بعد النقر على إعلان", "صفحة حولنا", "صفحة اتصل بنا"], correctIndex: 1 },
      { question: "أي مقياس يظهر مصادر حركة مرور الموقع؟", options: ["معدل الارتداد", "مصدر الحركة", "معدل التحويل", "CTR"], correctIndex: 1 },
      { question: "ما هو تسويق المحتوى؟", options: ["الترويج للمنتجات من خلال إنشاء محتوى قيم", "الاتصال البارد بالعملاء", "بريد إلكتروني مزعج", "إعلانات تلفزيونية"], correctIndex: 0 },
      { question: "اذكر مقياس رئيسي واحد لوسائل التواصل الاجتماعي.", options: ["الإعجابات", "البريد الإلكتروني", "النقرات على ملف PDF", "سجلات خادم الويب"], correctIndex: 0 },
      { question: "ما هو CTA؟", options: ["دعوة للعمل", "متوسط معدل النقر", "الجمهور المستهدف للمحتوى", "تحليل اتجاهات العملاء"], correctIndex: 0 },
      { question: "لماذا تعتبر تحسينات الهاتف المحمول مهمة؟", options: ["يتصفح معظم المستخدمين عبر الأجهزة المحمولة", "تكون مواقع الهاتف المحمول أسرع في البناء", "أصبحت أجهزة الكمبيوتر المكتبية عتيقة", "تزيد تحسينات الهاتف المحمول من معدل الارتداد"], correctIndex: 0 }
    ],
    mythsTitle: "الأساطير والحقائق",
    toolsTitle: "مقارنة أدوات التسويق الرقمي",
    quizTitle: "اختبار التسويق الرقمي",
    questionOf: "سؤال",
    of: "من",
    prev: "السابق",
    next: "التالي",
    readMore: "اقرأ المزيد →",
    toolsTableHeaders: [
      "تقييم المستخدم",
      "الأفضل لـ",
      "المميزات",
      "السعر",
      "الأداة"
    ],
    toolsTableRows: [
      { rating: "4.7/5", bestFor: "جميع الأعمال", features: "تحليلات الويب، تتبع الحركة", pricing: "مجاني", tool: "Google Analytics", toolTranslated: "تحليلات جوجل" },
      { rating: "4.5/5", bestFor: "المسوقون، الوكالات", features: "تحسين محركات البحث، الدفع لكل نقرة، تسويق المحتوى", pricing: "شهري/$119.95", tool: "SEMrush", toolTranslated: "سيمرش" },
      { rating: "4.4/5", bestFor: "الشركات الصغيرة والمتوسطة إلى المؤسسات", features: "إدارة علاقات العملاء، التسويق عبر البريد الإلكتروني، الأتمتة", pricing: "مجاني - تسعير مخصص", tool: "HubSpot", toolTranslated: "هبسبوت" },
      { rating: "4.3/5", bestFor: "الشركات الصغيرة والمتوسطة", features: "التسويق عبر البريد الإلكتروني، الأتمتة", pricing: "مجاني - $299/شهريًا", tool: "Mailchimp", toolTranslated: "ميل تشيمب" },
      { rating: "4.2/5", bestFor: "فرق وسائل التواصل الاجتماعي", features: "إدارة وسائل التواصل الاجتماعي", pricing: "شهري/$49", tool: "Hootsuite", toolTranslated: "هوتسوت" },
      { rating: "4.6/5", bestFor: "المعلنين", features: "منصة إعلانات الدفع لكل نقرة", pricing: "الدفع لكل نقرة", tool: "Google Ads", toolTranslated: "إعلانات جوجل" }
    ]
  },
  Hebrew: {
    heroTitle: "תובנות ואסטרטגיות לעידן הדיגיטלי",
    heroDesc: "הישארו קדימה עם טיפים מומחים, מגמות שיווקיות והונאות צמיחה ממובילי תעשייה.",
    exploreBtn: "חקור",
    latestBlogs: "הבלוגים האחרונים",
    featuredArticles: "מאמרים מומלצים",
    categories: "קטגוריות",
    categoriesDesc: "גלו את הקטגוריות העיקריות שלנו בשיווק, שנבחרו בקפידה כדי לעזור לכם לשלוט בכל היבט של שיווק דיגיטלי. בין אם אתם שואפים לשפר את דירוגי החיפוש שלכם, לכתוב תוכן משכנע, לנהל ערוצי מדיה חברתית או אופטימיזציה של קמפיינים פרסומיים בתשלום, התובנות והאסטרטגיות המומחיות שלנו יאפשרו לכם לגדול את המותג שלכם ולהגיע לקהל שלכם ביעילות.",
    categoriesGain: "הנה מה שתשיגו מחקרת הקטגוריות הללו:",
    categoriesList: [
      "SEO",
      "שיווק תוכן",
      "מדיה חברתית",
      "שיווק בדוא\"ל",
      "פרסום PPC",
      "אנליטיקה"
    ],
    cards: [
      { id: 1, title: "יסודות ה-SEO", description: "למדו כיצד למטב את האתר שלכם למנועי חיפוש." },
      { id: 2, title: "אסטרטגיית תוכן", description: "צרו תוכן מעורר עניין שמניע תנועה והמרות." },
      { id: 3, title: "טקטיקות מדיה חברתית", description: "הגבירו את נוכחות המותג שלכם בפלטפורמות חברתיות." },
      { id: 4, title: "קמפיינים בדוא\"ל", description: "עצבו קמפיינים אפקטיביים לשיווק בדוא\"ל." },
      { id: 5, title: "יסודות ה-PPC", description: "מקסמו את תקציבי הפרסום הממומנים." },
      { id: 6, title: "אנליטיקת נתונים", description: "הבינו את ביצועי השיווק שלכם עם אנליטיקה." }
    ],
    articles: [
      { id: 1, title: "שפר את ה-SEO שלך עם הטכניקות המוכחות הללו", excerpt: "למד את אסטרטגיות ה-SEO האחרונות שיכולות לעזור לאתר שלך לדרג גבוה יותר ולמשוך יותר תנועה אורגנית.", imgSrc: image1, link: "/blog/article/1" },
      { id: 2, title: "שליטה בפרסום במדיה חברתית בשנת 2025", excerpt: "גלה כיצד ליצור קמפיינים משכנעים במדיה חברתית שהופכים עוקבים ללקוחות.", imgSrc: image2, link: "/blog/article/2" },
      { id: 3, title: "שיטות עבודה מומלצות לשיווק בדוא\"ל לשנת 2025", excerpt: "מקסם את ה-ROI של שיווק בדוא\"ל עם הטיפים והטריקים המעודכנים הללו לבניית מעורבות.", imgSrc: image3, link: "/blog/article/3" }
    ],
    mythsAndFacts: [
      { myth: "צריך הרבה כסף כדי להתחיל להשקיע.", fact: "אפשר להתחיל להשקיע עם סכומים קטנים בזכות מניות חלקיות ואפליקציות השקעה מזעריות." },
      { myth: "בדיקת דירוג האשראי שלך פוגעת בו.", fact: "בדיקת דירוג האשראי שלך היא חקירה רכה ואינה משפיעה על הדירוג שלך." },
      { myth: "השקעה היא כמו הימורים.", fact: "השקעה מבוססת על מחקר, אסטרטגיה וצמיחה לטווח ארוך, בניגוד להימורים שתלויים בעיקר במזל." },
      { myth: "תכנון פיננסי הוא רק עבור עשירים.", fact: "תכנון פיננסי עוזר לכל אחד לנהל את כספו טוב יותר, ללא קשר לרמת ההכנסה." },
      { myth: "כרטיסי אשראי מובילים לחובות ויש להימנע מהם.", fact: "שימוש אחראי יכול לבנות את דירוג האשראי שלך ולהציע תגמולים." },
      { myth: "צריך להימנע מכל סיכון בהשקעה.", fact: "לקיחת סיכונים מחושבים היא חיונית לצמיחת ההשקעות שלך עם הזמן." }
    ],
    quizQuestions: [
      { question: "מה המשמעות של SEO?", options: ["אופטימיזציה למנועי חיפוש", "פעולה חברתית", "תקשורת בדוא\"ל מסודרת", "התקשרות אפקטיבית במכירות"], correctIndex: 0 },
      { question: "איזו פלטפורמה היא הטובה ביותר לשיווק B2B?", options: ["אינסטגרם", "לינקדאין", "פייסבוק", "פינטרסט"], correctIndex: 1 },
      { question: "מהי קמפיין PPC?", options: ["פרסום בתשלום לכל קליק", "תקשורת מוצר פרטית", "תוכן אישי ציבורי", "קמפיין מיקום מוצר"], correctIndex: 0 },
      { question: "ציין כלי פופולרי לשיווק בדוא\"ל.", options: ["HubSpot", "Slack", "Zoom", "Dropbox"], correctIndex: 0 },
      { question: "מהי דף נחיתה?", options: ["דף הבית", "דף שהמשתמשים מגיעים אליו לאחר לחיצה על פרסומת", "דף עלינו", "דף צור קשר"], correctIndex: 1 },
      { question: "איזה מדד מראה את מקורות התנועה לאתר?", options: ["שיעור היציאה", "מקור התנועה", "שיעור ההמרה", "CTR"], correctIndex: 1 },
      { question: "מהו שיווק תוכן?", options: ["קידום מוצרים על ידי יצירת תוכן בעל ערך", "שיחות קרות ללקוחות", "ספאם בדוא\"ל", "פרסום בטלוויזיה"], correctIndex: 0 },
      { question: "ציין מדד מפתח אחד של מדיה חברתית.", options: ["לייקים", "מיילים", "קליקים על PDF", "יומני שרת אינטרנט"], correctIndex: 0 },
      { question: "מה המשמעות של CTA?", options: ["קריאה לפעולה", "ממוצע שיעור הקלקה", "קהל היעד של התוכן", "ניתוח מגמות לקוחות"], correctIndex: 0 },
      { question: "מדוע אופטימיזציה למובייל חשובה?", options: ["רוב המשתמשים גולשים במכשירים ניידים", "אתרי מובייל בונים מהר יותר", "מחשבים שולחניים הפכו למיושנים", "אופטימיזציה למובייל מגבירה את שיעור הנטישה"], correctIndex: 0 }
    ],
    mythsTitle: "מיתוסים ועובדות",
    toolsTitle: "השוואת כלי שיווק דיגיטלי",
    quizTitle: "חידון שיווק דיגיטלי",
    questionOf: "שאלה",
    of: "מתוך",
    prev: "הקודם",
    next: "הבא",
    readMore: "קרא עוד →",
    toolsTableHeaders: [
      "דירוג משתמשים",
      "הכי מתאים ל",
      "תכונות",
      "מחיר",
      "כלי"
    ],
    toolsTableRows: [
      { rating: "4.7/5", bestFor: "כל העסקים", features: "אנליטיקות אתרים, מעקב תנועה", pricing: "חינם", tool: "Google Analytics", toolTranslated: "גוגל אנליטיקס" },
      { rating: "4.5/5", bestFor: "משווקים, סוכנויות", features: "SEO, PPC, שיווק תוכן", pricing: "חודשי/$119.95", tool: "SEMrush", toolTranslated: "סמרש" },
      { rating: "4.4/5", bestFor: "עסקים קטנים ובינוניים עד ארגונים", features: "CRM, שיווק בדוא\"ל, אוטומציה", pricing: "חינם - מחיר מותאם אישית", tool: "HubSpot", toolTranslated: "האבספוט" },
      { rating: "4.3/5", bestFor: "עסקים קטנים ובינוניים", features: "שיווק בדוא\"ל, אוטומציה", pricing: "חינם - $299/חודש", tool: "Mailchimp", toolTranslated: "מיילצ'ימפ" },
      { rating: "4.2/5", bestFor: "צוותי מדיה חברתית", features: "ניהול מדיה חברתית", pricing: "חודשי/$49", tool: "Hootsuite", toolTranslated: "הוטסויט" },
      { rating: "4.6/5", bestFor: "מפרסמים", features: "פלטפורמת פרסום PPC", pricing: "תשלום לפי קליק", tool: "Google Ads", toolTranslated: "גוגל אדס" }
    ]
  }
};

function getDir(language) {
  return language === "Arabic" || language === "Hebrew" ? "rtl" : "ltr";
}

export default function BlogHero({ darkTheme, setDarkTheme, language = "English", setLanguage }) {
  const t = translations[language] || translations["English"];
  const dir = getDir(language);
  const toolsTableHeaders = t.toolsTableHeaders;
  const toolsTableRows = t.toolsTableRows;
  const questions = t.quizQuestions;
  const articles = t.articles;
  const mythsAndFacts = t.mythsAndFacts;
  const cards = t.cards;
  const categories = t.categoriesList;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    summary: '',
    content: '',
    image: '',
    author: '',
    authorImage: '',
    instagram: '',
    facebook: '',
    whatsapp: '',
    linkedin: '',
    date: ''
  });
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const loadBlogs = () => {
      const stored = JSON.parse(localStorage.getItem("blogs")) || [];
      setBlogs(stored);
    };
    loadBlogs();
    // Listen for storage changes (from AdminDashboard)
    const handleStorage = (e) => {
      if (e.key === 'blogs' || e.key === 'blogs_update') {
        loadBlogs();
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Remove blog
  useEffect(() => {
    const loadBlogs = () => {
      const stored = JSON.parse(localStorage.getItem("blogs")) || [];
      setBlogs(stored);
    };
    loadBlogs();

    const handleStorage = (e) => {
      if (e.key === 'blogs' || e.key === 'blogs_update') {
        loadBlogs();
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);



  // Edit blog
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditForm({ ...blogs[index] });
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSave = () => {
    const updated = blogs.map((b, i) => (i === editIndex ? { ...editForm } : b));
    setBlogs(updated);
    localStorage.setItem("blogs", JSON.stringify(updated));
    setShowEditModal(false);
  };

  const handleOptionClick = (index) => {
    if (selectedOption === null) {
      setSelectedOption(index);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    setSelectedOption(null);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isCorrect = selectedOption === questions[currentQuestion].correctIndex;

  const navigate = useNavigate();

  return (
    <div dir={dir}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bloghero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-4xl text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t.heroDesc}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#articles"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#articles")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[linear-gradient(to_right,#b57edc,#a259c6,#8d4bb7,#7b3fa2,#6c3483)] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            >
              {t.exploreBtn}
            </a>
          </motion.div>
        </div>
      </section>

      {/* User Blogs Section */}
      {blogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">{t.latestBlogs}</h2>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
            {blogs.map((blog, i) => (
              <article
                key={i}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                  <p className="text-gray-700 mb-5">{blog.summary}</p>
                  <div className="flex gap-2 flex-wrap mb-2">
                    {blog.instagram && <a href={blog.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 underline">Instagram</a>}
                    {blog.facebook && <a href={blog.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Facebook</a>}
                    {blog.whatsapp && <a href={blog.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-400 underline">WhatsApp</a>}
                    {blog.linkedin && <a href={blog.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">LinkedIn</a>}
                  </div>
                  <div className="text-xs text-gray-400 mb-2">{blog.date}</div>
                  <p className="text-gray-500 text-sm line-clamp-3">{blog.content}</p>
                  {/* Edit/Remove buttons removed for public blog page */}
                </div>
              </article>
            ))}
            {/* Edit Modal removed for public blog page */}
          </div>
        </section>
      )}
      {/* Featured Articles Section */}

      <section
        id="articles"
        className={`max-w-full mx-auto px-6 py-16 rounded-lg ${darkTheme ? 'bg-black' : ''}`}
      >
        <h2 className={`text-3xl font-bold text-center mb-12 ${darkTheme ? 'text-white' : 'text-white'}`}>
          {t.featuredArticles}
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {articles.map(({ id, title, excerpt, imgSrc, link }) => (
            <article
              key={id}
              className={`${darkTheme ? 'bg-[#232136] text-white' : 'bg-white text-black'} rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300`}
            >
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className={`text-justify mb-5 ${darkTheme ? 'text-white' : 'text-gray-700'}`}>{excerpt}</p>
                <button
                  className={`font-semibold hover:underline ${darkTheme ? 'text-[#fff]' : 'text-indigo-600'}`}
                  onClick={() => navigate(`/blog/article/${id}`, { state: { title, excerpt, imgSrc } })}
                >
                  {t.readMore}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>




      <section className="w-full bg-[#c7a6fa] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
          {/* Left side: Categories list  */}
          <div className="md:w-2/4">
            <h2 className="text-3xl font-bold mb-6 border-b text-violet-900 border-violet-400 pb-3">
              {t.categories}
            </h2>
            <div className="mb-6  text-black text-justify">
              <p>{t.categoriesDesc}</p>
              <p className="mt-4 font-semibold">{t.categoriesGain}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {t.categoriesList.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>



          </div>

          {/* Right side: 6 cards in 2 columns x 3 rows */}
          <div className="md:w-2/4 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {cards.map(({ id, title, description }) => (
              <div
                key={id}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold  text-center mb-2">{title}</h3>

              </div>
            ))}
          </div>
        </div>
      </section>




      <section className={`w-full py-16 ${darkTheme ? 'bg-black' : ''}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-3xl font-bold text-center mb-12 ${darkTheme ? 'text-white' : 'text-violet-600'}`}>
            {t.mythsTitle}
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 ${darkTheme ? 'text-white' : 'text-gray-800'}`}>
            {mythsAndFacts.map(({ myth, fact }, idx) => (
              <div key={idx}>
                <p className={`font-semibold mb-1 ${darkTheme ? 'text-white' : 'text-black'}`}>Myth:</p>
                <p className="italic mb-3">"{myth}"</p>
                <p className={`font-semibold mb-1 ${darkTheme ? 'text-[#a259c6]' : 'text-violet-600'}`}>Fact:</p>
                <p>{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="w-full bg-[#c7a6fa] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-violet-600 text-center mb-12 text-gray-900">
            {t.toolsTitle}
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 bg-white rounded-lg overflow-hidden">
              <thead className="bg-violet-600 text-white">
                <tr>
                  {toolsTableHeaders.map((header, idx) => (
                    <th key={idx} className="py-3 px-6 text-left font-semibold">{header}</th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {toolsTableRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-4 px-6">{row.rating}</td>
                    <td className="py-4 px-6">{row.bestFor}</td>
                    <td className="py-4 px-6">{row.features}</td>
                    <td className="py-4 px-6">{row.pricing}</td>
                    <td className="py-4 px-6 font-semibold"><strong>{row.toolTranslated || row.tool}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
       <section className={`max-w-full mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-lg shadow-md ${darkTheme ? 'bg-black' : 'bg-gray-50'}`}>
        {/* Left Side Image */}
        <div>
          <img
            src={quiz}
            alt="Digital Marketing Quiz"
            className="rounded-lg shadow-lg w-full object-cover max-h-[400px]"
            loading="lazy"
          />
        </div>
        {/* Right Side Quiz */}
        <div className={`${darkTheme ? 'bg-black text-white' : 'bg-white'} p-8 rounded-lg shadow-md`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkTheme ? 'text-white' : 'text-violet-600'}`}>
            {t.quizTitle}
          </h2>
          <p className="text-lg mb-8">{questions[currentQuestion].question}</p>
          <div className="flex flex-col gap-4">
            {questions[currentQuestion].options.map((option, idx) => {
              let bgColor = darkTheme ? 'bg-[#18181c] hover:bg-[#232136] text-white' : 'bg-gray-100 hover:bg-gray-200';
              if (selectedOption !== null) {
                if (idx === questions[currentQuestion].correctIndex) {
                  bgColor = darkTheme ? 'bg-green-900 bg-opacity-40 cursor-default' : 'bg-green-100 bg-opacity-40 cursor-default';
                } else if (idx === selectedOption && selectedOption !== questions[currentQuestion].correctIndex) {
                  bgColor = darkTheme ? 'bg-red-900 bg-opacity-40 cursor-default' : 'bg-red-100 bg-opacity-40 cursor-default';
                } else {
                  bgColor = darkTheme ? 'bg-[#232136] cursor-default text-white' : 'bg-gray-100 cursor-default';
                }
              }
              return (
                <button
                  key={idx}
                  className={`text-left p-3 rounded border border-gray-300 ${bgColor} transition-colors duration-300`}
                  onClick={() => handleOptionClick(idx)}
                  disabled={selectedOption !== null}
                >
                  {option}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between mt-8">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`px-4 py-2 rounded ${currentQuestion === 0
                  ? darkTheme ? 'bg-gray-700 cursor-not-allowed text-white' : 'bg-gray-300 cursor-not-allowed'
                  : darkTheme ? 'bg-[#a259c6] text-white hover:bg-[#7c5dc7]' : 'bg-violet-600 text-white hover:bg-violet-700'
                }`}
            >
              {t.prev}
            </button>
            <button
              onClick={nextQuestion}
              disabled={currentQuestion === questions.length - 1}
              className={`px-4 py-2 rounded ${currentQuestion === questions.length - 1
                  ? darkTheme ? 'bg-gray-700 cursor-not-allowed text-white' : 'bg-gray-300 cursor-not-allowed'
                  : darkTheme ? 'bg-[#a259c6] text-white hover:bg-[#7c5dc7]' : 'bg-violet-600 text-white hover:bg-violet-700'
                }`}
            >
              {t.next}
            </button>
          </div>
          <p className={`mt-6 text-sm text-center ${darkTheme ? 'text-white' : 'text-gray-600'}`}>
            {t.questionOf} {currentQuestion + 1} {t.of} {questions.length}
          </p>
        </div>
      </section>



      <Footer darkTheme={darkTheme} />
    </div>
  );
}