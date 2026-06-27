"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function FAQ() {
  
  return (
    <>
      <Header />

      <main className="flex-grow bg-slate-50/50">
        {/* Page Header */}
        <section className="bg-brand-lightblue text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-lightblue/10 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <h1 className="text-3xl font-bold md:text-5xl font-serif">
              Our Mission
            </h1>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-slate-100 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl shadow-md rounded-lg leading-loose md:text-3xl font-bold font-serif text-brand-blue">
              Our mission is to deliver personalized financial solutions that
              empower our clients to build wealth and preserve legacies for
              future generations with clarity, confidence, and long-term
              financial security.
            </h2>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
