import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Heart, Activity, Check, ShieldAlert, Award, Calendar, ChevronRight } from "lucide-react";

export default function HealthPlans() {
  const employeeBenefits = [
    "Employees can get coverage at a reduced cost compared to most personal plans.",
    "Help protect your employees and their family members.",
    "Help reduce financial stress and out-of-pocket costs associated with medical, dental, and vision needs.",
  ];

  const companyBenefits = [
    "Attract desirable candidates and retain key employees in a competitive job market.",
    "Premiums paid on group health benefits can be fully written off as a business expense.",
    "Maintain a competitive edge and stand out against your direct competitors.",
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
              Health Plans
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Comprehensive health coverage solutions designed to support your employees and optimize your corporate structure.
            </p>
          </div>
        </section>

        {/* What is a Group Benefits Health Plan */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
                  What is a Group Benefits Health Plan?
                </h2>
                <div className="space-y-4 text-slate-650 text-sm leading-relaxed">
                  <p>
                    The job market is highly competitive, and employers need to do everything they can to stand out. A group benefits plan is a primary way to separate your business from the competition.
                  </p>
                  <p>
                    It helps your employees cover healthcare costs that provincial healthcare (like AHCIP or MSP) does not cover, including prescription drugs, paramedical therapies, dental cleaning, vision care, and medical travel.
                  </p>
                  <p>
                    A group benefits plan can also be combined with a retirement savings plan to help your employees secure their health and reach their financial goals sooner.
                  </p>
                </div>
              </div>

              {/* Icon grid banner */}
              <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100 flex flex-col justify-between shadow-inner space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-muted text-brand-blue">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-serif text-brand-blue">
                  Empowering Workplace Health
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  SelasSecure Financial partners with Canada's top underwriters to structure custom plans. We offer flexible parameters so you pay only for what your staff needs, avoiding waste.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Employees vs Company */}
        <section className="py-20 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Left: Employees */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 space-y-6">
                <h3 className="text-xl font-bold text-brand-blue font-serif flex items-center gap-2">
                  <Activity className="w-5 h-5 text-brand-green" />
                  Benefits for Your Employees
                </h3>
                <ul className="space-y-4 text-sm text-slate-600">
                  {employeeBenefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-muted text-brand-green shrink-0 mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Company */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 space-y-6">
                <h3 className="text-xl font-bold text-brand-blue font-serif flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-lightblue" />
                  Benefits for Your Company
                </h3>
                <ul className="space-y-4 text-sm text-slate-600">
                  {companyBenefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-muted text-brand-blue shrink-0 mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-slate-100 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
              Elevate Your Employee Strategy
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
              Ready to learn more? Book your free introductory call or reach out via our contact page. We would love to help you build confidence in your team's health plans.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/book-now"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-[#0e487d] px-6 py-3 font-bold text-white shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                Schedule Intro Call
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200 px-6 py-3 font-bold text-slate-700 hover:text-brand-blue transition-all"
              >
                Contact Form
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
