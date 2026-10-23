import {
  Author,
  getAllBlogStaticPaths,
  getCompiledBlogForSlug,
  getBlogFrontmatter,
} from "@/lib/markdown";
import { Bloom } from "@/components/views/bloom";
import * as ui from "@/components/views/home-ui";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { slug } = params;
  const res = await getBlogFrontmatter(slug);
  if (!res) return {};
  const { title, description } = res;
  return {
    title,
    description,
  };
}

export async function generateStaticParams() {
  const val = await getAllBlogStaticPaths();
  if (!val) return [];
  return val.map((it) => ({ slug: it }));
}

export default async function BlogPage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;
  const res = await getCompiledBlogForSlug(slug);
  if (!res) notFound();
  const { title, date, cover, authors } = res.frontmatter;
  return (
    <div data-page="blog-post" className={ui.root}>
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="post-h">
        <Bloom />
        <div className={`${ui.wrap} relative pb-28 pt-band`}>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center text-[.9375rem] font-medium text-fog-300 transition-colors duration-200 hover:text-white"
          >
            <ArrowLeftIcon className="mr-1.5 size-4" /> Back to blog
          </Link>
          <p className={`${ui.kicker} !mb-3 text-copper-400`}>{formatDate(date)}</p>
          <h1
            id="post-h"
            className={`${ui.heading} max-w-[26ch] animate-rise text-[clamp(2rem,1.4rem+2.6vw,3rem)] font-normal`}
          >
            {title}
          </h1>
          <div className="mt-8 flex flex-col gap-3">
            <p className="text-[.875rem] text-fog-300">Posted by</p>
            <Authors authors={authors} />
          </div>
        </div>
      </section>
      <article className="mx-auto max-w-[860px] px-gutter pb-pad">
        <Image
          src={cover}
          alt={title}
          width={1200}
          height={675}
          priority
          className="relative -mt-20 aspect-video w-full rounded-card border border-h-line bg-h-surface object-cover shadow-[0_30px_60px_-30px_rgba(11,30,49,.55)]"
        />
        <div className={`${ui.prose} mt-10`}>{res.content}</div>
      </article>
    </div>
  );
}

function Authors({ authors }: { authors: Author[] }) {
  return (
    <div className="flex flex-wrap items-center gap-8">
      {authors.map((author) => (
        <Link href={author.handleUrl} className="flex items-center gap-2.5" key={author.username}>
          <Avatar className="size-10 border-2 border-white/20">
            <AvatarImage src={author.avatar} />
            <AvatarFallback className="bg-white/10 text-white">
              {author.username.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-[.9375rem] font-medium text-white">{author.username}</p>
            <p className="text-[.8125rem] text-fog-300">@{author.handle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
