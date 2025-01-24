import { Doc } from "contentlayer/generated";
import { differenceInDays, format } from 'date-fns';
import { Badge } from '~/components/ui/badge';
import { Calendar } from 'lucide-react';
import { H4 } from '~/components/typography';
import Link from 'next/link';


interface BlogCardProps {
    blog: Doc,
}

export function BlogCard({blog}:BlogCardProps){
    const isNew = differenceInDays(new Date(), new Date(blog.publishedAt)) <= 7;
              const isUpdated =
                differenceInDays(new Date(blog.updatedAt), new Date(blog.publishedAt)) > 0 &&
                differenceInDays(new Date(), new Date(blog.updatedAt)) <= 7;
    return (<Link key={blog.slug} href={`/blog/${blog.slugAsParams}`}>
    <div className="group relative overflow-hidden rounded-lg border hover:bg-primary/5 p-6 transition-all duration-500 bg-card">
      <H4 className="flex items-center gap-2 text-xl font-normal text-secondary-foreground transition-colors duration-500 group-hover:text-orange-200 md:text-xl">
        {blog.title}
      </H4>
      <p className="mt-2 text-sm text-muted-foreground">{blog.description}</p>
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
      <div className="flex gap-2 items-center">{isNew && (
          <Badge className="border-0 bg-gradient-to-br from-green-400 to-blue-500 text-white">
            New
          </Badge>
        )}
        {isUpdated && (
          <Badge className="border-0 bg-gradient-to-br from-purple-400 to-pink-500 text-white">
            Updated
          </Badge>
        )}</div>
        <div className="flex gap-2 items-center">
        <Calendar className="size-3" />
        <span>{format(new Date(blog.updatedAt), 'MMMM d, yyyy')}</span>
        </div>
      </div>
    </div>
  </Link>)
}


