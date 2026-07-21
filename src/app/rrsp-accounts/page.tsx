import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Calendar,
  ChevronRight,
  GraduationCap,
  PiggyBank,
  Wallet,
  Home,
} from "lucide-react";

export default function RrspAccounts() {
  const benefits = [
    {
      title: "Registered Education Savings Plan Optimization (RESP)",
      desc: [
        "A Registered Education Savings Plan (RESP) is a smart way to save for your child's future while making the most of special government grants and incentives. The earlier you start, the more time your savings have to grow and help cover the cost of post-secondary education.",
        "At SELASECURE FINANCIAL, we work with you to create a savings plan that fits your family's goals and helps your child's education fund grow over time. We guide you every step of the way, making the process simple, clear, and stress-free. Together, we can help give your child more opportunities and a stronger financial start for the future.",
      ],
      icon: GraduationCap,
    },
    {
      title: "Registered Retirement Savings Plan (RRSP)",
      desc: [
        "A Registered Retirement Savings Plan (RRSP) is a powerful way to save for retirement while enjoying valuable tax advantages. ",
        "At SELASECURE FINANCIAL, we go beyond simply helping you save—we optimize your investments so your money has the greatest opportunity to grow over time. We build a personalized RRSP strategy that matches your goals, risk comfort, and retirement timeline, ensuring your investments are working as efficiently as possible. As your needs change, we continue to review and adjust your plan to keep you on track. With the right strategy, you can maximize your retirement savings, build lasting wealth, and look forward to the future with confidence.",
      ],
      icon: PiggyBank,
    },
    {
      title: "Tax-Free Savings Account (TFSA)",
      desc: [
        "A Tax-Free Savings Account (TFSA) is a flexible way to grow your wealth while keeping more of your money working for you.",
        "At SELASECURE FINANCIAL, we help you make the most of your TFSA by choosing investment strategies that support your goals and give your savings the opportunity to grow. Whether you are saving for a major purchase, building financial security, or planning for the future, we create a personalized approach that fits your needs. We regularly review your plan to ensure it continues to align with your goals as your financial journey changes. With the right guidiance, your TFSA can become a powerful tool to grow your wealth and achieve greater financial confidence.",
      ],
      icon: Wallet,
    },
    {
      title: "First Home Savings Account (FHSA)",
      desc: [
        "A First Home Savings Account (FHSA) is a powerful way to help turn your dream of owning a home into a reality while making your savings work harder for you.",
        "At SELASECURE FINANCIAL, we help you create a personalized FHSA strategy designed to grow your savings and keep you on track toward your homeownership goals. Whether you are just starting to save or already have a plan in place, we provide guidance to help you make smart decisions along the way. We regularly review your strategy to ensure it continues to support your timeline and financial goals. With the right approach, your FHSA can help you take a major step toward owning your first home with greater confidence and peace of mind.",
      ],
      icon: Home,
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
              Registered Account Investment Optimization
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
                      <div className="space-y-2 text-xs md:text-sm text-slate-550 leading-relaxed">
                        {item.desc.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
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
