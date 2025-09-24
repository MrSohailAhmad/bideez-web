// components/OurVision.tsx
"use client";

import { Globe, TrendingUp, Users, Lightbulb } from "lucide-react";

const visionItems = [
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "Global Expansion",
    desc: "Expanding our services worldwide to serve clients across all continents",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Service Growth",
    desc: "Expanding into SEO, Google Ads, and cold calling services",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Human Touch",
    desc: "Maintaining the essential human element in an AI-driven world",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    title: "Innovation",
    desc: "Leading the industry with innovative sales and marketing strategies",
  },
];

export default function OurVision() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          To become a leading global provider of LinkedIn lead generation services, 
          expanding into SEO, Google Ads, and cold calling.
          <br />
          <br />
          While AI is transforming industries and replacing many professions, 
          we believe sales will always be essential because building trust, 
          understanding human needs, and closing deals require the human touch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {visionItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                <div className="bg-blue-500 p-4 rounded-full">{item.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
