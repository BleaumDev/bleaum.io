import DocsBreadcrumb from "@/components/docs-breadcrumb";
import DocsMenu from "@/components/docs-menu";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { Leftbar } from "@/components/leftbar";
import { Bloom } from "@/components/views/bloom";
import * as ui from "@/components/views/home-ui";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getCompiledDocsForSlug, getDocFrontmatter } from "@/lib/markdown";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

// Guide text: shared article styles plus screenshots, and the guide's own h1 as a section heading
// (the page title above already says it; the first one is hidden when it repeats the title).
const article = `${ui.prose} [&>h1:first-child]:hidden prose-h1:mb-3 prose-h1:mt-10 prose-h1:text-[1.5rem] prose-h2:scroll-mt-6 prose-h3:scroll-mt-6 prose-img:rounded-ctl prose-img:border prose-img:border-h-line`;

export default async function DocsPage(props: PageProps) {
  const params = await props.params;
  const { slug = [] } = params;

  // Get the current section path as a string (e.g., "pos-help-guide/side-settings-panel")
  const pathName = slug.join("/");
  const res = await getCompiledDocsForSlug(pathName);

  if (!res) notFound();

  // The href in page_routes includes the /docs prefix, so we match against that.
  const currentIndex = page_routes.findIndex((route) => route.href === `/docs/${pathName}`);
  const progress = ((currentIndex + 1) / page_routes.length) * 100;

  return (
    <div data-page="docs" className={ui.root}>
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="doc-h">
        <Bloom />
        <div className={`${ui.wrap} relative pb-band pt-8`}>
          <DocsBreadcrumb paths={slug} />
          <h1 id="doc-h" className={`${ui.h1} mt-6 max-w-[22ch] animate-rise`}>
            {res.frontmatter.title}
          </h1>
          <p className="mt-4 max-w-[52ch] animate-rise text-[1.25rem] leading-[1.5] text-fog-200 [animation-delay:90ms]">
            {res.frontmatter.description}
          </p>
        </div>
        {currentIndex !== -1 && (
          <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10" aria-hidden="true">
            <div className="h-full rounded-r-full bg-copper-400 transition-[width] duration-300" style={{ width: `${progress}%` }} />
          </div>
        )}
      </section>

      <div className={`${ui.wrap} grid items-start gap-10 py-pad lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_220px]`}>
        <Leftbar />
        <div className="min-w-0">
          {/* Phones and tablets: the same menu, folded away. The key closes it after each page change. */}
          <details key={pathName} className="mb-8 rounded-card border border-h-line bg-h-surface lg:hidden">
            <summary className={`${ui.label} cursor-pointer list-none px-4 py-3 [&::-webkit-details-marker]:hidden`}>Docs</summary>
            <div className="border-t border-h-line px-4 pb-4">
              <DocsMenu />
            </div>
          </details>
          <article className={article}>{res.content}</article>
          <Pagination pathname={pathName} />
        </div>
        <Toc path={pathName} />
      </div>
    </div>
  );
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { slug = [] } = params;

  const pathName = slug.join("/");
  const res = await getDocFrontmatter(pathName);
  if (!res) return {};
  const { title, description } = res;
  return {
    title,
    description,
  };
}

export function generateStaticParams() {
  return page_routes.map((route) => ({
    slug: route.href.replace(/^\/docs\//, "").split("/").filter(Boolean),
  }));
}
