import { NextResponse } from "next/server"
import axios from "axios"
import * as cheerio from "cheerio"

export async function POST(request: Request) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    // Fetch the HTML content
    let html: string
    let $: cheerio.CheerioAPI
    try {
      const response = await axios.get(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
        timeout: 10000, // 10 second timeout
        maxRedirects: 5,
        validateStatus: (status) => status < 500, // Accept all responses except server errors
      })

      html = response.data
      $ = cheerio.load(html)
    } catch (error) {
      console.error("Error fetching HTML:", error)
      return NextResponse.json({ error: "Failed to fetch HTML" }, { status: 500 })
    }

    // Normalize HTML content - convert to lowercase for case-insensitive matching
    const normalizedHtml = html.toString().toLowerCase()

    // Check for Google Tag Manager
    const gtmPatterns = [
      /googletagmanager\.com\/gtm\.js/i,
      /gtm-[a-z0-9]+/i,
      /<iframe[^>]*src=["']https?:\/\/www\.googletagmanager\.com\/ns\.html\?id=gtm-[a-z0-9]+["']/i,
    ]

    const hasGTM =
      gtmPatterns.some((pattern) => pattern.test(normalizedHtml)) || $("script").text().toLowerCase().includes("gtm-")

    // Check for Google Analytics 4
    const ga4Patterns = [
      /gtag$$.*['"]config['"]\s*,\s*['"](g-[a-z0-9]+)['"]$$/i,
      /googletagmanager\.com\/gtag\/js\?id=g-[a-z0-9]+/i,
      /g-[a-z0-9]{10,}/i,
    ]

    const hasGA4 =
      ga4Patterns.some((pattern) => pattern.test(normalizedHtml)) || $("script").text().toLowerCase().includes("g-")

    // Check for Google Ads Conversion
    const googleAdsPatterns = [
      /gtag\(.*['"]event['"]\s*,\s*['"]conversion['"]/i,
      /googleadservices\.com\/pagead\/conversion/i,
      /google_conversion_id\s*=\s*["']?\d+["']?/i,
      /aw-[a-z0-9]+/i,
    ]

    const hasGoogleAds =
      googleAdsPatterns.some((pattern) => pattern.test(normalizedHtml)) ||
      $("script").text().toLowerCase().includes("google_conversion_id") ||
      $("script").text().toLowerCase().includes("aw-")

    // Check for Meta Pixel
    const metaPixelPatterns = [
      /fbq$$['"]init['"]\s*,\s*['"]\d+['"]$$/i,
      /connect\.facebook\.net\/.*\/fbevents\.js/i,
      /facebook\.com\/tr\?id=\d+/i,
    ]

    const hasMetaPixel =
      metaPixelPatterns.some((pattern) => pattern.test(normalizedHtml)) ||
      $("script").text().toLowerCase().includes("fbq") ||
      $("noscript").text().toLowerCase().includes("facebook.com/tr")

    return NextResponse.json({
      googleTagManager: hasGTM,
      googleAnalytics4: hasGA4,
      googleAdsConversion: hasGoogleAds,
      metaPixel: hasMetaPixel,
    })
  } catch (error) {
    console.error("Error checking tags:", error)

    return NextResponse.json({ error: "Failed to check tags" }, { status: 500 })
  }
}
