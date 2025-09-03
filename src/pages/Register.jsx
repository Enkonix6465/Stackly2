
import { useState } from "react";

const translations = {
  en: {
    createAccount: "Create Account",
    signUp: "Sign up to get started",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    password: "Password",
    register: "Register",
    alreadyHaveAccount: "Already have an account?",
    login: "Login",
    language: "Language",
  },
  ar: {
    createAccount: "إنشاء حساب",
    signUp: "سجل للبدء",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    register: "تسجيل",
    alreadyHaveAccount: "لديك حساب بالفعل؟",
    login: "تسجيل الدخول",
    language: "اللغة",
  },
  he: {
    createAccount: "צור חשבון",
    signUp: "הירשם כדי להתחיל",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    email: "אימייל",
    password: "סיסמה",
    register: "הרשמה",
    alreadyHaveAccount: "כבר יש לך חשבון?",
    login: "התחברות",
    language: "שפה",
  },
};
const rtlLanguages = ["ar", "he"];
import { useNavigate, Link } from "react-router-dom";
import welcomebg from "../assets/welcomebg.jpg";
import welcomebg1 from "../assets/welcomebg1.jpg";

export default function Register() {
  const [language, setLanguage] = useState("en");
  const t = translations[language];
  const isRTL = rtlLanguages.includes(language);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      alert("Please fill all fields.");
      return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      alert("Email already registered. Please login.");
      navigate("/login");
      return;
    }
    const registeredAt = new Date().toLocaleString();
    users.push({ firstName, lastName, email, password, registeredAt });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Redirecting to login page.");
    navigate("/login");
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
      <div className={`${darkTheme ? 'bg-[#232136] text-white' : 'bg-white text-gray-800'} rounded-lg shadow-lg flex w-full max-w-4xl overflow-hidden flex-row-reverse relative`}>
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <img
            src={welcomebg1}
            alt={t.register}
            className="object-cover w-full h-full"
          />
        </div>
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
          <h1 className={`text-2xl font-bold mb-2 ${darkTheme ? 'text-white' : 'text-gray-800'}`}>{t.createAccount}</h1>
          <p className={`mb-6 ${darkTheme ? 'text-gray-300' : 'text-gray-600'}`}>{t.signUp}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex gap-2">
              <div className="w-1/2">
                <label className={`block mb-1 font-semibold ${darkTheme ? 'text-white' : 'text-gray-700'}`}>{t.firstName}</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder={t.firstName}
                />
              </div>
              <div className="w-1/2">
                <label className={`block mb-1 font-semibold ${darkTheme ? 'text-white' : 'text-gray-700'}`}>{t.lastName}</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder={t.lastName}
                />
              </div>
            </div>
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
              <input
                type="password"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder={t.password}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-[#b57edc] via-[#a259c6] to-[#6c3483] text-white rounded font-semibold transition"
            >
              {t.register}
            </button>
            <p className="mt-4 text-center text-sm">
              {t.alreadyHaveAccount} {" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                {t.login}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}