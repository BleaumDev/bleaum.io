import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bloom } from "@/components/views/bloom";
import * as ui from "@/components/views/home-ui";
import {
  Author,
  BlogMdxFrontmatter,
  getAllBlogsFrontmatter,
} from "@/lib/markdown";
import { formatDate2, stringToDate } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogIndexPage() {
  const blogs = (await getAllBlogsFrontmatter()).sort(
    (a, b) => stringToDate(b.date).getTime() - stringToDate(a.date).getTime()
  );
  return (
    <div data-page="blog" className={ui.root}>
      <section
        className={`relative overflow-hidden text-white ${ui.heroBg}`}
        aria-labelledby="blog-h"
      >
        <Bloom />
        <div className={`${ui.wrap} relative py-band`}>
          <h1 id="blog-h" className={`${ui.h1} animate-rise`}>
            Latest from Bleaum
          </h1>
          <p className="mt-4 max-w-[44ch] animate-rise text-[1.25rem] leading-[1.5] text-fog-200 [animation-delay:90ms]">
            All the latest blogs and news, straight from the team.
          </p>
        </div>
      </section>
      <section className="py-pad">
        <div className={`${ui.wrap} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
          {blogs.map((blog) => (
            <BlogCard {...blog} slug={blog.slug} key={blog.slug} />
          ))}
        </div>
      </section>
    </div>
  );
}

function BlogCard({
  date,
  title,
  description,
  slug,
  cover,
  authors,
}: BlogMdxFrontmatter & { slug: string }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={`flex min-h-[400px] flex-col gap-3 rounded-card border border-h-line bg-h-surface p-5 ${ui.lift}`}
    >
      {cover && cover !== "" && (
        <Image
          src={cover}
          alt={title}
          width={400}
          height={225}
          quality={80}
          className="aspect-video w-full rounded-ctl border border-h-line object-cover"
        />
      )}
      <h3 className={ui.h3}>{title}</h3>
      <p className="text-[.9375rem] text-h-muted">{description}</p>
      <div className="mt-auto flex w-full items-center justify-between gap-3 pt-2">
        <p className="text-[.8125rem] text-h-muted">
          Published on {formatDate2(date)}
        </p>
        <AvatarGroup users={authors} />
      </div>
    </Link>
  );
}

function AvatarGroup({ users, max = 4 }: { users: Author[]; max?: number }) {
  const displayUsers = users.slice(0, max);
  const remainingUsers = Math.max(users.length - max, 0);
  const avatar = "border-2 border-h-surface bg-h-surface2 text-h-text";

  return (
    <div className="flex items-center">
      {displayUsers.map((user, index) => (
        <Avatar
          key={user.username}
          className={`inline-block h-9 w-9 ${avatar} ${index !== 0 ? "-ml-3" : ""}`}
        >
          <AvatarImage src={user.avatar} alt={user.username} />
          <AvatarFallback className="bg-h-surface2">
            {user.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ))}
      {remainingUsers > 0 && (
        <Avatar
          className={`-ml-3 inline-block transition-transform hover:translate-y-1 ${avatar}`}
        >
          <AvatarFallback className="bg-h-surface2">
            +{remainingUsers}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
