

import { useState } from "react";

const translations = {
  en: {
    welcome: "Welcome Back",
    loginToAccount: "Login to your account",
    email: "Email",
    password: "Password",
    show: "Show",
    hide: "Hide",
    login: "Login",
    dontHaveAccount: "Don't have an account?",
    register: "Register",
    language: "Language",
  },
  ar: {
    welcome: "مرحبًا بعودتك",
    loginToAccount: "سجل الدخول إلى حسابك",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    show: "إظهار",
    hide: "إخفاء",
    login: "تسجيل الدخول",
    dontHaveAccount: "ليس لديك حساب؟",
    register: "تسجيل",
    language: "اللغة",
  },
  he: {
    welcome: "ברוך שובך",
    loginToAccount: "התחבר לחשבון שלך",
    email: "אימייל",
    password: "סיסמה",
    show: "הצג",
    hide: "הסתר",
    login: "התחברות",
    dontHaveAccount: "אין לך חשבון?",
    register: "הרשמה",
    language: "שפה",
  },
};
const rtlLanguages = ["ar", "he"];
import { useNavigate, Link } from "react-router-dom";
import welcomebg from "../assets/welcomebg.jpg";
import welcomebg1 from "../assets/welcomebg1.jpg";

export default function Login() {
  const [language, setLanguage] = useState("en");
  const t = translations[language];
  const isRTL = rtlLanguages.includes(language);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@enkonix.in" && password === "admin123") {
      // Store admin details in localStorage
      const adminUser = {
        name: "Admin",
        email: "admin@enkonix.in",
        password: "admin123",
        registeredAt: "N/A"
      };
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
      navigate("/admin");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      // Store the full user object in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      let loginHistory = JSON.parse(localStorage.getItem("loginHistory")) || [];
      loginHistory.push({
        email: user.email,
        name: user.name,
        loginTime: new Date().toLocaleString(),
      });
      localStorage.setItem("loginHistory", JSON.stringify(loginHistory));
      navigate("/home1");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${darkTheme ? 'bg-[#18181c]' : ''}`}
      style={{
        backgroundImage: `url(${welcomebg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <>
        <div className={`${darkTheme ? 'bg-[#232136] text-white' : 'bg-white text-gray-800'} rounded-lg shadow-lg flex w-full max-w-4xl overflow-hidden relative`}>
        <div className="flex-1 flex flex-col justify-center p-10 relative">
          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              className={`w-10 h-10 flex items-center justify-center rounded-full shadow transition z-10 ${darkTheme ? 'bg-white text-[#232136]' : 'bg-[#f3f4f6] text-[#232136]'}`}
              onClick={() => setDarkTheme((prev) => !prev)}
              aria-label="Toggle dark theme"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path></svg>
            </button>
            <select
              className="rounded px-2 py-1 border border-[#a259c6] text-[#a259c6] bg-white"
              value={language}
              onChange={e => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="he">עברית</option>
            </select>
          </div>
          <h1 className={`text-2xl font-bold mb-2 text-center ${darkTheme ? 'text-white' : 'text-gray-800'}`}>{t.welcome}</h1>
          <p className={`mb-6 text-center ${darkTheme ? 'text-gray-300' : 'text-gray-600'}`}>{t.loginToAccount}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className={`block mb-1 font-semibold ${darkTheme ? 'text-white' : 'text-gray-700'}`}>{t.email}</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={t.email}
              />
            </div>
            <div className="mb-4">
              <label className={`block mb-1 font-semibold ${darkTheme ? 'text-white' : 'text-gray-700'}`}>{t.password}</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder={t.password}
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-500 text-sm px-2 py-1 focus:outline-none"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? t.hide : t.show}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-[#b57edc] via-[#a259c6] to-[#6c3483] text-white rounded font-semibold transition"
            >
              {t.login}
            </button>
            <p className="mt-4 text-center text-sm">
              {t.dontHaveAccount} {" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                {t.register}
              </Link>
            </p>
            {/* Image inside the form, below the content, only on mobile */}
            <div className="w-full flex items-center justify-center bg-gray-100 mt-4 rounded-b-lg overflow-hidden md:hidden">
              <img
                src={welcomebg1}
                alt={t.welcome}
                className="object-cover w-full h-48"
              />
            </div>
          </form>
        </div>
        <div className="flex-1 hidden md:flex items-center justify-center bg-gray-100">
          <img
            src={welcomebg1}
            alt={t.welcome}
            className="object-cover w-full h-full"
          />
        </div>
  </div> {/* close card div */}
      </>
    </div>
  );
} 