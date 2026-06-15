"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      text: "We’ve been working with Robin and Trisha for nearly a year now, and the experience has been nothing short of outstanding. From the very beginning, they took the time to truly understand our financial goals, concerns, and priorities. Their thoughtful, personalized approach made us feel confident and supported every step of the way. What sets Robin and Trisha apart is their professionalism, transparency, and the way they make even complex financial matters easy to understand.",
      author: "A.L.",
    },
    {
      text: "Trisha helped me find affordable life insurance that fit my needs perfectly and also made the process very easy. She answered all my questions and concerns and I signed up with confidence thanks to her!",
      author: "S.M.",
    },
    {
      text: "Both my husband and I have had the pleasure doing business with Trisha and she was awesome! Super accommodating and even drove all the way to Cochrane several times to meet so we wouldn’t have to disrupt our childrens schedule. Definitely 5 star treatment.",
      author: "K.S.M.",
    },
    {
      text: "Robin and Trisha helped us get clarity in areas that were unclear, then helped put together a plan that moved us towards our goal. They're amazing to work with!",
      author: "C.B.",
    },
    {
      text: "Trisha is so patient, knowledgeable and helpful!!! She has met us in Calgary multiple times, she has answered our questions (sometimes the same ones!) over and over and always given sound, thoughtful advice. She is very accommodating and really cares about her clients - I highly recommend her to everyone I know.",
      author: "C.H.",
    },
    {
      text: "Trisha is on top of it, when I ask questions I get quick replies, never disappointed.",
      author: "L.K.",
    },
    {
      text: "I have switched my RESP Advisor to Robin Choi. He was thorough and detailed in his explanations, and I appreciated how clearly he identified which product was the most suitable for me. I also plan to consult with him regarding other financial products.",
      author: "G.R.",
    },
    {
      text: "Trisha has been a fantastic support over many years helping me plan and providing options for my family. She truly wants to help her clients reach their goals and is fast and friendly.",
      author: "C.H. (Calgary)",
    },
    {
      text: "Trisha is professional and cares about her clients!",
      author: "T.W.",
    },
    {
      text: "Trisha was very helpful and understanding of our needs. She spent many hours helping us make the right decision for now and for the future.",
      author: "J.J.",
    },
    {
      text: "I am incredibly grateful to have Robin as my Financial Advisor guiding me on my financial journey. From the moment we started working together, I was impressed by his professionalism and genuine care for my financial well-being. He took the time to understand my goals and suggested a strategy that fits my situation.",
      author: "D.B.",
    },
    {
      text: "Trisha is a person of high integrity and always works in her clients' best interests. She doesn't attempt to oversell, keeping her clients' needs as her priority. As a mortgage broker, when my clients ask for a trusted licensed insurance advisor I recommend Trisha to them with 100% confidence.",
      author: "V.L.",
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
            "{testimonials[currentIndex].text}"
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
