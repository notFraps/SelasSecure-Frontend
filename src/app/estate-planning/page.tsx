import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Briefcase, Landmark, ShieldCheck, Scale, Check, Calendar, ChevronRight } from "lucide-react";

export default function EstatePlanning() {
  const roles = [
    "Identify efficient strategies for transferring wealth to minimize estate taxes and probate costs.",
    "Ensure account information and beneficiary designations are up to date.",
    "Integrate your estate plan with your overall financial plan.",
    "Align your investments and insurance with your legacy goals.",
    "Coordinate with your Will, Power of Attorney, and other legal documents.",
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
              Estate Planning
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Preserve your wealth, minimize taxes, and secure your family's
              legacy with proactive, strategic planning.
            </p>
          </div>
        </section>

        {/* Why You Need an Estate Plan */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
                  Why You Need an Estate Plan
                </h2>
                <p className="text-slate-650 text-sm leading-relaxed">
                  Without a structured plan in place, important inheritance
                  decisions can be left in the hands of the courts, creating
                  unnecessary delays, high probate fees, and emotional stress
                  for your family.
                </p>
                <p className="text-slate-650 text-sm leading-relaxed">
                  A well-structured estate plan ensures your assets are
                  distributed exactly according to your wishes, your
                  beneficiaries are protected, and your accumulated wealth is
                  transferred in the most tax-efficient way possible.
                </p>
              </div>

              {/* Graphic/Icon card representing protection */}
              <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100 flex flex-col justify-between shadow-inner">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-muted text-brand-green mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-serif text-brand-blue">
                  Protecting What Matters
                </h3>
                <p className="text-xs text-slate-500 leading-normal mt-2">
                  Estate planning is about more than money—it is about providing
                  peace of mind to your loved ones and ensuring your life's work
                  is secured for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Role in Estate Planning */}
        <section className="py-20 border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
                Our Role in Your Estate Plan
              </h2>
              <p className="text-sm text-slate-500 max-w-lg mx-auto">
                While we do not draft Wills or Powers of Attorney ourselves, we
                play a key role in aligning your financial assets with your
                legal documents.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 space-y-6">
              <p className="text-sm text-slate-700 font-semibold">
                We work collaboratively with your legal and tax professionals
                to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roles.map((role, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-white shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-medium">
                      {role}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 border-t border-slate-50 pt-4 mt-4 leading-relaxed flex items-center gap-2">
                <Scale className="w-4 h-4 text-brand-lightblue shrink-0" />
                Note: Legal documents (Wills, Power of Attorney) must be drafted
                by a qualified legal professional. We align your accounts and
                insurance policies to support those documents.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-slate-100 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
              Preserve Your Legacy Today
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
              Ready to start your estate planning journey? Reach out for a
              no-obligation consultation. Let's build a plan that protects what
              matters most.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/book-now"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-[#0e487d] px-6 py-3 font-bold text-white shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book Consult Session
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
