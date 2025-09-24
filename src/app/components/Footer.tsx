// components/Footer.tsx
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="bg-blue-600 text-white px-2 py-1 rounded">B</span>
              Bideez
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Smart bidding and lead generation service run by expert Business Developers
              specializing in Upwork.
            </p>
            <div className="mt-4">
              <a
                href="https://linkedin.com/company/bideez"
                target="_blank"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition"
              >
                <Linkedin className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/team" className="hover:underline">Our Team</Link></li>
              <li><Link href="/success-stories" className="hover:underline">Success Stories</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Upwork Bidding</li>
              <li>Lead Generation</li>
              <li>Proposal Writing</li>
              <li>Client Acquisition</li>
              <li>Business Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} /> sales@bideez.in
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} /> +92 333 3481657
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} /> Remote Team - Global Service
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2024 Bideez. All rights reserved. Built with passion for business success.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
    
  )
}
