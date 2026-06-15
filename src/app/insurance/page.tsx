import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Heart, AlertOctagon, Plane, Activity, ShieldAlert, Award, Calendar, ChevronRight } from "lucide-react";

export default function InsurancePlanning() {
  const insurances = [
    {
      title: "Life Insurance",
      desc: "Life Insurance is not complicated or expensive when you work with the right representative. We explore term, whole-life, and universal structures to protect your family and offset tax liabilities.",
      icon: Heart,
    },
    {
      title: "Disability Insurance",
      desc: "Did you know that 1 in 3 people will become disabled at some point before retirement? It only takes a few minutes to protect your lifestyle, salary flow, and future earnings.",
      icon: ShieldAlert,
    },
    {
      title: "Critical Illness Insurance",
      desc: "Anyone diagnosed with a critical illness will tell you it can be as difficult financially as it is emotionally. Ensure your family has tax-free cash reserves in the event of an illness.",
      icon: AlertOctagon,
    },
    {
      title: "Health Insurance",
      desc: "Having the proper health insurance coverage can literally be a matter of life or death. We make sure your family is properly covered with health premiums you can comfortably afford.",
      icon: Activity,
    },
    {
      title: "Travel Insurance",
      desc: "Travel insurance helps cover unexpected issues like medical emergencies, trip cancellations, and lost baggage—whether you are exploring locally or venturing abroad.",
      icon: Plane,
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
              Insurance Planning
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Protecting your loved ones, lifestyle, and business assets. We offer certified advice across multiple top-tier carriers to find the coverage that fits your life.
            </p>
          </div>
        </section>

        {/* Insurance Offerings Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insurances.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md hover:border-brand-lightblue/20 transition-all duration-300 group"
                  >
                    <div className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-muted text-brand-blue">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-blue font-serif">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-505 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-50">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-green group-hover:text-brand-blue transition-colors"
                      >
                        Request Quote
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}

              {/* Carrier Information Box */}
              <div className="bg-brand-blue text-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-green">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">
                    Insurance Carriers
                  </h3>
                  <p className="text-xs text-slate-350 leading-relaxed">
                    We believe in providing top-notch insurance products and services. That requires working with the best financial institutions in today’s market. We compare options across Canada's largest insurers to secure you the best premiums.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-green hover:underline"
                  >
                    View Partners Info
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Quote Callout Banner */}
        <section className="py-16 bg-white border-t border-slate-100 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
              Need a Custom Insurance Quote?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
              Our specialists will help analyze your existing policies and source new options with no pressure.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/book-now"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-[#0e487d] px-6 py-3 font-bold text-white shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                Schedule Quick Consult
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200 px-6 py-3 font-bold text-slate-700 hover:text-brand-blue transition-all"
              >
                Request Quote Form
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
