import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Featured Watches - Expert Reviews & Amazon Deals | tick-review.com",
  description:
    "Browse our curated collection of featured watches with expert reviews and the best Amazon deals. From luxury timepieces to affordable everyday watches.",
  keywords: "featured watches, watch reviews, Amazon watch deals, luxury watches, affordable watches",
}

const featuredProducts = [
  {
    name: "Casio F91W Series",
    slug: "casio-f91w-series",
    rating: 4.8,
    reviews: 2847,
    image: "https://m.media-amazon.com/images/I/51mu4w1lJwL._AC_SX522_.jpg",
    badge: "Best Value",
    amazonLink: "https://amazon.com/dp/B0EXAMPLE1?tag=youraffid-20",
  },
  {
    name: "SEIKO 5 Automatic Blue Dial Stainless Steel",
    slug: "seiko-5-sports-automatic",
    rating: 4.9,
    reviews: 1923,
    image: "https://m.media-amazon.com/images/I/61FgZRrx9UL._AC_SY741_.jpg",
    badge: "Editor's Choice",
    amazonLink: "https://amazon.com/dp/B0EXAMPLE2?tag=youraffid-20",
  },
  {
    name: "Citizen Men's Classic Quartz Watch",
    slug: "citizen-eco-drive-promaster",
    rating: 4.7,
    reviews: 3156,
    image: "https://m.media-amazon.com/images/I/81YJMXUexJL._AC_SY741_.jpg",
    badge: "Best Seller",
    amazonLink: "https://amazon.com/dp/B0EXAMPLE3?tag=youraffid-20",
  },
  {
    name: "Timex Men's Easy Reader Watch",
    slug: "timex-mens-easy-reader-watch",
    rating: 4.8,
    reviews: 5234,
    image: "https://m.media-amazon.com/images/I/71S-CCwawqL._AC_SY550_.jpg",
    badge: "Most Popular",
    amazonLink: "https://amazon.com/dp/B0EXAMPLE4?tag=youraffid-20",
  },
  {
    name: "Tissot Supersport Chrono",
    slug: "tissot-supersport-chrono",
    rating: 4.6,
    reviews: 4521,
    image: "https://m.media-amazon.com/images/I/81QI4SufOjL._AC_SX679_.jpg",
    badge: "Budget Pick",
    amazonLink: "https://amazon.com/dp/B0EXAMPLE5?tag=youraffid-20",
  },
  {
    name: "Bulova Men's Classic Sutton 4-Hand Automatic Watch",
    slug: "bulova-mens-classic-sutton-4-hand-automatic-watch",
    rating: 4.9,
    reviews: 1456,
    image: "https://m.media-amazon.com/images/I/71fLKaBwOAL._AC_SX679_.jpg",
    badge: "Premium Choice",
    amazonLink: "https://amazon.com/dp/B0EXAMPLE6?tag=youraffid-20",
  },
  {
    name: "BERTUCCI A-2T Men's Watch",
    slug: "bertucci-a2t-mens-watch",
    rating: 4.7,
    reviews: 1842,
    image: "https://m.media-amazon.com/images/I/717ghGFCkML._AC_SY741_.jpg",
    badge: "Tactical Choice",
    amazonLink: "https://www.amazon.com/Bertucci-12122-Original-Classics-Titanium/dp/B003G65OHE",
  },
  {
    name: "Stuhrling Original Men's Dive Watch",
    slug: "stuhrling-original-mens-dive-watch",
    rating: 4.6,
    reviews: 2134,
    image: "https://m.media-amazon.com/images/I/81OjfrROf8L._AC_SY535_.jpg",
    badge: "Dive Ready",
    amazonLink: "https://www.amazon.com/Stuhrling-Original-Movement-Stainless-Resistant/dp/B0CWJZPWJF",
  },
  {
    name: "Swarovski Cosmopolitan Crystal Watch",
    slug: "swarovski-cosmopolitan-crystal-watch",
    rating: 4.8,
    reviews: 987,
    image: "https://m.media-amazon.com/images/I/812V0eTigkL._AC_SX679_.jpg",
    badge: "Luxury Style",
    amazonLink: "https://www.amazon.com/Swarovski-Cosmopolitan-Bracelet-Gold-Tone-Finish/dp/B0B1F6TPQX",
  },
  {
    name: "Invicta Men's Watch",
    slug: "invicta-mens-watch",
    rating: 4.5,
    reviews: 3421,
    image: "https://m.media-amazon.com/images/I/71PH7dMqe0L._AC_SY695_.jpg",
    badge: "Bold Design",
    amazonLink: "https://www.amazon.com/Invicta-19656-I-Force-Analog-Display/dp/B00XM0KQ5E",
  },
  {
    name: "Invicta Men's Speedway 51mm Silicone Quartz Watch",
    slug: "invicta-speedway-51mm-silicone-quartz",
    rating: 4.6,
    reviews: 2876,
    image: "https://m.media-amazon.com/images/I/81WPtR+9qEL._AC_SY695_.jpg",
    badge: "Oversized",
    amazonLink: "https://www.amazon.com/Invicta-Speedway-Quartz-Stainless-Polyurethane/dp/B01M73JZYP",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Featured Watches</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our hand-picked selection of the best watches available on Amazon. Each timepiece has been
              carefully reviewed by our experts to ensure quality, value, and style.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.slug} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0 flex flex-col h-full">
                  <Link href={`/products/${product.slug}`} className="relative h-64 overflow-hidden rounded-t-lg block">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{product.badge}</Badge>
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews.toLocaleString()} reviews)
                      </span>
                    </div>
                    <div className="mt-auto">
                      <Button asChild className="w-full">
                        <Link href={`/products/${product.slug}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Check out our comprehensive articles and buying guides to help you find the perfect watch for your needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/articles">Browse All Articles</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
