import { getPreviousNext } from "@/lib/markdown";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { page_routes } from "@/lib/routes-config";

export default function Pagination({ pathname }: { pathname: string }) {
  // Construct the full expected path based on the incoming pathname
  const currentFullPath = `/docs/${pathname}`;
  
  // Log values for debugging
  console.log('Pagination component:');
  console.log('  pathname:', pathname);
  console.log('  currentFullPath:', currentFullPath);
  console.log('  page_routes:', page_routes);

  const res = getPreviousNext(pathname);
  
  // Find current section number by matching the full path precisely
  const currentIndex = page_routes.findIndex(route => route.href === currentFullPath);

  console.log('  currentIndex:', currentIndex);
  console.log('  totalSections:', page_routes.length);
  
  const totalSections = page_routes.length;

  // Only show pagination if there are multiple sections AND the current section is found
  // Or if currentIndex is 0 (first page) and totalSections > 1 for initial load case
  if (totalSections <= 1 || (currentIndex === -1 && totalSections > 0)) {
     console.log('Pagination hidden'); // Log when pagination is hidden
    return null;
  }

   console.log('Pagination shown'); // Log when pagination is shown
  return (
    <div className="mt-12 border-t pt-8">
      {/* Combined container for section number and navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
        {/* Section number */}
        
        
        {/* Navigation buttons container */}
        <div className="flex-1 flex items-center gap-4">
          {res.prev && (
            <Link
              className={buttonVariants({
                variant: "outline",
                className:
                  "no-underline flex flex-col sm:pl-7 pl-3 sm:py-6 py-4 !items-start text-sm hover:bg-accent transition-colors flex-grow sm:flex-grow-0",
              })}
              href={res.prev.href}
            >
              <span className="flex items-center text-muted-foreground text-xs">
                <ChevronLeftIcon className="w-4 h-4 mr-2" />
                Previous Section
              </span>
              {/* <span className="mt-1 font-medium">{res.prev.title}</span> */}
            </Link>
          )}


<div className="text-sm text-muted-foreground flex-shrink-0">
          Section {currentIndex + 1} of {totalSections}
        </div>
           {/* Spacer div to push the next button to the right if only previous is present */}
           {!res.prev && res.next && <div className="flex-grow" />} 
          {res.next && (
            <Link
              className={buttonVariants({
                variant: "outline",
                className:
                  "no-underline flex flex-col sm:pr-7 pr-3 sm:py-6 py-4 !items-end text-sm hover:bg-accent transition-colors flex-grow sm:flex-grow-0 ml-auto",
              })}
              href={res.next.href}
            >
              <span className="flex items-center text-muted-foreground text-xs">
                Next Section
                <ChevronRightIcon className="w-4 h-4 ml-2" />
              </span>
              {/* <span className="mt-1 font-medium">{res.next.title}</span> */}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
