import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Clock, TrendingUp, Award, Search, Target, Zap } from "lucide-react"
import { articles } from "@/lib/articles-data"

export const metadata: Metadata = {
  title: "tick-review.com - Expert Watch Reviews & Amazon Deals | Luxury & Affordable Timepieces",
  description:
    "Discover the best watches with expert reviews, buying guides, and exclusive Amazon deals. From luxury Swiss watches to affordable everyday timepieces.",
  keywords:
    "watches, watch reviews, luxury watches, affordable watches, Amazon watches, Rolex, Omega, Seiko, watch buying guide",
  openGraph: {
    title: "tick-review.com - Expert Watch Reviews & Amazon Deals",
    description: "Your trusted source for watch reviews, comparisons, and the best Amazon deals on timepieces.",
    type: "website",
  },
}

const featuredProducts = [
  {
    name: "TID No.1 Men’s Watch",
    slug: "tid-no.1-mens-watch",
    rating: 4.8,
    reviews: 2847,
    image: "https://m.media-amazon.com/images/I/51QuYGGL6HL._AC_SY535_.jpg",
    badge: "Best Value",
    amazonLink: "https://www.amazon.com/TID-No-1-Mens-Watch-Scandinavian/dp/B0D7BTVPXJ",
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

export default function HomePage() {
  const latestArticles = articles.slice(0, 6)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image src="/hero-luxury-watches.jpg" alt="Luxury watches collection" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Discover Your Perfect Timepiece</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-pretty">
            Expert reviews, honest comparisons, and the best Amazon deals on watches from luxury to everyday wear.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href="/articles">Read Reviews</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
            >
              <Link href="#featured">Shop Watches</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Fascinating Watch Facts */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Fascinating Watch Facts</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the incredible history and engineering behind timepieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/antique-pocket-watch-from-1510-peter-henlein-histo.jpg"
                  alt="Historical pocket watch"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">500 Years Old</h3>
              <p className="text-muted-foreground">
                The first portable timepiece was created around 1510 by Peter Henlein in Nuremberg, Germany
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/omega-speedmaster-moon-watch-astronaut-spacewalk-1.jpg"
                  alt="Omega Speedmaster moon watch"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Moon Tested</h3>
              <p className="text-muted-foreground">
                The Omega Speedmaster is the only watch certified for spacewalks and worn on the moon in 1969
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/mechanical-watch-movement-300-components-gears-spr.jpg"
                  alt="Watch movement components"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">300+ Components</h3>
              <p className="text-muted-foreground">
                A typical mechanical watch contains over 300 tiny parts working in perfect harmony
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/patek-philippe-grandmaster-chime-luxury-watch-auct.jpg"
                  alt="Patek Philippe Grandmaster Chime"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">$31 Million Record</h3>
              <p className="text-muted-foreground">
                The most expensive watch ever sold is the Patek Philippe Grandmaster Chime at auction in 2019
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section id="featured" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Watches</h2>
              <p className="text-muted-foreground text-lg">Hand-picked selections with the best value on Amazon</p>
            </div>
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((product) => (
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/products">View All Featured Watches</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Watch Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">Find the perfect watch for your lifestyle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/articles/category/reviews" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="/luxury-dive-watches-with-rotating-bezel-underwater.jpg"
                      alt="Dive Watches"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">Dive Watches</h3>
                      <p className="text-sm opacity-90">Professional water resistance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/articles/category/reviews" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="/elegant-dress-watches-with-leather-strap-formal.jpg"
                      alt="Dress Watches"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">Dress Watches</h3>
                      <p className="text-sm opacity-90">Elegant timepieces for formal occasions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/articles/category/reviews" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="/chronograph-sports-watch-with-multiple-dials-racin.jpg"
                      alt="Chronographs"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">Chronographs</h3>
                      <p className="text-sm opacity-90">Precision timing for sports enthusiasts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/articles/category/reviews" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="/pilot-aviation-watch-with-large-crown-cockpit.jpg"
                      alt="Pilot Watches"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">Pilot Watches</h3>
                      <p className="text-sm opacity-90">Aviation-inspired designs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/articles/category/reviews" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="/smartwatch-fitness-tracker-digital-display-modern.jpg"
                      alt="Smart Watches"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">Smart Watches</h3>
                      <p className="text-sm opacity-90">Connected technology meets style</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/articles/category/reviews" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="/vintage-mechanical-watch-patina-aged-leather-strap.jpg"
                      alt="Vintage Watches"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">Vintage Watches</h3>
                      <p className="text-sm opacity-90">Timeless classics with history</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      {/* Popular Brands */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Popular Watch Brands</h2>
            <p className="text-muted-foreground text-lg">Explore our comprehensive brand guides</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Rolex", slug: "rolex", image: "/rolex-luxury-watch-brand-logo.jpg" },
              { name: "Omega", slug: "omega", image: "/omega-watch-brand-logo.jpg" },
              { name: "Seiko", slug: "seiko", image: "/seiko-watch-brand-logo.jpg" },
              { name: "Casio", slug: "casio", image: "/casio-watch-brand-logo.jpg" },
              { name: "Patek Philippe", slug: "patek-philippe", image: "/patek-philippe-luxury-watch-brand-logo.jpg" },
              {
                name: "Audemars Piguet",
                slug: "audemars-piguet",
                image: "/audemars-piguet-luxury-watch-brand-logo.jpg",
              },
            ].map((brand) => (
              <Link key={brand.slug} href={`/articles/brand/${brand.slug}`}>
                <Card className="h-64 hover:shadow-lg transition-all duration-300 hover:border-primary overflow-hidden">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-40 flex-shrink-0">
                      <Image
                        src={brand.image || "/placeholder.svg"}
                        alt={`${brand.name} watches`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 flex items-center justify-center flex-1 bg-background min-h-[96px]">
                      <h3 className="font-bold text-sm text-center leading-snug text-balance">{brand.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Latest Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
              <p className="text-muted-foreground text-lg">Expert insights and in-depth reviews</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/articles">View All Articles</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-56 overflow-hidden rounded-t-lg">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-background/90 text-foreground">
                        {article.category}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* How We Review */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Review Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every watch goes through our rigorous testing methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4 text-2xl font-bold">
                1
              </div>
              <Search className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Research & Selection</h3>
              <p className="text-muted-foreground">
                We identify watches based on popularity, innovation, and value across all price ranges
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4 text-2xl font-bold">
                2
              </div>
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Hands-On Testing</h3>
              <p className="text-muted-foreground">
                Our experts wear and test each watch for weeks, evaluating accuracy, comfort, and durability
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4 text-2xl font-bold">
                3
              </div>
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Detailed Analysis</h3>
              <p className="text-muted-foreground">
                We provide comprehensive reviews covering design, movement, value, and real-world performance
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get the latest watch reviews, Amazon deals, and collecting tips delivered to your inbox weekly.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <Input type="email" placeholder="Enter your email" className="bg-primary-foreground text-foreground" />
            <Button type="submit" variant="secondary" size="lg">
              Subscribe
            </Button>
          </form>
          <p className="text-sm mt-4 opacity-75">Join 15,000+ watch enthusiasts. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
