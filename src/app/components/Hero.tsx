"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-snug">
          Smart Bidding,{" "}
          <span className="text-blue-200">Real Results</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-blue-100 mb-8 px-2">
          Bideez is a smart bidding and lead generation service run by a team of
          expert Business Developers specializing in Upwork. We combine targeted
          research, compelling proposals, and proven strategies to connect you
          with high-value clients, saving you time and boosting your success
          rate.
        </p>

        {/* CTA button */}
        <a
          href="#success"
          className="inline-flex items-center justify-center bg-white text-blue-700 px-6 py-3 rounded font-semibold shadow hover:bg-blue-50 transition"
        >
          View Our Success Stories
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>

        {/* Features */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 mb-4 rounded-full bg-blue-400/30 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c0 1.1-.9 2-2 2H8v4H4v-4H2v-4h2V7h4v2h2c1.1 0 2 .9 2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-1">Expert Team</h3>
            <p className="text-blue-100 text-sm sm:text-base">
              7+ years of Upwork expertise
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 mb-4 rounded-full bg-blue-400/30 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 1.343-3 3 0 1.105.895 2 2 2h2v2h-2a4 4 0 01-4-4c0-2.21 1.79-4 4-4h2V5h-2C8.686 5 7 6.686 7 9"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-1">Proven Results</h3>
            <p className="text-blue-100 text-sm sm:text-base">
              $100K+ generated for clients
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 mb-4 rounded-full bg-blue-400/30 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-1">Smart Strategy</h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Targeted approach for each client
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
