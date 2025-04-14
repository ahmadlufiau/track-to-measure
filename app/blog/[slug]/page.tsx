import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// In a real application, this would come from a database or markdown files
const blogPosts = {
  "setup-google-tag-manager": {
    title: "How to Set Up Google Tag Manager",
    date: "2023-05-15",
    content: `
      <h2>Introduction to Google Tag Manager</h2>
      <p>Google Tag Manager (GTM) is a free tag management system that allows you to manage and deploy marketing tags (snippets of code or tracking pixels) on your website without having to modify the code.</p>
      
      <h2>Step 1: Create a Google Tag Manager Account</h2>
      <p>Go to <a href="https://tagmanager.google.com/" class="text-emerald-600 hover:underline">tagmanager.google.com</a> and sign in with your Google account. Click on "Create Account" and fill in your account name, country, and container name (usually your website name).</p>
      
      <h2>Step 2: Install the GTM Code</h2>
      <p>After creating your account, GTM will provide you with two code snippets:</p>
      <ul class="list-disc pl-6 my-4">
        <li>The first snippet goes in the <code>&lt;head&gt;</code> of your website</li>
        <li>The second snippet goes immediately after the opening <code>&lt;body&gt;</code> tag</li>
      </ul>
      
      <h2>Step 3: Verify Installation</h2>
      <p>Use the "Preview" mode in GTM to verify that your container is working correctly. You can also use our Tag Checker tool to confirm the installation.</p>
      
      <h2>Step 4: Add Tags, Triggers, and Variables</h2>
      <p>Now you can start adding marketing tags to your GTM container. Common tags include Google Analytics, Facebook Pixel, and conversion tracking pixels.</p>
      
      <h2>Step 5: Publish Your Container</h2>
      <p>Once you've added and tested your tags, click the "Submit" button to publish your container. This will make your tags live on your website.</p>
    `,
  },
  "install-ga4": {
    title: "Install GA4 on Your Website",
    date: "2023-05-10",
    content: `
      <h2>Introduction to Google Analytics 4</h2>
      <p>Google Analytics 4 (GA4) is the latest version of Google Analytics. It uses a different data model than Universal Analytics and provides more comprehensive tracking across websites and apps.</p>
      
      <h2>Step 1: Create a GA4 Property</h2>
      <p>Go to <a href="https://analytics.google.com/" class="text-emerald-600 hover:underline">analytics.google.com</a> and sign in with your Google account. Click on "Admin" and then "Create Property". Select "Web" as the platform and fill in your website details.</p>
      
      <h2>Step 2: Get Your Measurement ID</h2>
      <p>After creating your property, GA4 will provide you with a Measurement ID that starts with "G-". You'll need this ID to set up tracking.</p>
      
      <h2>Step 3: Install the GA4 Tracking Code</h2>
      <p>There are two main ways to install GA4:</p>
      <ul class="list-disc pl-6 my-4">
        <li>Directly on your website by adding the gtag.js code to the <code>&lt;head&gt;</code> of your website</li>
        <li>Through Google Tag Manager (recommended)</li>
      </ul>
      
      <h2>Step 4: Set Up Enhanced Measurement</h2>
      <p>GA4 includes enhanced measurement features that automatically track page views, scrolls, outbound clicks, site search, video engagement, and file downloads. You can enable or disable these features in the GA4 admin section.</p>
      
      <h2>Step 5: Verify Installation</h2>
      <p>Use the "DebugView" in GA4 to verify that your tracking is working correctly. You can also use our Tag Checker tool to confirm the installation.</p>
    `,
  },
  "add-meta-pixel": {
    title: "Add Meta Pixel for Facebook Ads",
    date: "2023-05-05",
    content: `
      <h2>Introduction to Meta Pixel</h2>
      <p>The Meta Pixel (formerly Facebook Pixel) is a piece of code that you place on your website to track visitor activity. It helps you understand the effectiveness of your Facebook and Instagram ads.</p>
      
      <h2>Step 1: Create a Meta Pixel</h2>
      <p>Go to <a href="https://business.facebook.com/events_manager" class="text-emerald-600 hover:underline">Facebook Business Manager</a> and navigate to the Events Manager. Click on "Connect Data Sources" and select "Web" as the data source.</p>
      
      <h2>Step 2: Get Your Pixel ID</h2>
      <p>After creating your pixel, Facebook will provide you with a Pixel ID. You'll need this ID to set up tracking.</p>
      
      <h2>Step 3: Install the Meta Pixel Code</h2>
      <p>There are three main ways to install the Meta Pixel:</p>
      <ul class="list-disc pl-6 my-4">
        <li>Manually add the pixel code to the <code>&lt;head&gt;</code> of your website</li>
        <li>Use a partner integration (like Shopify, WordPress, etc.)</li>
        <li>Through Google Tag Manager (recommended)</li>
      </ul>
      
      <h2>Step 4: Add Standard Events</h2>
      <p>Meta Pixel can track standard events like page views, add to cart, purchase, etc. You'll need to add additional code to track these events.</p>
      
      <h2>Step 5: Verify Installation</h2>
      <p>Use the Facebook Pixel Helper browser extension to verify that your pixel is working correctly. You can also use our Tag Checker tool to confirm the installation.</p>
    `,
  },
  "google-ads-conversion": {
    title: "Google Ads Conversion Tracking Setup",
    date: "2023-04-28",
    content: `
      <h2>Introduction to Google Ads Conversion Tracking</h2>
      <p>Google Ads conversion tracking helps you measure the results of your ad campaigns by tracking specific actions that users take on your website after clicking on your ads.</p>
      
      <h2>Step 1: Create a Conversion Action in Google Ads</h2>
      <p>Sign in to your Google Ads account and navigate to "Tools & Settings" > "Measurement" > "Conversions". Click the blue plus button to create a new conversion action.</p>
      
      <h2>Step 2: Configure Your Conversion Action</h2>
      <p>Select the source of your conversions (usually "Website") and fill in the details about your conversion action, such as name, category, and value.</p>
      
      <h2>Step 3: Get Your Conversion Tag</h2>
      <p>After creating your conversion action, Google Ads will provide you with a conversion tag. This consists of two parts: the global site tag (gtag.js) and the event snippet.</p>
      
      <h2>Step 4: Install the Conversion Tag</h2>
      <p>There are two main ways to install the conversion tag:</p>
      <ul class="list-disc pl-6 my-4">
        <li>Add the global site tag to every page of your website and the event snippet to your conversion page</li>
        <li>Through Google Tag Manager (recommended)</li>
      </ul>
      
      <h2>Step 5: Verify Installation</h2>
      <p>Use the "Tag Assistant" browser extension to verify that your conversion tag is working correctly. You can also use our Tag Checker tool to confirm the installation.</p>
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all guides
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">{post.date}</p>

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <section className="bg-emerald-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need to check your tags?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Use our free tool to verify if your website has the proper tracking tags installed.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 font-medium bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
          >
            Check Your Tags Now
          </Link>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Track to Measure. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
