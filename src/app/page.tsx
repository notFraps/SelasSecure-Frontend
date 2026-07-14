import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ContactForm from "@/components/ContactForm";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Calendar,
  MapPin,
  Laptop,
} from "lucide-react";

export default function Home() {
  const steps = [
    {
      num: "1",
      title: "Step 1: Let's Chat",
      desc: "A 30-minute, no-pressure, virtual conversation to understand your needs, build trust, and confirm if we can work together.",
    },
    {
      num: "2",
      title: "Step 2: Let's Discuss",
      desc: "We collect the details needed to build your finaincial plan. This includes information about your financial goals and priorities, income, debts, investments and current insurance coverage.",
    },
    {
      num: "3",
      title: "Step 3: Let's Strategize",
      desc: "We collaborate with you to build your bespoke financial plan and strategies inline with our core mandate (Secure, Generatoinal, Wealth).",
    },
    {
      num: "4",
      title: "Step 4: Let's Take Action",
      desc: "We work together to implement all the financial plan and strategies that we developed in partnership with you (setting up accounts, coordinating transfers, and other compliance documentation).",
    },
    {
      num: "5",
      title: "Step 5: Let's Catch-up",
      desc: "We meet at regular intervals (monthly, quarterly, annually), to review your financial plan, make adjustments as needed, and ensure you stay on track to meet your goals.",
    },
  ];

  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 md:py-32">
          {/* Subtle Decorative Background Blobs */}
          <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-brand-muted opacity-60 blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-slate-100 opacity-60 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-12 lg:items-center">
              {/* Hero Left Content */}
              <div className="space-y-6 lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-1.5 text-sm font-semibold text-brand-blue border border-brand-lightblue/20">
                  <Shield className="w-4 h-4 text-brand-green" />
                  Your Trusted Financial Professionals
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-serif text-brand-blue leading-[1.1]">
                  Financial Planning <br />
                  and Advice in <br />
                  <span className="text-gradient">Canada and the USA</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                  We guide individuals, families, and business owners through
                  comprehensive planning, custom group benefits for employees
                  and other personal, family, and corporate financial
                  strategies.
                </p>
                <div className="flex flex-wrap gap-4 pt-3">
                  <Link
                    href="/book-now"
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-[#0e487d] px-7 py-4 font-bold text-white shadow-lg hover:shadow-brand-blue/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Free Consultation
                  </Link>
                  <Link
                    href="/about-us"
                    className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-7 py-4 font-bold text-slate-700 hover:text-brand-blue hover:border-brand-lightblue shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Meet the Team
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Hero Right Graphic */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-lg aspect-square rounded-[2.5rem] bg-gradient-to-tr from-brand-blue to-brand-lightblue p-6 shadow-2xl shadow-brand-blue/20 flex flex-col overflow-hidden">
                  {/* Decorative curved shape resembling the logo ground line */}

                  <div className="z-5 flex items-center bg-white rounded-[2.5rem] justify-center">
                    <div className="flex gap-2">
                      <Image
                        src="/company.png"
                        alt="Logo"
                        width={300}
                        height={200}
                        className=" bg-white rounded-[2.5rem] w-36 md:w-48 lg:w-64 h-auto border-white"
                      />
                    </div>
                  </div>

                  <div className="z-10 text-white py-4 space-y-3">
                    <p className="text-2xl lg:pt-4 font-semibold tracking-wider uppercase text-brand-green">
                      Our Core Mandate
                    </p>
                    <p className="text-lg lg:pt-12 text-white/80 leading-relaxed font-sans font-light">
                      Working with our partners to build secure and generational
                      wealth for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Tagline Banner */}
        <section className="bg-brand-blue text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
              <div className="space-y-2 py-4 md:py-0">
                <div className="flex items-center justify-center text-brand-lightblue mb-2">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-serif">Secure</h3>
                <p className="text-sm text-slate-400 max-w-xs mx-auto">
                  Protecting assets, managing debts, and insuring family and
                  coperations security.
                </p>
              </div>
              <div className="space-y-2 py-4 md:py-0">
                <div className="flex items-center justify-center text-brand-green mb-2">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-serif">Generational</h3>
                <p className="text-sm text-slate-400 max-w-xs mx-auto">
                  Providing planning that ensures generational transfer of
                  wealth and legacy.
                </p>
              </div>
              <div className="space-y-2 py-4 md:py-0">
                <div className="flex items-center justify-center text-yellow-500 mb-2">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-serif">Wealth</h3>
                <p className="text-sm text-slate-400 max-w-xs mx-auto">
                  Optimizing investments and tax-saving strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold md:text-4xl font-serif text-brand-blue">
                Your Journey: Let&apos;s Talk About How We Can Help You
              </h2>
              <p className="text-slate-600">
                Financial planning can feel overwhelming and complex. We
                simplify this by carrying you along every step of the way as we
                build your bespoke long-term financial strategy.
              </p>
            </div>

            <div className="mt-16 space-y-6">
              {/* First row: 3 steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.slice(0, 3).map((s) => (
                  <div
                    key={s.num}
                    className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6 relative hover:shadow-md hover:bg-white hover:border-brand-lightblue/20 transition-all group duration-300"
                  >
                    <div className="absolute top-4 right-6 text-4xl font-extrabold text-slate-200 group-hover:text-brand-lightblue/35 transition-colors font-serif">
                      0{s.num}
                    </div>
                    <h3 className="text-lg pt-4 font-bold text-brand-blue font-serif mt-4">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Second row: 2 steps, centered */}
              {/* Second row: 2 steps, centered */}
              <div className="grid grid-cols-2 gap-6 justify-center max-w-2xl mx-auto">
                {steps.slice(3).map((s) => (
                  <div
                    key={s.num}
                    className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6 relative hover:shadow-md hover:bg-white hover:border-brand-lightblue/20 transition-all group duration-300"
                  >
                    <div className="absolute top-4 right-6 text-4xl font-extrabold text-slate-200 group-hover:text-brand-lightblue/35 transition-colors font-serif">
                      0{s.num}
                    </div>
                    <h3 className="text-lg pt-4 font-bold text-brand-blue font-serif mt-4">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Slider Section */}
        <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-bold md:text-4xl font-serif text-brand-blue">
                Our Client Testimonials
              </h2>
              <p className="text-slate-600">
                Discover the peace of mind and success stories shared by
                families and business owners we work with.
              </p>
            </div>

            <TestimonialsSlider />
          </div>
        </section>

        {/* Contact and Form Section */}
        <section className="py-24 bg-white relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
              {/* Text Info */}
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-3xl font-bold md:text-4xl font-serif text-brand-blue">
                  Take Action to Begin Your Journey with Us
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We are excited to get to meet you and collaborate with you on
                  your journey to secure generational wealth. Book a free
                  consultation or send us a message using the form to get
                  started.
                </p>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex gap-3">
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
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                        In-Person Consultation
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Available for clients in Ottawa and environs at our
                        physical office. Other physical locations will be
                        updated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Input */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
            {
              <div className="mt-22  pt-10 text-center">
                <h1 className="text-lg font-semibold text-white mb-6">
                  Our Partners
                </h1>
                <div className="flex flex-wrap justify-center gap-10">
                  {
                    <Image
                      src="/ivari.jpg"
                      alt="Partner 1"
                      width={120}
                      height={60}
                      className="object-contain rounded-[2.5rem]"
                    />
                  }
                  {
                    <Image
                      src="/elephant.jpg"
                      alt="Partner 1"
                      width={120}
                      height={60}
                      className="object-contain rounded-[2.5rem]"
                    />
                  }
                  {
                    <Image
                      src="/equitable.jpg"
                      alt="Partner 1"
                      width={120}
                      height={60}
                      className="object-contain rounded-[2.5rem]"
                    />
                  }
                  {
                    <Image
                      src="/empirelife.jpg"
                      alt="Partner 1"
                      width={120}
                      height={60}
                      className="object-contain rounded-[2.5rem]"
                    />
                  }
                  {
                    <Image
                      src="/twopart.jpg"
                      alt="Partner 1"
                      width={150}
                      height={60}
                      className="object-contain mt-6"
                    />
                  }
                  {
                    <Image
                      src="/bmo.jpg"
                      alt="Partner 1"
                      width={150}
                      height={60}
                      className="object-contain mt-5 rounded-[2.5rem]"
                    />
                  }
                  {
                    <Image
                      src="/aon.svg.png"
                      alt="Partner 1"
                      width={100}
                      height={60}
                      className="object-contain rounded-[2.5rem]"
                    />
                  }
                  {
                    <Image
                      src="/everest.jpg"
                      alt="Partner 1"
                      width={120}
                      height={60}
                      className="object-contain rounded-[2.5rem]"
                    />
                  }
                  {
                    <Image
                      src="/fourp.jpeg"
                      alt="Partner 1"
                      width={120}
                      height={60}
                      className="object-contain rounded-[2.5rem]"
                    />
                  }
                  {
                    <Image
                      src="/wfg.png"
                      alt="Partner 1"
                      width={90}
                      height={60}
                      className="object-contain rounded-[2.5rem]"
                    />
                  }
                  {
                    <Image
                      src="/worldsb.png"
                      alt="Partner 1"
                      width={120}
                      height={60}
                      className="object-contain rounded-[2.5rem]"
                    />
                  }
                </div>
              </div>
            }
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
