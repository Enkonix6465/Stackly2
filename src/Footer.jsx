import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer({ darkTheme }) {
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };
  return (
    <footer className={`${darkTheme ? 'bg-[#18181c] text-white border-[#232136]' : 'bg-white text-[#53295a] border-gray-200'} border-t pt-10 pb-4 px-4`}>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Logo and Brand */}
        <div className="md:col-span-1 flex flex-col items-start">
          <img src="/src/assets/logo.png" alt="Logo" className="h-14 mb-4" />
          <span className={`font-bold text-xl ${darkTheme ? 'text-white' : 'text-[#53295a]'}`}>Digital Marketing</span>
          <span className={`${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'} text-sm mt-1`}>Your Partner in Growth</span>
          <span className={`${darkTheme ? 'text-[#7c5dc7]' : 'text-[#a259c6]'} text-sm`}>Innovative Solutions for Your Brand</span>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className={`font-semibold mb-2 ${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'}`}>Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/home1" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>Home</a></li>
            <li><a href="/about" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>About Us</a></li>
            <li><a href="/blog" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>Blog</a></li>
            <li><a href="/contactus" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>Contact Us</a></li>
            <li><a href="/services" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>Services</a></li>
          </ul>
        </div>
        {/* Explore Services */}
        <div>
          <h4 className={`font-semibold mb-2 ${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'}`}>Explore Services</h4>
          <ul className="space-y-1">
            <li><a href="/services/seo" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>Search Engine Optimization (SEO)</a></li>
            <li><a href="/services/smm" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>Social Media Marketing (SMM)</a></li>
            <li><a href="/services/ppc" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>Pay-Per-Click Advertising (PPC)</a></li>
            <li><a href="/services/content" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>Content Marketing</a></li>
            <li><a href="/services/email" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>Email Marketing & Automation</a></li>
            <li><a href="/services/web" className={`${darkTheme ? 'text-white hover:text-[#a259c6]' : 'text-[#53295a] hover:text-[#a259c6]'}`}>Website Design & Development</a></li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h4 className={`font-semibold mb-2 ${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'}`}>Contact Us</h4>
          <div className={`text-sm mb-2 ${darkTheme ? 'text-white' : 'text-[#53295a]'}`}> 
            <div><span className="font-semibold">Address:</span> 123 Digital Ave, Marketing City</div>
            <div><span className="font-semibold">Phone:</span> (123) 456-7890</div>
            <div><span className="font-semibold">Email:</span> support@digital.com</div>
            <div><span className="font-semibold">Hours:</span> Mon–Fri, 9 AM – 6 PM</div>
          </div>
          <div className="mt-2">
            <span className={`font-semibold ${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'}`}>Follow Us</span>
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
          <h4 className={`font-semibold mb-2 ${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'}`}>Newsletter</h4>
          <p className={`text-sm mb-2 ${darkTheme ? 'text-white' : 'text-[#53295a]'}`}>Get weekly marketing tips and updates in your inbox.</p>
          {subscribed ? (
            <div className={`font-semibold py-2 ${darkTheme ? 'text-[#a259c6]' : 'text-[#7c5dc7]'}`}>Thanks for subscribing!</div>
          ) : (
            <form className="flex flex-col gap-2 w-full max-w-xs" onSubmit={handleSubscribe}>
              <input type="email" placeholder="Your email" className={`rounded-md border h-11 px-4 text-base w-full ${darkTheme ? 'border-[#3a2352] bg-[#232136] text-white focus:ring-[#a259c6]' : 'border-gray-300 bg-white text-[#53295a] focus:ring-[#a259c6]'}`} required />
              <button type="submit" className={`rounded-md h-11 w-full font-semibold transition text-base ${darkTheme ? 'bg-[#a259c6] text-white hover:bg-[#7c5dc7]' : 'bg-[#7c5dc7] text-white hover:bg-[#a259c6]'}`}>Subscribe</button>
            </form>
          )}
        </div>
      </div>
  <hr className={`my-8 ${darkTheme ? 'border-[#232136]' : 'border-gray-200'}`} />
  <div className={`max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs gap-2 ${darkTheme ? 'text-white' : 'text-[#53295a]'}`}> 
        <div className="flex space-x-4 mb-2 md:mb-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Disclaimer</a>
        </div>
        <div>© 2025 Digital Marketing. All rights reserved.</div>
      </div>
    </footer>
  );
}
