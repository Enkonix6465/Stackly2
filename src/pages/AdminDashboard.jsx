            // ...existing code...
import { useState, useEffect } from "react";
import Header from "../Header";
// Define RTL languages and sections
const rtlLanguages = ["ar"];
const sections = [
  { key: "users", labelKey: "users" },
  { key: "campaigns", labelKey: "campaigns" },
  { key: "content", labelKey: "content" },
  { key: "leads", labelKey: "leads" },
  { key: "analytics", labelKey: "analytics" },
  { key: "integrations", labelKey: "integrations" },
];
import UserGrowthChart from "../components/UserGrowthChart";

const translations = {
  he: {
    dashboard: "לוח מנהל",
    users: "משתמשים",
    campaigns: "קמפיינים",
    content: "תוכן",
    leads: "לידים",
    analytics: "אנליטיקה",
    integrations: "אינטגרציות",
    totalUsers: "סה\"כ משתמשים רשומים",
    noUsers: "אין משתמשים רשומים עדיין.",
    campaignsOverview: "סקירת קמפיינים",
    totalUsersStat: "סה\"כ משתמשים",
    todaysRegistrations: "הרשמות היום",
    peakDay: "יום שיא",
    contentManagement: "ניהול תוכן",
    blogPosts: "פוסטים בבלוג",
    socialMediaContent: "תוכן מדיה חברתית",
    emailCampaigns: "קמפיינים בדוא\"ל",
    blogTitle: "כותרת הבלוג",
    blogImage: "כתובת תמונת הבלוג",
    authorName: "שם המחבר",
    authorImage: "כתובת תמונת המחבר",
    blogSummary: "תקציר הבלוג",
    blogContent: "תוכן הבלוג",
    saveBlog: "שמור בלוג",
    socialLinks: "קישורי מדיה חברתית (אופציונלי)",
    instagram: "אינסטגרם",
    facebook: "פייסבוק",
    whatsapp: "וואטסאפ",
    linkedin: "לינקדאין",
    existingBlogs: "פוסטים קיימים",
    noBlogs: "אין פוסטים עדיין.",
    editBlog: "ערוך בלוג",
    saveChanges: "שמור שינויים",
    leadsSection: "לידים",
    leadershipInsights: "תובנות מנהיגות",
    totalLeads: "סה\"כ לידים",
    activeCampaigns: "קמפיינים פעילים",
    successRate: "שיעור הצלחה",
    teamPerformance: "ביצועי צוות",
    marketingReach: "הגעה שיווקית",
    quote: '"מנהיגות אינה קשורה לתארים, עמדות או תרשימים. היא קשורה לחיים שמשפיעים על אחרים."',
    quoteAuthor: "- ג'ון סי. מקסוול",
    userAnalytics: "אנליטיקת משתמשים",
    totalLogins: "סה\"כ כניסות",
    integrationsSection: "אינטגרציות",
    googleAnalytics: "Google Analytics",
    enterGA: "הזן מזהה מעקב של Google Analytics",
    testConnection: "בדוק חיבור",
    facebookPixel: "Facebook Pixel",
    enterFB: "הזן מזהה Facebook Pixel",
    mailchimp: "Mailchimp",
    enterMC: "הזן מפתח API של Mailchimp",
    saveIntegrations: "שמור אינטגרציות",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    email: "אימייל",
  registeredAt: "נרשם בתאריך",
  phoneLabel: "טלפון",
    language: "שפה",
  },
  en: {
    dashboard: "Admin Dashboard",
    users: "Users",
    campaigns: "Campaigns",
    content: "Content",
    leads: "Leads",
    analytics: "Analytics",
    integrations: "Integrations",
    totalUsers: "Total Registered Users",
    noUsers: "No registered users yet.",
    campaignsOverview: "Campaigns Overview",
    totalUsersStat: "Total Users",
    todaysRegistrations: "Today's Registrations",
    peakDay: "Peak Day",
    contentManagement: "Content Management",
    blogPosts: "Blog Posts",
    socialMediaContent: "Social Media Content",
    emailCampaigns: "Email Campaigns",
    blogTitle: "Blog Title",
    blogImage: "Blog Image URL",
    authorName: "Author Name",
    authorImage: "Author Profile Image URL",
    blogSummary: "Blog Summary",
    blogContent: "Blog Content",
    saveBlog: "SAVE BLOG",
    socialLinks: "SOCIAL MEDIA LINKS (OPTIONAL)",
    instagram: "Instagram",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    existingBlogs: "Existing Blogs",
    noBlogs: "No blogs yet.",
    editBlog: "Edit Blog",
    saveChanges: "Save Changes",
    leadsSection: "Leads",
    leadershipInsights: "Leadership Insights",
    totalLeads: "Total Leads",
    activeCampaigns: "Active Campaigns",
    successRate: "Success Rate",
    teamPerformance: "Team Performance",
    marketingReach: "Marketing Reach",
    quote: '"Leadership is not about titles, positions, or flowcharts. It is about one life influencing another."',
    quoteAuthor: "- John C. Maxwell",
    userAnalytics: "User Analytics",
    totalLogins: "Total Logins",
    integrationsSection: "Integrations",
    googleAnalytics: "Google Analytics",
    enterGA: "Enter Google Analytics Tracking ID",
    testConnection: "Test Connection",
    facebookPixel: "Facebook Pixel",
    enterFB: "Enter Facebook Pixel ID",
    mailchimp: "Mailchimp",
    enterMC: "Enter Mailchimp API Key",
    saveIntegrations: "Save Integrations",
    firstName: "First Name",
    lastName: "Last Name",
    aishaName: "Aisha Khan",
    aishaRole: "Content Strategist",
    rahulName: "Rahul Verma",
    rahulRole: "SEO Specialist",
    priyaName: "Priya Sharma",
    priyaRole: "Digital Marketing Lead",
    emailLabel: "Email",
  phoneLabel: "Phone",
    email: "Email",
    registeredAt: "Registered At",
    language: "Language",
  },
  ar: {
    dashboard: "لوحة التحكم",
    users: "المستخدمون",
    campaigns: "الحملات",
    content: "المحتوى",
    leads: "العملاء المحتملون",
    analytics: "تحليلات",
    integrations: "التكاملات",
    totalUsers: "إجمالي المستخدمين المسجلين",
    noUsers: "لا يوجد مستخدمون مسجلون بعد.",
    campaignsOverview: "نظرة عامة على الحملات",
    totalUsersStat: "إجمالي المستخدمين",
    todaysRegistrations: "تسجيلات اليوم",
    peakDay: "أكثر يوم تسجيل",
    contentManagement: "إدارة المحتوى",
    blogPosts: "المقالات",
    socialMediaContent: "محتوى وسائل التواصل",
    emailCampaigns: "حملات البريد الإلكتروني",
    blogTitle: "عنوان المقال",
    blogImage: "رابط صورة المقال",
    authorName: "اسم الكاتب",
    authorImage: "رابط صورة الكاتب",
    blogSummary: "ملخص المقال",
    blogContent: "محتوى المقال",
    saveBlog: "حفظ المقال",
    socialLinks: "روابط التواصل الاجتماعي (اختياري)",
    instagram: "انستغرام",
    facebook: "فيسبوك",
    whatsapp: "واتساب",
    linkedin: "لينكدإن",
    existingBlogs: "المقالات الحالية",
    noBlogs: "لا توجد مقالات بعد.",
    editBlog: "تعديل المقال",
    saveChanges: "حفظ التغييرات",
    leadsSection: "العملاء المحتملون",
    leadershipInsights: "رؤى القيادة",
    totalLeads: "إجمالي العملاء المحتملين",
    activeCampaigns: "الحملات النشطة",
    successRate: "معدل النجاح",
    teamPerformance: "أداء الفريق",
    marketingReach: "الوصول التسويقي",
    quote: '"القيادة ليست حول الألقاب أو المناصب أو المخططات. إنها حول حياة تؤثر في أخرى."',
    quoteAuthor: "- جون سي. ماكسويل",
    userAnalytics: "تحليلات المستخدم",
    totalLogins: "إجمالي تسجيلات الدخول",
    integrationsSection: "التكاملات",
    googleAnalytics: "تحليلات جوجل",
    enterGA: "أدخل معرف تتبع جوجل",
    testConnection: "اختبار الاتصال",
    facebookPixel: "بيكسل فيسبوك",
    enterFB: "أدخل معرف بيكسل فيسبوك",
    mailchimp: "ميل تشيمب",
    enterMC: "أدخل مفتاح API لميل تشيمب",
    saveIntegrations: "حفظ التكاملات",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    aishaName: "عائشة خان",
    aishaRole: "استراتيجية المحتوى",
    rahulName: "راهول فيرما",
    rahulRole: "أخصائي تحسين محركات البحث",
    priyaName: "بريا شارما",
    priyaRole: "قائدة التسويق الرقمي",
    emailLabel: "البريد الإلكتروني",
  phoneLabel: "الهاتف",
    email: "البريد الإلكتروني",
    registeredAt: "تاريخ التسجيل",
    language: "اللغة",
  },
};

export default function AdminDashboard({ darkTheme, setDarkTheme, language = 'en', setLanguage }) {
  // Use language prop if provided, else local state
  const [localLanguage, setLocalLanguage] = useState(language);
  const currentLanguage = language || localLanguage;
  const t = translations[currentLanguage] || translations['en'];
  const isRTL = ['ar', 'he'].includes(currentLanguage);
  // State for editing a blog
  const [editForm, setEditForm] = useState({
    title: '',
    image: '',
    author: '',
    authorImage: '',
    summary: '',
    content: '',
    instagram: '',
    facebook: '',
    whatsapp: '',
    linkedin: '',
    date: ''
  });
  const [editIndex, setEditIndex] = useState(null);
  const [activeSection, setActiveSection] = useState("users");
  // State for Edit Modal
  const [showEditModal, setShowEditModal] = useState(false);

  // Real-time data for users and logins
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [loginHistory, setLoginHistory] = useState(JSON.parse(localStorage.getItem("loginHistory")) || []);

  // Real-time user and login history updates
  useEffect(() => {
    const updateUserData = () => {
      setUsers(JSON.parse(localStorage.getItem("users")) || []);
      setLoginHistory(JSON.parse(localStorage.getItem("loginHistory")) || []);
    };
    window.addEventListener("storage", updateUserData);
    // Poll every 2 seconds for real-time updates
    const interval = setInterval(updateUserData, 2000);
    return () => {
      window.removeEventListener("storage", updateUserData);
      clearInterval(interval);
    };
  }, []);

  // Calculate campaign stats
  const today = new Date().toLocaleDateString();
  const todaysRegistrations = users.filter(u => {
    if (!u.registeredAt) return false;
    // Extract date part from registeredAt
    const datePart = u.registeredAt.split(",")[0].trim();
    return datePart === today;
  }).length;
  // Count registrations per day
  const registrationsByDay = users.reduce((acc, u) => {
    if (!u.registeredAt) return acc;
    const datePart = u.registeredAt.split(",")[0].trim();
    acc[datePart] = (acc[datePart] || 0) + 1;
    return acc;
  }, {});
  let peakDay = "-";
  let maxRegs = 0;
  for (const [date, count] of Object.entries(registrationsByDay)) {
    if (count > maxRegs) {
      maxRegs = count;
      peakDay = date;
    }
  }
  // Prepare data for chart
  const chartData = Object.entries(registrationsByDay)
    .sort(([a], [b]) => new Date(a) - new Date(b))
    .map(([date, registrations]) => ({ date, registrations }));

  const [form, setForm] = useState({
    title: "",
    image: "",
    author: "",
    authorImage: "",
    summary: "",
    content: "",
    instagram: "",
    facebook: "",
    whatsapp: "",
    linkedin: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = () => {
      const stored = JSON.parse(localStorage.getItem("blogs")) || [];
      setBlogs(stored);
    };
    loadBlogs();
    const handleStorage = (e) => {
      if (e.key === "blogs_update") {
        loadBlogs();
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);


  const handleRemove = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    localStorage.setItem("blogs_update", Date.now().toString());
  };

  const handleChange = (e) => {
    // (removed duplicate code that caused syntax error)
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  // Edit a blog by index
  const handleEdit = (index) => {
    setEditForm({ ...blogs[index] });
    setEditIndex(index);
    setShowEditModal(true);
  };

  // Handle changes in the edit modal
  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // Save changes from the edit modal
  const handleEditSave = () => {
    if (editIndex === null) return;
    const updatedBlogs = blogs.map((blog, i) =>
      i === editIndex ? { ...editForm } : blog
    );
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setShowEditModal(false);
    setEditIndex(null);
    // Force reload for Blog page in all tabs
    localStorage.setItem('blogs_update', Date.now().toString());
  };
  function isValidUrl(url) {
    try {
      if (!url) return true;
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
  const handleSave = () => {
    // Required fields
    if (!form.title || !form.image || !form.author || !form.authorImage || !form.summary || !form.content) {
      setError("Please fill all required fields.");
      setSuccess("");
      return;
    }
    // Validate URLs
    if (!isValidUrl(form.image)) {
      setError("Please enter a valid Blog Image URL.");
      setSuccess("");
      return;
    }
    if (!isValidUrl(form.authorImage)) {
      setError("Please enter a valid Author Profile Image URL.");
      setSuccess("");
      return;
    }
    if (form.instagram && !isValidUrl(form.instagram)) {
      setError("Please enter a valid Instagram URL.");
      setSuccess("");
      return;
    }
    if (form.facebook && !isValidUrl(form.facebook)) {
      setError("Please enter a valid Facebook URL.");
      setSuccess("");
      return;
    }
    if (form.whatsapp && !isValidUrl(form.whatsapp)) {
      setError("Please enter a valid WhatsApp URL.");
      setSuccess("");
      return;
    }
    if (form.linkedin && !isValidUrl(form.linkedin)) {
      setError("Please enter a valid LinkedIn URL.");
      setSuccess("");
      return;
    }
    // Save blog
    const newBlog = { ...form, date: new Date().toLocaleString() };
    const updatedBlogs = [newBlog, ...blogs];
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
    setForm({
      title: "",
      image: "",
      author: "",
      authorImage: "",
      summary: "",
      content: "",
      instagram: "",
      facebook: "",
      whatsapp: "",
      linkedin: ""
    });
    setError("");
    setSuccess("Blog saved successfully!");
  };

  return (
    <div className={`relative max-w-screen min-h-screen ${darkTheme ? 'bg-[#18181c]' : ''}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Header with language selector */}
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden w-full flex justify-between items-center px-4 py-2 bg-[#f3eaff] border-b border-[#e5d6fa] sticky top-0 z-30">
          <h2 className={`text-xl font-bold ${darkTheme ? 'text-[#f3eaff]' : 'text-[#53295a]'}`}>☰ {t.dashboard}</h2>
          <div className="flex gap-2 items-center">
            <select
              className="rounded px-2 py-1 border border-[#a259c6] text-[#a259c6] bg-white"
              value={activeSection}
              onChange={e => setActiveSection(e.target.value)}
            >
              {sections.map(sec => (
                <option key={sec.key} value={sec.key}>{t[sec.labelKey]}</option>
              ))}
            </select>
            <select
              className="rounded px-2 py-1 border border-[#a259c6] text-[#a259c6] bg-white"
              value={currentLanguage}
              onChange={e => {
                if (setLanguage) setLanguage(e.target.value);
                setLocalLanguage(e.target.value);
              }}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="he">עברית</option>
            </select>
            <span className="ml-2 font-semibold text-[#53295a]">English</span>
          </div>
        </div>
        {/* Sidebar for desktop */}
        <aside className={`hidden md:flex w-56 flex-col p-4 border-r ${darkTheme ? 'bg-[#232136] border-[#3a2352]' : 'bg-[#f3eaff] border-[#e5d6fa]'}`}> 
          <div className="mb-6 flex flex-col gap-2">
            <h2 className={`text-xl font-bold text-center ${darkTheme ? 'text-[#f3eaff]' : 'text-[#53295a]'}`}>☰ {t.dashboard}</h2>
            <select
              className="rounded px-2 py-1 border border-[#a259c6] text-[#a259c6] bg-white"
              value={currentLanguage}
              onChange={e => {
                if (setLanguage) setLanguage(e.target.value);
                setLocalLanguage(e.target.value);
              }}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="he">עברית</option>
            </select>
          </div>
          {sections.map((sec) => (
            <button
              key={sec.key}
              className={`text-left px-4 py-2 rounded mb-2 font-medium flex items-center transition ${activeSection === sec.key ? (darkTheme ? 'bg-[#a259c6] text-white border-2 border-[#f3eaff]' : 'bg-[#a259c6] text-white border-2 border-[#53295a]') : (darkTheme ? 'text-[#f3eaff] hover:bg-[#232136]' : 'text-[#53295a] hover:bg-[#e5d6fa]')}`}
              style={activeSection === sec.key ? { boxShadow: `0 0 0 2px #a259c6` } : {}}
              onClick={() => setActiveSection(sec.key)}
            >
              {t[sec.labelKey]}
            </button>
          ))}
        </aside>
        {/* Main Content */}
        <main className={`flex-1 p-2 md:p-8 ${darkTheme ? 'bg-[#18181c] text-white' : ''}`}> 
          <header className={`p-4 rounded mb-6 text-2xl font-bold border shadow-sm tracking-wide ${darkTheme ? 'bg-[#232136] border-[#3a2352] text-[#a259c6]' : 'bg-white border-[#e5d6fa] text-[#a259c6]'}`}> 
            {t.dashboard}
          </header>
          {/* Section Content */}
          {activeSection === "users" && (
            <section>
              <div className="bg-gradient-to-r from-[#b57edc] via-[#a259c6] to-[#6c3483] text-white p-4 rounded mb-4 font-semibold">{t.totalUsers}: {users.length}</div>
              <table className="w-full bg-white rounded shadow overflow-hidden mb-8">
                <thead>
                  <tr className="bg-[#a259c6] text-white">
                    <th className="p-3 text-left">{t.firstName}</th>
                    <th className="p-3 text-left">{t.lastName}</th>
                    <th className="p-3 text-left">{t.email}</th>
                    <th className="p-3 text-left">{t.registeredAt}</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr><td colSpan={4} className="p-3 text-center text-gray-400">{t.noUsers}</td></tr>
                  ) : (
                    users.map((u, i) => (
                      <tr key={i} className="border-b border-[#e5d6fa] hover:bg-[#f3eaff]">
                        <td className="p-3 text-[#53295a]">{u.firstName || (u.name ? u.name.split(' ')[0] : '')}</td>
                        <td className="p-3 text-[#53295a]">{u.lastName || (u.name ? u.name.split(' ').slice(1).join(' ') : '')}</td>
                        <td className="p-3 text-[#53295a]">{u.email}</td>
                        <td className="p-3 text-[#53295a]">{u.registeredAt}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </section>
          )}
          {activeSection === "campaigns" && (
            <section>
              <h2 className="text-2xl font-bold mb-4 text-violet-500">{t.campaignsOverview}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-violet-800 to-violet-600 rounded-md p-6 text-center shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-white">{t.totalUsersStat}</h3>
                  <p className="text-2xl font-bold text-white">{users.length}</p>
                  <span className="block text-violet-200 mt-2">{t.campaignsOverview} - {t.totalUsersStat}</span>
                </div>
                <div className="bg-gradient-to-br from-violet-700 to-violet-500 rounded-md p-6 text-center shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-white">{t.todaysRegistrations}</h3>
                  <p className="text-2xl font-bold text-white">{todaysRegistrations}</p>
                  <span className="block text-violet-200 mt-2">{t.campaignsOverview} - {t.todaysRegistrations}</span>
                </div>
                <div className="bg-gradient-to-br from-violet-600 to-violet-400 rounded-md p-6 text-center shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-white">{t.peakDay}</h3>
                  <p className="text-2xl font-bold text-white">{peakDay}</p>
                  <span className="block text-violet-200 mt-2">{t.campaignsOverview} - {t.peakDay}</span>
                </div>
              </div>
            </section>
          )}
          {activeSection === "content" && (
            <section>
              <h2 className="text-2xl font-bold mb-4 text-violet-500">{t.contentManagement}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-md p-6 shadow-md cursor-pointer hover:from-violet-800 hover:to-violet-600">
                  <h3 className="text-lg font-semibold mb-2 flex items-center text-white">
                    <span role="img" aria-label="blog" className="mr-2">📝</span>
                    <span className="text-violet-300">{t.blogPosts}</span>
                  </h3>
                  <p className="text-violet-100">{t.blogPosts}: {t.contentManagement}</p>
                </div>
                <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-md p-6 shadow-md cursor-pointer hover:from-violet-800 hover:to-violet-600">
                  <h3 className="text-lg font-semibold mb-2 flex items-center text-white">
                    <span role="img" aria-label="social" className="mr-2">📋</span>
                    <span className="text-pink-300">{t.socialMediaContent}</span>
                  </h3>
                  <p className="text-violet-100">{t.socialMediaContent}: {t.contentManagement}</p>
                </div>
                <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-md p-6 shadow-md cursor-pointer hover:from-violet-800 hover:to-violet-600">
                  <h3 className="text-lg font-semibold mb-2 flex items-center text-white">
                    <span role="img" aria-label="email" className="mr-2">📧</span>
                    <span className="text-green-300">{t.emailCampaigns}</span>
                  </h3>
                  <p className="text-violet-100">{t.emailCampaigns}: {t.contentManagement}</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-md p-6 mb-6 min-h-[60px] text-violet-200">
                [{t.contentManagement} {t.blogPosts} {t.socialMediaContent} {t.emailCampaigns}]
              </div>
            </section>
          )}
          {activeSection === "leads" && (
            <section>
              <h2 className={`text-xl font-bold mb-4 ${isRTL ? 'text-right' : ''}`}>{t.leadsSection}</h2>
              <div className={`flex gap-6 flex-wrap mb-8 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-lg shadow-lg p-4 w-64 text-center">
                  <h4 className="font-bold text-violet-200">{t.aishaName || 'Aisha Khan'}</h4>
                  <p className="text-violet-100">{t.aishaRole || 'Content Strategist'}</p>
                  <p className="text-violet-100 mt-2">{t.emailLabel || t.email || 'Email'}: aisha@digital.com</p>
                  <p className="text-violet-100">{t.phoneLabel || t.phone || 'Phone'}: +91 99887 66554</p>
                </div>
                <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-lg shadow-lg p-4 w-64 text-center">
                  <h4 className="font-bold text-violet-200">{t.rahulName || 'Rahul Verma'}</h4>
                  <p className="text-violet-100">{t.rahulRole || 'SEO Specialist'}</p>
                  <p className="text-violet-100 mt-2">{t.emailLabel || t.email || 'Email'}: rahul@digital.com</p>
                  <p className="text-violet-100">{t.phoneLabel || t.phone || 'Phone'}: +91 91234 56789</p>
                </div>
                <div className="bg-gradient-to-br from-violet-900 to-violet-700 rounded-lg shadow-lg p-4 w-64 text-center">
                  <h4 className="font-bold text-violet-200">{t.priyaName || 'Priya Sharma'}</h4>
                  <p className="text-violet-100">{t.priyaRole || 'Digital Marketing Lead'}</p>
                  <p className="text-violet-100 mt-2">{t.emailLabel || t.email || 'Email'}: priya@digital.com</p>
                  <p className="text-violet-100">{t.phoneLabel || t.phone || 'Phone'}: +91 98765 43210</p>
                </div>
              </div>
              <div className="mt-8 bg-gradient-to-br from-violet-800 to-violet-600 p-6 rounded shadow">
                <h2 className={`text-orange-200 text-xl font-bold mb-4 ${isRTL ? 'text-right' : ''}`}>{t.leadershipInsights}</h2>
                <div className={`flex gap-4 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <div className="flex-1 bg-gradient-to-br from-violet-900 to-violet-700 p-4 rounded text-center font-bold text-violet-100">{t.totalLeads}<br />124</div>
                  <div className="flex-1 bg-gradient-to-br from-violet-900 to-violet-700 p-4 rounded text-center font-bold text-violet-100">{t.activeCampaigns}<br />18</div>
                  <div className="flex-1 bg-gradient-to-br from-violet-900 to-violet-700 p-4 rounded text-center font-bold text-violet-100">{t.successRate}<br />92%</div>
                </div>
                <div className="mb-4">
                  <h4 className={`font-bold text-white ${isRTL ? 'text-right' : ''}`}>{t.teamPerformance}</h4>
                  <div className="w-full bg-violet-700 rounded h-6 overflow-hidden">
                    <div className="bg-gradient-to-r from-violet-400 to-violet-200 h-6 rounded" style={{ width: "85%" }}>85%</div>
                  </div>
                  <h4 className={`font-bold mt-2 text-white ${isRTL ? 'text-right' : ''}`}>{t.marketingReach}</h4>
                  <div className="w-full bg-violet-700 rounded h-6 overflow-hidden">
                    <div className="bg-gradient-to-r from-violet-400 to-violet-200 h-6 rounded" style={{ width: "70%" }}>70%</div>
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-violet-900 to-violet-700 p-4 rounded mt-4 italic text-center text-violet-200 ${isRTL ? 'text-right' : ''}`}>{t.quote}<br /><span className="block mt-2 text-violet-100">{t.quoteAuthor}</span></div>
              </div>
            </section>
          )}
          {activeSection === "analytics" && (
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#53295a]">{t.userAnalytics}</h2>
              <div className="bg-gradient-to-br from-[#7c3aed] to-[#a259c6] p-6 rounded shadow mb-4">
                <UserGrowthChart data={chartData} />
              </div>
              <div className="bg-gradient-to-br from-[#7c3aed] to-[#a259c6] text-white p-4 rounded font-semibold mb-4">
                <p>{t.totalUsers}: {users.length}</p>
                <p>{t.totalLogins}: {loginHistory.length}</p>
              </div>
            </section>
          )}
          {activeSection === "integrations" && (
            <section>
              <h2 className="text-xl font-bold mb-4">{t.integrationsSection}</h2>
              <div className="bg-gradient-to-br from-violet-900 to-violet-700 p-6 rounded shadow">
                <div className="mb-4">
                  <h3 className="font-bold mb-2 text-violet-200">{t.googleAnalytics}</h3>
                  <input type="text" className="w-full p-2 rounded mb-2 text-black" placeholder={t.enterGA} />
                  <button className="px-4 py-2 bg-gradient-to-r from-violet-700 to-violet-500 rounded text-white font-semibold hover:from-violet-600 hover:to-violet-400">{t.testConnection}</button>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold mb-2 text-violet-200">{t.facebookPixel}</h3>
                  <input type="text" className="w-full p-2 rounded mb-2 text-black" placeholder={t.enterFB} />
                  <button className="px-4 py-2 bg-gradient-to-r from-violet-700 to-violet-500 rounded text-white font-semibold hover:from-violet-600 hover:to-violet-400">{t.testConnection}</button>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold mb-2 text-violet-200">{t.mailchimp}</h3>
                  <input type="text" className="w-full p-2 rounded mb-2 text-black" placeholder={t.enterMC} />
                  <button className="px-4 py-2 bg-gradient-to-r from-violet-700 to-violet-500 rounded text-white font-semibold hover:from-violet-600 hover:to-violet-400">{t.testConnection}</button>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-violet-700 to-violet-500 text-white rounded font-semibold hover:from-violet-600 hover:to-violet-400 transition mt-4">{t.saveIntegrations}</button>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}