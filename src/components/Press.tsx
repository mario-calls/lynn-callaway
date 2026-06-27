"use client";
import { useState, FormEvent } from "react";
import Reveal from "@/components/Reveal";

const FORM_ENDPOINT = "https://api.web3forms.com/submit";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full border border-[#E5E2DC] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] bg-white focus:outline-none focus:border-[#2C5F4A] focus:ring-1 focus:ring-[#2C5F4A] transition-colors placeholder:text-[#ABABAB]";

export default function Press() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="press" className="py-16 md:py-28 lg:py-36 bg-[#E7EFDA]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">

        <Reveal direction="up">
          <div className="text-center mb-12 md:mb-16">
            <span className="block text-[#B8963E] text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              Press &amp; Speaking
            </span>
            <h2
              className="text-[#1A1A1A] leading-tight mb-5"
              style={{
                fontFamily: "var(--font-raleway)",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 4vw, 3.25rem)",
              }}
            >
              Let&apos;s Connect
            </h2>
            <div style={{ width: 40, height: 2, background: "#B8963E", margin: "0 auto 1.5rem" }} />
            <p className="text-[#4A4A4A] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              For media inquiries, interview requests, or speaking engagements, fill out the form below and Lynn&apos;s team will get back to you promptly.
            </p>
          </div>
        </Reveal>

        {status === "success" ? (
          <Reveal direction="up">
            <div className="text-center py-16 px-8 bg-white rounded-2xl border border-[#E5E2DC]">
              <div className="text-4xl mb-4">✦</div>
              <h3
                className="text-[#2C5F4A] text-xl mb-3"
                style={{ fontFamily: "var(--font-raleway)", fontWeight: 700 }}
              >
                Message Received
              </h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-md mx-auto">
                Thank you for reaching out. Lynn&apos;s team will be in touch within 2–3 business days.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal direction="up" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-[#E5E2DC] p-6 md:p-10 lg:p-12 space-y-5"
            >
              <input type="hidden" name="access_key" value="e3be8008-dca9-4ef0-90db-a11e0a1e4b0c" />
              <input type="hidden" name="subject" value="New Press & Speaking Inquiry — lynncallaway.co" />
              <input type="hidden" name="from_name" value="Lynn Callaway Website" />

              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#6B6B6B] mb-2">
                    First Name <span className="text-[#B8963E]">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="Jane"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#6B6B6B] mb-2">
                    Last Name <span className="text-[#B8963E]">*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="Smith"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#6B6B6B] mb-2">
                  Organization / Publication
                </label>
                <input
                  type="text"
                  name="organization"
                  placeholder="Forbes, NPR, SXSW..."
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#6B6B6B] mb-2">
                  Email Address <span className="text-[#B8963E]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@publication.com"
                  className={inputClass}
                />
              </div>

              {/* Inquiry type */}
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#6B6B6B] mb-2">
                  Type of Inquiry <span className="text-[#B8963E]">*</span>
                </label>
                <div className="relative">
                  <select
                    name="inquiry_type"
                    required
                    defaultValue=""
                    className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                  >
                    <option value="" disabled>Select one...</option>
                    <option value="Press / Media">Press / Media</option>
                    <option value="Speaking Engagement">Speaking Engagement</option>
                    <option value="Podcast / Interview">Podcast / Interview</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6B6B6B] text-xs">▾</span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#6B6B6B] mb-2">
                  Message <span className="text-[#B8963E]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us a bit about the opportunity..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please email{" "}
                  <a href="mailto:hello@lynncallaway.co" className="underline">
                    hello@lynncallaway.co
                  </a>{" "}
                  directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto text-xs tracking-widest uppercase bg-[#2C5F4A] text-white px-8 py-4 hover:bg-[#3D7A60] disabled:opacity-60 disabled:cursor-not-allowed transition-colors font-medium rounded-lg"
              >
                {status === "submitting" ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </Reveal>
        )}

      </div>
    </section>
  );
}
