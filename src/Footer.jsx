import React, { useState } from "react";
const translations = {
  English: {
    brand: "Digital Marketing",
    partner: "Your Partner in Growth",
    solutions: "Innovative Solutions for Your Brand",
    quickLinks: "Quick Links",
    home: "Home",
    about: "About Us",
    blog: "Blog",
    contact: "Contact Us",
    services: "Services",
    explore: "Explore Services",
    seo: "Search Engine Optimization (SEO)",
    smm: "Social Media Marketing (SMM)",
    ppc: "Pay-Per-Click Advertising (PPC)",
    content: "Content Marketing",
    email: "Email Marketing & Automation",
    web: "Website Design & Development",
    contactUs: "Contact Us",
    address: "Address:",
    addressVal: "123 Digital Ave, Marketing City",
    phone: "Phone:",
    phoneVal: "(123) 456-7890",
    emailLabel: "Email:",
    emailVal: "support@digital.com",
    hours: "Hours:",
    hoursVal: "Mon–Fri, 9 AM – 6 PM",
    follow: "Follow Us",
    newsletter: "Newsletter",
    newsletterDesc: "Get weekly marketing tips and updates in your inbox.",
    thanks: "Thanks for subscribing!",
    subscribe: "Subscribe",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    disclaimer: "Disclaimer",
    copyright: "© 2025 Digital Marketing. All rights reserved."
  },
  Arabic: {
    brand: "التسويق الرقمي",
    partner: "شريكك في النمو",
    solutions: "حلول مبتكرة لعلامتك التجارية",
    quickLinks: "روابط سريعة",
    home: "الرئيسية",
    about: "معلومات عنا",
    blog: "مدونة",
    contact: "اتصل بنا",
    services: "الخدمات",
    explore: "استكشاف الخدمات",
    seo: "تحسين محركات البحث (SEO)",
    smm: "التسويق عبر وسائل التواصل الاجتماعي",
    ppc: "إعلانات الدفع لكل نقرة (PPC)",
    content: "تسويق المحتوى",
    email: "التسويق عبر البريد الإلكتروني والأتمتة",
    web: "تصميم وتطوير المواقع",
    contactUs: "اتصل بنا",
    address: "العنوان:",
    addressVal: "123 شارع الرقمي، مدينة التسويق",
    phone: "الهاتف:",
    phoneVal: "(123) 456-7890",
    emailLabel: "البريد الإلكتروني:",
    emailVal: "support@digital.com",
    hours: "ساعات العمل:",
    hoursVal: "الاثنين-الجمعة، 9 صباحًا - 6 مساءً",
    follow: "تابعنا",
    newsletter: "النشرة الإخبارية",
    newsletterDesc: "احصل على نصائح وتحديثات تسويقية أسبوعية في بريدك.",
    thanks: "شكرًا لاشتراكك!",
    subscribe: "اشترك",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
    disclaimer: "إخلاء المسؤولية",
    copyright: "© 2025 التسويق الرقمي. جميع الحقوق محفوظة."
  },
  Hebrew: {
    brand: "שיווק דיגיטלי",
    partner: "השותף שלך לצמיחה",
    solutions: "פתרונות חדשניים למותג שלך",
    quickLinks: "קישורים מהירים",
    home: "בית",
    about: "עלינו",
    blog: "בלוג",
    contact: "צור קשר",
    services: "שירותים",
    explore: "חקור שירותים",
    seo: "קידום אתרים (SEO)",
    smm: "שיווק במדיה חברתית",
    ppc: "פרסום בתשלום לפי קליק (PPC)",
    content: "שיווק תוכן",
    email: "שיווק בדוא\"ל ואוטומציה",
    web: "עיצוב ופיתוח אתרים",
    contactUs: "צור קשר",
    address: "כתובת:",
    addressVal: "123 שיווק דיגיטלי, עיר השיווק",
    phone: "טלפון:",
    phoneVal: "(123) 456-7890",
    emailLabel: "אימייל:",
    emailVal: "support@digital.com",
    hours: "שעות:",
    hoursVal: "ב'-ו', 9:00-18:00",
    follow: "עקוב אחרינו",
    newsletter: "ניוזלטר",
    newsletterDesc: "קבל טיפים ועדכונים שיווקיים שבועיים לתיבת הדואר שלך.",
    thanks: "תודה שנרשמת!",
    subscribe: "הירשם",
    privacy: "מדיניות פרטיות",
    terms: "תנאים והגבלות",
    disclaimer: "כתב ויתור",
    copyright: "© 2025 שיווק דיגיטלי. כל הזכויות שמורות."
  }
};
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer({ darkTheme, language = 'English' }) {
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };
  const isRTL = language === 'Arabic' || language === 'Hebrew';
  const t = translations[language] || translations['English'];
  return (
    <footer className={`${darkTheme ? 'bg-[#18181c] text-white border-[#232136]' : 'bg-white text-[#53295a] border-gray-200'} border-t pt-10 pb-4 px-4`} style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Logo and Brand */}
        <div className="md:col-span-1 flex flex-col items-start">
          <img src="/src/assets/logo.png" alt="Logo" className="h-14 mb-4" />
          <span className={`font-bold text-xl ${darkTheme ? 'text-white' : 'text-[#53295a]'}`}>{t.brand}</span>
          <span className={`${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'} text-sm mt-1`}>{t.partner}</span>
          <span className={`${darkTheme ? 'text-[#7c5dc7]' : 'text-[#a259c6]'} text-sm`}>{t.solutions}</span>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className={`font-semibold mb-2 ${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'}`}>{t.quickLinks}</h4>
          <ul className="space-y-1">
            <li><a href="/home1" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>{t.home}</a></li>
            <li><a href="/about" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>{t.about}</a></li>
            <li><a href="/blog" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>{t.blog}</a></li>
            <li><a href="/contactus" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>{t.contact}</a></li>
            <li><a href="/services" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>{t.services}</a></li>
          </ul>
        </div>
        {/* Explore Services */}
        <div>
          <h4 className={`font-semibold mb-2 ${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'}`}>{t.explore}</h4>
          <ul className="space-y-1">
            <li><a href="/services/seo" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>{t.seo}</a></li>
            <li><a href="/services/smm" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>{t.smm}</a></li>
            <li><a href="/services/ppc" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>{t.ppc}</a></li>
            <li><a href="/services/content" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>{t.content}</a></li>
            <li><a href="/services/email" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>{t.email}</a></li>
            <li><a href="/services/web" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>{t.web}</a></li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h4 className={`font-semibold mb-2 ${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'}`}>{t.contactUs}</h4>
          <div className={`text-sm mb-2 ${darkTheme ? 'text-white' : 'text-[#53295a]'}`}> 
            <div><span className="font-semibold">{t.address}</span> {t.addressVal}</div>
            <div><span className="font-semibold">{t.phone}</span> {t.phoneVal}</div>
            <div><span className="font-semibold">{t.emailLabel}</span> {t.emailVal}</div>
            <div><span className="font-semibold">{t.hours}</span> {t.hoursVal}</div>
          </div>
          <div className="mt-2">
            <span className={`font-semibold ${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'}`}>{t.follow}</span>
            <div className="flex space-x-5 mt-1 text-2xl">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#2d3748] hover:text-[#a259c6]'}`} aria-label="Instagram"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#2d3748] hover:text-[#a259c6]'}`} aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#2d3748] hover:text-[#a259c6]'}`} aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#2d3748] hover:text-[#a259c6]'}`} aria-label="YouTube"><FaYoutube /></a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#2d3748] hover:text-[#a259c6]'}`} aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <div>
          <h4 className={`font-semibold mb-2 ${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'}`}>{t.newsletter}</h4>
          <p className={`text-sm mb-2 ${darkTheme ? 'text-white' : 'text-[#53295a]'}`}>{t.newsletterDesc}</p>
          {subscribed ? (
            <div className={`font-semibold py-2 ${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'}`}>{t.thanks}</div>
          ) : (
            <form className="flex flex-col gap-2 w-full max-w-xs" onSubmit={handleSubscribe}>
              <input type="email" placeholder="Your email" className={`rounded-md border h-11 px-4 text-base w-full ${darkTheme ? 'border-[#3a2352] bg-[#232136] text-white focus:ring-[#a259c6]' : 'border-gray-300 bg-white text-[#53295a] focus:ring-[#a259c6]'}`} required />
              <button type="submit" className={`rounded-md h-11 w-full font-semibold transition text-base ${darkTheme ? 'bg-[#a259c6] text-white hover:bg-[#7c5dc7]' : 'bg-[#7c5dc7] text-white hover:bg-[#a259c6]'}`}>{t.subscribe}</button>
            </form>
          )}
        </div>
      </div>
  <hr className={`my-8 ${darkTheme ? 'border-[#232136]' : 'border-gray-200'}`} />
      <div className={`max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs gap-2 ${darkTheme ? 'text-white' : 'text-[#53295a]'}`}> 
        <div className="flex space-x-4 mb-2 md:mb-0">
          <a href="#" className="hover:underline">{t.privacy}</a>
          <a href="#" className="hover:underline">{t.terms}</a>
          <a href="#" className="hover:underline">{t.disclaimer}</a>
        </div>
        <div>{t.copyright}</div>
      </div>
    </footer>
  );
}
