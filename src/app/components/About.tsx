import { Calendar, Users, TrendingUp, Handshake } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: <Calendar size={32} className="text-blue-500" />, value: "7+", label: "Years of Experience" },
    { icon: <Users size={32} className="text-green-500" />, value: "50+", label: "Clients Served" },
    { icon: <TrendingUp size={32} className="text-orange-500" />, value: "$100K+", label: "Revenue Generated" },
    { icon: <Handshake size={32} className="text-indigo-500" />, value: "95%", label: "Success Rate" },
  ];

  return (
    <div id="about">
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Bideez</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto my-4 rounded"></div>
          <p className="text-gray-500 text-lg">Smart Bidding, Real Results</p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Bideez is a remotely managed team of experienced Business Developers,
              specializing in winning high-value projects on Upwork. Since 2018, we've
              been helping freelancers and agencies boost their success rates with
              targeted research, persuasive proposals, and proven bidding strategies.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our journey began with our very first client, Technology Plex, a well-known
              software company in Pakistan and the United States. From that first win to
              now partnering with clients worldwide, we've spent over 7 years refining our
              approach to make project acquisition smarter, faster, and more effective.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 text-center">
                  {item.value}
                </h4>
                <p className="text-gray-500 text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
