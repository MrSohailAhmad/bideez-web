import TeamCard from "./TeamCard";

const teamMembers = [
  {
    image: "/Ali.png",
    name: "Muhammad Ali",
    role: "CEO & Business Development Manager",
    bio: "Visionary leader with 7+ years of experience in driving business growth and building high-performing remote teams.",
    tags: ["Business Development", "Team Leadership"],
  },
  {
    image: "/Abrar.png",
    name: "Abrar",
    role: "Senior Business Executive & Web Developer",
    bio: "Combines strong business acumen with exceptional web development skills to deliver tailored digital solutions.",
    tags: ["Web Development", "Client Relations", "Digital Solutions"],
  },
  {
    image: "/Sarah.jpg",
    name: "Sarah",
    role: "Senior Upwork Bidder, Artist & Graphic Designer",
    bio: "A creative professional who blends business expertise with artistic vision to craft compelling proposals and designs.",
    tags: ["Graphic Design", "Proposal Writing", "Creative Strategy"],
  },
  {
    image: "/Hasan.png",
    name: "Hasan",
    role: "Senior Upwork Bidder & Marketing Head",
    bio: "Strategic thinker with a flair for persuasive communication and client engagement. Leads marketing initiatives that amplify brand reach and conversion rates.",
    tags: ["Marketing Strategy", "Client Engagement", "Communication"],
  },
  {
    image: "/Shafaq.jpg",
    name: "Shafaq",
    role: "Business Developer & Sales Head",
    bio: "Results-driven professional focused on generating high-value leads and closing impactful deals. Expert in aligning sales strategies with business goals for maximum growth.",
    tags: ["Sales Strategy", "Lead Generation", "Business Growth"],
  },
];

export default function TeamSection() {
  return (
    <div id="team">
    <section className="max-w-7xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
    </div>
  );
}
