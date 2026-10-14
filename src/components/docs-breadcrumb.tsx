import { EachRoute, ROUTES } from "@/lib/routes-config";

// Route titles by href, so "POS Help Guide" keeps its capitals.
const titles = new Map<string, string>();
const collect = (routes: EachRoute[]) =>
  routes.forEach((r) => {
    titles.set(r.href, r.title);
    if (r.items) collect(r.items);
  });
collect(ROUTES);

export default function DocsBreadcrumb({ paths }: { paths: string[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[.9375rem] text-fog-300">
        <li>Docs</li>
        {paths.map((path, index) => {
          const last = index === paths.length - 1;
          return (
            <li key={path} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              <span aria-current={last ? "page" : undefined} className={last ? "font-medium text-white" : undefined}>
                {titles.get(`/docs/${paths.slice(0, index + 1).join("/")}`) ?? toTitleCase(path)}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function toTitleCase(input: string): string {
  const words = input.split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}
