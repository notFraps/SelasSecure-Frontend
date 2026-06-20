"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle,
  Info,
  ChevronRight,
  Laptop,
  MapPin,
} from "lucide-react";

export default function BookNow() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    meetingType: "Virtual (Zoom Call)",
  });

  // Simple next 7 days scheduler helper (excluding weekends)
  const days = [
    { dayName: "Monday", dateNum: 15, month: "Jun" },
    { dayName: "Tuesday", dateNum: 16, month: "Jun" },
    { dayName: "Wednesday", dateNum: 17, month: "Jun" },
    { dayName: "Thursday", dateNum: 18, month: "Jun" },
    { dayName: "Friday", dateNum: 19, month: "Jun" },
    { dayName: "Monday", dateNum: 22, month: "Jun" },
  ];

  const slots = [
    "9:00 AM - 9:45 AM",
    "10:30 AM - 11:15 AM",
    "1:00 PM - 1:45 PM",
    "2:30 PM - 3:15 PM",
    "4:00 PM - 4:45 PM",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDay !== null && selectedTime) {
      setBooked(true);
    }
  };

  const selectedDayObj = selectedDay !== null ? days[selectedDay] : null;

  return (
    <>
      <Header />

      <main className="flex-grow bg-slate-50/50">
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Intro */}
            <div className="lg:col-span-5 space-y-6">
              <h1 className="text-3xl font-bold font-serif text-brand-blue leading-tight md:text-4xl">
                Book an Appointment
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed">
                For individuals, families, and businesses alike, our commitment
                is simple: helping you achieve financial security today while
                creating generational wealth for tomorrow. Through bespoke
                financial, investment, insurance, and business planning
                strategies, we help you build, protect, and grow what matters
                most. Contact us today and let&apos;s build a strategy
                that&apos;s as unique as your vision for the future.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex gap-3">
                  <Laptop className="w-5 h-5 text-brand-lightblue shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                      Virtual Consults
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Available for clients residing in Canada and the US.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                      In-Person Consultation
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Available for clients in Ottawa and environs at our
                      physical office spaces. Other physical locations will be
                      updated.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Calendar Widget */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-150">
              {booked ? (
                <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="mx-auto h-16 w-16 bg-brand-muted text-brand-green rounded-full flex items-center justify-center">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h2 className="text-2xl font-bold font-serif text-brand-blue">
                    Consultation Booked!
                  </h2>
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-xs text-slate-600 space-y-2 max-w-sm mx-auto">
                    <p>
                      <strong>Meeting Type:</strong> {formData.meetingType}
                    </p>
                    <p>
                      <strong>Date:</strong> {selectedDayObj?.dayName},{" "}
                      {selectedDayObj?.month} {selectedDayObj?.dateNum}
                    </p>
                    <p>
                      <strong>Time:</strong> {selectedTime}
                    </p>
                    <p>
                      <strong>Contact:</strong> {formData.name} (
                      {formData.phone})
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal max-w-xs mx-auto">
                    A confirmation email and a calendar invite with Zoom links
                    has been sent. Our team looks forward to meeting you!
                  </p>
                  <button
                    onClick={() => {
                      setBooked(false);
                      setSelectedDay(null);
                      setSelectedTime(null);
                    }}
                    className="mt-6 rounded-xl bg-brand-blue px-6 py-2.5 text-xs font-bold text-white hover:bg-[#0e487d] transition-colors"
                  >
                    Schedule Another Meeting
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBook} className="space-y-6">
                  {/* Step 1: Select Day */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <CalendarIcon className="w-4 h-4 text-brand-lightblue" />
                      1. Select a Day
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {days.map((d, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setSelectedDay(index);
                            setSelectedTime(null);
                          }}
                          className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all text-center focus:outline-none ${
                            selectedDay === index
                              ? "bg-brand-blue border-brand-blue text-white shadow-md shadow-brand-blue/15"
                              : "bg-slate-50 border-slate-200 text-slate-800 hover:border-brand-lightblue hover:bg-white"
                          }`}
                        >
                          <span className="text-[10px] uppercase font-bold tracking-wider opacity-85">
                            {d.month}
                          </span>
                          <span className="text-lg font-extrabold font-serif my-0.5 leading-none">
                            {d.dateNum}
                          </span>
                          <span className="text-[9px] font-semibold opacity-70">
                            {d.dayName.slice(0, 3)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Select Time */}
                  {selectedDay !== null && (
                    <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-brand-green" />
                        2. Choose Available Time
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {slots.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            className={`rounded-xl px-4 py-2.5 text-xs font-semibold border transition-all ${
                              selectedTime === t
                                ? "bg-brand-green border-brand-green text-white shadow-md"
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:border-brand-green"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Meeting Information */}
                  {selectedTime && (
                    <div className="space-y-4 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-3 duration-300">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                        <Info className="w-4 h-4 text-brand-lightblue" />
                        3. Fill Meeting Details
                      </label>

                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-brand-lightblue focus:ring-1 focus:ring-brand-lightblue focus:outline-none bg-slate-50/50"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-brand-lightblue focus:ring-1 focus:ring-brand-lightblue focus:outline-none bg-slate-50/50"
                        />
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-brand-lightblue focus:ring-1 focus:ring-brand-lightblue focus:outline-none bg-slate-50/50"
                        />
                      </div>

                      <div className="flex flex-col">
                        <select
                          name="meetingType"
                          value={formData.meetingType}
                          onChange={handleInputChange}
                          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-brand-lightblue focus:ring-1 focus:ring-brand-lightblue focus:outline-none bg-slate-50/50"
                        >
                          <option>Virtual (Zoom Call)</option>
                          <option>In-Person (Calgary Office)</option>
                          <option>Phone Call</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#0e487d] transition-all"
                      >
                        Confirm Booking
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
