"use client";

import CreativeShowcase from "@/components/CreativeShowcase";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    social: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full bg-[var(--background))] text-[var(--foreground)] px-6 py-28">
      <div className="max-w-[70rem] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-28 mt-14">
          <h1 className="text-5xl md:text-[100px] font-extrabold text-red-600">
            CONTACT US
          </h1>
          <p className="mt-4 text-red-600 text-4xl font-semibold">
            Whether You're a Brand or a Creator
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div className="grid grid-rows-1 lg:grid-rows-2 gap-6">
            <div>
              <p className="text-[var(--foreground)]/60 text-xl tracking-wide mb-2">
                Send an email
              </p>
              <Link
                href="mailto:ajfilms@gmail.com"
                className="text-2xl tracking-widest hover:text-red-500 transition flex items-center gap-2"
              >
                AJFILMS@GMAIL.COM
                <ArrowLeft className="rotate-180 text-red-500 w-8 h-8" />
              </Link>
            </div>

            <div className="text-[var(--foreground)]/70 ">
              <div className="flex items-center gap-6">
                <p className="mb-4 text-2xl font-semibold tracking-wide">
                  We're listening, <br /> reach out anytime!
                </p>
                <BsInstagram className="w-12 h-12 text-red-500" />
              </div>
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-6">
            {/* NAME */}
            <div>
              <label className="block mb-2 text-sm text-[var(--foreground)]/70">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/10 px-4 py-3 rounded-md focus:outline-none focus:border-red-500 transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-sm text-[var(--foreground)]/70">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="jane@framer.com"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/10  px-4 py-3 rounded-md focus:outline-none focus:border-red-500 transition"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block mb-2 text-sm text-[var(--foreground)]/70">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/10  px-4 py-3 rounded-md focus:outline-none focus:border-red-500 transition"
              />
            </div>

            {/* TYPE */}
            <div>
              <label className="block mb-2 text-sm text-[var(--foreground)]/70">
                Creator/Brand?
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/10  px-4 py-3 rounded-md focus:outline-none focus:border-red-500 transition"
              >
                <option value="" disabled className="bg-black">
                  Select
                </option>
                <option value="creator" className="bg-black">
                  Creator
                </option>
                <option value="brand" className="bg-black">
                  Brand
                </option>
              </select>
            </div>

            {/* SOCIAL */}
            <div>
              <label className="block mb-2 text-sm text-[var(--foreground)]/70">
                Youtube/Instagram Link
              </label>
              <input
                type="text"
                name="social"
                placeholder="Enter your socials"
                value={form.social}
                onChange={handleChange}
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/10  px-4 py-3 rounded-md focus:outline-none focus:border-red-500 transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-2 text-sm text-[var(--foreground)]/70">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/10  px-4 py-3 rounded-md focus:outline-none focus:border-red-500 transition"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="mt-4 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--foreground)]/80 px-6 py-3 rounded-full text-sm font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <CreativeShowcase />
    </section>
  );
}
