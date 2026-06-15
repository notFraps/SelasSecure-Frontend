"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Calendar, Briefcase, HeartHandshake, ShieldAlert, Award, FileSpreadsheet, Activity, HelpCircle, User } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const services = [
    {
      name: "Personal & Family Planning",
      href: "/personal-family-financial-planning",
      desc: "Tailored long-term wealth strategy",
      icon: HeartHandshake,
    },
    {
      name: "Divorce Financial Planning",
      href: "/divorce-financial-planning",
      desc: "Chartered divorce support (CFDS)",
      icon: ShieldAlert,
    },
    {
      name: "Insurance Planning",
      href: "/insurance",
      desc: "Protecting families and liabilities",
      icon: Award,
    },
    {
      name: "Estate Planning",
      href: "/estate-planning",
      desc: "Minimize taxes and transfer wealth",
      icon: Briefcase,
    },
    {
      name: "Group Benefits & RRSP",
      href: "/group-benefits-rrsp",
      desc: "Custom employee retention plans",
      icon: FileSpreadsheet,
    },
    {
      name: "Health Spending Accounts",
      href: "/hsa",
      desc: "Tax-efficient medical expense accounts",
      icon: Activity,
    },
    {
      name: "Health Plans",
      href: "/health-plans",
      desc: "Supplemental health coverage",
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
                src="/logo.jpg"
                alt="SelasSecure Financial Logo"
                width={52}
                height={52}
                className="rounded-full shadow-sm border border-brand-muted"
                priority
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-brand-blue font-serif leading-none">
                  SELASECURE
                </span>
                <span className="text-xs font-semibold tracking-widest text-brand-green uppercase mt-0.5">
                  FINANCIAL
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about-us"
              className="text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors flex items-center gap-1.5"
            >
              <User className="w-4 h-4 text-slate-400" />
              Meet the Team
            </Link>

            {/* Dropdown Menu - Services */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors focus:outline-none"
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute left-1/2 z-10 mt-1 w-96 -translate-x-1/2 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid gap-2">
                    {services.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50"
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
          <div className="hidden md:flex items-center">
            <Link
              href="/book-now"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-[#0e487d] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-blue/10 hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
