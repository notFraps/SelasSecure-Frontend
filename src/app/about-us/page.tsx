import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Phone, Mail, MapPin, Laptop, Award, Shield } from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <Header />
      
      <main className="flex-grow bg-slate-50/50">
        {/* Page Header */}
        <section className="bg-brand-blue text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-lightblue/10 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <h1 className="text-3xl font-bold md:text-5xl font-serif">
              Meet Our Team
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We guide you through every stage of your financial journey with clarity, expertise, and a highly collaborative team approach.
            </p>
          </div>
        </section>

        {/* Bios Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Advisor 1: Trisha */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-100">
                  <div className="h-24 w-24 rounded-full bg-brand-blue flex items-center justify-center text-white text-3xl font-bold font-serif shadow-inner shrink-0">
                    TA
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <h2 className="text-2xl font-bold text-brand-blue font-serif">
                      Trisha Argotoff, CFP®, CFDS
                    </h2>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-green">
                      Certified Financial Planner & Founder
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-slate-500 pt-2">
                      <span className="flex items-center justify-center sm:justify-start gap-1">
                        <Phone className="w-3.5 h-3.5" />
                        (587) 897-2336
                      </span>
                      <span className="flex items-center justify-center sm:justify-start gap-1">
                        <Mail className="w-3.5 h-3.5" />
                        trisha@selassecurefinancial.com
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  <p>
                    Trisha is a Certified Financial Planner (CFP®) with extensive experience in the financial services industry. She began her career as a mortgage broker and later transitioned into financial advising. This diverse background has allowed Trisha to effectively guide families in managing both the strategic (investment) and protective (insurance) aspects of their financial well-being.
                  </p>
                  <p>
                    She is passionate about helping individuals, families, and businesses create tailored plans to achieve their financial goals and aspirations. As a Chartered Financial Divorce Specialist (CFDS), Trisha helps individuals navigate the financial complexities of divorce, providing expert guidance on how to divide assets, manage liabilities, and address financial matters during settlements.
                  </p>
                  <p>
                    Trisha lives in High River, just outside Calgary, with her husband and two daughters. She travels regularly throughout Alberta and British Columbia, providing comprehensive financial guidance wherever it is needed.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold rounded-lg bg-brand-muted text-brand-blue px-3 py-1.5 border border-brand-lightblue/10">
                    <Award className="w-3.5 h-3.5" />
                    CFP® Accredited
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold rounded-lg bg-brand-muted text-brand-blue px-3 py-1.5 border border-brand-lightblue/10">
                    <Shield className="w-3.5 h-3.5" />
                    CFDS Specialist
                  </span>
                </div>
              </div>

              {/* Advisor 2: Robin */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-100">
                  <div className="h-24 w-24 rounded-full bg-brand-green flex items-center justify-center text-white text-3xl font-bold font-serif shadow-inner shrink-0">
                    RC
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <h2 className="text-2xl font-bold text-brand-blue font-serif">
                      Robin Choi
                    </h2>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-lightblue">
                      Senior Financial Advisor
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-slate-500 pt-2">
                      <span className="flex items-center justify-center sm:justify-start gap-1">
                        <Phone className="w-3.5 h-3.5" />
                        (587) 577-1133
                      </span>
                      <span className="flex items-center justify-center sm:justify-start gap-1">
                        <Mail className="w-3.5 h-3.5" />
                        robin@selassecurefinancial.com
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  <p>
                    Robin has been working in the financial industry since 2008. He is an experienced Financial Advisor, having previously worked at TD Bank and as an Account Manager at the Business Development Bank of Canada.
                  </p>
                  <p>
                    He holds professional expertise in residential and commercial real estate, granting him deep knowledge of both liquid (investments) and non-liquid (real estate assets) wealth management. Robin approaches client relationships with a sense of purpose and a humble heart.
                  </p>
                  <p>
                    Robin considers his role similar to a "Financial Family Doctor," acting as a trusted companion throughout his clients' financial journey. He is dedicated to helping families build generational wealth and sharing in their milestone achievements.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold rounded-lg bg-brand-muted text-brand-blue px-3 py-1.5 border border-brand-lightblue/10">
                    <Award className="w-3.5 h-3.5" />
                    Asset Management
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold rounded-lg bg-brand-muted text-brand-blue px-3 py-1.5 border border-brand-lightblue/10">
                    <Shield className="w-3.5 h-3.5" />
                    Real Estate Advisor
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Address and Coverage Information */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-serif text-brand-blue">
                  Our Office & Service Coverage
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We believe in keeping financial advice local and personal. You are welcome to meet us at our physical office in Calgary, or request in-person support across Calgary and the surrounding communities. If you reside elsewhere in Alberta or British Columbia, we offer comprehensive services virtually.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">Physical Location</p>
                      <p className="text-xs text-slate-500 mt-0.5">441, 12445 Lake Fraser Dr SE, Calgary, AB T2J-7A4</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Laptop className="w-5 h-5 text-brand-lightblue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">Virtual & Out-of-Town Coverage</p>
                      <p className="text-xs text-slate-500 mt-0.5">Comprehensive consults conducted via Zoom for clients in BC and Alberta.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphic Representing the Map or Office Card */}
              <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100 space-y-4 shadow-inner">
                <h3 className="text-lg font-bold font-serif text-brand-blue">
                  SelasSecure Financial Calgary Office
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Our Calgary headquarters is located inside the Lake Fraser professional building, offering structured, confidential advisory spaces for family planning, business matching, and divorce resolution support.
                </p>
                <div className="h-44 rounded-2xl bg-gradient-to-tr from-slate-200 to-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs border border-slate-200 uppercase tracking-widest relative overflow-hidden">
                  <MapPin className="w-8 h-8 text-brand-green absolute" />
                  <div className="absolute inset-x-0 bottom-0 bg-white/70 py-2.5 text-center text-[10px] text-slate-600 font-semibold border-t border-slate-200">
                    Lake Fraser Drive Office Space
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
