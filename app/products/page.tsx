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
		name: "TID No.1 Men's Watch",
		slug: "tid-no.1-mens-watch",
		rating: 4.8,
		reviews: 2847,
		image: "https://m.media-amazon.com/images/I/51QuYGGL6HL._AC_SY535_.jpg",
		badge: "Best Value",
		amazonLink: "https://www.amazon.com/TID-No-1-Mens-Watch-Scandinavian/dp/B0D7BTVPXJ?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=024b4d960c2a2889373c22e2febbba2b&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "SEIKO 5 Automatic Blue Dial Stainless Steel",
		slug: "seiko-5-sports-automatic",
		rating: 4.9,
		reviews: 1923,
		image: "https://m.media-amazon.com/images/I/61FgZRrx9UL._AC_SY741_.jpg",
		badge: "Editor's Choice",
		amazonLink: "https://www.amazon.com/Seiko-SNXS77-Automatic-Silver-Bracelet/dp/B000KKO85S?&linkCode=ll1&tag=tickreviewcom-20&linkId=32037844f0f2512908d007e7f92f3bd6&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "Citizen Men's Classic Quartz Watch",
		slug: "citizen-eco-drive-promaster",
		rating: 4.7,
		reviews: 3156,
		image: "https://m.media-amazon.com/images/I/81YJMXUexJL._AC_SY741_.jpg",
		badge: "Best Seller",
		amazonLink: "https://www.amazon.com/Citizen-Mens-Quartz-Watch-BF0580-57L/dp/B008FG6ZRI?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=1ddef4e5827fca86944c47b21f9d3153&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "Timex Men's Easy Reader Watch",
		slug: "timex-mens-easy-reader-watch",
		rating: 4.8,
		reviews: 5234,
		image: "https://m.media-amazon.com/images/I/71S-CCwawqL._AC_SY550_.jpg",
		badge: "Most Popular",
		amazonLink: "https://www.amazon.com/Timex-T2H281-Reader-Black-Leather/dp/B000AYYIYU?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=dc73061e2e14f3414e3e8fd55af8187d&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "Tissot Supersport Chrono",
		slug: "tissot-supersport-chrono",
		rating: 4.6,
		reviews: 4521,
		image: "https://m.media-amazon.com/images/I/81QI4SufOjL._AC_SX679_.jpg",
		badge: "Budget Pick",
		amazonLink: "https://www.amazon.com/Tissot-chronograph-Supersport-T125-617-11-041-00-bracelet/dp/B0BHMNBNY9?&linkCode=ll1&tag=tickreviewcom-20&linkId=72d50710c658a3a6fc19d98b806d5459&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "Bulova Men's Classic Sutton 4-Hand Automatic Watch",
		slug: "bulova-mens-classic-sutton-4-hand-automatic-watch",
		rating: 4.9,
		reviews: 1456,
		image: "https://m.media-amazon.com/images/I/71fLKaBwOAL._AC_SX679_.jpg",
		badge: "Premium Choice",
		amazonLink: "https://www.amazon.com/Bulova-Classic-Automatic-Stainless-Silver-Tone/dp/B004I5GOK8?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=62e1810017ddd313b73c1ca1e62f1f3c&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "BERTUCCI A-2T Men's Watch",
		slug: "bertucci-a2t-mens-watch",
		rating: 4.7,
		reviews: 1842,
		image: "https://m.media-amazon.com/images/I/717ghGFCkML._AC_SY741_.jpg",
		badge: "Tactical Choice",
		amazonLink: "https://www.amazon.com/Bertucci-12122-Original-Classics-Titanium/dp/B003G65OHE?&linkCode=ll1&tag=tickreviewcom-20&linkId=44cb9cda8cc8392399a2c1ddc00bf28e&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "Stuhrling Original Men's Dive Watch",
		slug: "stuhrling-original-mens-dive-watch",
		rating: 4.6,
		reviews: 2134,
		image: "https://m.media-amazon.com/images/I/81OjfrROf8L._AC_SY535_.jpg",
		badge: "Dive Ready",
		amazonLink: "https://www.amazon.com/Stuhrling-Original-Movement-Stainless-Resistant/dp/B0CWJZPWJF?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=000ad5eb22abb9a69d9d226096a82cb6&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "Swarovski Cosmopolitan Crystal Watch",
		slug: "swarovski-cosmopolitan-crystal-watch",
		rating: 4.8,
		reviews: 987,
		image: "https://m.media-amazon.com/images/I/812V0eTigkL._AC_SX679_.jpg",
		badge: "Luxury Style",
		amazonLink: "https://www.amazon.com/Swarovski-Cosmopolitan-Bracelet-Gold-Tone-Finish/dp/B0B1F6TPQX?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=66776343f51eb1fb9b8987f446b2ba42&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "Invicta Men's Watch",
		slug: "invicta-mens-watch",
		rating: 4.5,
		reviews: 3421,
		image: "https://m.media-amazon.com/images/I/71PH7dMqe0L._AC_SY695_.jpg",
		badge: "Bold Design",
		amazonLink: "https://www.amazon.com/Invicta-19656-I-Force-Analog-Display/dp/B00XM0KQ5E?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=cbdf9ddcabcd77031afb034083438784&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "Invicta Men's Speedway 51mm Silicone Quartz Watch",
		slug: "invicta-speedway-51mm-silicone-quartz",
		rating: 4.6,
		reviews: 2876,
		image: "https://m.media-amazon.com/images/I/81WPtR+9qEL._AC_SY695_.jpg",
		badge: "Oversized",
		amazonLink: "https://www.amazon.com/Invicta-Speedway-Quartz-Stainless-Polyurethane/dp/B01M73JZYP?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=1f9b440bcc7c2dcd96fc205b0b9568fc&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "Osprey Daylite Expandable 26+6 Travel Pack, Black",
		slug: "osprey-daylite-expandable-travel-pack",
		rating: 4.8,
		reviews: 1456,
		image: "https://m.media-amazon.com/images/I/61hRlArltnL._AC_SL1500_.jpg",
		badge: "Best Carry-On",
		amazonLink: "https://www.amazon.com/Osprey-Daylite-Expandable-Travel-Black/dp/B0CN1JCRSD?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=d1a0a80f75fc62df8fbcf2ff23e0073f&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "Wrangler Hardside Spinner Luggage, Blue Heaven, Carry-On 20-Inch",
		slug: "wrangler-hardside-spinner-luggage",
		rating: 4.7,
		reviews: 3210,
		image: "https://m.media-amazon.com/images/I/81afxA+BHcL._AC_SL1500_.jpg",
		badge: "Best Budget Luggage",
		amazonLink: "https://www.amazon.com/Wrangler-Spinner-Carry-Luggage-Heaven/dp/B0C7Y5NGMY?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=de40882e3c7637173254d10d1c982259&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "Kitsch Continuous Spray Bottle for Hair – Terracotta, 150ml",
		slug: "kitsch-continuous-spray-bottle",
		rating: 4.8,
		reviews: 2874,
		image: "https://m.media-amazon.com/images/I/51u3yqZIjWL._AC_SL1250_.jpg",
		badge: "Best Hair Spray Bottle",
		amazonLink: "https://www.amazon.com/Kitsch-Spray-Bottle-Hair-Hairstyling/dp/B0CVZWMD34?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=0255dc972afc5637c52110d1909fcafd&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "18-Pack TSA-Approved Silicone Travel Bottles",
		slug: "18pack-tsa-approved-travel-bottles",
		rating: 4.7,
		reviews: 4123,
		image: "https://m.media-amazon.com/images/I/61Y+Leafr0L._SL1138_.jpg",
		badge: "Best Toiletry Set",
		amazonLink: "https://www.amazon.com/Toiletries-Approved-Containers-Conditioner-Essentials/dp/B0BZWMJM2F?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=eda9bdcb9ab793a7c38a9661232afd8d&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "COIDEA Waterproof Travel Drawstring Shoe Bags (5-Pack)",
		slug: "coid-ea-waterproof-shoe-bags",
		rating: 4.8,
		reviews: 1987,
		image: "https://m.media-amazon.com/images/I/616K24V+mkL._AC_SL1500_.jpg",
		badge: "Best Shoe Organizers",
		amazonLink: "https://www.amazon.com/COIDEA-Drawstring-Waterproof-Dustproof-Portable/dp/B0C6X2VP9R?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=65c8f9e835fea20f7dacb9e59056cf47&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "BAGAIL 8 Set Packing Cubes – Cream",
		slug: "bagail-8-set-packing-cubes",
		rating: 4.8,
		reviews: 5678,
		image: "https://m.media-amazon.com/images/I/61aFuRVWe3L._AC_SL1280_.jpg",
		badge: "Best Packing Cubes",
		amazonLink: "https://www.amazon.com/BAGAIL-Packing-Lightweight-Organizers-Toiletry/dp/B08S35399Y?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=0ca4812937ae228bfe8cf806621d55d1&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "Teyssor Spray Bottles – 2 Pack, 300ml",
		slug: "teyssor-spray-bottles-2-pack",
		rating: 4.7,
		reviews: 2341,
		image: "https://m.media-amazon.com/images/I/61sSGzCNGbL._AC_SL1500_.jpg",
		badge: "Best Value Spray Bottles",
		amazonLink: "https://www.amazon.com/Teyssor-Mister-Water-Spray-Bottle/dp/B0D22PPZCL?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=5f41e23b78673d2bb9b7c21000585ead&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "BAGSMART Toiletry Bag with Hanging Hook – Black, Medium",
		slug: "bagsmart-toiletry-bag",
		rating: 4.8,
		reviews: 3987,
		image: "https://m.media-amazon.com/images/I/61gMY7ZvcrL._SL1500_.jpg",
		badge: "Best Toiletry Organizer",
		amazonLink: "https://www.amazon.com/Water-resistant-Organizer-Accessories-Container-Toiletries/dp/B07SL2RKJK?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=e046a8b121a016f9834baed8c3ba17bf&language=en_US&ref_=as_li_ss_tl",
	},
	{
		name: "Osprey Daylite Expandable 26+6 Travel Pack, Black",
		slug: "osprey-daylite-expandable-travel-pack-black-2",
		rating: 4.8,
		reviews: 1456,
		image: "https://m.media-amazon.com/images/I/61hRlArltnL._AC_SL1500_.jpg",
		badge: "Best Carry-On",
		amazonLink: "https://www.amazon.com/Osprey-Daylite-Expandable-Travel-Black/dp/B0CN1JCRSD?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=b3adb5b5486101465e98086e8801e19c&language=en_US&ref_=as_li_ss_tl",
	},
];
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
														className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
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
