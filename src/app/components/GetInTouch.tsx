// components/GetInTouch.tsx
"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export default function GetInTouch() {
  return (
    <div id="contact">
    <section className="bg-gradient-to-r from-blue-500 to-blue-900 py-16 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <div className="w-16 h-1 bg-white mx-auto my-3 rounded"></div>
          <p className="text-lg text-gray-200">
            Ready to boost your success? Let’s discuss how we can help you win more projects
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <ul className="space-y-4 text-gray-200">
              <li className="flex items-center gap-3">
                <Mail className="text-white" />
                <span>sales@bideez.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-white" />
                <span>+92 333 3481657</span>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="text-white" />
                <a
                  href="https://linkedin.com/company/bideez"
                  target="_blank"
                  className="hover:underline"
                >
                  linkedin.com/company/bideez
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-white" />
                <span>Remote Team - Serving Globally</span>
              </li>
            </ul>

            {/* Business Hours */}
            <Card className="mt-6 bg-white/10 text-gray-100 border-0">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <p>Monday – Friday: 9:00 AM – 6:00 PM (PKT)</p>
                <p>Saturday: 10:00 AM – 4:00 PM (PKT)</p>
                <p>Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>

          {/* Right Side: Form */}
          <Card className="bg-white/10 border-0">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name *" required />
                  <Input placeholder="Last Name *" required />
                </div>
                <Input type="email" placeholder="Email Address *" required />
                <Input placeholder="Subject *" required />
                <Textarea
                  placeholder="Tell us about your project and how we can help..."
                  required
                />
                <Button type="submit" className="w-full bg-white text-blue-700 hover:bg-gray-200">
                  Send Message ✈️
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    </div>
  )
}
