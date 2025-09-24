import React from 'react'
import ArticleCard from "./ArticleCard"

function Article() {
  return (
    <div>
         <main className="flex justify-center items-center min-h-screen">
      <ArticleCard
        category="Business Development"
        title="Building Trust in Digital Business Development"
        description="In an increasingly digital world, building trust with clients has become more challenging yet more important than ever..."
        readTime="5 min"
        link="https://linkedin.com"
      />
    </main>
    </div>
  )
}

export default Article