"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, Laptop } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full bg-[#031121] text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="SelasSecure Financial Logo"
                width={48}
                height={48}
                className="rounded-full border border-slate-700"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white font-serif leading-none">
                  SELASECURE
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-brand-green uppercase mt-0.5">
                  FINANCIAL
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mt-2 font-serif italic">
              &quot;Secure. Generational. Wealth.&quot;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              Empowering individuals, families, and businesses in Canada and the
              USA to build Secure and Generational Wealth through collaboration
              and client-focused strategies.
            </p>
          </div>

          {/* Column 2: Services Directory */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/personal-family-financial-planning"
                  className="hover:text-white transition-colors"
                >
                  Personal Financial Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/personal-family-financial-planning"
                  className="hover:text-white transition-colors"
                >
                  Family Financial Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-financial-planning"
                  className="hover:text-white transition-colors"
                >
                  Corporate Financial Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/group-benefits-rrsp"
                  className="hover:text-white transition-colors"
                >
                  Life Insurance Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/group-benefits-rrsp"
                  className="hover:text-white transition-colors"
                >
                  RESP, RRSP, TFSA & FHSA Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/hsa"
                  className="hover:text-white transition-colors"
                >
                  Health Insurance Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/group-benefits-rrsp"
                  className="hover:text-white transition-colors"
                >
                  Group Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="/estate-planning"
                  className="hover:text-white transition-colors"
                >
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/mortgage-referral"
                  className="hover:text-white transition-colors"
                >
                  Mortgage Referral
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance"
                  className="hover:text-white transition-colors"
                >
                  Debt Restructuring Referrals
                </Link>
              </li>
              <li>
                <Link
                  href="/other-financial-services"
                  className="hover:text-white transition-colors"
                >
                  Other Financial Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Office */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Centerpointe Financial Centre, <br />
                  84 Centerpointe Drive,
                  <br />
                  Ottawa, ON, K2G 6B1.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <div className="flex flex-col">
                  <span className="text-slate-400">+1 613 899 3398</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <span className="text-slate-400">
                  info@selasecurefinancial.com
                  <br />
                  enquiries@selasecurefinancial.com
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stay in the Loop
            </h3>
            <p className="text-xs text-slate-400 leading-normal">
              Subscribe to our monthly newsletter to receive financial planning
              guides, tax-saving strategies, and market updates.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="relative mt-2 flex w-full"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-lightblue focus:ring-1 focus:ring-brand-lightblue focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green hover:bg-[#568432] text-white shadow-sm transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs font-semibold text-brand-green animate-pulse">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>
        {
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-white mb-6">
              Our Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {
                <Image
                  src="/company.png"
                  alt="Partner 1"
                  width={100}
                  height={60}
                  className="object-contain"
                />
              }
              {
                <Image
                  src="/company.png"
                  alt="Partner 1"
                  width={100}
                  height={60}
                  className="object-contain"
                />
              }
              {
                <Image
                  src="/company.png"
                  alt="Partner 1"
                  width={100}
                  height={60}
                  className="object-contain"
                />
              }
            </div>
          </div>
        }

        {/* Footer Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} SelaSecure Financial Inc. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/faq" className="hover:text-slate-300">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-slate-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
