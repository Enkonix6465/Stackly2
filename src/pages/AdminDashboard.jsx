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
    email: "البريد الإلكتروني",
    registeredAt: "تاريخ التسجيل",
    language: "اللغة",
  },
};

export default function AdminDashboard({ darkTheme, setDarkTheme }) {
  const [language, setLanguage] = useState("en");
  const t = translations[language];
  const isRTL = rtlLanguages.includes(language);
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
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
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
              value={language}
              onChange={e => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
        {/* Sidebar for desktop */}
        <aside className={`hidden md:flex w-56 flex-col p-4 border-r ${darkTheme ? 'bg-[#232136] border-[#3a2352]' : 'bg-[#f3eaff] border-[#e5d6fa]'}`}> 
          <div className="mb-6 flex flex-col gap-2">
            <h2 className={`text-xl font-bold text-center ${darkTheme ? 'text-[#f3eaff]' : 'text-[#53295a]'}`}>☰ {t.dashboard}</h2>
            <select
              className="rounded px-2 py-1 border border-[#a259c6] text-[#a259c6] bg-white"
              value={language}
              onChange={e => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
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
          {/* ...existing code... */}
        </main>
      </div>
    </div>
  );
}