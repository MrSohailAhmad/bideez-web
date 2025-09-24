// app/components/Leadership.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

export default function Leadership() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Leadership</h2>
        <p className="text-gray-500 mt-2">
          Meet the visionary leading Bideez to new heights
        </p>
      </div>

      {/* Profile Card */}
      <Card className="max-w-4xl w-full shadow-md rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <Image
            src="/Ali.png" // replace with actual image
            alt="Muhammad Ali"
            width={180}
            height={180}
            className="rounded-full object-cover shadow-md"
          />
          <Button className="mt-4 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </Button>
        </div>

        {/* Content */}
        <CardContent className="flex-1 p-0">
          <h3 className="text-2xl font-semibold text-gray-900">
            Muhammad Ali
          </h3>
          <p className="text-blue-600 font-medium">
            CEO & Business Development Manager
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {["PSM I", "PMP", "Upwork Specialist", "Team Lead"].map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="text-gray-600 mt-4 text-sm leading-relaxed">
            At Bideez, I lead strategic sales and marketing initiatives, focusing
            on expanding our presence into LinkedIn lead generation through SEO,
            Google Ads, and cold calling. I believe that while AI is
            transforming many industries, the art and strategy of sales will
            always remain essential.
          </p>

          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            Previously at Wallsoft Technologies Pvt Ltd, I played a key role in
            business development and project coordination, driving growth in
            fintech-focused software solutions and implementing platforms like
            Odoo for diverse business needs.
          </p>

          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            At Clickysoft, where I currently serve as a Business Developer, I
            focus on securing high-value software projects on Upwork and
            managing client relationships to ensure smooth project execution.
          </p>

          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            My journey began at Tplex, where I worked as a Project Coordinator
            and Business Developer, honing my skills in Upwork bidding, proposal
            writing, and client communication to win international projects.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-6">
            <div className="text-center">
              <p className="text-xl font-bold text-gray-900">7+ Years</p>
              <p className="text-gray-500 text-sm">Experience</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-900">50+ Teams</p>
              <p className="text-gray-500 text-sm">Led</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-900">$1M+</p>
              <p className="text-gray-500 text-sm">Revenue</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
