"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      text: "We’ve had the pleasure of working with Esla and Victor for almost a year, and the experience has been truly exceptional. Right from the start, they invested time in understanding our financial objectives, concerns, and priorities. Their personalized and thoughtful guidance gave us confidence and reassurance throughout the process. What makes Robin and Trisha stand out is their professionalism, openness, and ability to simplify even the most complex financial topics.",
      author: "E.N.",
    },
    {
      text: "Esla guided me to the right life insurance plan that was both affordable and perfectly suited to my needs, while making the entire process simple and stress-free. He addressed every question and concern I had, and thanks to his support, I enrolled with complete confidence.",
      author: "V.A.",
    },
    {
      text: "Both my husband and I have truly enjoyed working with Esla, and he was fantastic! He went out of his way to accommodate us, even driving to Cochrane multiple times so our children’s routine wouldn’t be interrupted. It felt like genuine five‑star service from start to finish.",
      author: "M.K.",
    },
    {
      text: "Victor and Monique gave us clarity in areas we struggled to understand and then worked with us to build a plan that moved us closer to our goals. They’re truly wonderful partners to collaborate with!",
      author: "D.M.",
    },
    {
      text: "Esla is incredibly patient, knowledgeable, and supportive! He has met with us in Calgary several times, always taking the time to answer our questions—even when we asked the same ones repeatedly—with thoughtful, reliable advice. His accommodating nature and genuine care for his clients truly stand out, and I recommend him wholeheartedly to everyone I know.",
      author: "G.O.",
    },
    {
      text: "Esla is always prompt and reliable—whenever I reach out with questions, he responds quickly and consistently, leaving me completely satisfied.",
      author: "M.O.",
    },
    {
      text: "I recently switched my RESP advisor to Victor, and the experience has been excellent. He provided thorough, detailed explanations and clearly identified the product that best suited my needs. I truly valued his clarity, and I also look forward to consulting with him on other financial products in the future.",
      author: "O.O.",
    },
    {
      text: "Esla has been an incredible support over the years, guiding me with thoughtful planning and presenting options that truly fit my family’s needs. He genuinely cares about helping his clients achieve their goals, and his quick, friendly approach makes the experience seamless.",
      author: "S.C.",
    },
    {
      text: "Victor is highly professional and genuinely dedicated to his clients!",
      author: "E.A.",
    },
    {
      text: "Audrey was incredibly supportive and attentive to our needs. She dedicated many hours to guiding us toward the right choice—both for our present situation and for the future ahead.",
      author: "C.O.",
    },
    {
      text: "I feel truly fortunate to have Monique as my financial advisor, guiding me throughout my financial journey. From the very beginning, her professionalism and genuine concern for my financial well‑being stood out. She took the time to understand my goals and recommended a strategy that was perfectly suited to my situation.",
      author: "I.E.",
    },
    {
      text: "Glory is a professional of great integrity who consistently puts her clients’ best interests first. She never tries to oversell, always keeping her clients’ needs as her top priority. As a mortgage broker, whenever my clients ask for a trusted, licensed insurance advisor, I recommend Trisha with complete confidence.",
      author: "D.T.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative mx-auto max-w-4xl px-4 py-8">
      <div className="overflow-hidden rounded-3xl glass-card shadow-lg border border-slate-100 p-8 md:p-12 transition-all duration-300">
        <div className="absolute top-8 right-10 opacity-10 text-brand-blue">
          <Quote className="w-24 h-24 rotate-180" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#c5a059] text-[#c5a059]" />
          ))}
        </div>

        {/* Testimonial Content */}
        <div className="min-h-[160px] flex flex-col justify-between">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium italic">
            &quot;{testimonials[currentIndex].text}&quot;
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-brand-muted border border-brand-lightblue flex items-center justify-center font-bold text-brand-blue text-sm">
              {testimonials[currentIndex].author.slice(0, 2).replace(".", "").trim()}
            </div>
            <div>
              <p className="text-sm font-bold text-brand-blue">
                Verified Client
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Client Review - {testimonials[currentIndex].author}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-1.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-brand-green" : "w-2.5 bg-slate-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 hover:text-brand-blue hover:border-brand-lightblue transition-all active:scale-95"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 hover:text-brand-blue hover:border-brand-lightblue transition-all active:scale-95"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
