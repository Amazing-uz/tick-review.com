"use client"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, ArrowLeft, ExternalLink } from "lucide-react"

const products = [
	{
		slug: "tid-no.1-mens-watch",
		name: "TID No.1 Men's Watch",
		rating: 4.8,
		reviews: 2847,
		image: "https://m.media-amazon.com/images/I/51QuYGGL6HL._AC_SY535_.jpg",
		badge: "Best Value",
		amazonLink: "https://www.amazon.com/TID-No-1-Mens-Watch-Scandinavian/dp/B0D7BTVPXJ?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=024b4d960c2a2889373c22e2febbba2b&language=en_US&ref_=as_li_ss_tl",
		price: "$299",
		description:
			"If you’re looking for a minimalist, well-designed watch that makes a style statement without breaking the bank, the TID No.1 is a strong contender. Its Scandinavian aesthetic is distinctive and cohesive, the build quality commendable for the price, and the comfort factor (left crown, slim case) adds bonus points. However, be mindful of pricing: the full retail price may push you into competition with other more horologically rich watches, where you might get stronger movement or sapphire crystals. If found at a discount, this watch becomes a much more compelling value. Recommendation: Go for it if you find it on sale or value the design more than mechanical pedigree. If movement and specs are your priority, you might consider alternatives in the same budget range.",
		features: [
			"Brand: TID Watches (Stockholm, Sweden).",
			"Model: No.1 (often seen as TID No.1).",
			"Case material: 316L stainless steel (in many versions).",
			"Crystal: Mineral glass (in this price segment).",
			"Movement: Japanese quartz (Miyota 2035).",
			"Water resistance: 5 ATM / ~50 m suitable for everyday wear.",
		],
		images: [
			"https://m.media-amazon.com/images/I/619WHmimvHL._AC_SY535_.jpg",
			"https://m.media-amazon.com/images/I/7172BH4TNeL._AC_SY535_.jpg",
		],
	},
	{
		slug: "seiko-5-sports-automatic",
		name: "SEIKO 5 Automatic Blue Dial Stainless Steel",
		rating: 4.9,
		reviews: 1923,
		image: "https://m.media-amazon.com/images/I/61FgZRrx9UL._AC_SY741_.jpg",
		badge: "Editor's Choice",
		amazonLink: "https://www.amazon.com/Seiko-SNXS77-Automatic-Silver-Bracelet/dp/B000KKO85S?&linkCode=ll1&tag=tickreviewcom-20&linkId=32037844f0f2512908d007e7f92f3bd6&language=en_US&ref_=as_li_ss_tl",
		price: "$425",
		description:
			"The Seiko 5 Automatic SNXS77K1 is a standout within the Seiko 5 lineup—a beautiful blue-sunburst dial, automatic movement, and stainless steel case and bracelet at a very attractive price point. It manages to combine dressy and everyday appeal, making it a strong value option for someone looking to get into mechanical watches without spending a fortune. The SNXS77K1 impresses with its elegant yet modest proportions. At ~38 mm it fits well on many wrist sizes, and the lug-to-lug being short helps wearability. SIXIW. The blue dial stands out — in good light the sunburst effect brings depth and variation; in lower light it becomes a more subtle tone, making it versatile for both casual and semi-dress settings. Build-wise, Seiko delivers a steel case and bracelet which, for the price, is solid. Some reviewers point out that the bracelet uses folded links (in earlier versions) which is a slight compromise for the price point. The Hardlex crystal is a sensible choice for affordability: better than basic mineral in many respects, though not as scratch-resistant as sapphire. For normal daily use it holds up well if you treat it decently. As an automatic watch, the SNXS77K1 gives you the mechanical experience: winding from your wrist movement, the smooth sweep seconds hand (compared to quartz “tick”), and the charm of mechanical-engineering. Users report that the watch “wears like a much more expensive piece” given the dial, finishing and proportions. For example: “It wears like a thousand-dollar watch … the stock bracelet being the only weak link.” Given the size and finish, it easily transitions from office to weekend. The day/date display adds practicality. On the flip side, because of the 30 m water resistance, you’ll want to avoid swimming or heavy water exposure. The movement (7S26) is robust and proven, though lacks hand-winding and hacking (in many versions) which is something more advanced watch enthusiasts may notice. If you’re looking for a mechanical automatic watch that punches way above its price point, the Seiko 5 SNXS77K1 is a strong choice. It brings an attractive blue dial, genuine heritage, solid everyday wearability, and represents one of the best value propositions in watches for under maybe USD 200 (depending on street price). For someone entering the automatic watch world, or wanting one versatile piece for both daily wear and dress-up, this is a compelling option. The trade-offs (modest water resistance, bracelet quality, movement simplifications) are acceptable given the price. With a strap upgrade and good care, this watch can easily satisfy for years. Recommendation: Grab it while you can at a good price. If you want to personalize further, consider swapping to a better bracelet or strap to elevate the feel even more.",
		features: [
			"Case diameter: ~ 38 mm",
			"Stainless steel case and bracelet",
			"Blue sunburst dial — dynamic appearance that shifts with light",
			"Day and date display (day of the week + calendar date) at 3 o’clock",
			"Automatic (self-winding) movement — in house Seiko calibre (e.g., 7S26) with approximately 41-hour power reserve",
			"Hardlex crystal (Seiko’s proprietary hardened mineral) for the dial cover",
			"Exhibition case-back (transparent) in some versions so you can view the movement",
			"Water resistance: 30 m / 3 ATM (suitable for everyday splashes but not swimming/diving)",
		],
		images: [
			"https://m.media-amazon.com/images/I/61FgZRrx9UL._AC_SY741_.jpg",
			"https://m.media-amazon.com/images/I/61QYTJBUvGL._AC_SX679_.jpg",
		],
	},
	{
		name: "Citizen Men's Classic Quartz Watch",
		slug: "citizen-eco-drive-promaster",
		rating: 4.7,
		reviews: 3156,
		image: "https://m.media-amazon.com/images/I/81YJMXUexJL._AC_SY741_.jpg",
		badge: "Best Seller",
		amazonLink: "https://www.amazon.com/Citizen-Mens-Quartz-Watch-BF0580-57L/dp/B008FG6ZRI?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=1ddef4e5827fca86944c47b21f9d3153&language=en_US&ref_=as_li_ss_tl",
		price: "$199",
		description:
			"If you’re looking for a timeless timepiece that marries understated elegance with reliable craftsmanship, the Citizen Men’s Classic Quartz in stainless steel is a standout option. This watch offers a refined dress-watch aesthetic, complemented by Citizen’s reputation for quality and precision. It’s ideal for everyday office wear, dress occasions, or as a dependable go-to in a minimalist collection. Design & Build Quality. From the moment you pick it up, the Classic Quartz conveys a sense of thoughtful simplicity. The tainless-steel case and bracelet deliver a polished look that transitions effortlessly from a business suit to a smart casual outfit. The case diameter (in similar Citizen quartz models) hovers around the 39-41 mm range, with thickness slim enough to slide under a shirt cuff comfortably. The dial embraces the “classic” concept: clean lines, clear hour indices, a date window (in many variants), and minimal clutter. This lends to legibility and a look that won’t feel dated. One model review noted: “The white dial and silver accents make the display extremely easy to read … every little detail … created with the purpose of looking great.” The bracelet (or in some models leather strap) is well-finished for the price tier and the clasp feels secure. The mineral (or in select models sapphire) crystal gives decent scratch protection — adequate for everyday use though not “luxury-level” hardness. Movement & Performance This model uses a quartz movement — meaning battery-powered, predictable accuracy, and low maintenance. You get the benefits of high precision without the need to worry about winding or power reserves. On similar models (e.g., the BI5000-01A), users report excellent time-keeping out of the box. Many Citizen “Classic” quartz watches also bring the trusted Citizen build-quality and the feeling of wearing something that “costs more than it does”. For example, one reviewer for a Citizen quartz dress watch said: “It’s a perfect option for those who want their first dress watch and don’t want to break the bank.” Features & Specifications While the exact spec sheet will depend on the specific variant you pick, here are common features in the Citizen Men’s Classic Quartz stainless-steel line: Straightforward three-hand (hour, minute, seconds) display plus date window. The Citizen Men’s Classic Quartz Stainless-Steel watch is an excellent pick for anyone seeking a smart, reliable, and well-proportioned dress watch without entering the luxury price tier. It ticks the right boxes: honest brand, clean aesthetics, daily wearability and ease. While it doesn’t offer high-end luxury features (like mechanical movement, ultra high water resistance or exotic materials), it offers tremendous value and style in its class. If you’re building a watch rotation and want one versatile piece that can serve for years without fuss, this Citizen is a smart choice. And if you value reliability and simplicity over complication and flash, you’ll likely be very happy.",
		features: [
			"Case diameter in the ballpark of ~39–41 mm",
			"Stainless-steel case and bracelet (or steel case with alternate strap in some models)",
			"Mineral crystal (or in select upgraded models sapphire)",
			"Water resistance: many variants rated around 30 m to 50 m (not designed for diving, but fine for everyday wear)",
			"Clean dial, minimalist styling, polished steel finish — emphasizing dress/everyday versatility",
		],
		images: [
			"https://m.media-amazon.com/images/I/81YJMXUexJL._AC_SY741_.jpg",
			"https://m.media-amazon.com/images/I/71I7lWZTjzL._AC_SX679_.jpg",
		],
	},
	{
		slug: "timex-mens-easy-reader-watch",
		name: "Timex Men's Easy Reader Watch",
		rating: 4.8,
		reviews: 5234,
		image: "https://m.media-amazon.com/images/I/71S-CCwawqL._AC_SY550_.jpg",
		badge: "Most Popular",
		amazonLink: "https://www.amazon.com/Timex-T2H281-Reader-Black-Leather/dp/B000AYYIYU?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=dc73061e2e14f3414e3e8fd55af8187d&language=en_US&ref_=as_li_ss_tl",
		price: "$99",
		description:
			"The Timex Men’s Easy Reader is a textbook example of “less is more” done right. With a design focused squarely on readability, practicality, and everyday reliability, this model has earned its place as a staple watch for decades. For anyone seeking a no-fuss, affordable timepiece that simply tells the time — and does it well — the Easy Reader is a strong contender. Design & Build Quality. From the moment you glance at it, the Easy Reader makes its purpose clear: large numerals, high-contrast dial, simple case. One reviewer of the 35 mm T20041 version notes it draws inspiration from “schoolroom clocks” and offers a clean, timeless look. The case is modest in size (for many versions around 35-38 mm) and quite thin, meaning it wears unobtrusively on the wrist. One spec list shows 35 mm diameter, 8 mm thickness for a version. Build materials are consistent with its price tier: a mineral crystal (not sapphire), quartz movement, modest water resistance (30 m or so) in many versions. For example, the T20041 is rated at 30 m. Despite the simplicity, many owners praise its durability and that it “just works”. One comment: “It’s a very honest product at an attractive price. The design is clean and minimalist. It’s durable and will last a long time, too.” Features & Specifications. Here are the key features you’ll typically find on the Timex Easy Reader line: Clean analog display with large, easy-to-read Arabic numerals (often 1-12) and a simple minute track. INDIGLO® backlight: Press the crown (or dedicated button depending on the version) and the full dial glows, aiding legibility in low light. Quartz movement: Reliable and low maintenance. Many reviews note that the Easy Reader simply “set and forget”. Case sizes commonly around 35-38 mm depending on variant, thickness often quite slim. Strap/bracelet options: Leather straps, stainless steel bracelets or expansion bands depending on model. One version features an expansion (stretch) bracelet. Variety of styles and finishes: While the core formula remains the same, you’ll find variants with date window, different dial colors or case finishes. For example, the “Easy Reader Bold 43mm” variant. Performance & Wearability. When it comes to daily wear, the Easy Reader delivers exactly what you'd hope for: readability and ease. Legibility: The large numbers, high contrast dial and Indiglo light make telling time quick and easy — even in low light. Comfort: The relatively small case size and thin profile mean it sits nicely on a variety of wrists, under a shirt cuff or casual. Reliability: Because it uses a quartz movement and has a simple feature set, there’s less that can go wrong — battery changes aside. Versatility: It suits casual wear, everyday office use and even more formal settings depending on strap/finish). One reviewer observed it pairs well with T-shirt & jeans and also suits dressier outfits. On the flip side: Because the water resistance is modest, if you’re planning to swim or dive you’ll need a different watch. The mineral crystal is less scratch-resistant than sapphire; if you’re rough on watches, you may see wear over time. Some variants may have a tick louder than high-end watches; one forum noted the “tick” being audible when worn to bed.",
		features: [
			"Easy-to-read dial with large Arabic numerals and simple design for rapid time-reading",
			"Date (and in some models day + date) window for added practicality",
			"Mineral crystal (typical for this model) with a slim case profile for comfortable everyday wear",
			"Water resistance (commonly around 30 m) — suitable for splashes and brief exposure, but not for swimming or diving",
			"Choice of strap/bracelet options: leather strap, expansion/stretch metal bracelet or standard stainless-steel band",
			"Case sizes that suit various wrists (e.g., 35 mm and 38 mm variants) for versatility in wear-style",
		],
		images: [
			"https://m.media-amazon.com/images/I/71S-CCwawqL._AC_SY550_.jpg",
			"https://m.media-amazon.com/images/I/81LzNUh5rtL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/71QoajRRICL._AC_SY550_.jpg",
		],
	},
	{
		slug: "tissot-supersport-chrono",
		name: "Tissot Supersport Chrono",
		rating: 4.6,
		reviews: 4521,
		image: "https://m.media-amazon.com/images/I/81QI4SufOjL._AC_SX679_.jpg",
		badge: "Budget Pick",
		amazonLink: "https://www.amazon.com/Tissot-chronograph-Supersport-T125-617-11-041-00-bracelet/dp/B0BHMNBNY9?&linkCode=ll1&tag=tickreviewcom-20&linkId=72d50710c658a3a6fc19d98b806d5459&language=en_US&ref_=as_li_ss_tl",
		price: "$59",
		description:
			"Tissot Supersport Chrono The Tissot Supersport Chrono is a bold sports-chronograph wristwatch that combines Swiss reliability, robust design, and everyday usability. With a 45.5 mm case, clear chronograph functions, and water-resistance up to 100 m, it’s built for those who want a sporty look but also Swiss-made performance. Design & Build Quality The Supersport Chrono stands out with its muscular case, prominent push-buttons, and large crown guard, giving a definite “sport tool” aesthetic. The 45.5 mm diameter and typically ~11.9 mm thickness mean the watch has presence on the wrist. Materials are high quality: 316L stainless steel or PVD-coated steel in some variants, sapphire crystal for scratch resistance, and a solid case back. The dial design includes imposing applied indexes coated with Super-LumiNova®, providing excellent readability in low light. Strap/bracelet options vary from stainless steel bracelet to leather or textile straps, allowing some personalization of the sporty look. Some models even include quick-release strap changes. Performance & Wearability. Movement: This is a Swiss quartz chronograph (for example ETA G10.212 calibre) — so expect high accuracy, low maintenance, and a good level of features for the price. Chronograph functions include: central seconds hand for the chronograph, 1/10-second timing, 30-minute counter, ADD/SPLIT functions in some editions. Water resistance is rated at 10 bar / 100 m (330 ft) for many models — meaning you can wear it swimming and for daily aquatic exposure (though not deep diving). Wearability note: Because of the size (45.5 mm) and weight, some users with smaller wrists might find it large. For example: Diameter: 45.5 mm… Lug-to-lug: ~50mm… Weight: 188g If your wrist is relatively small (< 16.5 cm/6.5″), it’s worth going in person to try it on.",
		features: [
			"Case diameter: 45.5 mm",
			"Case material: 316L stainless steel (some variants with PVD or rose-gold PVD)",
			"Crystal: Scratch-resistant sapphire crystal",
			"Movement: Swiss quartz chronograph (ETA G10.212) with 1/10 second, 30 minute counters, ADD/SPLIT functions, and End-of-Life (EOL) indicator for the battery",
			"Chronograph: Central chronograph seconds, sub-dials for 1/10 sec and 30 minutes",
			"Tachymeter scale (on bezel or fixed glass) for speed/distance calculations",
			"Lume: Super-LumiNova® on hour markers and hands for high legibility",
			"Water resistance: Up to 100 m / 10 bar in many models",
		],
		images: [
			"https://m.media-amazon.com/images/I/81QI4SufOjL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/71Dvv+L3QZL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/81bX5kYonpL._AC_SX679_.jpg",
		],
	},
	{
		slug: "bulova-mens-classic-sutton-4-hand-automatic-watch",
		name: "Bulova Men's Classic Sutton 4-Hand Automatic Watch",
		rating: 4.9,
		reviews: 1456,
		image: "https://m.media-amazon.com/images/I/71fLKaBwOAL._AC_SX679_.jpg",
		badge: "Premium Choice",
		amazonLink: "https://www.amazon.com/Bulova-Classic-Automatic-Stainless-Silver-Tone/dp/B004I5GOK8?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=62e1810017ddd313b73c1ca1e62f1f3c&language=en_US&ref_=as_li_ss_tl",
		price: "$595",
		description:
			"The Bulova Men’s Classic Sutton Automatic combines timeless design with a touch of modern mechanical flair. It's not just a dress watch — it's a piece that bridges elegance and engineering. With its open-heart dial, visible movement, and sophisticated detailing, this timepiece appeals to anyone who appreciates both aesthetics and craftsmanship. Unlike many quartz dress watches in its price range, the Sutton's automatic movement gives it life — a smooth sweeping seconds hand and a view into its mechanical heart. This watch feels alive on the wrist, offering both sophistication and personality for everyday business wear or formal occasions. Design & Build Quality. At first glance, the Sutton's dial immediately catches the eye. The open-heart window at 7 o'clock reveals the oscillating balance wheel — a subtle reminder that this is a true automatic, not a battery-powered piece. The sunray dial finish, combined with Roman numeral hour markers and skeleton hands, creates a refined, vintage-inspired look that never feels outdated. The case measures around 43 mm, giving it a bold wrist presence while remaining proportionate for most men's wrists. The stainless-steel construction feels solid, well-polished, and substantial without being heavy. A domed mineral crystal covers the dial, offering clarity and decent scratch resistance. On the back, you'll find an exhibition case back — another window into the automatic movement. It's a nice touch that reinforces Bulova's attention to mechanical artistry at an accessible price. The watch is typically paired with a brown or black leather strap, or stainless-steel bracelet depending on variant — both complement the design perfectly. Movement & Performance. Inside, the Sutton runs on a Japanese-made automatic movement, visible through both the front open-heart and rear exhibition case back. The four-hand configuration includes hour, minute, second, and 24-hour sub-dial, adding both functionality and balance to the dial layout. Accuracy is solid for an entry-level automatic — you can expect a slight deviation of a few seconds per day, which is standard for this type of movement. Power reserve is approximately 40 hours, so if you set it down for a day or two, it will keep running until you’re ready to wear it again. Unlike quartz watches, there’s no battery to replace — simply wear it daily or give it a few winds via the crown to keep it ticking smoothly.",
		features: [
			"Automatic self-winding movement — no battery required; powered by wrist motion",
			"4-hand configuration: hour, minute, sweeping second hand, and 24-hour sub-dial",
			"Open-heart dial window showing internal mechanics",
			"Exhibition case back revealing the full movement",
			"Case diameter: approximately 43 mm",
			"Case material: stainless steel with polished and brushed finishes",
			"Crystal: domed mineral glass for durability and clear viewing",
			"Dial options: silver, blue, or black sunray finishes (depending on variant)",
		],
		images: ["https://m.media-amazon.com/images/I/71fLKaBwOAL._AC_SX679_.jpg"],
	},
	{
		slug: "bertucci-a2t-mens-watch",
		name: "BERTUCCI A-2T Men's Watch",
		rating: 4.7,
		reviews: 1842,
		image: "https://m.media-amazon.com/images/I/717ghGFCkML._AC_SY741_.jpg",
		badge: "Tactical Choice",
		amazonLink: "https://www.amazon.com/Bertucci-12122-Original-Classics-Titanium/dp/B003G65OHE?&linkCode=ll1&tag=tickreviewcom-20&linkId=44cb9cda8cc8392399a2c1ddc00bf28e&language=en_US&ref_=as_li_ss_tl",
		price: "$199",
		description:
			"The BERTUCCI A-2T is a field watch built for those who demand reliability in the toughest conditions. Designed with military and outdoor enthusiasts in mind, this timepiece combines rugged construction with practical functionality. The titanium case makes it incredibly lightweight yet durable, while the Swiss-made movement ensures precision timekeeping. Whether you're hiking through rough terrain, working in demanding environments, or simply want a watch that can handle anything you throw at it, the A-2T delivers. The watch features a clean, highly legible dial with bold numerals and luminous hands that glow brightly in low-light conditions. The unidirectional rotating bezel adds functionality for timing activities, and the scratch-resistant sapphire crystal protects the dial from daily wear. At 40mm, the case size is perfectly balanced — large enough to make a statement but not so oversized that it becomes cumbersome. The nylon strap is comfortable, quick-drying, and easily replaceable, making it ideal for active lifestyles. What sets the A-2T apart is its attention to detail and build quality at this price point. The titanium construction means it's hypoallergenic and won't corrode, even in saltwater environments. The 100m water resistance makes it suitable for swimming and water sports. Users consistently praise its durability, with many reporting years of hard use without issues. The watch runs on a reliable Swiss quartz movement, offering accuracy and low maintenance. One reviewer noted: 'This watch has been through hell and back — camping, construction work, ocean swimming — and it still looks and runs like new.' The A-2T is a true tool watch that doesn't compromise on quality.",
		features: [
			"Titanium case construction — lightweight, hypoallergenic, and corrosion-resistant",
			"Swiss quartz movement for reliable accuracy and low maintenance",
			"Sapphire crystal with anti-reflective coating for superior scratch resistance",
			"Unidirectional rotating bezel for timing functions",
			"Super-LumiNova luminous hands and markers for excellent low-light visibility",
			"100m (330ft) water resistance — suitable for swimming and water sports",
			"Nylon strap with quick-release system for easy changes",
			"Case diameter: 40mm with 12mm thickness",
			"Screw-down crown for enhanced water resistance",
			"Date display at 3 o'clock position",
		],
		images: ["https://m.media-amazon.com/images/I/717ghGFCkML._AC_SY741_.jpg"],
	},
	{
		slug: "stuhrling-original-mens-dive-watch",
		name: "Stuhrling Original Men's Dive Watch",
		rating: 4.6,
		reviews: 2134,
		image: "https://m.media-amazon.com/images/I/81OjfrROf8L._AC_SY535_.jpg",
		badge: "Dive Ready",
		amazonLink: "https://www.amazon.com/Stuhrling-Original-Movement-Stainless-Resistant/dp/B0CWJZPWJF?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=000ad5eb22abb9a69d9d226096a82cb6&language=en_US&ref_=as_li_ss_tl",
		price: "$149",
		description:
			"The Stuhrling Original Men's Dive Watch brings professional diving capabilities to an accessible price point. This timepiece is designed for serious water enthusiasts who need a reliable tool watch without breaking the bank. With 200m water resistance, a robust automatic movement, and classic dive watch styling, it punches well above its weight class. The watch features a bold 42mm stainless steel case with a unidirectional rotating bezel — essential for tracking dive times safely. The dial is highly legible with large luminous markers and hands that glow brightly underwater or in dark conditions. The date window at 3 o'clock adds everyday practicality. What makes this watch particularly impressive is its automatic movement. Unlike many budget dive watches that use quartz, the Stuhrling features a mechanical self-winding movement that you can see through the exhibition case back. Watch enthusiasts appreciate this transparency and the smooth sweeping seconds hand that comes with automatic movements. The build quality is solid throughout. The screw-down crown ensures water resistance, while the mineral crystal protects the dial from scratches. The stainless steel bracelet feels substantial and includes a dive extension clasp for wearing over a wetsuit. At 200m water resistance, this watch is rated for recreational scuba diving, not just swimming. Users report excellent value for money, with many comparing it favorably to watches costing twice as much. One diver noted: 'I've taken this watch on multiple dive trips and it's performed flawlessly. The lume is bright, the bezel action is smooth, and the automatic movement keeps excellent time.' Whether you're an actual diver or simply appreciate the robust aesthetic of dive watches, the Stuhrling Original delivers impressive quality and functionality.",
		features: [
			"Automatic self-winding movement with exhibition case back",
			"200m (660ft) water resistance — suitable for recreational scuba diving",
			"42mm stainless steel case with brushed and polished finishes",
			"Unidirectional rotating bezel with luminous pip for dive timing",
			"Highly luminous dial with large markers and hands for underwater visibility",
			"Screw-down crown for enhanced water resistance",
			"Mineral crystal with anti-reflective coating",
			"Date display at 3 o'clock position",
			"Stainless steel bracelet with dive extension clasp",
			"Solid case back with exhibition window to view the movement",
		],
		images: ["https://m.media-amazon.com/images/I/81OjfrROf8L._AC_SY535_.jpg"],
	},
	{
		slug: "swarovski-cosmopolitan-crystal-watch",
		name: "Swarovski Cosmopolitan Crystal Watch",
		rating: 4.8,
		reviews: 987,
		image: "https://m.media-amazon.com/images/I/812V0eTigkL._AC_SX679_.jpg",
		badge: "Luxury Style",
		amazonLink: "https://www.amazon.com/Swarovski-Cosmopolitan-Bracelet-Gold-Tone-Finish/dp/B0B1F6TPQX?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=66776343f51eb1fb9b8987f446b2ba42&language=en_US&ref_=as_li_ss_tl",
		price: "$399",
		description:
			"The Swarovski Cosmopolitan Crystal Watch is where jewelry meets horology. This isn't just a timepiece — it's a statement of elegance and sophistication. Adorned with Swarovski's signature crystals, this watch transforms the simple act of checking the time into a moment of luxury. The design is unmistakably feminine and glamorous, perfect for special occasions or adding sparkle to everyday outfits. The watch features a sleek gold-tone case and bracelet that catches the light beautifully. The dial is encircled with precision-cut Swarovski crystals that shimmer with every movement. The minimalist dial design keeps the focus on the crystals while maintaining excellent readability. At 32mm, the case size is perfectly proportioned for most women's wrists — elegant without being oversized. What sets this watch apart is Swarovski's attention to detail and crystal craftsmanship. Each stone is precisely set and secured, creating a continuous sparkle around the bezel. The bracelet itself is a work of art, with a comfortable mesh design that drapes elegantly on the wrist. The magnetic clasp makes it easy to put on and take off while ensuring a secure fit. The Swiss-made quartz movement ensures accurate timekeeping with minimal maintenance. The watch is water-resistant to 50m, making it suitable for everyday wear including hand washing and light splashes (though you'll want to remove it before swimming to protect the crystals). Users consistently praise the watch's beauty and quality, with many noting it receives compliments wherever they go. One reviewer shared: 'This watch is absolutely stunning. The crystals catch the light perfectly, and it feels luxurious on the wrist. It's become my go-to piece for both work and evening events.' Whether you're dressing up for a special occasion or want to add a touch of glamour to your daily routine, the Swarovski Cosmopolitan delivers timeless elegance.",
		features: [
			"Precision-cut Swarovski crystals encircling the dial",
			"Swiss-made quartz movement for reliable accuracy",
			"32mm gold-tone stainless steel case",
			"Elegant mesh bracelet with magnetic clasp closure",
			"Minimalist dial design with crystal hour markers",
			"Scratch-resistant mineral crystal",
			"50m water resistance — suitable for everyday wear",
			"Gold-tone finish throughout for cohesive luxury aesthetic",
			"Slim profile that slides easily under sleeves",
			"Comes in signature Swarovski packaging — perfect for gifting",
		],
		images: ["https://m.media-amazon.com/images/I/812V0eTigkL._AC_SX679_.jpg"],
	},
	{
		slug: "invicta-mens-watch",
		name: "Invicta Men's Watch",
		rating: 4.5,
		reviews: 3421,
		image: "https://m.media-amazon.com/images/I/71PH7dMqe0L._AC_SY695_.jpg",
		badge: "Bold Design",
		amazonLink: "https://www.amazon.com/Invicta-19656-I-Force-Analog-Display/dp/B00XM0KQ5E?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=cbdf9ddcabcd77031afb034083438784&language=en_US&ref_=as_li_ss_tl",
		price: "$89",
		description:
			"The Invicta Men's I-Force Watch is designed for those who want maximum impact on the wrist. This is a bold, masculine timepiece that makes no apologies for its size or presence. With its military-inspired design, robust construction, and impressive array of features, it's built for men who live active lifestyles and want a watch that can keep up. The watch features a substantial 46mm case that commands attention. The black dial with contrasting white and red accents ensures excellent readability, while the date display adds everyday functionality. The unidirectional rotating bezel is both practical and adds to the tactical aesthetic. The flame-fusion crystal is highly scratch-resistant, protecting the dial from daily wear and tear. What makes this Invicta particularly appealing is its value proposition. You get a Swiss quartz movement, 100m water resistance, and solid build quality at a very accessible price point. The stainless steel case and bracelet feel substantial and well-made. The bracelet includes a fold-over clasp with safety closure, ensuring the watch stays securely on your wrist during active pursuits. The I-Force collection is inspired by military field watches, and this model captures that rugged spirit perfectly. The bold numerals, luminous hands, and tactical styling make it ideal for outdoor activities, sports, or simply making a statement. At 100m water resistance, it's suitable for swimming and water sports (though not diving). Users appreciate the watch's bold presence and reliable performance. One owner noted: 'This watch is a beast on the wrist in the best way possible. It's built like a tank, keeps accurate time, and gets noticed. For the price, you can't beat the quality and features.' Whether you're drawn to military-inspired designs or simply want a watch with serious wrist presence, the Invicta I-Force delivers impressive value and style.",
		features: [
			"Swiss quartz movement for reliable accuracy",
			"46mm stainless steel case with bold masculine presence",
			"Flame-fusion crystal for superior scratch resistance",
			"Unidirectional rotating bezel for timing functions",
			"100m (330ft) water resistance — suitable for swimming",
			"Luminous hands and markers for low-light visibility",
			"Date display at 3 o'clock position",
			"Stainless steel bracelet with fold-over clasp and safety closure",
			"Black dial with high-contrast white and red accents",
			"Military-inspired tactical design aesthetic",
		],
		images: ["https://m.media-amazon.com/images/I/71PH7dMqe0L._AC_SY695_.jpg"],
	},
	{
		slug: "invicta-speedway-51mm-silicone-quartz",
		name: "Invicta Men's Speedway 51mm Silicone Quartz Watch",
		rating: 4.6,
		reviews: 2876,
		image: "https://m.media-amazon.com/images/I/81WPtR+9qEL._AC_SY695_.jpg",
		badge: "Oversized",
		amazonLink: "https://www.amazon.com/Invicta-Speedway-Quartz-Stainless-Polyurethane/dp/B01M73JZYP?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=1f9b440bcc7c2dcd96fc205b0b9568fc&language=en_US&ref_=as_li_ss_tl",
		price: "$119",
		description:
			"The Invicta Speedway 51mm is not for the faint of heart. This is an oversized chronograph that dominates the wrist with its massive 51mm case and bold racing-inspired design. If you want a watch that makes an unmistakable statement and turns heads wherever you go, the Speedway delivers in spades. This timepiece is inspired by motorsports and racing culture, with a design that emphasizes speed, power, and performance. The watch features a complex multi-dial chronograph layout with three sub-dials for tracking elapsed time. The tachymeter bezel allows you to calculate speed based on time and distance — a classic racing complication. The dial is busy in the best way, packed with information and visual interest that racing enthusiasts will appreciate. At 51mm, this watch is genuinely massive. It's designed for larger wrists and those who embrace the oversized watch trend. The case is stainless steel with a polished finish that catches the light dramatically. Despite its size, the silicone strap keeps it comfortable for all-day wear. The strap is flexible, durable, and perfect for active lifestyles or sports activities. The Swiss quartz chronograph movement ensures accurate timekeeping and reliable chronograph functions. The watch is water-resistant to 100m, making it suitable for swimming (though you'll want to be mindful of its size in the water). The flame-fusion crystal protects the dial from scratches and impacts. Users who love oversized watches consistently praise the Speedway's bold presence and value. One enthusiast shared: 'This watch is absolutely massive and I love it. It's a conversation starter everywhere I go. The chronograph works perfectly, and the build quality is impressive for the price.' The Speedway isn't trying to be subtle — it's designed for maximum impact. If you want a watch that announces your presence and celebrates bold, unapologetic style, the Invicta Speedway 51mm delivers exactly that.",
		features: [
			"Massive 51mm stainless steel case for maximum wrist presence",
			"Swiss quartz chronograph movement with three sub-dials",
			"Tachymeter bezel for speed calculations",
			"100m (330ft) water resistance — suitable for swimming",
			"Flame-fusion crystal for scratch resistance",
			"Comfortable silicone strap ideal for sports and active wear",
			"Luminous hands for visibility in low light",
			"Date display integrated into the dial",
			"Racing-inspired design with bold color accents",
			"Chronograph functions: 60-second, 30-minute, and 1/10-second sub-dials",
		],
		images: ["https://m.media-amazon.com/images/I/81WPtR+9qEL._AC_SY695_.jpg"],
	},
	{
		slug: "osprey-daylite-expandable-travel-pack",
		name: "Osprey Daylite Expandable 26+6 Travel Pack, Black",
		rating: 4.8,
		reviews: 1456,
		image: "https://m.media-amazon.com/images/I/61hRlArltnL._AC_SL1500_.jpg",
		badge: "Best Carry-On",
		amazonLink: "https://www.amazon.com/Osprey-Daylite-Expandable-Travel-Black/dp/B0CN1JCRSD?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=d1a0a80f75fc62df8fbcf2ff23e0073f&language=en_US&ref_=as_li_ss_tl",
		price: "$129",
		description:
			"The Osprey Daylite Expandable 26+6 is the ultimate versatile daypack for travel. With 26 liters of main volume plus an expandable 6-liter section, it easily adapts to short trips or everyday use. Built with Osprey's legendary durability, it features a padded laptop sleeve (up to 16”), breathable back panel, and multiple organizational pockets. Perfect as a personal item on flights or a reliable daily backpack.",
		features: [
			"26L + 6L expandable capacity",
			"Padded laptop sleeve (up to 16”)",
			"Breathable mesh back panel",
			"Multiple zippered pockets and key clip",
			"Side compression straps and top handle",
			"Made from durable recycled materials",
		],
		images: [
			"https://m.media-amazon.com/images/I/61hRlArltnL._AC_SL1500_.jpg",
		],
	},
	{
		slug: "wrangler-hardside-spinner-luggage",
		name: "Wrangler Hardside Spinner Luggage, Blue Heaven, Carry-On 20-Inch",
		rating: 4.7,
		reviews: 3210,
		image: "https://m.media-amazon.com/images/I/81afxA+BHcL._AC_SL1500_.jpg",
		badge: "Best Budget Luggage",
		amazonLink: "https://www.amazon.com/Wrangler-Spinner-Carry-Luggage-Heaven/dp/B0C7Y5NGMY?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=de40882e3c7637173254d10d1c982259&language=en_US&ref_=as_li_ss_tl",
		price: "$69",
		description:
			"This 20-inch Wrangler carry-on spinner offers excellent value with its durable ABS hardshell, smooth 360° wheels, and TSA-approved lock. Lightweight yet sturdy, it fits most airline overhead bins and provides ample space for a weekend trip. The vibrant Blue Heaven color adds style without sacrificing practicality.",
		features: [
			"20-inch carry-on size (22 x 14 x 9 inches)",
			"ABS hardshell for impact resistance",
			"360° double spinner wheels",
			"TSA-approved combination lock",
			"Interior compression straps and mesh pocket",
			"Expandable for extra packing space",
		],
		images: [
			"https://m.media-amazon.com/images/I/81afxA+BHcL._AC_SL1500_.jpg",
		],
	},
	{
		slug: "kitsch-continuous-spray-bottle",
		name: "Kitsch Continuous Spray Bottle for Hair – Terracotta, 150ml",
		rating: 4.8,
		reviews: 2874,
		image: "https://m.media-amazon.com/images/I/51u3yqZIjWL._AC_SL1250_.jpg",
		badge: "Best Hair Spray Bottle",
		amazonLink: "https://www.amazon.com/Kitsch-Spray-Bottle-Hair-Hairstyling/dp/B0CVZWMD34?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=0255dc972afc5637c52110d1909fcafd&language=en_US&ref_=as_li_ss_tl",
		price: "$12",
		description:
			"The Kitsch Continuous Mist Spray Bottle delivers a fine, even mist perfect for hair styling, plants, or cleaning. Made from recycled plastic, it features a continuous spray mechanism that works in any position — great for quick wet-downs or misting. The stylish terracotta color looks great on any vanity.",
		features: [
			"150ml capacity",
			"Fine continuous mist spray",
			"Works upside-down",
			"Made from recycled materials",
			"BPA-free and leak-proof",
			"Ideal for hair, skin, plants & cleaning",
		],
		images: [
			"https://m.media-amazon.com/images/I/51u3yqZIjWL._AC_SL1250_.jpg",
		],
	},
	{
		slug: "18pack-tsa-approved-travel-bottles",
		name: "18-Pack TSA-Approved Silicone Travel Bottles",
		rating: 4.7,
		reviews: 4123,
		image: "https://m.media-amazon.com/images/I/61Y+Leafr0L._SL1138_.jpg",
		badge: "Best Toiletry Set",
		amazonLink: "https://www.amazon.com/Toiletries-Approved-Containers-Conditioner-Essentials/dp/B0BZWMJM2F?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=eda9bdcb9ab793a7c38a9661232afd8d&language=en_US&ref_=as_li_ss_tl",
		price: "$19",
		description:
			"This 18-piece set of leak-proof silicone travel bottles is TSA-approved and perfect for carrying shampoo, conditioner, lotion, and more. Includes flip caps, spray caps, and pump tops so you can customize for any liquid. Durable, lightweight, and reusable — a must-have for every traveler.",
		features: [
			"18 bottles + 4 accessories (flip, spray, pump, funnel)",
			"3 oz / 89 ml each — TSA compliant",
			"Food-grade silicone, BPA-free",
			"Leak-proof and collapsible",
			"Clear labels included",
		],
		images: [
			"https://m.media-amazon.com/images/I/61Y+Leafr0L._SL1138_.jpg",
		],
	},
	{
		slug: "coid-ea-waterproof-shoe-bags",
		name: "COIDEA Waterproof Travel Drawstring Shoe Bags (5-Pack)",
		rating: 4.8,
		reviews: 1987,
		image: "https://m.media-amazon.com/images/I/616K24V+mkL._AC_SL1500_.jpg",
		badge: "Best Shoe Organizers",
		amazonLink: "https://www.amazon.com/COIDEA-Drawstring-Waterproof-Dustproof-Portable/dp/B0C6X2VP9R?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=65c8f9e835fea20f7dacb9e59056cf47&language=en_US&ref_=as_li_ss_tl",
		price: "$15",
		description:
			"Keep your suitcase clean with these waterproof drawstring shoe bags. Made of durable, transparent material, they protect shoes from dirt and moisture while keeping everything organized. Perfect size for sneakers, dress shoes, or heels.",
		features: [
			"Set of 5 bags",
			"15.7 x 11.8 inches each",
			"Waterproof and dustproof",
			"Strong drawstring closure",
			"Transparent for easy identification",
		],
		images: [
			"https://m.media-amazon.com/images/I/616K24V+mkL._AC_SL1500_.jpg",
		],
	},
	{
		slug: "bagail-8-set-packing-cubes",
		name: "BAGAIL 8 Set Packing Cubes – Cream",
		rating: 4.8,
		reviews: 5678,
		image: "https://m.media-amazon.com/images/I/61aFuRVWe3L._AC_SL1280_.jpg",
		badge: "Best Packing Cubes",
		amazonLink: "https://www.amazon.com/BAGAIL-Packing-Lightweight-Organizers-Toiletry/dp/B08S35399Y?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=0ca4812937ae228bfe8cf806621d55d1&language=en_US&ref_=as_li_ss_tl",
		price: "$29",
		description:
			"These lightweight, durable packing cubes help you pack more efficiently and stay organized. The 8-piece set includes multiple sizes and a laundry bag. Breathable mesh tops make it easy to see contents, and the cream color adds a premium look.",
		features: [
			"8 pieces (various sizes)",
			"Breathable mesh top",
			"Compression zippers",
			"Includes laundry bag",
			"Lightweight ripstop nylon",
		],
		images: [
			"https://m.media-amazon.com/images/I/61aFuRVWe3L._AC_SL1280_.jpg",
		],
	},
	{
		slug: "teyssor-spray-bottles-2-pack",
		name: "Teyssor Spray Bottles – 2 Pack, 300ml",
		rating: 4.7,
		reviews: 2341,
		image: "https://m.media-amazon.com/images/I/61sSGzCNGbL._AC_SL1500_.jpg",
		badge: "Best Value Spray Bottles",
		amazonLink: "https://www.amazon.com/Teyssor-Mister-Water-Spray-Bottle/dp/B0D22PPZCL?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=5f41e23b78673d2bb9b7c21000585ead&language=en_US&ref_=as_li_ss_tl",
		price: "$11",
		description:
			"Two 300ml BPA-free plastic spray bottles with adjustable nozzles for fine mist or stream. Perfect for hair, cooking, cleaning, or plants. Durable and leak-proof with a comfortable trigger.",
		features: [
			"2 × 300ml bottles",
			"Adjustable nozzle (mist to stream)",
			"BPA-free plastic",
			"Ergonomic trigger",
			"Leak-proof design",
		],
		images: [
			"https://m.media-amazon.com/images/I/61sSGzCNGbL._AC_SL1500_.jpg",
		],
	},
	{
		slug: "bagsmart-toiletry-bag",
		name: "BAGSMART Toiletry Bag with Hanging Hook – Black, Medium",
		rating: 4.8,
		reviews: 3987,
		image: "https://m.media-amazon.com/images/I/61gMY7ZvcrL._SL1500_.jpg",
		badge: "Best Toiletry Organizer",
		amazonLink: "https://www.amazon.com/Water-resistant-Organizer-Accessories-Container-Toiletries/dp/B07SL2RKJK?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=e046a8b121a016f9834baed8c3ba17bf&language=en_US&ref_=as_li_ss_tl",
		price: "$25",
		description:
			"This water-resistant toiletry bag features a hanging hook, multiple compartments, and plenty of space for full-size bottles. The transparent pockets make it easy to find what you need, and the compact design fits perfectly in luggage.",
		features: [
			"Water-resistant material",
			"Hanging hook for convenience",
			"Multiple zippered compartments",
			"Transparent pockets for visibility",
			"Compact yet spacious (medium size)",
		],
		images: [
			"https://m.media-amazon.com/images/I/61gMY7ZvcrL._SL1500_.jpg",
		],
	},
	{
		slug: "osprey-daylite-expandable-travel-pack-black-2",
		name: "Osprey Daylite Expandable 26+6 Travel Pack, Black",
		rating: 4.8,
		reviews: 1456,
		image: "https://m.media-amazon.com/images/I/61hRlArltnL._AC_SL1500_.jpg",
		badge: "Best Carry-On",
		amazonLink: "https://www.amazon.com/Osprey-Daylite-Expandable-Travel-Black/dp/B0CN1JCRSD?th=1&linkCode=ll1&tag=tickreviewcom-20&linkId=b3adb5b5486101465e98086e8801e19c&language=en_US&ref_=as_li_ss_tl",
		price: "$129",
		description:
			"The Osprey Daylite Expandable 26+6 is the ultimate versatile daypack for travel. With 26 liters of main volume plus an expandable 6-liter section, it easily adapts to short trips or everyday use. Built with Osprey's legendary durability, it features a padded laptop sleeve (up to 16”), breathable back panel, and multiple organizational pockets. Perfect as a personal item on flights or a reliable daily backpack.",
		features: [
			"26L + 6L expandable capacity",
			"Padded laptop sleeve (up to 16”)",
			"Breathable mesh back panel",
			"Multiple zippered pockets and key clip",
			"Side compression straps and top handle",
			"Made from durable recycled materials",
		],
		images: [
			"https://m.media-amazon.com/images/I/61hRlArltnL._AC_SL1500_.jpg",
		],
	},
];

// export async function generateMetadata(): Promise<Metadata> {
// 	const params = useParams();
// 	const slug = params.slug;
// 	const product = products.find((p) => p.slug === slug)

// 	if (!product) {
// 		return {
// 			title: "Product Not Found",
// 		}
// 	}

// 	return {
// 		title: `${product.name} Review | Tick-Review`,
// 		description: product.description,
// 		openGraph: {
// 			title: `${product.name} Review`,
// 			description: product.description,
// 			images: [product.image],
// 		},
// 	}
// }

export default function ProductPage() {
	const params = useParams();
	const slug = params.slug;
	const product = products.find((p) => p.slug === slug)
	if (!product) {
		notFound()
	}
	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.paw === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"paw=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	const relatedProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3)

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-8">
				{/* Back Button */}
				<Button variant="ghost" asChild className="mb-6">
					<Link href="/">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Home
					</Link>
				</Button>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
					{/* Product Images */}
					<div className="space-y-4">
						<div className="relative aspect-[4/3] rounded-lg overflow-hidden">
							<Image
								src={product.image || "/placeholder.svg"}
								alt={product.name}
								fill
								className="object-contain"
								priority
							/>
							<Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{product.badge}</Badge>
						</div>
						<div className="grid grid-cols-3 gap-4">
							{product.images.map((img, idx) => (
								<div key={idx} className="relative aspect-square rounded-lg overflow-hidden">
									<Image
										src={img || "/placeholder.svg"}
										alt={`${product.name} view ${idx + 1}`}
										fill
										className="object-cover"
									/>
								</div>
							))}
						</div>
					</div>

					{/* Product Info */}
					<div>
						<h1 className="text-4xl font-bold mb-4">{product.name}</h1>

						{/* Rating */}
						<div className="flex items-center gap-4 mb-6">
							<div className="flex items-center">
								{Array.from({ length: 5 }).map((_, i) => (
									<Star
										key={i}
										className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
											}`}
									/>
								))}
							</div>
							<span className="text-lg font-semibold">{product.rating}</span>
							<span className="text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
						</div>

						{/* Description */}
						<p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

						{/* CTA Button */}
						<Button size="lg" className="w-full mb-8" asChild>
							<a href={product.amazonLink} data-auto>
								View on Amazon
								<ExternalLink className="ml-2 h-5 w-5" />
							</a>
						</Button>

						{/* Key Features */}
						<Card className="mb-8">
							<CardContent className="p-6">
								<h2 className="text-2xl font-bold mb-4">Key Features</h2>
								<ul className="space-y-3">
									{product.features.map((feature, idx) => (
										<li key={idx} className="flex items-start gap-3">
											<Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Related Products */}
				<section>
					<h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{relatedProducts.map((relatedProduct) => (
							<Link key={relatedProduct.slug} href={`/products/${relatedProduct.slug}`}>
								<Card className="group hover:shadow-xl transition-all duration-300">
									<CardContent className="p-0">
										<div className="relative h-56 overflow-hidden rounded-t-lg">
											<Image
												src={relatedProduct.image || "/placeholder.svg"}
												alt={relatedProduct.name}
												fill
												className="object-contain group-hover:scale-105 transition-transform duration-300"
											/>
											<Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
												{relatedProduct.badge}
											</Badge>
										</div>
										<div className="p-6">
											<h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
												{relatedProduct.name}
											</h3>
											<div className="flex items-center gap-2">
												<div className="flex items-center">
													{Array.from({ length: 5 }).map((_, i) => (
														<Star
															key={i}
															className={`h-4 w-4 ${i < Math.floor(relatedProduct.rating)
																? "fill-yellow-400 text-yellow-400"
																: "text-gray-300"
																}`}
														/>
													))}
												</div>
												<span className="text-sm text-muted-foreground">{relatedProduct.rating}</span>
											</div>
										</div>
									</CardContent>
								</Card>
							</Link>
						))}
					</div>
				</section>
			</div>
		</div>
	)
}
