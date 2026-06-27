"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Plus, Minus, Search, Calendar, ChevronRight } from "lucide-react";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const categories = [
    {
      name: "General Financial Planning",
      items: [
        {
          q: "What is a financial plan, and why do I need one?",
          a: "A financial plan is a personalized roadmap for your money. It outlines your current financial situation, your goals, and the steps needed to achieve them — whether it’s saving for retirement, managing debt, or buying a home. A strong plan helps you feel in control and confident about the future.",
        },
        {
          q: "What types of clients do you work with?",
          a: "We work with individuals, families, business owners, and clients navigating life transitions like divorce, retirement, or career changes. Whether you’re just starting out or have built substantial wealth, we tailor our advice to your specific situation.",
        },
        {
          q: "Do I need to have a lot of money to work with a Financial Planner?",
          a: "No — financial planning is for everyone. We believe financial guidance should be accessible, regardless of income or net worth. We’ll meet you where you are and help you grow from there.",
        },
        {
          q: "How are you compensated for your services?",
          a: "We offer a variety of compensation models depending on your needs — including fee-based planning, commission-based solutions, and ongoing advisory services. We'll explain everything clearly before we begin.",
        },
        {
          q: "What’s the difference between a Financial Planner and an Investment Advisor?",
          a: "A financial planner helps you look at the full picture — budgeting, taxes, retirement, insurance, estate planning and more. An investment advisor typically focuses only on managing your investments. At SelasSecure Financial, we offer both services, integrated into a comprehensive plan.",
        },
        {
          q: "How often will we meet to review my plan?",
          a: "We typically review your plan annually, or more often if your circumstances change. We are also available any time for questions or concerns.",
        },
        {
          q: "Can you work with my accountant or lawyer?",
          a: "Yes! Collaboration is key. We often work with your existing team of professionals to ensure your financial, tax, and legal strategies are aligned.",
        },
        {
          q: "What if my financial situation changes?",
          a: "Life happens — and we’re here to help you adapt. Your financial plan is a living document, and we update it as your needs and goals evolve.",
        },
      ],
    },
    {
      name: "Working With SelasSecure Financial",
      items: [
        {
          q: "What’s your process for new clients?",
          a: "We start with a free discovery meeting to understand your goals. From there, we gather your financial details, peer-review assumptions within our board of advisors, and create a personalized financial plan. If you choose to move forward, we implement and monitor your plan together.",
        },
        {
          q: "Is the first meeting really free?",
          a: "Yes! There’s no cost or obligation for our initial consultation. It’s a chance for you to ask questions and decide if we are the right fit for you.",
        },
        {
          q: "Do you offer virtual appointments?",
          a: "Yes. We work with clients across Alberta and BC virtually via Zoom, and in-person across Calgary, Okotoks, Airdrie, and High River.",
        },
        {
          q: "What makes SelasSecure Financial different from other firms?",
          a: "We combine planning expertise with empathy and a collaborative advisory review. Before your plan is presented, we remove private identifying variables and pressure-test the strategy with our broader team to identify hidden options and tax cuts.",
        },
        {
          q: "How do I get started?",
          a: (
            <>
              &quot;Simply book your free introductory call or reach out via our
              <Link
                href="/contact"
                className="text-brand-blue font-semibold hover:undeline"
              >
                {" "}
                contact form
              </Link>
              . We would love to help you begin your journey with clarity and
              confidence.&quot;,
            </>
          ),
        },
      ],
    },
  ];

  const toggleOpen = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <>
      <Header />

      <main className="flex-grow bg-slate-50/50">
        {/* Page Header */}
        <section className="bg-brand-blue text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-lightblue/10 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <h1 className="text-3xl font-bold md:text-5xl font-serif">
              Frequently Asked Questions
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Find quick answers to common questions about personal planning,
              comprehensive planning, custom group benefits for employees and
              other personal, family, and corporate financial strategies and our
              collaborative advisory services.
            </p>

            {/* Search Input */}
            <div className="relative max-w-md mx-auto mt-6">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-white border border-slate-200 pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-lightblue focus:border-transparent text-sm placeholder-slate-400"
              />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {categories.map((cat, catIdx) => {
                // Filter items based on search query
                const filteredItems = cat.items.filter(
                  (item) =>
                    item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.a.toLowerCase().includes(searchQuery.toLowerCase()),
                );

                if (filteredItems.length === 0) return null;

                return (
                  <div key={cat.name} className="space-y-6">
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-brand-blue border-b border-slate-200 pb-3">
                      {cat.name}
                    </h2>

                    <div className="space-y-4">
                      {filteredItems.map((item, itemIdx) => {
                        const uniqueId = `${catIdx}-${itemIdx}`;
                        const isOpen = openIndex === uniqueId;
                        return (
                          <div
                            key={item.q}
                            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:border-slate-200 transition-colors"
                          >
                            <button
                              onClick={() => toggleOpen(uniqueId)}
                              className="flex w-full items-center justify-between p-5 text-left font-bold text-slate-800 focus:outline-none hover:text-brand-blue transition-colors text-sm md:text-base"
                            >
                              <span className="pr-4">{item.q}</span>
                              {isOpen ? (
                                <Minus className="h-5 w-5 text-brand-green shrink-0" />
                              ) : (
                                <Plus className="h-5 w-5 text-brand-lightblue shrink-0" />
                              )}
                            </button>

                            {/* Accordion Expansion */}
                            {isOpen && (
                              <div className="px-5 pb-6 text-xs md:text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-4 bg-slate-50/30 animate-in fade-in duration-300">
                                {item.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-slate-100 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
              Still Have Questions?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
              We are ready to help you. Book a session or drop us a message via
              our contact form.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/book-now"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-[#0e487d] px-6 py-3 font-bold text-white shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book a Call
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200 px-6 py-3 font-bold text-slate-700 hover:text-brand-blue transition-all"
              >
                Ask Us Directly
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
