"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function DebtRestructuringReferral() {
  const [formData, setFormData] = useState({
    fullName: "",
    streetAddress: "",
    city: "",
    province: "",
    postalCode: "",
    phone: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! We’ll reach out soon.");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-brand-blue mb-6 font-serif">
            Debt Restructuring Referral
          </h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We work with Debt Restructuring agencies and trustees to ensure you
            get a dignified treatment throughout the process.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm"
              />
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Street Address
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm"
              />
            </div>

            {/* Province */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Province
              </label>
              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm"
              >
                <option value="">Select Province</option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="MB">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NS">Nova Scotia</option>
                <option value="ON">Ontario</option>
                <option value="PE">Prince Edward Island</option>
                <option value="QC">Quebec</option>
                <option value="SK">Saskatchewan</option>
                <option value="NT">Northwest Territories</option>
                <option value="NU">Nunavut</option>
                <option value="YT">Yukon</option>
              </select>
            </div>

            {/* Postal Code */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
                placeholder="e.g. M5V 3L9"
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm"
              />
            </div>

            {/* Phone */}
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
                placeholder="e.g. (123) 456-7890"
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm"
              />
            </div>

            {/* Email */}
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
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-brand-blue text-white font-semibold py-2 px-4 rounded-md hover:bg-[#0e487d] transition-colors"
            >
              Submit For Referral
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
