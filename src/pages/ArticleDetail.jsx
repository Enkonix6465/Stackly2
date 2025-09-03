import React from "react";
import { useParams, Link } from "react-router-dom";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.png";
import image3 from "../assets/3.jpeg";
import Header from "../Header";
import Footer from "../Footer";

const articleContents = {
  "1": {
    English: (
      <>
        <h3 className="text-xl font-semibold mb-2">1. Keyword Research</h3>
        <p className="mb-6">Keyword research is the backbone of a successful SEO strategy because it determines the exact terms and phrases your audience is actively typing into search engines. Without proper keyword research, you risk creating content that no one is searching for, or targeting overly competitive terms you cannot rank for. Start by brainstorming seed keywords related to your business and then expand them using tools like Google Keyword Planner, Ahrefs, or SEMrush. Look at search volume, competition level, and search intent — whether users are looking for information, products, or solutions. Balancing short-tail and long-tail keywords can help you capture both broad and niche traffic.</p>
        <h3 className="text-xl font-semibold mb-2">2. On-Page Optimization</h3>
        <p className="mb-6">On-page optimization is about making your web pages search-engine-friendly while keeping them highly readable for humans. It starts with optimizing title tags, meta descriptions, and headers to include target keywords naturally. Your title tag should be under 60 characters, catchy, and keyword-rich, while your meta description should entice users to click through. Additionally, ensure proper use of H1, H2, and H3 tags to create a logical structure. Internal linking is another important element, as it guides both search engines and visitors through your site’s content in a strategic manner.</p>
        <h3 className="text-xl font-semibold mb-2">3. Quality Content Creation</h3>
        <p className="mb-6">Quality content is at the heart of SEO success, and Google’s algorithms are designed to reward websites that deliver genuine value. This means producing in-depth, original articles that thoroughly cover the topic and answer the user’s intent. Avoid thin content or keyword stuffing — instead, aim to create resources that your audience will bookmark, share, and return to. Include relevant images, charts, and videos to make your content visually appealing and more engaging. Remember that quality content is not a one-time task; regularly updating older articles keeps them relevant and improves rankings over time.</p>
        <h3 className="text-xl font-semibold mb-2">4. Backlink Building</h3>
        <p className="mb-6">Backlinks act as “votes of confidence” from other websites, signaling to search engines that your content is credible and authoritative. High-quality backlinks can significantly boost your rankings, but they must come from relevant and trustworthy sources. Guest posting, creating link-worthy content like infographics or research reports, and engaging in influencer outreach are proven tactics. Always focus on earning backlinks naturally rather than buying them, as low-quality or spammy links can harm your rankings instead of helping.</p>
        <h3 className="text-xl font-semibold mb-2">5. Mobile Optimization</h3>
        <p className="mb-6">With mobile devices accounting for the majority of internet traffic, a mobile-optimized website is no longer optional. Google uses mobile-first indexing, meaning it primarily evaluates the mobile version of your site for ranking purposes. Ensure your site has a responsive design that adjusts smoothly to any screen size, and test it regularly on different devices. Loading speed is critical — use tools like Google PageSpeed Insights to identify issues and make improvements. A slow or clunky mobile site can lead to higher bounce rates and lost revenue.</p>
        <h3 className="text-xl font-semibold mb-2">6. Technical SEO</h3>
        <p>Technical SEO ensures that search engines can easily crawl, interpret, and index your website. This includes having a clean site structure, using HTTPS, and fixing crawl errors. XML sitemaps and robots.txt files help search engines navigate your site efficiently. Implementing schema markup provides additional context about your content, increasing the chances of appearing in rich snippets. Regularly audit your site for broken links, duplicate content, and slow-loading pages, as these factors can directly impact your SEO performance.</p>
      </>
    ),
    Arabic: (
      <>
        <h3 className="text-xl font-semibold mb-2">1. البحث عن الكلمات المفتاحية</h3>
        <p className="mb-6">يعد البحث عن الكلمات المفتاحية أساس استراتيجية تحسين محركات البحث الناجحة لأنه يحدد المصطلحات والعبارات التي يبحث عنها جمهورك فعليًا. بدون بحث مناسب، قد تنشئ محتوى لا يبحث عنه أحد أو تستهدف كلمات تنافسية للغاية لا يمكنك الترتيب لها. ابدأ بعصف ذهني للكلمات المفتاحية المتعلقة بعملك ثم وسعها باستخدام أدوات مثل Google Keyword Planner وAhrefs وSEMrush. انظر إلى حجم البحث ومستوى المنافسة ونية البحث — سواء كان المستخدمون يبحثون عن معلومات أو منتجات أو حلول. الموازنة بين الكلمات المفتاحية القصيرة والطويلة تساعدك في جذب حركة مرور واسعة ومتخصصة.</p>
        <h3 className="text-xl font-semibold mb-2">2. تحسين الصفحة</h3>
        <p className="mb-6">تحسين الصفحة يتعلق بجعل صفحات الويب الخاصة بك صديقة لمحركات البحث مع الحفاظ على سهولة القراءة للبشر. يبدأ ذلك بتحسين علامات العنوان، ووصف الميتا، والعناوين لتضمين الكلمات المفتاحية بشكل طبيعي. يجب أن يكون عنوان الصفحة أقل من 60 حرفًا وجذابًا وغنيًا بالكلمات المفتاحية، بينما يجب أن يحفز وصف الميتا المستخدمين على النقر. بالإضافة إلى ذلك، تأكد من الاستخدام الصحيح لعناوين H1 وH2 وH3 لإنشاء هيكل منطقي. الربط الداخلي عنصر مهم آخر، حيث يوجه كل من محركات البحث والزوار عبر محتوى موقعك بطريقة استراتيجية.</p>
        <h3 className="text-xl font-semibold mb-2">3. إنشاء محتوى عالي الجودة</h3>
        <p className="mb-6">المحتوى عالي الجودة هو جوهر نجاح تحسين محركات البحث، وخوارزميات Google مصممة لمكافأة المواقع التي تقدم قيمة حقيقية. هذا يعني إنتاج مقالات متعمقة وأصلية تغطي الموضوع بالكامل وتجيب على نية المستخدم. تجنب المحتوى الضعيف أو حشو الكلمات المفتاحية — بدلاً من ذلك، أنشئ موارد سيحتفظ بها جمهورك ويشاركها ويعود إليها. أضف صورًا ومخططات وفيديوهات ذات صلة لجعل المحتوى أكثر جاذبية وتفاعلية. تذكر أن إنشاء المحتوى عالي الجودة ليس مهمة لمرة واحدة؛ تحديث المقالات القديمة بانتظام يحافظ على ملاءمتها ويحسن ترتيبها بمرور الوقت.</p>
        <h3 className="text-xl font-semibold mb-2">4. بناء الروابط الخلفية</h3>
        <p className="mb-6">تعمل الروابط الخلفية كـ "تصويتات ثقة" من مواقع أخرى، مما يشير لمحركات البحث أن محتواك موثوق وذو سلطة. يمكن أن تعزز الروابط الخلفية عالية الجودة ترتيبك بشكل كبير، ولكن يجب أن تأتي من مصادر ذات صلة وموثوقة. النشر كضيف، وإنشاء محتوى يستحق الروابط مثل الإنفوجرافيك أو التقارير البحثية، والتواصل مع المؤثرين هي استراتيجيات مثبتة. ركز دائمًا على كسب الروابط بشكل طبيعي بدلاً من شرائها، لأن الروابط منخفضة الجودة أو المزعجة يمكن أن تضر ترتيبك بدلاً من مساعدتك.</p>
        <h3 className="text-xl font-semibold mb-2">5. تحسين الموقع للجوال</h3>
        <p className="mb-6">مع كون الأجهزة المحمولة تمثل غالبية حركة المرور على الإنترنت، أصبح الموقع المحسن للجوال أمرًا ضروريًا. تستخدم Google الفهرسة أولاً للجوال، مما يعني أنها تقيم بشكل أساسي إصدار الموقع للجوال لأغراض الترتيب. تأكد من أن موقعك يتمتع بتصميم متجاوب يتكيف بسلاسة مع أي حجم شاشة، واختبره بانتظام على أجهزة مختلفة. سرعة التحميل أمر بالغ الأهمية — استخدم أدوات مثل Google PageSpeed Insights لتحديد المشكلات وإجراء التحسينات. الموقع البطيء أو غير المتجاوب يؤدي إلى معدلات ارتداد أعلى وخسارة في الإيرادات.</p>
        <h3 className="text-xl font-semibold mb-2">6. تحسين السيو التقني</h3>
        <p>تحسين السيو التقني يضمن أن محركات البحث يمكنها الزحف بسهولة إلى موقعك وفهمه وفهرسته. يشمل ذلك وجود هيكل موقع نظيف، واستخدام HTTPS، وإصلاح أخطاء الزحف. تساعد ملفات XML sitemap وrobots.txt محركات البحث على التنقل بكفاءة في موقعك. يوفر استخدام schema markup سياقًا إضافيًا حول المحتوى، مما يزيد من فرص الظهور في المقتطفات الغنية. قم بمراجعة موقعك بانتظام للبحث عن الروابط المعطلة، والمحتوى المكرر، والصفحات البطيئة التحميل، حيث يمكن أن تؤثر هذه العوامل بشكل مباشر على أداء السيو الخاص بك.</p>
      </>
    ),
    Hebrew: (
      <>
        <h3 className="text-xl font-semibold mb-2">1. מחקר מילות מפתח</h3>
        <p className="mb-6">מחקר מילות מפתח הוא הבסיס לאסטרטגיית SEO מוצלחת כי הוא קובע את המונחים והביטויים המדויקים שהקהל שלך מחפש במנועי החיפוש. ללא מחקר נכון, אתה עלול ליצור תוכן שאף אחד לא מחפש או לכוון למונחים תחרותיים מדי שלא תוכל לדרג עבורם. התחל בסיעור מוחות של מילות מפתח הקשורות לעסק שלך והרחב אותן באמצעות כלים כמו Google Keyword Planner, Ahrefs או SEMrush. בדוק נפח חיפוש, רמת תחרות וכוונת חיפוש — האם המשתמשים מחפשים מידע, מוצרים או פתרונות. איזון בין מילות מפתח קצרות וארוכות יכול לעזור לך ללכוד גם תנועה רחבה וגם נישה.</p>
        <h3 className="text-xl font-semibold mb-2">2. אופטימיזציה בדף</h3>
        <p className="mb-6">אופטימיזציה בדף עוסקת בהפיכת דפי האינטרנט שלך לידידותיים למנועי חיפוש תוך שמירה על קריאות גבוהה לבני אדם. זה מתחיל באופטימיזציה של תגי כותרת, תיאורי מטא וכותרות לשילוב מילות מפתח בצורה טבעית. תג הכותרת שלך צריך להיות מתחת ל-60 תווים, מושך ועשיר במילות מפתח, בעוד שתיאור המטא צריך לעודד משתמשים להקליק. בנוסף, ודא שימוש נכון בתגי H1, H2 ו-H3 ליצירת מבנה לוגי. קישור פנימי הוא אלמנט חשוב נוסף, שכן הוא מדריך גם את מנועי החיפוש וגם את המבקרים בתוכן האתר שלך בצורה אסטרטגית.</p>
        <h3 className="text-xl font-semibold mb-2">3. יצירת תוכן איכותי</h3>
        <p className="mb-6">תוכן איכותי הוא בלב הצלחת ה-SEO, והאלגוריתמים של Google נועדו לתגמל אתרים שמספקים ערך אמיתי. זה אומר לייצר מאמרים מעמיקים ומקוריים שמכסים את הנושא באופן מלא ועונים על כוונת המשתמש. הימנע מתוכן דל או דחיסת מילות מפתח — במקום זאת, שאף ליצור משאבים שהקהל שלך יסמן, ישתף ויחזור אליהם. כלול תמונות, תרשימים וסרטונים רלוונטיים כדי להפוך את התוכן למושך ומעורר עניין יותר. זכור שתוכן איכותי אינו משימה חד פעמית; עדכון מאמרים ישנים באופן קבוע שומר על הרלוונטיות שלהם ומשפר את הדירוגים לאורך זמן.</p>
        <h3 className="text-xl font-semibold mb-2">4. בניית קישורים</h3>
        <p className="mb-6">קישורים נכנסים פועלים כ"הצבעות אמון" מאתרים אחרים, ומאותתים למנועי החיפוש שהתוכן שלך אמין ובעל סמכות. קישורים איכותיים יכולים לשפר משמעותית את הדירוג שלך, אך הם חייבים להגיע ממקורות רלוונטיים ואמינים. פרסום אורח, יצירת תוכן שמושך קישורים כמו אינפוגרפיקות או דוחות מחקר, ופנייה למשפיענים הם טקטיקות מוכחות. תמיד התמקד בהשגת קישורים באופן טבעי ולא ברכישתם, שכן קישורים באיכות נמוכה או ספאמיים עלולים להזיק לדירוג שלך במקום לעזור.</p>
        <h3 className="text-xl font-semibold mb-2">5. אופטימיזציה לנייד</h3>
        <p className="mb-6">מכשירים ניידים מהווים את רוב התנועה באינטרנט, ולכן אתר מותאם לנייד אינו אופציה אלא חובה. Google משתמשת באינדקס מובייל ראשון, כלומר היא מעריכה בעיקר את גרסת האתר לנייד לצורכי דירוג. ודא שלאתר שלך יש עיצוב רספונסיבי שמסתגל בצורה חלקה לכל גודל מסך, ובדוק אותו באופן קבוע במכשירים שונים. מהירות טעינה קריטית — השתמש בכלים כמו Google PageSpeed Insights כדי לזהות בעיות ולבצע שיפורים. אתר איטי או לא מותאם יוביל לשיעורי נטישה גבוהים ואובדן הכנסות.</p>
        <h3 className="text-xl font-semibold mb-2">6. SEO טכני</h3>
        <p>SEO טכני מבטיח שמנועי החיפוש יוכלו לסרוק, לפרש ולאנדקס את האתר שלך בקלות. זה כולל מבנה אתר נקי, שימוש ב-HTTPS ותיקון שגיאות סריקה. קבצי XML sitemap ו-robots.txt עוזרים למנועי החיפוש לנווט באתר שלך ביעילות. יישום schema markup מספק הקשר נוסף על התוכן, ומגדיל את הסיכוי להופיע בתוצאות עשירות. בצע ביקורת שוטפת לאיתור קישורים שבורים, תוכן כפול ודפים איטיים, שכן גורמים אלו יכולים להשפיע ישירות על ביצועי ה-SEO שלך.</p>
      </>
    ),
  },
  "2": {
    English: (
      <>
        <h3 className="text-xl font-semibold mb-2">1. Platform Selection</h3>
        <p className="mb-6">Choosing the right platform is the first step in creating a successful social media advertising strategy. Instead of trying to be everywhere, focus on the platforms where your audience is most engaged. For example, LinkedIn works well for B2B marketing, Instagram and TikTok are ideal for visually-driven campaigns, and Facebook remains a strong option for community-based targeting. Research your target demographic’s age, interests, and behaviors to determine the best fit. A platform with high engagement but the wrong audience is a waste of ad spend, so strategic selection is key.</p>
        <h3 className="text-xl font-semibold mb-2">2. Creative Content</h3>
        <p className="mb-6">In 2025, social media is more competitive than ever, making creativity your biggest advantage. Static images are no longer enough; high-quality videos, carousels, and interactive posts dominate the space. Your content should capture attention within the first three seconds, as users scroll quickly through their feeds. Incorporate storytelling, humor, or emotion to make your brand memorable. Don’t be afraid to experiment with trends, but ensure that your creative output always aligns with your brand’s voice and objectives.</p>
        <h3 className="text-xl font-semibold mb-2">3. Advanced Targeting</h3>
        <p className="mb-6">Advanced targeting options are what make social media advertising so powerful. Platforms now offer the ability to target based on interests, behaviors, demographics, location, and even life events. Retargeting allows you to reconnect with users who have visited your site or engaged with your content but haven’t converted yet. Additionally, lookalike audiences help you reach people who share characteristics with your existing customers. Using these tools effectively can significantly improve ad relevance and ROI.</p>
        <h3 className="text-xl font-semibold mb-2">4. Data-Driven Decisions</h3>
        <p className="mb-6">The days of running “set-and-forget” ad campaigns are over. Success in 2025 requires constant monitoring and optimization based on real-time performance metrics. Track key indicators like click-through rate, cost per acquisition, and conversion rate. Use A/B testing to compare different creatives, headlines, and call-to-action placements. Data should guide every decision you make — from budget allocation to creative direction — ensuring that your campaigns continually improve over time.</p>
        <h3 className="text-xl font-semibold mb-2">5. Budget Optimization</h3>
        <p className="mb-6">Throwing money at social media ads without a strategy is a quick way to burn through your budget. Start small with test campaigns to see which combinations of creative, audience, and placement perform best. Gradually increase spending on the highest-performing ads while pausing underperformers. Diversifying across ad formats — such as Stories, Reels, and carousel ads — helps reduce risk and increase your chances of success.</p>
        <h3 className="text-xl font-semibold mb-2">6. Trend Adaptation</h3>
        <p>Social media trends evolve at lightning speed, and what worked last year may already feel outdated. Keep a close eye on platform updates, emerging content formats, and viral challenges. Experiment with AR filters, shoppable posts, and AI-assisted creative tools to stay ahead. By adapting quickly while maintaining brand consistency, you position your business as both innovative and relevant in the eyes of your audience.</p>
      </>
    ),
    Arabic: (
      <>
        <h3 className="text-xl font-semibold mb-2">1. اختيار المنصة</h3>
        <p className="mb-6">اختيار المنصة المناسبة هو الخطوة الأولى لإنشاء استراتيجية إعلانات ناجحة عبر وسائل التواصل الاجتماعي. بدلاً من محاولة التواجد في كل مكان، ركز على المنصات التي يتفاعل فيها جمهورك أكثر. على سبيل المثال، لينكدإن مناسب للتسويق بين الشركات، وإنستجرام وتيك توك مثاليان للحملات البصرية، بينما يظل فيسبوك خيارًا قويًا لاستهداف المجتمعات. ابحث عن الفئة العمرية والاهتمامات والسلوكيات لتحديد الأنسب. المنصة ذات التفاعل العالي ولكن الجمهور غير المناسب تعتبر مضيعة للميزانية، لذا يجب أن يكون الاختيار استراتيجيًا.</p>
        <h3 className="text-xl font-semibold mb-2">2. المحتوى الإبداعي</h3>
        <p className="mb-6">في عام 2025، أصبحت وسائل التواصل الاجتماعي أكثر تنافسية من أي وقت مضى، مما يجعل الإبداع أكبر ميزة لديك. الصور الثابتة لم تعد كافية؛ الفيديوهات عالية الجودة، والكاروسيل، والمنشورات التفاعلية تسيطر على الساحة. يجب أن يجذب المحتوى انتباه المستخدمين في أول ثلاث ثوانٍ، حيث يتصفحون بسرعة. أضف القصص أو الفكاهة أو العاطفة لجعل علامتك التجارية لا تُنسى. لا تتردد في تجربة الاتجاهات، ولكن تأكد من أن المحتوى يتماشى دائمًا مع صوت وأهداف علامتك التجارية.</p>
        <h3 className="text-xl font-semibold mb-2">3. الاستهداف المتقدم</h3>
        <p className="mb-6">خيارات الاستهداف المتقدمة هي ما يجعل الإعلان عبر وسائل التواصل الاجتماعي قويًا للغاية. توفر المنصات الآن إمكانية الاستهداف بناءً على الاهتمامات والسلوكيات والديموغرافيا والموقع وحتى الأحداث الحياتية. يتيح لك إعادة الاستهداف التواصل مع المستخدمين الذين زاروا موقعك أو تفاعلوا مع المحتوى ولم يتحولوا بعد. بالإضافة إلى ذلك، تساعدك الجماهير المشابهة في الوصول إلى أشخاص لديهم خصائص مشابهة لعملائك الحاليين. استخدام هذه الأدوات بفعالية يمكن أن يحسن ملاءمة الإعلان والعائد على الاستثمار بشكل كبير.</p>
        <h3 className="text-xl font-semibold mb-2">4. اتخاذ القرارات بناءً على البيانات</h3>
        <p className="mb-6">انتهى عصر الحملات الإعلانية التي تُطلق وتُنسى. النجاح في 2025 يتطلب مراقبة مستمرة وتحسينات بناءً على مؤشرات الأداء الفورية. تتبع مؤشرات مثل معدل النقر، وتكلفة الاكتساب، ومعدل التحويل. استخدم اختبار A/B لمقارنة الإبداعات والعناوين وأماكن الدعوة إلى اتخاذ إجراء. يجب أن توجه البيانات كل قرار تتخذه — من تخصيص الميزانية إلى اتجاه الإبداع — لضمان تحسين الحملات باستمرار.</p>
        <h3 className="text-xl font-semibold mb-2">5. تحسين الميزانية</h3>
        <p className="mb-6">إنفاق المال على الإعلانات دون استراتيجية هو طريقة سريعة لاستنزاف الميزانية. ابدأ بحملات اختبارية صغيرة لمعرفة أي التركيبات من الإبداع والجمهور والمكان تحقق أفضل أداء. زد الإنفاق تدريجيًا على الإعلانات الأعلى أداءً وأوقف الإعلانات الضعيفة. التنويع عبر أشكال الإعلانات مثل القصص، الريلز، وإعلانات الكاروسيل يساعد في تقليل المخاطر وزيادة فرص النجاح.</p>
        <h3 className="text-xl font-semibold mb-2">6. مواكبة الاتجاهات</h3>
        <p>تتطور اتجاهات وسائل التواصل الاجتماعي بسرعة كبيرة، وما كان يعمل العام الماضي قد يصبح قديمًا الآن. راقب تحديثات المنصات، وصيغ المحتوى الجديدة، والتحديات الفيروسية. جرب الفلاتر، المنشورات القابلة للشراء، وأدوات الإبداع المدعومة بالذكاء الاصطناعي للبقاء في المقدمة. من خلال التكيف السريع مع الحفاظ على اتساق العلامة التجارية، تضع عملك كابتكار وذو صلة في نظر جمهورك.</p>
      </>
    ),
    Hebrew: (
      <>
        <h3 className="text-xl font-semibold mb-2">1. בחירת פלטפורמה</h3>
        <p className="mb-6">בחירת הפלטפורמה הנכונה היא הצעד הראשון ליצירת אסטרטגיית פרסום מוצלחת במדיה החברתית. במקום לנסות להיות בכל מקום, התמקדו בפלטפורמות בהן הקהל שלכם הכי פעיל. לדוגמה, LinkedIn מתאים לשיווק B2B, Instagram ו-TikTok אידיאליים לקמפיינים ויזואליים, ו-Facebook נשאר אופציה חזקה למיקוד קהילתי. חקרו את גיל, תחומי עניין והתנהגויות הקהל כדי לקבוע את ההתאמה הטובה ביותר. פלטפורמה עם מעורבות גבוהה אך קהל לא מתאים היא בזבוז תקציב, לכן הבחירה האסטרטגית היא קריטית.</p>
        <h3 className="text-xl font-semibold mb-2">2. תוכן יצירתי</h3>
        <p className="mb-6">בשנת 2025, המדיה החברתית תחרותית מתמיד, מה שהופך את היצירתיות ליתרון הגדול ביותר שלכם. תמונות סטטיות כבר לא מספיקות; סרטונים איכותיים, קרוסלות ופוסטים אינטראקטיביים שולטים בזירה. התוכן שלכם צריך לתפוס תשומת לב בשלוש השניות הראשונות, כשהמשתמשים גוללים במהירות. שלבו סיפור, הומור או רגש כדי להפוך את המותג שלכם לבלתי נשכח. אל תפחדו להתנסות בטרנדים, אך ודאו שהתוכן תמיד תואם את קול ומטרות המותג.</p>
        <h3 className="text-xl font-semibold mb-2">3. מיקוד מתקדם</h3>
        <p className="mb-6">אפשרויות המיקוד המתקדמות הן מה שהופך את הפרסום במדיה החברתית לכל כך עוצמתי. הפלטפורמות מציעות כיום מיקוד לפי תחומי עניין, התנהגויות, דמוגרפיה, מיקום ואפילו אירועים בחיים. ריטרגטינג מאפשר לכם להתחבר מחדש למשתמשים שביקרו באתר או התעניינו בתוכן אך לא המירו. בנוסף, קהלים דומים עוזרים לכם להגיע לאנשים עם מאפיינים דומים ללקוחות הקיימים שלכם. שימוש יעיל בכלים אלו יכול לשפר משמעותית את רלוונטיות הפרסום וה-ROI.</p>
        <h3 className="text-xl font-semibold mb-2">4. החלטות מבוססות נתונים</h3>
        <p className="mb-6">הימים של קמפיינים "הגדר ושכח" נגמרו. הצלחה ב-2025 דורשת ניטור מתמיד ואופטימיזציה על סמך מדדי ביצוע בזמן אמת. עקבו אחרי מדדים כמו שיעור הקלקה, עלות רכישה ושיעור המרה. השתמשו ב-A/B Testing להשוואת קריאייטיבים, כותרות ומיקומי קריאה לפעולה. הנתונים צריכים להנחות כל החלטה — מהקצאת תקציב ועד כיוון קריאייטיב — כדי להבטיח שיפור מתמיד בקמפיינים.</p>
        <h3 className="text-xl font-semibold mb-2">5. אופטימיזציה תקציבית</h3>
        <p className="mb-6">להשקיע כסף בפרסום ללא אסטרטגיה זו דרך מהירה לבזבז תקציב. התחילו בקמפיינים קטנים כדי לבדוק אילו שילובים של קריאייטיב, קהל ומיקום עובדים הכי טוב. הגדילו בהדרגה את ההשקעה במודעות המצליחות והפסיקו את הפחות מוצלחות. גיוון בפורמטים — כמו סטוריז, רילס וקרוסלות — מפחית סיכון ומגדיל את הסיכוי להצלחה.</p>
        <h3 className="text-xl font-semibold mb-2">6. התאמת טרנדים</h3>
        <p>טרנדים במדיה החברתית משתנים במהירות, ומה שעבד בשנה שעברה כבר עשוי להיות מיושן. עקבו אחרי עדכוני פלטפורמות, פורמטים חדשים ואתגרים ויראליים. נסו פילטרים, פוסטים לרכישה וכלים יצירתיים מבוססי AI כדי להישאר מובילים. התאמה מהירה תוך שמירה על עקביות המותג תמצב את העסק שלכם כחדשני ורלוונטי בעיני הקהל.</p>
      </>
    ),
  },
  "3": {
    English: (
      <>
        <h3 className="text-xl font-semibold mb-2">1. Personalization at Scale</h3>
        <p className="mb-6">Personalization in email marketing has gone far beyond simply inserting the subscriber’s first name. In 2025, successful campaigns use behavioral and transactional data to craft emails that feel hand-written for each recipient. This could mean recommending products based on previous purchases, offering location-specific promotions, or sending tailored content based on a user’s past browsing history. The more relevant your emails, the higher your open and click-through rates will be.</p>
        <h3 className="text-xl font-semibold mb-2">2. Segmentation Strategies</h3>
        <p className="mb-6">Treating all subscribers the same is a guaranteed way to lower engagement. Effective segmentation involves grouping subscribers by demographics, purchase history, engagement level, or interests. For example, a high-value customer who shops frequently should receive exclusive offers, while inactive subscribers may need a re-engagement campaign. By delivering the right message to the right segment at the right time, you can boost both conversions and customer loyalty.</p>
        <h3 className="text-xl font-semibold mb-2">3. Mobile-First Design</h3>
        <p className="mb-6">Since more than 60% of emails are opened on mobile devices, designing for small screens first is essential. This means using responsive templates that automatically adjust layout and font size, ensuring buttons are large enough to tap easily, and keeping subject lines concise. A poorly formatted mobile email is likely to be deleted within seconds, so mobile optimization directly affects your ROI.</p>
        <h3 className="text-xl font-semibold mb-2">4. Strong CTAs</h3>
        <p className="mb-6">Every email you send should have a clear purpose, and that purpose should be reflected in a strong call-to-action (CTA). Whether you want readers to make a purchase, download a guide, or sign up for an event, the CTA should be visually distinct and easy to find. Using action-oriented language like “Get Started” or “Claim Your Offer” can create urgency and increase conversions.</p>
        <h3 className="text-xl font-semibold mb-2">5. Automation Workflows</h3>
        <p className="mb-6">Automation allows you to send timely and relevant emails without constant manual input. Common workflows include welcome sequences for new subscribers, abandoned cart reminders, and win-back campaigns for inactive customers. Advanced automation can also trigger messages based on specific behaviors, such as viewing a product or completing a purchase. Done right, automation saves time and increases revenue.</p>
        <h3 className="text-xl font-semibold mb-2">6. Continuous Testing</h3>
        <p>Testing is not a one-time activity but an ongoing process in email marketing. From subject lines and preview text to design elements and send times, every part of an email can be optimized. A/B testing lets you compare variations to see what resonates best with your audience. Over time, these small optimizations compound into significantly higher engagement and conversion rates.</p>
      </>
    ),
    Arabic: (
      <>
        <h3 className="text-xl font-semibold mb-2">1. التخصيص على نطاق واسع</h3>
        <p className="mb-6">تجاوز التخصيص في التسويق عبر البريد الإلكتروني مجرد إدراج اسم المشترك الأول. في عام 2025، تستخدم الحملات الناجحة البيانات السلوكية والمعاملات لصياغة رسائل تبدو وكأنها مكتوبة يدويًا لكل مستلم. قد يعني ذلك التوصية بمنتجات بناءً على عمليات الشراء السابقة، أو تقديم عروض ترويجية خاصة بالموقع، أو إرسال محتوى مخصص بناءً على سجل التصفح السابق للمستخدم. كلما كانت رسائلك أكثر ملاءمة، زادت معدلات الفتح والنقر.</p>
        <h3 className="text-xl font-semibold mb-2">2. استراتيجيات التقسيم</h3>
        <p className="mb-6">معاملة جميع المشتركين بنفس الطريقة هي طريقة مضمونة لخفض التفاعل. يتضمن التقسيم الفعال تجميع المشتركين حسب الديموغرافيا، وتاريخ الشراء، ومستوى التفاعل، أو الاهتمامات. على سبيل المثال، يجب أن يتلقى العميل ذو القيمة العالية الذي يتسوق كثيرًا عروضًا حصرية، بينما قد يحتاج المشتركون غير النشطين إلى حملة إعادة تفاعل. من خلال تقديم الرسالة الصحيحة إلى الشريحة الصحيحة في الوقت المناسب، يمكنك زيادة التحويلات وولاء العملاء.</p>
        <h3 className="text-xl font-semibold mb-2">3. التصميم الموجه للجوال أولاً</h3>
        <p className="mb-6">نظرًا لأن أكثر من 60% من رسائل البريد الإلكتروني يتم فتحها على الأجهزة المحمولة، فإن التصميم للشاشات الصغيرة أولاً أمر ضروري. هذا يعني استخدام قوالب متجاوبة تضبط التخطيط وحجم الخط تلقائيًا، والتأكد من أن الأزرار كبيرة بما يكفي للنقر بسهولة، والحفاظ على عناوين الموضوع مختصرة. من المرجح أن يتم حذف البريد الإلكتروني غير المنسق للجوال في غضون ثوانٍ، لذا فإن تحسين الجوال يؤثر بشكل مباشر على العائد على الاستثمار.</p>
        <h3 className="text-xl font-semibold mb-2">4. دعوات لاتخاذ إجراء قوية</h3>
        <p className="mb-6">يجب أن يكون لكل رسالة بريد إلكتروني ترسلها هدف واضح، ويجب أن ينعكس هذا الهدف في دعوة قوية لاتخاذ إجراء (CTA). سواء كنت تريد من القراء إجراء عملية شراء، أو تنزيل دليل، أو التسجيل في حدث، يجب أن تكون الدعوة لاتخاذ إجراء مميزة بصريًا وسهلة العثور عليها. استخدام لغة تحفيزية مثل "ابدأ الآن" أو "احصل على العرض" يمكن أن يخلق شعورًا بالإلحاح ويزيد من التحويلات.</p>
        <h3 className="text-xl font-semibold mb-2">5. سير عمل الأتمتة</h3>
        <p className="mb-6">تتيح لك الأتمتة إرسال رسائل بريد إلكتروني في الوقت المناسب وذات صلة دون تدخل يدوي مستمر. تشمل سير العمل الشائعة تسلسلات الترحيب للمشتركين الجدد، وتذكيرات سلة التسوق المهجورة، وحملات استعادة العملاء غير النشطين. يمكن أن تؤدي الأتمتة المتقدمة أيضًا إلى تشغيل الرسائل بناءً على سلوكيات محددة، مثل عرض منتج أو إكمال عملية شراء. عند تنفيذها بشكل صحيح، توفر الأتمتة الوقت وتزيد الإيرادات.</p>
        <h3 className="text-xl font-semibold mb-2">6. الاختبار المستمر</h3>
        <p>الاختبار ليس نشاطًا لمرة واحدة بل هو عملية مستمرة في التسويق عبر البريد الإلكتروني. من عناوين الموضوع ونص المعاينة إلى عناصر التصميم وأوقات الإرسال، يمكن تحسين كل جزء من البريد الإلكتروني. يتيح لك اختبار A/B مقارنة المتغيرات لمعرفة ما يلقى صدى أفضل لدى جمهورك. بمرور الوقت، تتراكم هذه التحسينات الصغيرة لتؤدي إلى معدلات تفاعل وتحويل أعلى بكثير.</p>
      </>
    ),
    Hebrew: (
      <>
        <h3 className="text-xl font-semibold mb-2">1. התאמה אישית בקנה מידה</h3>
        <p className="mb-6">התאמה אישית בשיווק בדוא"ל עברה הרבה מעבר להוספת שם פרטי של המנוי. בשנת 2025, קמפיינים מוצלחים משתמשים בנתונים התנהגותיים ועסקאות כדי ליצור מיילים שמרגישים כאילו נכתבו ידנית לכל נמען. זה יכול לכלול המלצה על מוצרים לפי רכישות קודמות, הצעות מבוססות מיקום, או שליחת תוכן מותאם אישית לפי היסטוריית הגלישה של המשתמש. ככל שהמיילים שלך רלוונטיים יותר, כך שיעורי הפתיחה וההקלקה יהיו גבוהים יותר.</p>
        <h3 className="text-xl font-semibold mb-2">2. אסטרטגיות סגמנטציה</h3>
        <p className="mb-6">התייחסות לכל המנויים באופן זהה היא דרך בטוחה להוריד מעורבות. סגמנטציה אפקטיבית כוללת קיבוץ מנויים לפי דמוגרפיה, היסטוריית רכישות, רמת מעורבות או תחומי עניין. לדוגמה, לקוח בעל ערך גבוה שקונה לעיתים קרובות צריך לקבל הצעות בלעדיות, בעוד שמנויים לא פעילים עשויים להזדקק לקמפיין החייאה. על ידי מסירת המסר הנכון לסגמנט הנכון בזמן הנכון, ניתן להגדיל המרות ונאמנות לקוחות.</p>
        <h3 className="text-xl font-semibold mb-2">3. עיצוב מובייל תחילה</h3>
        <p className="mb-6">מעל 60% מהמיילים נפתחים במכשירים ניידים, ולכן עיצוב למסכים קטנים תחילה הוא חיוני. זה אומר שימוש בתבניות רספונסיביות שמותאמות אוטומטית לפריסה וגודל גופן, לוודא שהכפתורים גדולים מספיק ללחיצה קלה, ולשמור על שורות נושא קצרות. מייל שלא מעוצב נכון לנייד יימחק תוך שניות, ולכן אופטימיזציה לנייד משפיעה ישירות על ה-ROI שלך.</p>
        <h3 className="text-xl font-semibold mb-2">4. קריאות לפעולה חזקות</h3>
        <p className="mb-6">כל מייל שאתה שולח צריך להיות בעל מטרה ברורה, והמטרה הזו צריכה לבוא לידי ביטוי בקריאה חזקה לפעולה (CTA). בין אם אתה רוצה שהקוראים יבצעו רכישה, יורידו מדריך או ירשמו לאירוע, ה-CTA צריך להיות מובחן וקל למציאה. שימוש בשפה מעוררת פעולה כמו "התחל עכשיו" או "קבל את ההצעה" יכול ליצור תחושת דחיפות ולהגדיל המרות.</p>
        <h3 className="text-xl font-semibold mb-2">5. אוטומציה של תהליכים</h3>
        <p className="mb-6">אוטומציה מאפשרת לך לשלוח מיילים רלוונטיים ובזמן ללא התערבות ידנית מתמדת. תהליכים נפוצים כוללים רצפי קבלת פנים למנויים חדשים, תזכורות לעגלה שננטשה וקמפיינים להחייאת לקוחות לא פעילים. אוטומציה מתקדמת יכולה גם להפעיל הודעות לפי התנהגויות מסוימות, כמו צפייה במוצר או השלמת רכישה. כאשר זה נעשה נכון, אוטומציה חוסכת זמן ומגדילה הכנסות.</p>
        <h3 className="text-xl font-semibold mb-2">6. בדיקות מתמשכות</h3>
        <p>בדיקות אינן פעילות חד פעמית אלא תהליך מתמשך בשיווק בדוא"ל. משורות נושא וטקסט מקדים ועד אלמנטים עיצוביים וזמני שליחה, כל חלק במייל ניתן לשיפור. בדיקות A/B מאפשרות לך להשוות וריאציות ולראות מה הכי מתאים לקהל שלך. עם הזמן, אופטימיזציות קטנות אלו מצטברות לשיעורי מעורבות והמרה גבוהים בהרבה.</p>
      </>
    ),
  },
};

const translations = {
  English: {
    articles: [
      {
        id: "1",
        title: "Boost Your SEO with These Proven Techniques",
        imgSrc: image1,
        author: "Admin",
        authorImage: "https://ui-avatars.com/api/?name=Admin",
      },
      {
        id: "2",
        title: "Mastering Social Media Advertising in 2025",
        imgSrc: image2,
        author: "Admin",
        authorImage: "https://ui-avatars.com/api/?name=Admin",
      },
      {
        id: "3",
        title: "Email Marketing Best Practices for 2025",
        imgSrc: image3,
        author: "Admin",
        authorImage: "https://ui-avatars.com/api/?name=Admin",
      }
    ],
    notFound: "Article Not Found",
    backToBlog: "Back to Blog",
    by: "By",
  },
  Arabic: {
    articles: [
      {
        id: "1",
        title: "تعزيز تحسين محركات البحث باستخدام تقنيات مثبتة",
        imgSrc: image1,
        author: "المشرف",
        authorImage: "https://ui-avatars.com/api/?name=Admin",
      },
      {
        id: "2",
        title: "إتقان الإعلان عبر وسائل التواصل الاجتماعي لعام 2025",
        imgSrc: image2,
        author: "المشرف",
        authorImage: "https://ui-avatars.com/api/?name=Admin",
      },
      {
        id: "3",
        title: "أفضل ممارسات التسويق عبر البريد الإلكتروني لعام 2025",
        imgSrc: image3,
        author: "المشرف",
        authorImage: "https://ui-avatars.com/api/?name=Admin",
      }
    ],
    notFound: "المقال غير موجود",
    backToBlog: "العودة إلى المدونة",
    by: "بواسطة",
  },
  Hebrew: {
    articles: [
      {
        id: "1",
        title: "שפר את ה-SEO שלך עם טכניקות מוכחות",
        imgSrc: image1,
        author: "מנהל",
        authorImage: "https://ui-avatars.com/api/?name=Admin",
      },
      {
        id: "2",
        title: "שיטות עבודה מומלצות לשיווק בדוא\"ל לשנת 2025",
        imgSrc: image2,
        author: "מנהל",
        authorImage: "https://ui-avatars.com/api/?name=Admin",
      },
      {
        id: "3",
        title: "שיטות עבודה מומלצות לשיווק בדוא\"ל לשנת 2025",
        imgSrc: image3,
        author: "מנהל",
        authorImage: "https://ui-avatars.com/api/?name=Admin",
      }
    ],
    notFound: "המאמר לא נמצא",
    backToBlog: "חזרה לבלוג",
    by: "מאת",
  },
};

function getDir(language) {
  return language === "Arabic" || language === "Hebrew" ? "rtl" : "ltr";
}

  
import { useLocation } from "react-router-dom";

export default function ArticleDetail({ darkTheme, setDarkTheme, language = "English", setLanguage }) {
  const { id } = useParams();
  const location = useLocation();
  const t = translations[language] || translations["English"];
  const dir = getDir(language);
  const article = t.articles.find((a) => a.id === id) || translations["English"].articles.find((a) => a.id === id);
  const content = articleContents[id]?.[language] || articleContents[id]?.English;

  // Try to get author info from location.state (for user blogs), else use default
  const author = location.state?.author || article?.author || "Admin";
  const authorImage = location.state?.authorImage || article?.authorImage || "https://ui-avatars.com/api/?name=Admin";

  if (!article) {
    // If it's a user-created blog (not in articleDetails), show info from location.state
    if (location.state) {
      return (
        <div className={`w-full px-4 min-h-screen ${darkTheme ? 'bg-black text-white' : 'bg-white text-[#232136]'}`} dir={dir}>
          <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />
          <Link to="/blog" className="text-violet-600 pt-20mt-20 hover:underline">← {t.backToBlog}</Link>
          <img src={location.state.image} alt={location.state.title} className="w-full h-100 object-cover rounded-lg mb-8" />
          <div className="flex items-center gap-2 mb-4">
            <img src={authorImage} alt={author} className="w-10 h-10 rounded-full object-cover" />
            <span className={`text-sm ${darkTheme ? 'text-gray-300' : 'text-gray-600'}`}>{t.by} {author}</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 text-violet-700">{location.state.title}</h1>
          <div className="text-lg mb-8">{location.state.content}</div>
          <Link to="/blog" className="text-violet-600 hover:underline">← {t.backToBlog}</Link>
          <Footer darkTheme={darkTheme} />
        </div>
      );
    }
    return (
      <div className={`max-w-2xl mx-auto py-16 px-4 text-center ${darkTheme ? 'bg-black text-white' : 'bg-white text-[#232136]'}`} dir={dir}>
        <h2 className="text-2xl font-bold mb-4">{t.notFound}</h2>
        <Link to="/blog" className="text-violet-600 hover:underline">{t.backToBlog}</Link>
      </div>
    );
  }

  return (
    <div className={`w-full px-4 min-h-screen ${darkTheme ? 'bg-black text-white' : 'bg-white text-[#232136]'}`} dir={dir}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />
      <Link to="/blog" className="text-violet-600 pt-20mt-20 hover:underline">← {t.backToBlog}</Link>
      <img src={article.imgSrc} alt={article.title} className="w-full h-100 object-cover rounded-lg mb-8" />
      <div className="flex items-center gap-2 mb-4">
        <img src={authorImage} alt={author} className="w-10 h-10 rounded-full object-cover" />
        <span className={`text-sm ${darkTheme ? 'text-gray-300' : 'text-gray-600'}`}>{t.by} {author}</span>
      </div>
      <h1 className="text-4xl font-bold mb-6 text-violet-700">{article.title}</h1>
  <div className="text-lg mb-8">{content}</div>
      <Link to="/blog" className="text-violet-600 hover:underline">← {t.backToBlog}</Link>
      <Footer darkTheme={darkTheme} />
    </div>
  );
}