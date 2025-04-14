import { URLInput } from "@/components/url-input"
import { EmailSignup } from "@/components/email-signup"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-20 md:py-28">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-600 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-400 opacity-20 blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="md:flex md:items-center md:gap-12">
              {/* Left content */}
              <div className="md:w-1/2 md:pr-8">
                <div className="mb-2 inline-block rounded-full bg-emerald-700 px-3 py-1 text-sm font-medium text-emerald-100">
                  Marketing Tag Checker
                </div>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                  Track to <span className="text-emerald-300">Measure</span>
                </h1>
                <p className="mb-8 text-lg text-emerald-100 md:text-xl">
                  Instantly verify if your website has essential marketing tracking tags implemented correctly.
                </p>

                <div className="mb-8 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <URLInput />
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm text-emerald-100">
                  <span className="font-medium">Checks for:</span>
                  {["Google Tag Manager", "Google Analytics 4", "Google Ads", "Meta Pixel"].map((tag) => (
                    <span key={tag} className="rounded-full bg-emerald-800/70 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right illustration */}
              <div className="mt-10 md:mt-0 md:w-1/2">
                <div className="relative mx-auto max-w-md">
                  <div className="rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-800 p-1 shadow-2xl">
                    <div className="rounded-xl bg-white p-4">
                      {/* Browser mockup */}
                      <div className="mb-3 flex items-center border-b pb-2">
                        <div className="mr-2 flex space-x-1">
                          <div className="h-3 w-3 rounded-full bg-red-400"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                          <div className="h-3 w-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-1 rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-500">
                          https://example.com
                        </div>
                      </div>

                      {/* Results mockup */}
                      <div className="space-y-3">
                        <div className="flex items-center rounded-md bg-gray-50 p-2">
                          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-green-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Google Tag Manager</div>
                            <div className="text-xs text-gray-500">Detected</div>
                          </div>
                        </div>

                        <div className="flex items-center rounded-md bg-gray-50 p-2">
                          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-green-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Google Analytics 4</div>
                            <div className="text-xs text-gray-500">Detected</div>
                          </div>
                        </div>

                        <div className="flex items-center rounded-md bg-gray-50 p-2">
                          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-red-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Meta Pixel</div>
                            <div className="text-xs text-gray-500">Not detected</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-emerald-500 opacity-20 blur-xl"></div>
                  <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-emerald-300 opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-emerald-700/50 pt-8 text-center text-sm text-emerald-100">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Fast &lt;5s response time</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>No login required</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>90%+ detection accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Check Your Tracking Tags?</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Properly implemented tracking is essential for measuring marketing performance and making data-driven
            decisions.
          </p>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Verify Implementation</h3>
              <p className="text-gray-600">
                Ensure your marketing tags are correctly installed to accurately track user behavior and campaign
                performance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimize Campaigns</h3>
              <p className="text-gray-600">
                Properly tracked data leads to better marketing decisions, improved ROI, and more effective ad spend
                allocation.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Debug Issues</h3>
              <p className="text-gray-600">
                Quickly identify missing or misconfigured tags that might be affecting your analytics data and marketing
                insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white" id="blog-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Setup Guides</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Learn how to properly implement tracking tags on your website with our step-by-step guides
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl border border-gray-100 h-full flex flex-col">
                <div className="h-3 bg-emerald-500"></div>
                <div className="p-6 flex-grow">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    Tag Manager
                  </span>
                  <h3 className="text-xl font-semibold mt-3 mb-3">How to Set Up Google Tag Manager</h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive step-by-step guide to implementing GTM on your website correctly.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="/blog/setup-google-tag-manager"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl border border-gray-100 h-full flex flex-col">
                <div className="h-3 bg-blue-500"></div>
                <div className="p-6 flex-grow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    Analytics
                  </span>
                  <h3 className="text-xl font-semibold mt-3 mb-3">Install GA4 on Your Website</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to migrate from Universal Analytics to GA4 and set up enhanced measurement.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="/blog/install-ga4"
                    className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                  >
                    Read guide
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl border border-gray-100 h-full flex flex-col">
                <div className="h-3 bg-purple-500"></div>
                <div className="p-6 flex-grow">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                    Social
                  </span>
                  <h3 className="text-xl font-semibold mt-3 mb-3">Add Meta Pixel for Facebook Ads</h3>
                  <p className="text-gray-600 mb-4">
                    Track conversions and optimize your Facebook ad campaigns with proper pixel implementation.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="/blog/add-meta-pixel"
                    className="inline-flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors"
                  >
                    Read guide
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-50 text-emerald-600 font-medium hover:bg-emerald-100 transition-colors"
            >
              View all guides
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-emerald-700">
          <svg
            className="absolute left-0 top-0 h-full w-full text-emerald-800 opacity-20"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 800 800"
            preserveAspectRatio="none"
          >
            <path
              d="M435.442 566.797c-5.24-16.12-17.53-28.41-33.65-33.65l-301.964-98.097c-45.922-14.921-45.922-78.228 0-93.149L400.89 243.702c15.918-5.171 28.061-17.314 33.232-33.232l98.097-301.964c14.921-45.922 78.228-45.922 93.149 0l98.097 301.964c5.171 15.918 17.314 28.061 33.232 33.232l301.964 98.097c45.922 14.921 45.922 78.228 0 93.149L658.597 533.147c-15.918 5.171-28.061 17.314-33.232 33.232l-98.097 301.964c-14.921 45.922-78.228 45.922-93.149 0L336.022 566.379c-.196-.602-.39-1.203-.58-1.803z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M134.442 266.797c-5.24-16.12-17.53-28.41-33.65-33.65L-201.172 135.05c-45.922-14.921-45.922-78.228 0-93.149L99.89-56.298c15.918-5.171 28.061-17.314 33.232-33.232l98.097-301.964c14.921-45.922 78.228-45.922 93.149 0l98.097 301.964c5.171 15.918 17.314 28.061 33.232 33.232l301.964 98.097c45.922 14.921 45.922 78.228 0 93.149L357.597 233.147c-15.918 5.171-28.061 17.314-33.232 33.232l-98.097 301.964c-14.921 45.922-78.228 45.922-93.149 0L35.022 266.379c-.196-.602-.39-1.203-.58-1.803z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Left side with illustration */}
                <div className="bg-emerald-600 md:w-2/5 py-8 px-6 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 mx-auto text-white opacity-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <h3 className="text-white text-xl font-semibold mt-4">Stay in the Loop</h3>
                    <p className="text-emerald-100 mt-2">
                      Get exclusive tips and updates on tracking implementation best practices
                    </p>
                  </div>
                </div>

                {/* Right side with form */}
                <div className="md:w-3/5 p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Stay Updated</h2>
                  <p className="text-gray-600 mb-6">
                    Join our newsletter and get the latest tracking and analytics tips delivered to your inbox.
                  </p>

                  <EmailSignup />

                  <div className="mt-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-emerald-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        We respect your privacy. Your information is safe and you can unsubscribe at any time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Track to Measure. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
