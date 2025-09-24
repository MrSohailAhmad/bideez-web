// components/Testimonials.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

type Testimonial = {
  name: string
  role: string
  date: string
  relation: string
  testimonial: string
  tags: string[]
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Valentin Butiugin",
    role: "Partner | Business Leader",
    date: "May 15, 2023",
    relation: "Client",
    testimonial:
      "Big shoutout to Muhammad Ali and his incredible team for their outstanding support with Upwork bidding services! Their expertise and dedication helped us secure valuable projects. Highly recommend them for anyone seeking top-notch bidding assistance on Upwork!",
    tags: ["Upwork", "BiddingServices", "HighlyRecommended"],
  },
  {
    name: "Waqar Abdul Ghaffar",
    role: "CEO & Founder @ TPLEX CTO @ Rhithm",
    date: "Oct 28, 2022",
    relation: "Client",
    testimonial:
      "Undoubtedly he has a command of writing converting proposals as he has brought several projects to our company. I will recommend Ali for bidding on Upwork because he always comes up with the latest bidding techniques.",
    tags: ["ProposalWriting", "UpworkExpert", "RecommendedProfessional"],
  },
  {
    name: "Mr Kamran",
    role: "Digital Marketing Expert | Google Ads Specialist",
    date: "Jun 26, 2024",
    relation: "Trainee",
    testimonial:
      "I have got a chance to be trained by Muhammad Ali. The training was on how to win valuable projects on Upwork. Ali has provided me with golden tips of project selection and cover letter writing. Highly recommend!",
    tags: ["Training", "UpworkTips", "ProjectSelection"],
  },
  {
    name: "Nofal Nadeem",
    role: "Founder of CyberBuddies | Managing Director",
    date: "Nov 1, 2022",
    relation: "Client",
    testimonial:
      "Muhammad Ali is very polite and nice person to work with. He is passionate about his jobs and what he committed to his clients!",
    tags: ["Professional", "Passionate", "ClientCommitment"],
  },
  {
    name: "Saad Shahid",
    role: ".Net Developer at Wallsoft",
    date: "Oct 27, 2022",
    relation: "Team Member",
    testimonial:
      "Such a polite nature and always there for support to his team. Always maintain a professional environment and worked with him as a freelancer and find him exactly the same in nature.",
    tags: ["TeamSupport", "Professional", "GreatLeader"],
  },
  {
    name: "Farheen Fatima",
    role: "Helping brands scale inbound leads using high impact content marketing",
    date: "Sep 29, 2022",
    relation: "Colleague",
    testimonial:
      "Muhammad Ali has always amazed me with his dedication and problem-solving skills. He is highly professional in what he does.",
    tags: ["Dedication", "ProblemSolver", "HighlyProfessional"],
  },
]

export default function Testimonials() {
  return (
    <div id="blog">
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Client Testimonials</h2>
      <p className="text-center text-gray-500 mb-12">
        What our clients and partners say about working with us
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Card key={i} className="shadow-md rounded-2xl hover:shadow-lg transition">
            <CardContent className="p-6 flex flex-col gap-4">
              {/* Avatar & Name */}
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                  <p className="text-xs text-gray-400">{t.date} • {t.relation}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 italic">"{t.testimonial}"</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag, j) => (
                  <Badge key={j} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    </div>
  )
}
