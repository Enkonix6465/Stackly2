
import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import seoVideo from "../../assets/seo.mp4";
import seo1Img from "../../assets/seo1.jpg";
import seo2Img from "../../assets/seo2.jpg";
import faqImg from "../../assets/faq.jpg";

export default function SearchEngineOptimization({ darkTheme, setDarkTheme, language, setLanguage }) {
		const isRTL = language === 'Arabic' || language === 'Hebrew';
		const content = {
			English: {
				heroTitle: 'Search Engine Optimization (SEO)',
				heroDesc: "Unlock your website's full potential and rank higher on search engines with our proven SEO strategies.",
				whyTitle: 'Why SEO Matters',
				whyDesc: 'SEO is the foundation of online visibility. With billions of searches every day, ranking higher on search engines means more opportunities for your business to be discovered by potential customers.',
				whyList: [
					'Increase organic website traffic and qualified leads',
					'Build trust and credibility with your audience',
					'Outperform competitors in search results',
					'Achieve long-term, sustainable growth'
				],
				approachTitle: 'Our Approach',
				approachDesc: [
					'We begin with a deep dive into your website, industry, and competitors. Our SEO experts identify opportunities, technical issues, and keyword gaps to build a custom strategy for your business.',
					'We optimize your site structure, content, and backlinks, ensuring every element supports higher rankings and better user experience. Our approach is transparent, collaborative, and focused on long-term growth.',
					'We track progress, report results, and continually refine tactics to keep your site ahead of the competition.'
				],
				approachTimeline: [
					{ title: 'STRATEGY LAUNCH', year: '2020' },
					{ title: 'BRAND GROWTH', year: '2021' },
					{ title: 'GLOBAL REACH', year: '2022' },
					{ title: 'INNOVATION HUB', year: '2023' },
					{ title: 'PERFORMANCE FOCUS', year: '2024' },
					{ title: 'AI-DRIVEN MARKETING', year: '2025' },
				],
				benefitsTitle: 'SEO Benefits',
				benefitsCards: [
					{ title: 'Increased Visibility', desc: 'Boost your website’s ranking on search engines, making it easier for potential customers to find your business online.' },
					{ title: 'Credibility & Trust', desc: 'Establish your brand as an authority in your industry and build trust with your audience through high search rankings.' },
					{ title: 'Long-Term Results', desc: 'SEO delivers sustainable growth, driving consistent traffic and leads over time without ongoing ad spend.' },
					{ title: 'Measurable ROI', desc: 'Track your SEO performance and see real, data-driven results that contribute directly to your business goals.' }
				],
				faqsTitle: 'SEO FAQs',
				faqs: [
					{ q: 'What is SEO?', a: 'SEO (Search Engine Optimization) is the process of improving your website’s visibility in search engines to attract more organic traffic.' },
					{ q: 'How long does SEO take?', a: 'SEO is a long-term strategy. Results typically start to show in 3-6 months, depending on competition and your site’s current status.' },
					{ q: 'Do you offer local SEO?', a: 'Yes! We optimize your site for local searches, helping you reach customers in your area.' },
					{ q: 'How do you measure SEO success?', a: 'We track rankings, traffic, leads, and conversions to measure the impact of our SEO efforts.' },
					{ q: 'Is SEO better than paid ads?', a: 'SEO delivers sustainable, long-term results, while paid ads offer immediate visibility. We help you balance both for maximum growth.' }
				],
				ctaTitle: 'Ready to Grow with SEO?',
				ctaDesc: 'Let our experts help you boost your search rankings and drive real business results. Contact us today for a free SEO consultation!',
				ctaBtn: 'Get Started'
			},
			Arabic: {
				heroTitle: 'تحسين محركات البحث (SEO)',
				heroDesc: 'افتح إمكانيات موقعك بالكامل وارتقِ في نتائج البحث مع استراتيجيات تحسين محركات البحث المثبتة لدينا.',
				whyTitle: 'لماذا تحسين محركات البحث مهم؟',
				whyDesc: 'تحسين محركات البحث هو أساس الظهور عبر الإنترنت. مع مليارات عمليات البحث يومياً، يعني الترتيب الأعلى المزيد من الفرص لاكتشاف عملك من قبل العملاء المحتملين.',
				whyList: [
					'زيادة زيارات الموقع والعملاء المؤهلين',
					'بناء الثقة والمصداقية مع جمهورك',
					'التفوق على المنافسين في نتائج البحث',
					'تحقيق نمو طويل الأمد ومستدام'
				],
				approachTitle: 'نهجنا',
				approachDesc: [
					'نبدأ بتحليل عميق لموقعك وصناعتك والمنافسين. يحدد خبراؤنا فرص التحسين والمشاكل التقنية والفجوات في الكلمات المفتاحية لبناء استراتيجية مخصصة لعملك.',
					'نحسن بنية الموقع والمحتوى والروابط، لضمان دعم كل عنصر للترتيب الأعلى وتجربة المستخدم الأفضل. نهجنا شفاف وتعاوني ويركز على النمو الطويل الأمد.',
					'نتابع التقدم ونبلغ النتائج ونعدل التكتيكات باستمرار لإبقاء موقعك متقدماً على المنافسين.'
				],
				approachTimeline: [
					{ title: 'إطلاق الاستراتيجية', year: '2020' },
					{ title: 'نمو العلامة التجارية', year: '2021' },
					{ title: 'الوصول العالمي', year: '2022' },
					{ title: 'مركز الابتكار', year: '2023' },
					{ title: 'تركيز الأداء', year: '2024' },
					{ title: 'تسويق مدعوم بالذكاء الاصطناعي', year: '2025' },
				],
				benefitsTitle: 'فوائد تحسين محركات البحث',
				benefitsCards: [
					{ title: 'زيادة الظهور', desc: 'عزز ترتيب موقعك في محركات البحث ليصبح من السهل على العملاء المحتملين العثور عليك.' },
					{ title: 'المصداقية والثقة', desc: 'رسخ علامتك كسلطة في المجال وابنِ الثقة مع جمهورك عبر ترتيب بحث مرتفع.' },
					{ title: 'نتائج طويلة الأمد', desc: 'تحسين محركات البحث يحقق نمواً مستداماً ويجلب زيارات وعملاء باستمرار دون إنفاق إعلاني دائم.' },
					{ title: 'عائد استثمار قابل للقياس', desc: 'تابع أداء تحسين محركات البحث وشاهد نتائج حقيقية قائمة على البيانات تدعم أهداف عملك.' }
				],
				faqsTitle: 'أسئلة شائعة حول تحسين محركات البحث',
				faqs: [
					{ q: 'ما هو تحسين محركات البحث؟', a: 'تحسين محركات البحث هو عملية تحسين ظهور موقعك في محركات البحث لجذب المزيد من الزيارات العضوية.' },
					{ q: 'كم يستغرق تحسين محركات البحث؟', a: 'تحسين محركات البحث استراتيجية طويلة الأمد. تظهر النتائج عادة خلال 3-6 أشهر حسب المنافسة وحالة الموقع.' },
					{ q: 'هل تقدمون تحسين محركات البحث المحلي؟', a: 'نعم! نُحسن موقعك للبحث المحلي لمساعدتك في الوصول للعملاء في منطقتك.' },
					{ q: 'كيف تقيسون نجاح تحسين محركات البحث؟', a: 'نتابع الترتيب والزيارات والعملاء والتحويلات لقياس أثر جهودنا في تحسين محركات البحث.' },
					{ q: 'هل تحسين محركات البحث أفضل من الإعلانات المدفوعة؟', a: 'تحسين محركات البحث يحقق نتائج مستدامة وطويلة الأمد، بينما الإعلانات المدفوعة توفر ظهوراً فورياً. نساعدك في تحقيق التوازن بينهما للنمو الأمثل.' }
				],
				ctaTitle: 'جاهز للنمو مع تحسين محركات البحث؟',
				ctaDesc: 'دع خبراءنا يساعدونك في رفع ترتيبك وتحقيق نتائج أعمال حقيقية. تواصل معنا اليوم لاستشارة مجانية حول تحسين محركات البحث!',
				ctaBtn: 'ابدأ الآن'
			},
			Hebrew: {
				heroTitle: 'קידום אתרים (SEO)',
				heroDesc: 'פתח את מלוא הפוטנציאל של האתר שלך ודורג גבוה יותר במנועי חיפוש עם אסטרטגיות קידום אתרים מוכחות שלנו.',
				whyTitle: 'למה קידום אתרים חשוב?',
				whyDesc: 'קידום אתרים הוא הבסיס לנראות אונליין. עם מיליארדי חיפושים ביום, דירוג גבוה יותר פירושו יותר הזדמנויות לעסק שלך להיחשף ללקוחות פוטנציאליים.',
				whyList: [
					'הגדל תנועה אורגנית ולידים איכותיים',
					'בנה אמון ומוניטין עם הקהל שלך',
					'התגבר על מתחרים בתוצאות החיפוש',
					'השג צמיחה ארוכת טווח ובר קיימא'
				],
				approachTitle: 'הגישה שלנו',
				approachDesc: [
					'מתחילים בניתוח מעמיק של האתר, הענף והמתחרים. המומחים שלנו מזהים הזדמנויות, בעיות טכניות ופערי מילות מפתח לבניית אסטרטגיה מותאמת.',
					'אנו משפרים את מבנה האתר, התוכן והקישורים, כדי שכל רכיב יתמוך בדירוג גבוה יותר ובחוויית משתמש טובה יותר. הגישה שלנו שקופה, שיתופית וממוקדת בצמיחה ארוכת טווח.',
					'עוקבים אחרי ההתקדמות, מדווחים תוצאות ומעדכנים טקטיקות כדי לשמור על יתרון תחרותי.'
				],
				approachTimeline: [
					{ title: 'השקת אסטרטגיה', year: '2020' },
					{ title: 'צמיחת מותג', year: '2021' },
					{ title: 'הגעה גלובלית', year: '2022' },
					{ title: 'מרכז חדשנות', year: '2023' },
					{ title: 'מיקוד ביצועים', year: '2024' },
					{ title: 'שיווק מונע AI', year: '2025' },
				],
				benefitsTitle: 'יתרונות קידום אתרים',
				benefitsCards: [
					{ title: 'נראות מוגברת', desc: 'הגדל את דירוג האתר שלך במנועי חיפוש כדי שלקוחות פוטנציאליים ימצאו אותך בקלות.' },
					{ title: 'אמינות ואמון', desc: 'בסס את המותג שלך כסמכות בענף ובנה אמון עם הקהל שלך דרך דירוגים גבוהים.' },
					{ title: 'תוצאות לטווח ארוך', desc: 'קידום אתרים מספק צמיחה בת קיימא, תנועה ולידים עקביים לאורך זמן ללא תקציב פרסום מתמשך.' },
					{ title: 'החזר השקעה מדיד', desc: 'עקוב אחרי ביצועי קידום אתרים וראה תוצאות אמיתיות מבוססות נתונים התורמות ישירות למטרות העסק.' }
				],
				faqsTitle: 'שאלות נפוצות על קידום אתרים',
				faqs: [
					{ q: 'מה זה קידום אתרים?', a: 'קידום אתרים הוא תהליך שיפור הנראות של האתר שלך במנועי חיפוש כדי למשוך יותר תנועה אורגנית.' },
					{ q: 'כמה זמן לוקח קידום אתרים?', a: 'קידום אתרים הוא אסטרטגיה לטווח ארוך. תוצאות מתחילות להופיע תוך 3-6 חודשים, תלוי בתחרות ובמצב האתר.' },
					{ q: 'האם אתם מציעים קידום אתרים מקומי?', a: 'כן! אנו משפרים את האתר שלך לחיפושים מקומיים כדי להגיע ללקוחות באזור שלך.' },
					{ q: 'איך מודדים הצלחת קידום אתרים?', a: 'אנו עוקבים אחרי דירוגים, תנועה, לידים והמרות כדי למדוד את השפעת מאמצי קידום האתרים שלנו.' },
					{ q: 'האם קידום אתרים עדיף על פרסום ממומן?', a: 'קידום אתרים מספק תוצאות ארוכות טווח, בעוד פרסום ממומן נותן נראות מיידית. אנו עוזרים לך לאזן בין השניים לצמיחה מקסימלית.' }
				],
				ctaTitle: 'מוכן לצמוח עם קידום אתרים?',
				ctaDesc: 'תן למומחים שלנו לעזור לך לשפר דירוגים ולהשיג תוצאות עסקיות אמיתיות. צור קשר היום לייעוץ קידום אתרים חינם!',
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
					src={seoVideo}
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
						<img src={seo1Img} alt="Why SEO Matters" className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
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
			{/* Benefits Section (SEO) */}
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
						<img src={seo2Img} alt="SEO Benefits" className="rounded-2xl shadow-xl max-w-lg w-full h-full object-cover" />
					</div>
				</div>
			</section>
			{/* FAQs Section */}
			<section className="w-full py-16 bg-[#c7a6fa] text-white flex flex-col items-center" dir={isRTL ? 'rtl' : 'ltr'}>
				<h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-black text-center">{content[language].faqsTitle}</h2>
				<div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 px-4">
					<div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 min-h-full">
						<img src={faqImg} alt="SEO FAQs" className="rounded-2xl shadow-xl max-w-md w-full object-cover h-full min-h-[400px]" />
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
									<p className="mt-3  text-black text-base">{faq.a}</p>
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
