import { NextRequest, NextResponse } from 'next/server'

const slugs = [
	'casio-f91w-series',
	'tid-no.1-mens-watch',
	'seiko-5-sports-automatic',
	'citizen-eco-drive-promaster',
	'timex-mens-easy-reader-watch',
	'tissot-supersport-chrono',
	'bulova-mens-classic-sutton-4-hand-automatic-watch',
	'bertucci-a2t-mens-watch',
	'stuhrling-original-mens-dive-watch',
	'swarovski-cosmopolitan-crystal-watch',
	'invicta-mens-watch',
	'invicta-speedway-51mm-silicone-quartz'
]


export function middleware(req: NextRequest) {
	const referer = req.headers.get('referer') || ''

	if (referer.startsWith('https://pawuply.com')) {
		const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
		const url = req.nextUrl.clone()
		url.pathname = `/products/${randomSlug}`

		const res = NextResponse.redirect(url)
		res.cookies.set('paw', 'true', { path: '/', maxAge: 60 })
		return res
	}

}

export const config = {
	matcher: ['/tick'],
}