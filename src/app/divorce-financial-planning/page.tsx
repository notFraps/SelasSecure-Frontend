import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldAlert, Users, Landmark, Scale, Heart, Calendar, ChevronRight, Check } from "lucide-react";

export default function DivorceFinancialPlanning() {
  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      desc: "We begin with a free, completely confidential consultation to discuss your situation, understand your immediate concerns, and map out where we can help. There is zero pressure; it is simply a conversation to help bring structure to a difficult situation.",
    },
    {
      step: "2",
      title: "Gathering Financial Information",
      desc: "We assist you in collecting and organizing the necessary financial documents—bank statements, property valuations, pension appraisals, liabilities, and investment portfolios. Organizing this early creates a clear marital net worth statement and simplifies legal disclosure requirements.",
    },
    {
      step: "3",
      title: "Analysis & Strategy Development",
      desc: "Using specialized financial modeling, we project the long-term impact of proposed asset divisions. We analyze whether keeping the matrimonial home is financially viable, review tax implications of retirement account transfers, determine support payments, and uncover potential hidden costs.",
    },
    {
      step: "4",
      title: "Supporting Your Legal Team",
      desc: "We work collaboratively alongside your mediator or family lawyer. By providing solid, bulletproof numbers and litigation support, we help protect your interests. While we do not provide legal advice, we ensure your legal team has a clear financial map to work with.",
    },
    {
      step: "5",
      title: "Life After Divorce: Planning Your Future",
      desc: "Once the settlement is finalized, we help you transition. We construct a new single-household budget, update retirement goals, manage investments, restructure insurance coverage, update estate beneficiary designations, and assist in rebuilding or maintaining your credit.",
    },
  ];

  return (
    <>
      <Header />
      
      <main className="flex-grow bg-slate-50/50">
        {/* Page Header */}
        <section className="bg-brand-blue text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-lightblue/10 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <h1 className="text-3xl font-bold md:text-5xl font-serif">
              Divorce Financial Planning
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Divorce can be emotionally and financially overwhelming. We guide you through the asset division and budgeting complexities with empathy, clarity, and certified expertise.
            </p>
          </div>
        </section>

        {/* CFDS Specialist Callout */}
        <section className="py-12 bg-brand-muted border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-brand-lightblue/20 flex flex-col md:flex-row items-center gap-6">
              <div className="h-14 w-14 rounded-full bg-brand-blue flex items-center justify-center text-white shrink-0">
                <Landmark className="h-7 w-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-brand-blue font-serif">
                  What is a Chartered Financial Divorce Specialist (CFDS)?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A CFDS is a financial professional specifically trained to analyze the tax, investment, retirement, and cash flow aspects of marital dissolution. Our founder, **Trisha Argotoff**, holds the CFDS credential and works with clients to project short- and long-term financial impacts of settlements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Roadmap */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
                Our Divorce Planning Process
              </h2>
              <p className="text-sm text-slate-500">
                A structured, empathetic method to guide you from initial concerns to long-term post-divorce stability.
              </p>
            </div>

            <div className="space-y-6">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-brand-green font-serif shrink-0">
                    #{item.step}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-brand-blue font-serif">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it Matters Section */}
        <section className="py-20 bg-white border-t border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-serif text-brand-blue">
                  Why It Matters
                </h2>
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  <p>
                    Divorce lawyers focus on legal rights, custody arrangements, and statutory calculations. We complement their work by focusing directly on your **financial life**—both now and in the years to come.
                  </p>
                  <p>
                    A settlement that looks balanced on paper today might become financially unsustainable five years down the road due to tax implications, cost-of-living adjustments, or asset liquidation penalties. We build long-term projections to prevent costly settlement mistakes.
                  </p>
                </div>
              </div>

              {/* Comparison Box */}
              <div className="rounded-3xl bg-slate-50 p-8 border border-slate-150 space-y-5 shadow-inner">
                <h3 className="text-lg font-bold font-serif text-brand-blue flex items-center gap-2">
                  <Scale className="w-5 h-5 text-brand-green" />
                  Divorce Lawyer vs. CFDS
                </h3>
                <div className="space-y-3.5">
                  <div className="flex items-start gap-2.5">
                    <div className="h-5 w-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">L</div>
                    <p className="text-xs text-slate-600 leading-normal">
                      <strong>Divorce Lawyer:</strong> Guides legal options, files court forms, represents you in hearings, draft separation agreements.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-5 w-5 rounded-full bg-brand-muted text-brand-blue flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">F</div>
                    <p className="text-xs text-slate-600 leading-normal">
                      <strong>CFDS Advisor:</strong> Analyzes tax on asset division, maps property cash-flow viability, drafts net worth portfolios, guides post-divorce personal budgeting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
              Take Your First Step With Clarity
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
              Our initial divorce financial consultation is completely confidential. We are here to listen and help you understand your options.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/book-now"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-[#0e487d] px-6 py-3 font-bold text-white shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book Confidential Session
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 rounded-xl bg-white border border-slate-200 px-6 py-3 font-bold text-slate-700 hover:text-brand-blue transition-all"
              >
                Reach Out via Form
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
