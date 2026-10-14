import { EachRoute } from "@/lib/routes-config";
import Anchor from "./anchor";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SheetClose } from "@/components/ui/sheet";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import * as ui from "@/components/views/home-ui";

export default function SubLink({
  title,
  href,
  items,
  noLink,
  level,
  isSheet,
  tag,
}: EachRoute & { level: number; isSheet: boolean }) {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(level == 0);

  useEffect(() => {
    if (path == href || path.includes(href)) setIsOpen(true);
  }, [href, path]);

  const Comp = (
    <Anchor
      className="text-h-muted transition-colors duration-200 hover:text-h-text"
      activeClassName="font-semibold text-h-accent hover:text-h-accent"
      href={href}
    >
      {title}
      {tag && (
        <span className="mx-2 rounded-chip bg-copper-400 px-1.5 py-0.5 text-xs !font-normal text-navy-900">
          {tag}
        </span>
      )}
    </Anchor>
  );

  const titleOrLink = !noLink ? (
    isSheet ? (
      <SheetClose asChild>{Comp}</SheetClose>
    ) : (
      Comp
    )
  ) : (
    <h4 className={`${ui.label} text-[.75rem] font-semibold uppercase tracking-[.08em] text-h-accent`}>
      {title}
      {tag && (
        <span className="mx-2 rounded-chip bg-copper-400 px-1.5 py-0.5 text-xs !font-normal text-navy-900">
          {tag}
        </span>
      )}
    </h4>
  );

  if (!items) {
    return <div className="flex flex-col">{titleOrLink}</div>;
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full pr-5">
          <div className="flex items-center justify-between cursor-pointer w-full">
            <span className="w-[95%] overflow-hidden text-ellipsis text-start">
              {titleOrLink}
            </span>
            <span className="sm:ml-0 -mr-1.5">
              {!isOpen ? (
                <ChevronRight className="h-[0.9rem] w-[0.9rem] text-h-muted" />
              ) : (
                <ChevronDown className="h-[0.9rem] w-[0.9rem] text-h-muted" />
              )}
            </span>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div
            className="mt-3 flex flex-col items-start gap-2.5 border-l border-h-line pl-4"
          >
            {items?.map((innerLink) => {
              const modifiedItems = {
                ...innerLink,
                href: innerLink.href,
                level: level + 1,
                isSheet,
              };
              return <SubLink key={modifiedItems.href} {...modifiedItems} />;
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
