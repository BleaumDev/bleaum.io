"use client";

import { ROUTES } from "@/lib/routes-config";
import SubLink from "./sublink";
import { usePathname } from "next/navigation";

export default function DocsMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (!pathname.startsWith("/docs")) return null;

  return (
    <div className="mt-5 flex flex-col gap-5 pb-6 text-[.9375rem]">
      {ROUTES.map((item, index) => {
        // ROUTES hrefs already start with /docs.
        const modifiedItems = {
          ...item,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
