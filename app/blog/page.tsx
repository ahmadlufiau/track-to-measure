import Link from "next/link"

// In a real application, this would come from a database or file system
const blogPosts = [
  {
    title: "How to Set Up Google Tag Manager",
    description: "A step-by-step guide to implementing GTM on your website.",
    slug: "setup-google-tag-manager",
    date: "2023-05-15",
  },
  {
    title: "Install GA4 on Your Website",
    description: "Learn how to migrate from Universal Analytics to GA4.",
    slug: "install-ga4",
    date: "2023-05-10",
  },
  {
    title: "Add Meta Pixel for Facebook Ads",
    description: "Track conversions and optimize your Facebook ad campaigns.",
    slug: "add-meta-pixel",
    date: "2023-05-05",
  },
  {
    title: "Google Ads Conversion Tracking Setup",
    description: "How to properly set up conversion tracking for Google Ads.",
    slug: "google-ads-conversion",
    date: "2023-04-28",
  },
  {
    title: "Common Tracking Tag Issues and Solutions",
    description: "Troubleshoot the most common problems with marketing tags.",
    slug: "tracking-tag-issues",
    date: "2023-04-20",
  },
  {
    title: "Marketing Tag Best Practices",
    description: "Optimize your tracking setup for better data collection.",
    slug: "tag-best-practices",
    date: "2023-04-15",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Blog & Guides</h1>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            Learn how to properly implement and optimize tracking tags for your marketing campaigns
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <div key={post.slug} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl border border-gray-100 h-full flex flex-col">
                  <div className="h-3 bg-emerald-500"></div>
                  <div className="p-6 flex-grow">
                    <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                    <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                  </div>
                  <div className="px-6 pb-6">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors"
                    >
                      Read guide
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
