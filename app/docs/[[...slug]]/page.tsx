import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getCompiledDocsForSlug, getDocFrontmatter } from "@/lib/markdown";
import { Typography } from "@/components/typography";
import { Leftbar } from "@/components/leftbar";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocsPage(props: PageProps) {
  const params = await props.params;
  const { slug = [] } = params;

  // Get the current section path as a string (e.g., "pos-help-guide/side-settings-panel")
  const pathName = slug.join("/");
  const res = await getCompiledDocsForSlug(pathName);

  if (!res) notFound();

  // Calculate progress
  // The href in page_routes includes the /docs prefix, so we match against that.
  const currentFullPath = `/docs/${pathName}`;
  const currentIndex = page_routes.findIndex(route => route.href === currentFullPath);
  
  const totalSections = page_routes.length;

  // Only show pagination if there are multiple sections AND the current section is found
  if (totalSections <= 1 || currentIndex === -1) {
    return null;
  }

  const progress = ((currentIndex + 1) / totalSections) * 100;

  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-start gap-10 py-6">
      {/* Left Sidebar (Main Navigation) */}
      <div className="flex-none w-64 hidden lg:block">
        <Leftbar key="leftbar" />
      </div>

      {/* Main Content */}
      <div className="flex-[4.5] py-10 mx-auto">
        <div className="w-full mx-auto">
          <DocsBreadcrumb paths={slug} />
          
          {/* Progress bar */}
          <div className="w-full h-1 bg-muted rounded-full mb-8">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <Typography>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h1 className="sm:text-4xl text-3xl !-mt-0.5 font-bold">
                {res.frontmatter.title}
              </h1>
              <p className="-mt-4 text-muted-foreground sm:text-lg text-base mb-8">
                {res.frontmatter.description}
              </p>
              <div className="mt-8">{res.content}</div>
            </div>
             {/* Pass the joined slug without the /docs prefix to Pagination */}
            <Pagination pathname={pathName} />
          </Typography>
        </div>
      </div>

      {/* Right Sidebar (Table of Contents) */}
      <div className="flex-none w-64 hidden xl:block">
        {/* Pass the joined slug without the /docs prefix to Toc */}
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
  console.log('Generating static params...');
  const params = page_routes.map(route => {
    const hrefAfterDocs = route.href.replace(/^\/docs\//, '');
    const slugSegments = hrefAfterDocs.split('/').filter(segment => segment !== ''); // Filter out any empty segments
    console.log(`  Route href: ${route.href} -> Slug segments:`, slugSegments);
    return { slug: slugSegments };
  });
  console.log('Generated params:', params);
  return params;
}
