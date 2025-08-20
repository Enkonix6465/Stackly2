import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import IndexSplash from "./pages/IndexSplash";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import AboutUs from "./pages/AboutUs";
import ContactUsHero from "./pages/ContactUs";
import Blog from "./pages/Blog";
import ArticleDetail from "./pages/ArticleDetail";
import AdminDashboard from "./pages/AdminDashboard";
import Services from "./pages/services";
import SearchEngineOptimization from "./pages/servicepages/Search engine optimization (SEO)";
import SocialMediaMarketing from "./pages/servicepages/Social media marketing";
import PayPerClickAdvertising from "./pages/servicepages/Pay-Per-Click Advertising (PPC)";
import ContentMarketing from "./pages/servicepages/Content Marketing";
import EmailMarketingAutomation from "./pages/servicepages/Email Marketing & Automation";
import WebsiteDesignDevelopment from "./pages/servicepages/Website Design & Development";


import { useState } from "react";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexSplash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home1" element={<Home1 darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
  <Route path="/blog" element={<Blog darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
  <Route path="/blog/article/:id" element={<ArticleDetail darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
  <Route path="/admin" element={<AdminDashboard darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
        <Route path="/home2" element={<Home2 darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
        <Route path="/about" element={<AboutUs darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
  <Route path="/contactus" element={<ContactUsHero darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
        <Route path="/services" element={<Services darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
  <Route path="/services/seo" element={<SearchEngineOptimization darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
  <Route path="/services/smm" element={<SocialMediaMarketing darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
  <Route path="/services/ppc" element={<PayPerClickAdvertising darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
  <Route path="/services/content" element={<ContentMarketing darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
  <Route path="/services/email" element={<EmailMarketingAutomation darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
  <Route path="/services/web" element={<WebsiteDesignDevelopment darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
