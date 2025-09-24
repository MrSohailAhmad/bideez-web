// components/ArticleCard.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

interface ArticleCardProps {
  category: string
  title: string
  description: string
  readTime: string
  link: string
}

export default function ArticleCard({
  category,
  title,
  description,
  readTime,
  link,
}: ArticleCardProps) {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-[360px] rounded-2xl shadow-md border p-5">
        {/* Category */}
        <Badge className="mb-3 bg-blue-600/90 text-white px-3 py-1 text-sm">
          {category}
        </Badge>

        {/* Article Preview Icon + Text */}
        <div className="flex flex-col items-center text-center">
          <div className="text-blue-600 text-3xl">📖</div>
          <p className="text-gray-500 text-sm">Article Preview</p>
        </div>

        {/* Content */}
        <CardContent className="mt-4 space-y-3">
          {/* Meta */}
          <div className="flex items-center text-gray-400 text-xs gap-2 justify-center">
            <Calendar size={14} />
            <span>Recent</span>
            <span>•</span>
            <span>{readTime} read</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-center">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500 text-center">
            {description}
          </p>

          {/* CTA */}
          <Link href={link} target="_blank">
            <Button className="w-full mt-2" variant="outline">
              Read Full Article
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* View more articles button */}
      <Link href="https://linkedin.com" target="_blank">
        <Button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white">
          View More Articles on LinkedIn
        </Button>
      </Link>
    </div>
  )
}
