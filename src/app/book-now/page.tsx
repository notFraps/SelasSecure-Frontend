"use client";

import { InlineWidget } from "react-calendly";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Laptop, MapPin } from "lucide-react";

export default function BookNow() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-slate-50/50">
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
          {/* Consultation Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold font-serif text-brand-blue leading-tight md:text-4xl">
              Book an Appointment
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              For individuals, families, and businesses alike, our commitment is
              simple: helping you achieve financial security today while
              creating generational wealth for tomorrow. Through bespoke
              financial, investment, insurance, and business planning
              strategies, we help you build, protect, and grow what matters
              most. Contact us today and let&apos;s build a strategy that&apos;s
              as unique as your vision for the future.
            </p>

            {/* Virtual Consultation */}
            <div className="flex gap-3 pt-4 border-t border-slate-100">
              <Laptop className="w-5 h-5 text-brand-lightblue shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                  Virtual Consultation
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Available for clients residing in Canada and the USA.
                </p>
              </div>
            </div>

            {/* In-Person Consultation */}
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                  In-Person Consultation
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Available for clients in Ottawa and environs at our physical
                  office spaces. Other physical locations will be updated.
                </p>
              </div>
            </div>
          </div>

          {/* Calendly Inline Widget */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-150">
            <InlineWidget url="https://calendly.com/owolama-selasecurefinancial" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
