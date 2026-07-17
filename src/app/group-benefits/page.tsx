import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Award,
  Heart,
  ShieldAlert,
  Award as DentalIcon,
  Percent,
  Clock,
  Briefcase,
  Calendar,
  ChevronRight,
} from "lucide-react";

export default function GroupBenefits() {
  const benefits = [
    {
      title: "Group Health Insurance",
      desc: "Employer-sponsored policy offering coverage for medical needs, prescriptions, and paramedical care for employees and their families as a major part of benefits packages.",
      icon: Heart,
    },
    {
      title: "Group Life Insurance",
      desc: "Term coverage for an entire group without individual proof of insurability. Underwritten based on size, turnover, and company financial strength.",
      icon: Award,
    },
    {
      title: "Group Disability Insurance",
      desc: "Regular income replacement payments in the event of disability from illness or injury. Offered as short-term (STD) and long-term (LTD) structures.",
      icon: ShieldAlert,
    },
    {
      title: "Group Dental & Vision Care",
      desc: "Key dental hygiene and paramedical vision care packages. Helps companies attract and retain high-quality talent through comprehensive care access.",
      icon: Award,
    },
  ];

  const rrsps = [
    {
      title: "Tax-Efficient Savings",
      desc: "Contributions are deducted directly from payroll pre-tax, delivering immediate income tax savings on every pay period.",
    },
    {
      title: "Employer Matching",
      desc: "Employers often match employee payroll contributions, effectively boosting employee savings and retirement assets compound speed.",
    },
    {
      title: "Convenience & Discipline",
      desc: "Automated payroll deductions keep savings consistent, allowing employees to benefit from dollar-cost averaging in fluctuating markets.",
    },
    {
      title: "Portability & Spousal Matching",
      desc: "When leaving the company, the funds are portable (transferred to personal RRSPs or cash-out options). Spousal matching options allow tax planning balance between partners.",
    },
  ];

  return (
    <>
      <Header />

      <main className="flex-grow bg-slate-50/50">
        {/* Page Header */}
        <section className="bg-brand-lightblue text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-lightblue/10 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <h1 className="text-3xl font-bold md:text-5xl font-serif">
              Group Benefits & RRSP
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Attract and retain top talent while supporting the well-being of
              your employees. We build customized group insurance and retirement
              matching solutions that fit your budget.
            </p>
          </div>
        </section>

        {/* What are Group Benefits */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              {/* <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
                What are Group Benefits?
              </h2> */}
              <p className="text-slate-655 text-sm leading-relaxed">
                Group benefits are employer-sponsored plans designed to support
                your employees' health, well-being, and financial security—while
                helping your business stand out in a competitive job market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 hover:shadow-md hover:bg-white hover:border-brand-lightblue/20 transition-all duration-300 flex items-start gap-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-muted text-brand-blue shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-brand-blue font-serif">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-550 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Group RRSPs */}
        <section className="py-20 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
                What is a Group RRSP?
              </h2>
              <p className="text-slate-655 text-sm leading-relaxed">
                Many employers include retirement savings options like a Group
                Registered Retirement Savings Plan (RRSP), which makes it easier
                for employees to save directly through automated payroll
                deductions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {rrsps.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 space-y-2.5 hover:shadow-md hover:border-brand-lightblue/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-brand-blue font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-slate-100 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
              Build a Healthier Workplace
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
              We design customized benefits packages based on company size,
              employee feedback, and budget parameters. Let's discuss your
              options.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/book-now"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-[#0e487d] px-6 py-3 font-bold text-white shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                Schedule Benefits Consultation
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
