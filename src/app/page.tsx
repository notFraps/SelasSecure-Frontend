import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, CheckCircle, Shield, TrendingUp, Users, Calendar, ArrowUpRight } from "lucide-react";

export default function Home() {
  const steps = [
    {
      num: "1",
      title: "Intro Meeting",
      desc: "A short, no-pressure conversation to understand what you’re looking for and answer your initial questions. We’ll explain how we work and confirm if we’re the right fit.",
    },
    {
      num: "2",
      title: "Data Gathering",
      desc: "We collect the details needed to build your plan (income, debts, investments, insurance, priorities). You’ll receive a clear checklist and a secure way to share documents.",
    },
    {
      num: "3",
      title: "Collaboration",
      desc: "This is where our team approach adds value. We build your plan, then remove identifying details and peer-review the case with other advisors to find extra opportunities or risks.",
    },
    {
      num: "4",
      title: "Consultation",
      desc: "We bring everything back to you in a practical meeting. You’ll see your recommended strategy, options, adjust based on feedback, and agree on next steps.",
    },
    {
      num: "5",
      title: "Implementation",
      desc: "Once you’re comfortable, we help you put it into action at your pace—setting up accounts, coordinating transfers, adjusting coverage, and supporting ongoing updates.",
    },
  ];

  const services = [
    {
      title: "Personal & Family Planning",
      href: "/personal-family-financial-planning",
      desc: "Build a personalized roadmap for your cash flow, investments, and long-term goals.",
    },
    {
      title: "Divorce Financial Planning",
      href: "/divorce-financial-planning",
      desc: "Navigate complex asset division, tax consequences, and budgeting with a CFDS specialist.",
    },
    {
      title: "Insurance Planning",
      href: "/insurance",
      desc: "Secure affordable life, disability, critical illness, travel, and health insurance.",
    },
    {
      title: "Estate & Legacy Planning",
      href: "/estate-planning",
      desc: "Minimize tax burdens and coordinate with legal representatives for wealth transfer.",
    },
    {
      title: "Group Benefits & RRSP",
      href: "/group-benefits-rrsp",
      desc: "Boost recruitment and retention with custom corporate benefits and match plans.",
    },
    {
      title: "Health Spending Accounts",
      href: "/hsa",
      desc: "100% tax-deductible health spending allowances for corporations and sole proprietors.",
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
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              {/* Hero Left Content */}
              <div className="space-y-6 lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-1.5 text-sm font-semibold text-brand-blue border border-brand-lightblue/20">
                  <Shield className="w-4 h-4 text-brand-green" />
                  Your Trusted Financial Partners
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-serif text-brand-blue leading-[1.1]">
                  Financial Planning <br />
                  and Advice in Calgary <br />
                  <span className="text-gradient">and Surrounding Areas</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                  We guide individuals, families, and business owners through comprehensive planning, divorce financial specialization, insurance solutions, and custom group benefits.
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
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] bg-gradient-to-tr from-brand-blue to-brand-lightblue p-8 shadow-2xl shadow-brand-blue/20 flex flex-col justify-between overflow-hidden">
                  {/* Decorative curved shape resembling the logo ground line */}
                  <div className="absolute -bottom-10 -left-10 -right-10 h-32 bg-brand-green/20 rounded-full blur-2xl -z-0" />
                  
                  <div className="z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/logo.jpg"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="rounded-full bg-white border border-white"
                      />
                      <span className="text-xs font-bold tracking-widest text-white uppercase">
                        SelasSecure
                      </span>
                    </div>
                    <span className="rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                      CFP & CFDS Certified
                    </span>
                  </div>

                  <div className="z-10 text-white space-y-3">
                    <p className="text-sm font-semibold tracking-wider uppercase text-brand-green">
                      Our Core Tagline
                    </p>
                    <h2 className="text-3xl font-bold font-serif leading-tight">
                      Secure. Generational. Wealth.
                    </h2>
                    <p className="text-xs text-white/80 leading-relaxed font-sans font-light">
                      Aligning strategic asset protective insurance structures with collaborative legacy values.
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
                  Protecting assets, managing debts, and insuring family security.
                </p>
              </div>
              <div className="space-y-2 py-4 md:py-0">
                <div className="flex items-center justify-center text-brand-green mb-2">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-serif">Generational</h3>
                <p className="text-sm text-slate-400 max-w-xs mx-auto">
                  Providing planning that passes values and legacies forward.
                </p>
              </div>
              <div className="space-y-2 py-4 md:py-0">
                <div className="flex items-center justify-center text-yellow-500 mb-2">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-serif">Wealth</h3>
                <p className="text-sm text-slate-400 max-w-xs mx-auto">
                  Optimized investment structures and tax mitigation plans.
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
                Our Process: Your Journey to Financial Confidence
              </h2>
              <p className="text-slate-600">
                Planning can feel complex, but our collaborative model makes it clear and manageable. We focus on building long-term strategies tailored to your exact situation.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((s, idx) => (
                <div
                  key={s.num}
                  className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6 relative hover:shadow-md hover:bg-white hover:border-brand-lightblue/20 transition-all group duration-300"
                >
                  <div className="absolute top-4 right-6 text-4xl font-extrabold text-slate-200 group-hover:text-brand-lightblue/35 transition-colors font-serif">
                    0{s.num}
                  </div>
                  <h3 className="text-lg font-bold text-brand-blue font-serif mt-4">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-24 bg-slate-50/70 border-t border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold md:text-4xl font-serif text-brand-blue">
                Professional Financial Offerings
              </h2>
              <p className="text-slate-600">
                Whether you need specialized divorce planning, custom health coverage, or retirement asset matching, our team provides trusted, accredited advice.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((svc) => (
                <div
                  key={svc.title}
                  className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-lightblue/30 transition-all duration-300 group"
                >
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue font-serif group-hover:text-brand-lightblue transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-50">
                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-green hover:text-brand-blue transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold md:text-4xl font-serif text-brand-blue">
                Meet Your Financial Partners
              </h2>
              <p className="text-slate-600">
                Accredited planners focused on improving financial literacy and building comprehensive long-term financial plans.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {/* Advisor 1: Trisha */}
              <div className="flex flex-col md:flex-row items-center gap-6 rounded-3xl bg-slate-50 p-6 border border-slate-100 hover:shadow-md transition-all duration-300">
                <div className="h-24 w-24 rounded-full bg-brand-blue flex items-center justify-center text-white text-3xl font-bold font-serif shadow-inner shrink-0">
                  TA
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-xl font-bold text-brand-blue font-serif">
                    Trisha Argotoff, CFP®, CFDS
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                    Certified Financial Planner & Founder
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Chartered Financial Divorce Specialist providing expert division analysis, liabilities planning, and post-settlement budgets.
                  </p>
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline pt-2"
                  >
                    Read Full Biography
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Advisor 2: Robin */}
              <div className="flex flex-col md:flex-row items-center gap-6 rounded-3xl bg-slate-50 p-6 border border-slate-100 hover:shadow-md transition-all duration-300">
                <div className="h-24 w-24 rounded-full bg-brand-green flex items-center justify-center text-white text-3xl font-bold font-serif shadow-inner shrink-0">
                  RC
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-xl font-bold text-brand-blue font-serif">
                    Robin Choi
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-lightblue">
                    Financial Advisor & Real Estate Guide
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Expert guide for real estate guidance and asset management. Approaching family finance as a dedicated Financial Family Doctor.
                  </p>
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline pt-2"
                  >
                    Read Full Biography
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Slider Section */}
        <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-bold md:text-4xl font-serif text-brand-blue">
                What Our Clients Say
              </h2>
              <p className="text-slate-600">
                Discover the peace of mind and success stories shared by families and business owners we work with.
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
                  Begin Your Journey With Clarity
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We look forward to helping you organize your assets and protect what matters most. Book a session or drop us a message using the form.
                </p>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-muted text-brand-green mt-0.5">
                      <CheckCircle className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">In-Person Consultations</p>
                      <p className="text-xs text-slate-500 mt-0.5">Serving Calgary, Okotoks, Airdrie, and High River.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-muted text-brand-green mt-0.5">
                      <CheckCircle className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Virtual Meetings</p>
                      <p className="text-xs text-slate-500 mt-0.5">Serving clients anywhere in Alberta and BC via Zoom.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Input */}
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
