import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

interface BlogCardProps {
  title: string
  description: string
  slug: string
}

export function BlogCard({ title, description, slug }: BlogCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${slug}`} className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
          Read guide
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
