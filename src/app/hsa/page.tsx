import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Activity, ShieldCheck, Landmark, CheckCircle, Percent, Calendar, ChevronRight } from "lucide-react";

export default function HealthSpendingAccounts() {
  const points = [
    {
      title: "100% Business Write-Off",
      desc: "Under CRA guidelines, corporations can write off 100% of all expenses and administration costs related to the Health Spending Account as a business deduction.",
    },
    {
      title: "Tax-Free to Employees",
      desc: "All health, dental, and vision reimbursements received by the employees (and their eligible family members) are completely tax-free.",
    },
    {
      title: "Traditional Plan Alternative",
      desc: "Ideal for small incorporated businesses or sole proprietors with arms-length employees who cannot qualify for or afford traditional insured group plans.",
    },
    {
      title: "Traditional Plan Complement",
      desc: "Can be used as a 'carve-out' strategy alongside existing group plans to cover high-cost, infrequently used benefits like orthodontics, laser eye surgery, or premium vision care.",
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
              Health Spending Accounts (HSA)
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Put more control in your hands with a flexible, digital HSA that fits your company's lifestyle and delivers massive tax savings.
            </p>
          </div>
        </section>

        {/* Core Content */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
                  Flexible and Digital Health Spending
                </h2>
                <div className="space-y-4 text-slate-650 text-sm leading-relaxed">
                  <p>
                    An HSA (classified by the Canada Revenue Agency as a Private Health Services Plan) is an approved method to provide dental, medical, and vision benefits in a highly tax-efficient manner.
                  </p>
                  <p>
                    Rather than paying monthly premiums for coverages your staff may never use, you allocate a set spending limit per employee class. The employee incurs eligible expenses, submits the receipt digitally, and receives a 100% tax-free reimbursement while your corporation writes off the cost.
                  </p>
                </div>
              </div>

              {/* CRA badge representation */}
              <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100 flex flex-col justify-between shadow-inner space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-muted text-brand-green">
                  <Landmark className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-serif text-brand-blue">
                  CRA Approved Strategy
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  SelasSecure Financial configures Health Spending Accounts strictly in alignment with Canada Revenue Agency guidelines. Eligible expenses cover all standard medical practitioner services, dental treatments, vision prescriptions, and private therapy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
                Key Advantages of an HSA
              </h2>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Explore why business owners choose Health Spending Accounts over or alongside traditional health policies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {points.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 space-y-3 hover:shadow-md hover:border-brand-lightblue/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                    <h3 className="text-lg font-bold text-brand-blue font-serif">
                      {item.title}
                    </h3>
                  </div>
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
              Start Saving on Corporate Health Costs
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
              Our specialists will help set up your HSA structure, define employee categories, and launch your digital submissions portal.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/book-now"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-[#0e487d] px-6 py-3 font-bold text-white shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book HSA Consultation
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
