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
  noUserGrowthData: "אין נתוני צמיחת משתמשים.",
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
  noUserGrowthData: "No user growth data available.",
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
  noUserGrowthData: "لا توجد بيانات نمو المستخدمين.",
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

// Map UI language names to translation keys
const languageMap = {
  English: 'en',
  Arabic: 'ar',
  Hebrew: 'he',
};

export default function AdminDashboard({ darkTheme, setDarkTheme, language = 'English', setLanguage }) {
  // Always use the language prop from Header for sync
  const langKey = languageMap[language] || 'en';
  const t = translations[langKey] || translations['en'];
  const isRTL = langKey === 'ar' || langKey === 'he';
  // Sidebar collapse state
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
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
  <div className={`relative max-w-screen min-h-screen pt-[72px] ${darkTheme ? 'bg-[#18181c]' : ''}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Header with language selector */}
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} language={language} setLanguage={setLanguage} />
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden w-full flex justify-between items-center px-4 py-2 bg-[#f3eaff] border-b border-[#e5d6fa] sticky top-0 z-30">
          <h2 className={`text-xl font-bold ${darkTheme ? 'text-[#f3eaff]' : 'text-[#53295a]'}`}>{t.dashboard}</h2>
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
            {/* Language dropdown removed: language is now only controlled from the main header */}
          </div>
        </div>
        {/* Sidebar for desktop with collapse/expand */}
  <aside className={`hidden md:flex flex-col border-r transition-all duration-300 h-screen z-40 ${sidebarCollapsed ? 'w-16 p-2' : 'w-56 p-4'} ${darkTheme ? 'bg-[#232136] border-[#3a2352]' : 'bg-[#f3eaff] border-[#e5d6fa]'}`}> 
          <div className={`mb-6 flex flex-col gap-2 ${sidebarCollapsed ? 'items-center' : ''}`}>
            <div className="flex items-center justify-between w-full">
              <h2 className={`text-xl font-bold ${sidebarCollapsed ? 'text-center w-full' : ''} ${darkTheme ? 'text-[#f3eaff]' : 'text-[#53295a]'}`}>{!sidebarCollapsed && t.dashboard}</h2>
              <button
                className={`ml-auto p-1 rounded ${darkTheme ? 'bg-[#3a2352] text-[#f3eaff]' : 'bg-[#e5d6fa] text-[#53295a]'} transition`}
                title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                onClick={() => setSidebarCollapsed((prev) => !prev)}
              >
                {sidebarCollapsed ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                )}
              </button>
            </div>
            {/* Language dropdown removed from sidebar */}
          </div>
          {sections.map((sec) => (
            <button
              key={sec.key}
              className={`flex items-center transition text-left rounded mb-2 font-medium w-full ${sidebarCollapsed ? 'justify-center px-0 py-2' : 'px-4 py-2'} ${activeSection === sec.key ? (darkTheme ? 'bg-[#a259c6] text-white border-2 border-[#f3eaff]' : 'bg-[#a259c6] text-white border-2 border-[#53295a]') : (darkTheme ? 'text-[#f3eaff] hover:bg-[#232136]' : 'text-[#53295a] hover:bg-[#e5d6fa]')}`}
              style={activeSection === sec.key ? { boxShadow: `0 0 0 2px #a259c6` } : {}}
              onClick={() => setActiveSection(sec.key)}
              title={sidebarCollapsed ? t[sec.labelKey] : undefined}
            >
              {sidebarCollapsed ? (
                // Use icons for each section, fallback to a dot
                sec.key === 'users' ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : sec.key === 'campaigns' ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                ) : sec.key === 'content' ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 2v4M16 2v4M2 10h20" /></svg>
                ) : sec.key === 'leads' ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-8 0v2" /><circle cx="12" cy="7" r="4" /></svg>
                ) : sec.key === 'analytics' ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 19V6M6 19v-4M16 19v-2M21 19V9" /></svg>
                ) : sec.key === 'integrations' ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 008.7 19a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004 8.7a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09A1.65 1.65 0 008.7 5a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09A1.65 1.65 0 0015 5c.26.01.52.07.76.18.24.11.47.25.68.42l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09c.01.26.07.52.18.76.11.24.25.47.42.68l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-1.82.33h-.09A1.65 1.65 0 0019 15z" /></svg>
                ) : (
                  <span className="h-2 w-2 bg-gray-400 rounded-full inline-block"></span>
                )
              ) : (
                t[sec.labelKey]
              )}
            </button>
          ))}
        </aside>
        {/* Main Content */}
  <main className={`flex-1 p-2 md:p-8 ${darkTheme ? 'bg-[#f3eaff] text-white' : 'bg-[#f3eaff] text-[#232136]'}`}> 
          {/* Removed Admin Dashboard title from main content area since sidebar highlights it */}
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
              <h2 className="text-2xl font-bold mb-4 text-black">{t.campaignsOverview}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#a259c6] rounded-md p-6 text-center shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-black">{t.totalUsersStat}</h3>
                  <p className="text-2xl font-bold text-white">{users.length}</p>
                  <span className="block text-white mt-2">{t.campaignsOverview} - {t.totalUsersStat}</span>
                </div>
                <div className="bg-[#a259c6] rounded-md p-6 text-center shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-black">{t.todaysRegistrations}</h3>
                  <p className="text-2xl font-bold text-white">{todaysRegistrations}</p>
                  <span className="block text-white mt-2">{t.campaignsOverview} - {t.todaysRegistrations}</span>
                </div>
                <div className="bg-[#a259c6] rounded-md p-6 text-center shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-black">{t.peakDay}</h3>
                  <p className="text-2xl font-bold text-white">{peakDay}</p>
                  <span className="block text-white mt-2">{t.campaignsOverview} - {t.peakDay}</span>
                </div>
              </div>
            </section>
          )}
          {activeSection === "content" && (
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black">{t.contentManagement}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-[#a259c6] rounded-md p-6 shadow-md cursor-pointer">
                  <h3 className="text-lg font-semibold mb-2 flex items-center text-black">
                    <span role="img" aria-label="blog" className="mr-2">📝</span>
                    <span className="text-white">{t.blogPosts}</span>
                  </h3>
                  <p className="text-white">{t.blogPosts}: {t.contentManagement}</p>
                </div>
                <div className="bg-[#a259c6] rounded-md p-6 shadow-md cursor-pointer">
                  <h3 className="text-lg font-semibold mb-2 flex items-center text-black">
                    <span role="img" aria-label="social" className="mr-2">📋</span>
                    <span className="text-white">{t.socialMediaContent}</span>
                  </h3>
                  <p className="text-white">{t.socialMediaContent}: {t.contentManagement}</p>
                </div>
                <div className="bg-[#a259c6] rounded-md p-6 shadow-md cursor-pointer">
                  <h3 className="text-lg font-semibold mb-2 flex items-center text-black">
                    <span role="img" aria-label="email" className="mr-2">📧</span>
                    <span className="text-white">{t.emailCampaigns}</span>
                  </h3>
                  <p className="text-white">{t.emailCampaigns}: {t.contentManagement}</p>
                </div>
              </div>
              <div className="bg-[#a259c6] rounded-md p-6 mb-6 min-h-[60px] text-white">
                [{t.contentManagement} {t.blogPosts} {t.socialMediaContent} {t.emailCampaigns}]
              </div>
            </section>
          )}
          {activeSection === "leads" && (
            <section>
              <h2 className={`text-xl font-bold mb-4 text-black ${isRTL ? 'text-right' : ''}`}>{t.leadsSection}</h2>
              <div className={`flex gap-6 flex-wrap mb-8 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <div className="bg-[#a259c6] rounded-lg shadow-lg p-4 w-64 text-center">
                  <h4 className="font-bold text-black">{t.aishaName || 'Aisha Khan'}</h4>
                  <p className="text-white">{t.aishaRole || 'Content Strategist'}</p>
                  <p className="text-white mt-2">{t.emailLabel || t.email || 'Email'}: aisha@digital.com</p>
                  <p className="text-white">{t.phoneLabel || t.phone || 'Phone'}: +91 99887 66554</p>
                </div>
                <div className="bg-[#a259c6] rounded-lg shadow-lg p-4 w-64 text-center">
                  <h4 className="font-bold text-black">{t.rahulName || 'Rahul Verma'}</h4>
                  <p className="text-white">{t.rahulRole || 'SEO Specialist'}</p>
                  <p className="text-white mt-2">{t.emailLabel || t.email || 'Email'}: rahul@digital.com</p>
                  <p className="text-white">{t.phoneLabel || t.phone || 'Phone'}: +91 91234 56789</p>
                </div>
                <div className="bg-[#a259c6] rounded-lg shadow-lg p-4 w-64 text-center">
                  <h4 className="font-bold text-black">{t.priyaName || 'Priya Sharma'}</h4>
                  <p className="text-white">{t.priyaRole || 'Digital Marketing Lead'}</p>
                  <p className="text-white mt-2">{t.emailLabel || t.email || 'Email'}: priya@digital.com</p>
                  <p className="text-white">{t.phoneLabel || t.phone || 'Phone'}: +91 98765 43210</p>
                </div>
              </div>
              <div className="mt-8 bg-[#a259c6] p-6 rounded shadow text-white">
                <h2 className={`text-xl font-bold mb-4 text-black ${isRTL ? 'text-right' : ''}`}>{t.leadershipInsights}</h2>
                <div className={`flex gap-4 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <div className="flex-1 bg-[#a259c6] p-4 rounded text-center font-bold text-white">{t.totalLeads}<br />124</div>
                  <div className="flex-1 bg-[#a259c6] p-4 rounded text-center font-bold text-white">{t.activeCampaigns}<br />18</div>
                  <div className="flex-1 bg-[#a259c6] p-4 rounded text-center font-bold text-white">{t.successRate}<br />92%</div>
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
                <div className={`bg-[#a259c6] p-4 rounded mt-4 italic text-center text-white ${isRTL ? 'text-right' : ''}`}>{t.quote}<br /><span className="block mt-2 text-white">{t.quoteAuthor}</span></div>
              </div>
            </section>
          )}
          {activeSection === "analytics" && (
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#53295a]">{t.userAnalytics}</h2>
              <div className="bg-[#a259c6] p-6 rounded shadow mb-4">
                <UserGrowthChart data={chartData} noDataText={t.noUserGrowthData || t.noUsers || "No user growth data available."} />
              </div>
              <div className="bg-[#a259c6] text-white p-4 rounded font-semibold mb-4">
                <p>{t.totalUsers}: {users.length}</p>
                <p>{t.totalLogins}: {loginHistory.length}</p>
              </div>
            </section>
          )}
          {activeSection === "integrations" && (
            <section>
              <h2 className="text-xl font-bold mb-4">{t.integrationsSection}</h2>
              <div className="bg-[#a259c6] p-6 rounded shadow text-white">
                <div className="mb-4">
                  <h3 className="font-bold mb-2 text-violet-200">{t.googleAnalytics}</h3>
                  <input type="text" className="w-full p-2 rounded mb-2 text-black" placeholder={t.enterGA} />
                  <button className="px-4 py-2 bg-white text-[#a259c6] rounded font-semibold border border-[#a259c6] hover:bg-[#a259c6] hover:text-white transition">{t.testConnection}</button>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold mb-2 text-violet-200">{t.facebookPixel}</h3>
                  <input type="text" className="w-full p-2 rounded mb-2 text-black" placeholder={t.enterFB} />
                  <button className="px-4 py-2 bg-white text-[#a259c6] rounded font-semibold border border-[#a259c6] hover:bg-[#a259c6] hover:text-white transition">{t.testConnection}</button>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold mb-2 text-violet-200">{t.mailchimp}</h3>
                  <input type="text" className="w-full p-2 rounded mb-2 text-black" placeholder={t.enterMC} />
                  <button className="px-4 py-2 bg-white text-[#a259c6] rounded font-semibold border border-[#a259c6] hover:bg-[#a259c6] hover:text-white transition">{t.testConnection}</button>
                </div>
                <button className="w-full py-2 bg-white text-[#a259c6] rounded font-semibold border border-[#a259c6] hover:bg-[#a259c6] hover:text-white transition mt-4">{t.saveIntegrations}</button>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}