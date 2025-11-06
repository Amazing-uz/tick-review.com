import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Users, Target, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About tick-review.com - Our Mission & Story | Expert Watch Reviews",
  description:
    "Learn about tick-review.com's mission to provide honest, expert watch reviews and help enthusiasts find their perfect timepiece through comprehensive testing and analysis.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">About tick-review.com</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Your trusted source for honest watch reviews, expert analysis, and the best Amazon deals on timepieces.
        </p>

        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Target className="h-8 w-8 text-primary" />
            Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At tick-review.com, we believe that finding the perfect watch shouldn't be overwhelming. Whether you're
            searching for your first timepiece or adding to an established collection, our mission is to provide clear,
            honest, and comprehensive reviews that help you make informed decisions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We test and evaluate watches across all price ranges—from affordable everyday pieces to luxury
            investments—ensuring that our recommendations are based on real-world experience, not marketing hype.
          </p>

          <h2 className="text-3xl font-bold mb-4 mt-12 flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            Our Team
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our team consists of passionate watch enthusiasts, collectors, and industry professionals with decades of
            combined experience. Each member brings unique expertise—from vintage collecting to modern horology, from
            dive watches to dress pieces.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We personally test every watch we review, wearing them in real-world conditions to assess comfort,
            durability, accuracy, and overall value. Our testers include professional divers, outdoor adventurers,
            office professionals, and collectors who understand what makes a great timepiece.
          </p>

          <h2 className="text-3xl font-bold mb-4 mt-12 flex items-center gap-3">
            <Award className="h-8 w-8 text-primary" />
            Our Standards
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We maintain strict editorial independence. While we participate in the Amazon Associates program to support
            our work, our reviews are never influenced by affiliate relationships. We recommend products based solely on
            their merit, performance, and value.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Every review includes detailed specifications, high-quality photography, accuracy testing results, and
            honest assessments of both strengths and weaknesses. We believe in transparency and always disclose any
            potential conflicts of interest.
          </p>

          <h2 className="text-3xl font-bold mb-4 mt-12 flex items-center gap-3">
            <Heart className="h-8 w-8 text-primary" />
            Our Community
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            tick-review.com is more than just a review site—it's a community of watch enthusiasts who share a passion
            for horology. We value your feedback, questions, and experiences. Our readers' insights often shape our
            content and help fellow collectors make better decisions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Join our newsletter to stay updated on the latest reviews, industry news, and exclusive Amazon deals. We're
            here to help you discover timepieces that bring joy and value to your life.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/testers">Meet Our Team</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
    </div>
  )
}
