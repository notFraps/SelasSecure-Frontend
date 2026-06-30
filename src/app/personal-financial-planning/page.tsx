import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  HeartHandshake,
  ClipboardCheck,
  Users,
  HelpCircle,
  CheckSquare,
  Calendar,
  ChevronRight,
} from "lucide-react";

export default function PersonalFamilyPlanning() {
  const steps = [
    {
      num: "1",
      title: "Discovery Meeting",
      desc: "We get to know you, your goals and your current financial situation. This is a no-pressure, confidential conversation to help us understand what matters most to you, and see if we are a good fit.",
      icon: ClipboardCheck,
    },
    {
      num: "2",
      title: "Data Gathering",
      desc: "You provide us with relevant financial documents (such as income details, bank balances, tax details, debts, benefits, and investment statements) so we can build a complete and accurate picture of your finances.",
      icon: CheckSquare,
    },
    {
      num: "3",
      title: "Personal Financial Strategy Development",
      desc: "At SelasSecure Financial, we believe collaboration is key—this is what sets us apart in Financial Services. We design your Persoanl Financial Strategy with your active involvement because you understand your goals better. We provide professional guidiannce, and detailed education so that we can create a strategy that meets your core needs, goals and desires.",
      icon: Users,
    },
    {
      num: "4",
      title: "Implementation Support",
      desc: "Once you are satisfied with your Personal financial strategy, we help you put the strategy into action at your own pace. This may include setting up new savings/investment accounts, consolidating files, adjusting insurance coverage, or coordinating asset transfers.",
      icon: HelpCircle,
    },
    {
      num: "5",
      title: "Ongoing Support & Reviews",
      desc: "Life changes, and your goals should too. We meet with you regularly to review your progress, review tax finilings, update strategies, and ensure you stay on the path to financial confidence.",
      icon: Calendar,
    },
  ];

  return (
    <>
      <Header />

      <main className="flex-grow bg-slate-50/50">
        {/* Page Header */}
        <section className="bg-brand-blue text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-lightblue/10 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <h1 className="text-3xl font-bold md:text-5xl font-serif">
              Personal Financial Planning
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              How we work with you to turn personal complex financial decicions
              into clear, actionable plans that help you achieve your goals.
            </p>
          </div>
        </section>

        {/* Process Detail Section */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
                Our 5-Step Collaborative Roadmap
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto">
                How we work together to turn complex decisions into a clear,
                actionable plan.
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-12">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="relative pl-8 md:pl-12 group">
                    {/* Step Number Badge */}
                    <div className="absolute -left-[1.65rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-brand-green text-brand-blue font-bold text-sm shadow-sm group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                      {step.num}
                    </div>

                    {/* Step Content */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 space-y-3 hover:shadow-md hover:border-brand-lightblue/20 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted text-brand-blue">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-brand-blue font-serif">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed pt-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-16 bg-white border-t border-slate-100 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-blue">
              Ready to Plan With Confidence?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
              Our initial discovery consultation is free, confidential, and
              carries no obligation. Let's discuss how we can securely build
              generatoinal wealth for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/book-now"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-[#0e487d] px-6 py-3 font-bold text-white shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book Intro Call
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200 px-6 py-3 font-bold text-slate-700 hover:text-brand-blue transition-all"
              >
                Send Message
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
