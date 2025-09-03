import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactusher from '../assets/contacthero.mp4';
import Header from '../Header';
import Footer from '../Footer';
import faqImage from '../assets/faq.jpeg';
import contact1 from "../assets/contact1.jpg"; // Location image
import contact2 from "../assets/contact2.jpg"; // Email image
import contact3 from "../assets/contact3.jpg"; // Phone image

const translations = {
  English: {
    heroTitle: "Get in Touch With Us",
    heroDesc: "We’d love to hear from you! Whether you have a question or want to discuss a project, our team is ready to help.",
    cards: [
      { img: contact1, title: "Our Location", detail: "123 Main Street, Hyderabad, India" },
      { img: contact2, title: "Email Us", detail: "stackly.com" },
      { img: contact3, title: "Call Us", detail: "+91 98765 43210" }
    ],
    contactTitle: "Contact Us",
    formLabels: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      acceptPolicy: "I accept the ",
      privacyPolicy: "Privacy Policy",
      send: "Send Message"
    },
    submittedTitle: "✅ Submitted Successfully!",
    submittedDesc: "Thank you for reaching out. We’ll get back to you soon.",
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      { question: 'How soon will I get a reply after submitting the form?', answer: 'We usually respond within 24–48 hours. For urgent queries, please mention it in your subject line.' },
      { question: 'Do you offer free consultations?', answer: 'Yes, we offer a free 30-minute consultation to discuss your needs and how we can help.' },
      { question: 'What happens after I submit my message?', answer: 'Our team reviews your message and responds via email or phone based on your preference.' },
      { question: 'Is my personal information safe?', answer: 'Absolutely. We follow strict data privacy guidelines and never share your details with third parties.' },
      { question: 'Can I call instead of filling out the form?', answer: 'Yes, you can call us during business hours for immediate assistance. Our contact number is listed on the website.' }
    ],
    locationTitle: "Our Location",
    readyTitle: "Ready to Start Your Journey?",
    readyDesc: "Let’s make your ideas a reality! Contact us today and our team will get back to you quickly.",
    contactNow: "Contact Us Now"
  },
  Arabic: {
    heroTitle: "تواصل معنا",
    heroDesc: "يسعدنا التواصل معك! سواء كان لديك سؤال أو ترغب في مناقشة مشروع، فريقنا جاهز لمساعدتك.",
    cards: [
      { img: contact1, title: "موقعنا", detail: "123 شارع رئيسي، حيدر أباد، الهند" },
      { img: contact2, title: "راسلنا عبر البريد الإلكتروني", detail: "stackly.com" },
      { img: contact3, title: "اتصل بنا", detail: "+91 98765 43210" }
    ],
    contactTitle: "اتصل بنا",
    formLabels: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "الرسالة",
      acceptPolicy: "أوافق على ",
      privacyPolicy: "سياسة الخصوصية",
      send: "إرسال الرسالة"
    },
    submittedTitle: "✅ تم الإرسال بنجاح!",
    submittedDesc: "شكرًا لتواصلك معنا. سنرد عليك قريبًا.",
    faqsTitle: "الأسئلة الشائعة",
    faqs: [
      { question: 'متى سأحصل على رد بعد إرسال النموذج؟', answer: 'عادةً ما نرد خلال 24-48 ساعة. للاستفسارات العاجلة، يرجى ذكر ذلك في عنوان الموضوع.' },
      { question: 'هل تقدمون استشارات مجانية؟', answer: 'نعم، نقدم استشارة مجانية لمدة 30 دقيقة لمناقشة احتياجاتك وكيف يمكننا مساعدتك.' },
      { question: 'ماذا يحدث بعد إرسال رسالتي؟', answer: 'يقوم فريقنا بمراجعة رسالتك والرد عبر البريد الإلكتروني أو الهاتف حسب تفضيلك.' },
      { question: 'هل معلوماتي الشخصية آمنة؟', answer: 'بالتأكيد. نتبع إرشادات صارمة لخصوصية البيانات ولا نشارك تفاصيلك مع أي طرف ثالث.' },
      { question: 'هل يمكنني الاتصال بدلاً من ملء النموذج؟', answer: 'نعم، يمكنك الاتصال بنا خلال ساعات العمل للحصول على المساعدة الفورية. رقم الاتصال موجود على الموقع.' }
    ],
    locationTitle: "موقعنا",
    readyTitle: "هل أنت مستعد للبدء؟",
    readyDesc: "دعنا نجعل أفكارك حقيقة! تواصل معنا اليوم وسنرد عليك بسرعة.",
    contactNow: "تواصل معنا الآن"
  },
  Hebrew: {
    heroTitle: "צור קשר איתנו",
    heroDesc: "נשמח לשמוע ממך! בין אם יש לך שאלה או רוצה לדון בפרויקט, הצוות שלנו מוכן לעזור.",
    cards: [
      { img: contact1, title: "המיקום שלנו", detail: "123 רחוב ראשי, היידראבאד, הודו" },
      { img: contact2, title: "שלח לנו אימייל", detail: "stackly.com" },
      { img: contact3, title: "התקשר אלינו", detail: "+91 98765 43210" }
    ],
    contactTitle: "צור קשר",
    formLabels: {
      name: "שם",
      email: "אימייל",
      subject: "נושא",
      message: "הודעה",
      acceptPolicy: "אני מאשר את ה-",
      privacyPolicy: "מדיניות הפרטיות",
      send: "שלח הודעה"
    },
    submittedTitle: "✅ נשלח בהצלחה!",
    submittedDesc: "תודה שפנית אלינו. נחזור אליך בקרוב.",
    faqsTitle: "שאלות נפוצות",
    faqs: [
      { question: 'תוך כמה זמן אקבל תשובה לאחר שליחת הטופס?', answer: 'בדרך כלל אנו מגיבים תוך 24–48 שעות. לפניות דחופות, נא לציין זאת בשורת הנושא.' },
      { question: 'האם אתם מציעים ייעוץ חינם?', answer: 'כן, אנו מציעים ייעוץ חינם של 30 דקות כדי לדון בצרכים שלך וכיצד נוכל לעזור.' },
      { question: 'מה קורה לאחר שליחת ההודעה שלי?', answer: 'הצוות שלנו בודק את ההודעה שלך ומגיב באימייל או טלפון בהתאם להעדפתך.' },
      { question: 'האם המידע האישי שלי בטוח?', answer: 'בהחלט. אנו פועלים לפי הנחיות פרטיות מחמירות ולא משתפים את פרטיך עם צדדים שלישיים.' },
      { question: 'האם אפשר להתקשר במקום למלא את הטופס?', answer: 'כן, ניתן להתקשר אלינו בשעות הפעילות לקבלת סיוע מיידי. מספר הטלפון מופיע באתר.' }
    ],
    locationTitle: "המיקום שלנו",
    readyTitle: "מוכן להתחיל?",
    readyDesc: "בוא נהפוך את הרעיונות שלך למציאות! צור קשר היום והצוות שלנו יחזור אליך במהירות.",
    contactNow: "צור קשר עכשיו"
  }
};

function getDir(language) {
  return language === "Arabic" || language === "Hebrew" ? "rtl" : "ltr";
}

const ContactUsHero = ({ darkTheme, setDarkTheme, language = "English", setLanguage }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const t = translations[language] || translations["English"];
  const dir = getDir(language);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    acceptPolicy: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptPolicy) {
      alert('You must accept the Privacy Policy before submitting.');
      return;
    }
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      acceptPolicy: false
    });
  };
  const cards = t.cards;
  

  const faqs = t.faqs;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
  <div className="w-full overflow-x-hidden" dir={dir}>
      {/* Hero Section */}
  <section className="relative w-full h-screen overflow-hidden">
  <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={contactusher}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4" data-aos="fade-up">
            {t.heroTitle}
          </h1>
          <p className="max-w-2xl text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
            {t.heroDesc}
          </p>
        </div>
      </section>


  <section className={`py-16 w-full ${darkTheme ? 'bg-black' : 'bg-gray-100'}`}> 
  <div className="w-full px-2 grid gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 scale-100 hover:scale-105"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold  text-violet-700 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Contact Form Section */}
  <section className={`py-16 w-full ${darkTheme ? 'bg-black' : 'bg-white'}`}> 
        <div className="w-full px-2">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-violet-700">
            {t.contactTitle}
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} className={`${darkTheme ? 'bg-black text-white' : 'bg-white'} shadow-lg rounded-2xl p-8 space-y-6`}>
              {/* Name */}
              <div>
                <label className="block text-violet-700 mb-2 font-semibold">{t.formLabels.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.formLabels.name}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-violet-700 mb-2 font-semibold">{t.formLabels.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.formLabels.email}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-violet-700 mb-2 font-semibold">{t.formLabels.subject}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={t.formLabels.subject}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-violet-700 mb-2 font-semibold">{t.formLabels.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t.formLabels.message}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                ></textarea>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="acceptPolicy"
                  checked={formData.acceptPolicy}
                  onChange={handleChange}
                  required
                  className="mt-1 mr-2"
                />
                <label className={`${darkTheme ? 'text-white' : 'text-black'} text-sm`}>
                  {t.formLabels.acceptPolicy}
                  <a href="/privacy-policy" className="text-violet-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    {t.formLabels.privacyPolicy}
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                {t.formLabels.send}
              </button>
            </form>
          ) : (
            <div className={`shadow-lg rounded-2xl p-8 text-center ${darkTheme ? 'bg-[#232136] text-white' : ''}`}>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                {t.submittedTitle}
              </h3>
              <p className="text-violet-700">{t.submittedDesc}</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#c7a6fa] w-full">
        <div className="w-full px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div data-aos="fade-right">
            <img src={faqImage} alt="FAQ" className="rounded-2xl h-100shadow-lg w-full object-cover" />
          </div>

          {/* Right FAQ */}
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-violet-700 text-center">
              {t.faqsTitle}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-semibold bg-gray-50 hover:bg-gray-100 transition"
                  >
                    {faq.question}
                    <span className="text-viloet-500 text-xl font-bold">
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="p-4 bg-white text-gray-700 border-t border-gray-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  <section className={`w-full py-16 ${darkTheme ? 'bg-black' : 'bg-gray-100'}`}> 
  <div className="w-full px-2">
        <h2 className="text-3xl md:text-4xl text-violet-700 font-bold text-left mb-8">
          {t.locationTitle}
        </h2>
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4742347931146!2d77.59456231411678!3d12.97159899085364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f4a54a57%3A0x6d1b7aa4a0b3f6!2sYour%20Business%20Name!5e0!3m2!1sen!2sin!4v1693842488896!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

<section className="bg-[#c7a6fa] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t.readyTitle}
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          {t.readyDesc}
        </p>
        <a
          href="/contactus"
          className="inline-block bg-white text-violet-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          {t.contactNow}
        </a>
      </div>
    </section>


    
  <Footer darkTheme={darkTheme} />
  </div>
  );
};

export default ContactUsHero;