import { getPreviousNext } from "@/lib/markdown";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import * as ui from "@/components/views/home-ui";
import { page_routes } from "@/lib/routes-config";

const card = `group flex flex-col gap-1 rounded-card border border-h-line bg-h-surface p-5 ${ui.lift}`;
const hint = "flex items-center gap-2 text-[.8125rem] text-h-muted";

export default function Pagination({ pathname }: { pathname: string }) {
  const { prev, next } = getPreviousNext(pathname);
  const currentIndex = page_routes.findIndex((route) => route.href === `/docs/${pathname}`);

  // Only show pagination if there are multiple sections AND the current section is found
  if (page_routes.length <= 1 || currentIndex === -1) return null;

  return (
    <nav className="mt-14 border-t border-h-line pt-8" aria-label="Pagination">
      <p className="mb-4 text-[.875rem] text-h-muted">
        Section {currentIndex + 1} of {page_routes.length}
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {prev && (
          <Link href={prev.href} className={card}>
            <span className={hint}>
              <ArrowLeftIcon className="size-4 transition-transform duration-250 ease-soft group-hover:-translate-x-1" />
              Previous Section
            </span>
            <b className={`${ui.label} text-[1.0625rem]`}>{prev.title}</b>
          </Link>
        )}
        {next && (
          <Link href={next.href} className={`${card} items-end text-right sm:col-start-2`}>
            <span className={hint}>
              Next Section
              <ArrowRightIcon className="size-4 transition-transform duration-250 ease-soft group-hover:translate-x-1" />
            </span>
            <b className={`${ui.label} text-[1.0625rem]`}>{next.title}</b>
          </Link>
        )}
      </div>
    </nav>
  );
}
