"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Financial Planning",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const services = [
    "Personal Financial Planning",
    "Family Financial Planning",
    "Corporate Financial Planning",
    "Estate Planning",
    "RRSP TFSA & FHSA Optimization",
    "Group Benefits",
    "Health Insurance Planning",
    "Life Insurance Planning",
    "Mortgage Referral",
    "Debt Restructuring Referrals",
    "Other Financial Services",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaChecked) {
      alert("Please confirm you are not a robot.");
      return;
    }

    setStatus("submitting");

    try {
      // Simulate server side submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "General Financial Planning",
        message: "",
      });
      setCaptchaChecked(false);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-8 md:p-12 shadow-lg border border-slate-100 text-center animate-in zoom-in-95 duration-300">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-muted text-brand-green mb-6">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-bold text-brand-blue font-serif">
          Message Sent Successfully!
        </h3>
        <p className="text-sm text-slate-500 mt-3 max-w-sm leading-relaxed">
          Thank you for reaching out to SelasSecure Financial. A representative
          from our team will get in touch with you within 24 business hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-xl bg-brand-blue px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-[#0e487d] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-5 rounded-3xl bg-white p-8 md:p-10 shadow-lg border border-slate-100 transition-all duration-300"
    >
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-brand-lightblue focus:ring-1 focus:ring-brand-lightblue focus:outline-none transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-brand-lightblue focus:ring-1 focus:ring-brand-lightblue focus:outline-none transition-colors"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(123) 456-7890"
            value={formData.phone}
            onChange={handleChange}
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-brand-lightblue focus:ring-1 focus:ring-brand-lightblue focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="service"
          className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
        >
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-brand-lightblue focus:ring-1 focus:ring-brand-lightblue focus:outline-none bg-white transition-colors"
        >
          {services.map((svc) => (
            <option key={svc} value={svc}>
              {svc}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Briefly describe your financial planning needs..."
          value={formData.message}
          onChange={handleChange}
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-brand-lightblue focus:ring-1 focus:ring-brand-lightblue focus:outline-none transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3.5 text-xs font-medium text-red-700 border border-red-100">
          <AlertCircle className="w-4 h-4 shrink-0" />
          An error occurred. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#0e487d] disabled:bg-slate-400 hover:shadow-lg transition-all duration-200 active:scale-[0.99]"
      >
        {status === "submitting" ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
