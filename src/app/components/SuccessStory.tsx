// components/SuccessStories.tsx
"use client";

import Image from "next/image";

type Story = {
  name: string;
  role: string;
  location: string;
  available: boolean;
  earnings: string;
  jobSuccess: string;
  projects: string;
  clients: string;
  badges: string[];
  description: string;
  profilePic: string;
};

const stories: Story[] = [
  {
    name: "Syed Gaiyoor H.",
    role: "Google Ads Specialist",
    location: "Dubai, United Arab Emirates",
    available: true,
    earnings: "$20K+",
    jobSuccess: "93%",
    projects: "33",
    clients: "25+",
    badges: [
      "Top Rated Badge",
      "$300K+ PPC spend managed",
      "$1M+ client revenue generated",
    ],
    description:
      "Our team took charge of this profile's bidding and project acquisition strategy. Through targeted proposals, consistent follow-ups, and strategic Upwork positioning, we helped this freelancer achieve outstanding results in the Google Ads niche.",
    profilePic: "/Ali.png",
  },
  {
    name: "Akasha Y.",
    role: "Brand Identity & Logo Design",
    location: "Lahore, Pakistan",
    available: true,
    earnings: "$70K+",
    jobSuccess: "95%",
    projects: "400+",
    clients: "Global clients",
    badges: ["Top Rated Badge", "579 Total Hours", "$25/hr Rate Sustained"],
    description:
      "We took Akasha's Upwork profile under our management to drive consistent project flow, polish his presentation, and help him attract high-paying clients through strategic bidding and lead generation.",
    profilePic: "/Abrar.png",
  },
  {
    name: "Muhammad Shaharyar S.",
    role: "Full Stack Development",
    location: "Karachi, Pakistan",
    available: false,
    earnings: "$15K+",
    jobSuccess: "100%",
    projects: "40+",
    clients: "International clients",
    badges: [
      "Top Rated Badge",
      "Premium design positioning",
      "Strong brand identity focus",
    ],
    description:
      "We managed the bidding, proposal strategy, and client communication for Shaharyar's Upwork profile. By targeting high-value design projects and refining portfolio presentation, we achieved exceptional results.",
    profilePic: "/Sarah.jpg",
  },
  {
    name: "Muaqib",
    role: "Full Stack Web Developer",
    location: "Peshawar, Pakistan",
    available: true,
    earnings: "$18K+",
    jobSuccess: "97%",
    projects: "45+",
    clients: "Worldwide clients",
    badges: [
      "Top Rated Plus Status",
      "Tech niche specialization",
      "Consistent client pipeline",
    ],
    description:
      "Through strategic bidding, optimized proposals, and tailored project selection, we scaled Abdul Hadi's Upwork profile to new heights with a focus on full-stack development solutions.",
    profilePic: "/Shafaq.jpg",
  },
];

export default function SuccessStories() {
  return (
    <div id="portfolio">
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
        <p className="text-gray-500 text-lg">
          Real results from our clients who trusted us with their Upwork success
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {stories.map((story, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={story.profilePic}
                alt={story.name}
                width={60}
                height={60}
                className="rounded-full border"
              />
              <div>
                <h3 className="text-xl font-semibold">{story.name}</h3>
                <p className="text-blue-600 text-sm">{story.role}</p>
                <p className="text-gray-500 text-xs">{story.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <p className="text-green-600 font-semibold">{story.earnings}</p>
                <p className="text-gray-500">Total Earnings</p>
              </div>
              <div>
                <p className="text-orange-500 font-semibold">{story.jobSuccess}</p>
                <p className="text-gray-500">Job Success</p>
              </div>
              <div>
                <p className="text-blue-600 font-semibold">{story.projects}</p>
                <p className="text-gray-500">Projects</p>
              </div>
              <div>
                <p className="font-semibold">{story.clients}</p>
                <p className="text-gray-500">Clients</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {story.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-gray-600 text-sm">{story.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
