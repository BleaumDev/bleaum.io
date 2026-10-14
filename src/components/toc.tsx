import { getDocsTocs } from "@/lib/markdown";
import * as ui from "@/components/views/home-ui";
import TocObserver from "./toc-observer";

export default async function Toc({ path }: { path: string }) {
  const tocs = await getDocsTocs(path);
  if (!tocs.length) return null;

  return (
    <aside className="sticky top-6 hidden max-h-[calc(100vh-3rem)] overflow-y-auto xl:block">
      <h2 className={`${ui.label} mb-3 text-[.9375rem]`}>On this page</h2>
      <TocObserver data={tocs} />
    </aside>
  );
}
