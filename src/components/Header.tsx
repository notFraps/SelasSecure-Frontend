"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Briefcase,
  HeartHandshake,
  ShieldAlert,
  Award,
  FileSpreadsheet,
  HelpCircle,
  UsersRound,
  CalendarHeart,
  FileHeart,
  HandCoins,
  Building
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const aboutTimeout = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    let tries = 0;
    const maxTries = 12;
    const delay = 300;

    function tryInit() {
      // @ts-ignore
      const g = (window as any).google;
      if (
        g &&
        g.translate &&
        typeof g.translate.TranslateElement === "function"
      ) {
        try {
          // @ts-ignore
          new g.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "fr,es,de",
              layout: g.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "google_translate_element",
          );
        } catch (err) {
          console.warn("Google Translate init error:", err);
        }
        return;
      }

      tries += 1;
      if (tries <= maxTries) {
        setTimeout(tryInit, delay);
      } else {
        console.warn("Google Translate did not load after retries.");
      }
    }

    tryInit();
  }, []);

  const handleAboutMouseEnter = () => {
    if (aboutTimeout.current) {
      clearTimeout(aboutTimeout.current);
    }
    setIsAboutOpen(true);
  }
  const handleAboutMouseLeave = () => {
    aboutTimeout.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 200);
  }

  const handleServicesMouseEnter = () => {
    if (servicesTimeout.current) {
      clearTimeout(servicesTimeout.current);
    }
    setIsServicesOpen(true);
  }
  const handleServicesMouseLeave = () => {
    servicesTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  }

  const services = [
    {
      name: "Personal Financial Planning",
      href: "/personal-financial-planning",
      desc: "Tailored long-term wealth strategy",
      icon: HeartHandshake,
    },
    {
      name: "Family Financial Planning",
      href: "/family-financial-planning",
      desc: "Comprehensive family financial solutions",
      icon: ShieldAlert,
    },
    {
      name: "Corporate Financial Planning",
      href: "/corporate-financial-planning",
      desc: "Strategic financial solutions for businesses",
      icon: Award,
    },
    {
      name: "Life Insurance Planning",
      href: "/insurance",
      desc: "Protecting families and liabilities",
      icon: CalendarHeart,
    },
    {
      name: "RESP, RRSP, TFSA & FHSA Optimization",
      href: "/rrsp-accounts",
      desc: "Get better investment advice for these accounts",
      icon: FileSpreadsheet,
    },
    {
      name: "Health Insurance Planning",
      href: "/health-insurance",
      desc: "Supplemental health coverage",
      icon: FileHeart,
    },
    {
      name: "Group Benefits",
      href: "/group-benefits",
      desc: "Employee retention strategies for businesses",
      icon: UsersRound,
    },
    {
      name: "Estate Planning",
      href: "/estate-planning",
      desc: "Minimize taxes and transfer wealth",
      icon: Briefcase,
    },
    {
      name: "Mortgage Referral",
      href: "/mortgage-referral",
      desc: "Trusted mortgage referral services",
      icon: HandCoins,
    },
    {
      name: "Debt Restructuring Referral",
      href: "/debt-restructuring-referral",
      desc: "Professional debt management solutions",
      icon: Building,
    },
    {
      name: "Other Financial Services",
      href: "/contact",
      desc: "Other Complimentary Financial Services",
      icon: HelpCircle,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-header transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/company.png"
                alt="SelasSecure Financial Logo"
                width={82}
                height={52}
                className="rounded-full border-brand-muted"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => handleAboutMouseEnter()}
              onMouseLeave={() => handleAboutMouseLeave()}
            >
              <button
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors focus:outline-none"
                aria-expanded={isAboutOpen}
              >
                About Us
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isAboutOpen && (
                <div className="absolute left-1/2 z-10 mt-1 w-56 -translate-x-1/2 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid gap-2">
                    <Link
                      href="/vision"
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                    >
                      Vision
                    </Link>
                    <Link
                      href="/mission"
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                    >
                      Mission
                    </Link>
                    <Link
                      href="/the-team"
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                    >
                      Meet the Team
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown Menu - Services */}
            <div
              className="relative"
              onMouseEnter={() => handleServicesMouseEnter()}
              onMouseLeave={() => handleServicesMouseLeave()}
            >
              <button
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors focus:outline-none"
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-1/2 z-10 mt-1 w-96 -translate-x-1/2 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid gap-2">
                    {services.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.name}
                          className="relative group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50 group"
                        >
                          {/* Normal link for every item */}
                          <Link
                            href={item.href}
                            className="flex items-start gap-3 flex-1"
                          >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-muted text-brand-blue shrink-0">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-brand-blue">
                                {item.name}
                              </p>
                              <p className="text-xs text-slate-500 mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/faq"
              className="text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action Button - Desktop */}
          <div className="flex items-center gap-4">
            <Link
              href="/book-now"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-[#0e487d] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-blue/10 hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              Book Free Consultation
            </Link>
            {/* <div id="google_translate_element" className="text-sm"></div> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-1 px-4 py-6">
            <Link
              href="/about-us"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-blue"
            >
              Meet the Team
            </Link>

            {/* Mobile Expandable Services */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-blue"
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="mt-1 ml-4 border-l-2 border-slate-100 pl-4 space-y-1">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-blue"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-blue"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-blue"
            >
              Contact
            </Link>

            <div className="pt-4 px-4">
              <Link
                href="/book-now"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue py-3 font-bold text-white shadow-md hover:bg-[#0e487d] transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book Now
              </Link>
              {/* npm install firebase

              // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYF42CW57JmX_ga5lYkO7gtVVFZmu0xDQ",
  authDomain: "selafinancial-babf3.firebaseapp.com",
  projectId: "selafinancial-babf3",
  storageBucket: "selafinancial-babf3.firebasestorage.app",
  messagingSenderId: "390356787455",
  appId: "1:390356787455:web:ea298a9cf984d8a3266cca",
  measurementId: "G-TF7QXFHJCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
