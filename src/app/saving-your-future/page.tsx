"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, Calendar, ChevronRight, Mail } from "lucide-react";
import { useFirestoreSubmit } from "@/hooks/useFirestoreSubmit";

export default function SavingYourFuture() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bookType: "Ebook",
  });

  const { status, errorMessage, submit, reset } =
    useFirestoreSubmit("bookRequests");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await submit(formData, { source: "saving-your-future-page" });

    if (ok) {
      // Fire the automated email — don't block the success UI on this
      fetch("/api/send-book-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          bookType: formData.bookType,
        }),
      }).catch((err) => console.error("Email trigger failed:", err));

      setFormData({ name: "", email: "", phone: "", bookType: "Ebook" });
    }
  };

  return (
    <>
      <Header />

      <main className="flex-grow bg-slate-50/50">
        {/* Page Header */}
        <section className="bg-brand-lightblue text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-lightblue/10 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <h1 className="text-3xl font-bold md:text-5xl font-serif">
              SAVING YOUR FUTURE
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Thank you for your interest in a FREE COPY of the book titled
              &quot;Saving Your Future.&quot; Fill out the form below to receive
              your copy via email, and if you&apos;d like a paperback version,
              we&apos;ll send you instructions on how to get it in Ottawa.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {status === "success" ? (
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-muted text-brand-green mx-auto mb-6">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-brand-blue font-serif">
                  Request Received!
                </h2>
                <p className="text-sm text-slate-500 mt-3 max-w-sm mx-auto leading-relaxed">
                  Thank you for requesting your copy of Saving Your Future.
                  We&apos;ll be in touch by email shortly with next steps.
                </p>
                <button
                  onClick={reset}
                  className="mt-8 rounded-xl bg-brand-blue px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-[#0e487d] transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(123) 456-7890"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Type of Book
                  </label>
                  <select
                    name="bookType"
                    value={formData.bookType}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm bg-white"
                  >
                    <option value="Ebook">Ebook</option>
                    <option value="Paperback">Paperback</option>
                  </select>
                </div>

                {status === "error" && (
                  <p className="text-sm font-medium text-red-600">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-brand-blue text-white font-semibold py-2.5 px-4 rounded-md hover:bg-[#0e487d] disabled:bg-slate-400 transition-colors"
                >
                  {status === "submitting" ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-slate-100 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
              Ready for the Next Step?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
              Beyond the book, our team is here to help you put these ideas into
              action with a personalized financial plan.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/book-now"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-[#0e487d] px-6 py-3 font-bold text-white shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book Free Consultation
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
