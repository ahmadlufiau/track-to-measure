"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, AlertCircle } from "lucide-react"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic client-side validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address" })
      return
    }

    // Create FormData
    const formData = new FormData()
    formData.append("email", email)

    // Use React's useTransition to handle the server action
    startTransition(async () => {
      const result = await subscribeToNewsletter(formData)

      if (result.success) {
        setMessage({ type: "success", text: result.message })
        setEmail("")
      } else {
        setMessage({ type: "error", text: result.message })
      }
    })
  }

  return (
    <div className="w-full">
      {message?.type === "success" ? (
        <div className="bg-emerald-50 p-4 rounded-lg flex items-center justify-center">
          <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
          <p className="text-emerald-700">{message.text}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <div className="flex-grow">
            <Input
              type="email"
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 border-gray-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              disabled={isPending}
            />
          </div>
          <Button
            type="submit"
            className="h-12 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200"
            disabled={isPending}
          >
            {isPending ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Subscribing...
              </span>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
      )}

      {message?.type === "error" && (
        <div className="mt-2 flex items-center text-red-500 text-sm">
          <AlertCircle className="h-4 w-4 mr-1" />
          <p>{message.text}</p>
        </div>
      )}
    </div>
  )
}
