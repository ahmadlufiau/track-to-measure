"use client"

import { CheckCircle, XCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ResultDisplayProps {
  results: {
    googleTagManager: boolean
    googleAnalytics4: boolean
    googleAdsConversion: boolean
    metaPixel: boolean
    url: string
  }
}

export function ResultDisplay({ results }: ResultDisplayProps) {
  const tags = [
    { name: "Google Tag Manager", detected: results.googleTagManager, slug: "setup-google-tag-manager" },
    { name: "Google Analytics 4", detected: results.googleAnalytics4, slug: "install-ga4" },
    { name: "Google Ads Conversion", detected: results.googleAdsConversion, slug: "google-ads-conversion" },
    { name: "Meta Pixel", detected: results.metaPixel, slug: "add-meta-pixel" },
  ]

  const detectedCount = tags.filter((tag) => tag.detected).length

  return (
    <Card className="mt-8 max-w-xl mx-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">
          Results for <span className="font-normal text-gray-600">{results.url}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tags.map((tag) => (
              <div
                key={tag.name}
                className={`flex items-center p-4 rounded-lg ${tag.detected ? "bg-green-50" : "bg-red-50"}`}
              >
                {tag.detected ? (
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 mr-3" />
                )}
                <div>
                  <p className="font-medium">{tag.name}</p>
                  <p className="text-sm text-gray-600">{tag.detected ? "Detected" : "Not detected"}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-center mb-4">
              {detectedCount === 0
                ? "No tracking tags detected. Set up your tags to start measuring!"
                : detectedCount === tags.length
                  ? "All tracking tags detected. Great job!"
                  : `${detectedCount} of ${tags.length} tracking tags detected.`}
            </p>

            {detectedCount < tags.length && (
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="text-emerald-600 border-emerald-600 hover:bg-emerald-50"
                  onClick={() =>
                    window.scrollTo({ top: document.getElementById("blog-section")?.offsetTop, behavior: "smooth" })
                  }
                >
                  View Setup Guides
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
