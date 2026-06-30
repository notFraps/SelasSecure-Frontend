import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Headset } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="flex-grow bg-slate-50/50">
        {/* Page Header */}
        <section className="bg-brand-blue text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-lightblue/10 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <h1 className="text-3xl font-bold md:text-5xl font-serif">
              Contact Us
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We look forward to partnering with you on your financial journey.
              Drop us a message or request a consultation meeting.
            </p>
          </div>
        </section>

        {/* Contact Information & Form Layout */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Contact Coordinates */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-brand-blue">
                    SelaSecure Financial Contact Details
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    If you have questions about any of our services? Feel free
                    to contact us directly.
                  </p>
                </div>

                {/* Contact List Card */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted text-brand-green shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-slate-800">
                        Office Location
                      </p>
                      <p className="text-xs text-slate-500 leading-normal">
                        Centerpointe Financial Centre, <br />
                        84 Centerpointe Drive <br />
                        Ottawa, ON, K2G 6B1
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 border-t border-slate-50 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted text-brand-lightblue shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-slate-800">
                        Phone Number
                      </p>
                      <p className="text-xs text-slate-500 leading-normal">
                        +1 613 899 3398
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 border-t border-slate-50 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted text-brand-green shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-slate-800">
                        Email Addresses
                      </p>
                      <p className="text-xs text-slate-500">
                        info@selasecurefinancial.com
                      </p>
                      <p className="text-xs text-slate-500">
                        enquiries@selasecurefinancial.com
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 border-t border-slate-50 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted text-brand-lightblue shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-slate-800">
                        Business Hours
                      </p>
                      <p className="text-xs text-slate-500">
                        Monday – Friday: 9:00 AM – 5:00 PM (ET)
                      </p>
                      <p className="text-xs text-slate-500">
                        Weekend consultations available on request
                      </p>
                    </div>
                  </div>
                </div>

                {/* Virtual Consult Disclosure */}
                <Link href="/book-now">
                  <div className="rounded-2xl bg-brand-muted p-5 border border-brand-lightblue/20 flex gap-4">
                    <Headset className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />

                    <div className="space-y-1">
                      <h2 className="text-lg font-bold text-brand-blue uppercase tracking-wider">
                        Book Free Consultation
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
