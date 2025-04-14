"use server"

import { supabase } from "@/lib/supabase"
import { z } from "zod"

// Define a schema for email validation
const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export async function subscribeToNewsletter(formData: FormData) {
  try {
    // Get email from form data
    const email = formData.get("email") as string

    // Validate email
    const result = emailSchema.safeParse({ email })

    if (!result.success) {
      return {
        success: false,
        message: result.error.errors[0].message,
      }
    }

    // Check if email already exists
    const { data: existingSubscriber } = await supabase
      .from("newsletter_subscribers")
      .select("*")
      .eq("email", email)
      .single()

    if (existingSubscriber) {
      return {
        success: false,
        message: "This email is already subscribed to our newsletter.",
      }
    }

    // Insert email into Supabase
    const { error } = await supabase.from("newsletter_subscribers").insert([
      {
        email,
        subscribed_at: new Date().toISOString(),
        status: "active",
      },
    ])

    if (error) {
      console.error("Error inserting subscriber:", error)
      return {
        success: false,
        message: "Failed to subscribe. Please try again.",
      }
    }

    return {
      success: true,
      message: "Thanks for subscribing! You will get updates from us when we have something new.",
    }
  } catch (error) {
    console.error("Subscription error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}
