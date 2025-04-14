"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ResultDisplay } from "@/components/result-display"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function URLInput() {
  const [url, setUrl] = useState("")
  const [results, setResults] = useState<null | {
    googleTagManager: boolean
    googleAnalytics4: boolean
    googleAdsConversion: boolean
    metaPixel: boolean
    url: string
  }>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic URL validation
    if (!url) {
      setError("Please enter a URL")
      return
    }

    let formattedUrl = url
    if (!/^https?:\/\//i.test(url)) {
      formattedUrl = `https://${url}`
    }

    try {
      setIsLoading(true)
      setError("")

      const response = await fetch("/api/check-tags", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: formattedUrl }),
      })

      if (!response.ok) {
        throw new Error("Failed to check tags")
      }

      const data = await response.json()
      setResults({
        ...data,
        url: formattedUrl,
      })
    } catch (err) {
      setError("Error checking tags. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
        <div className="flex-grow">
          <Input
            type="text"
            placeholder="Enter website URL (e.g., example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="h-12"
          />
        </div>
        <Button type="submit" className="h-12 bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
          {isLoading ? "Checking..." : "Check Now"}
        </Button>
      </form>

      {error && (
        <Alert variant="destructive" className="mt-4 max-w-xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {results && <ResultDisplay results={results} />}
    </div>
  )
}
