import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo, NavMenu } from "./navbar";
import { Button } from "./ui/button";
import { AlignLeftIcon } from "lucide-react";
import { DialogTitle } from "./ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import DocsMenu from "./docs-menu";

export function Leftbar() {
  return (
    <aside className="md:flex hidden w-[20rem] sticky top-16 flex-col h-[93.75vh] overflow-y-auto">
      <ScrollArea className="py-4 px-2">
        <DocsMenu />
      </ScrollArea>
    </aside>
  );
}

export function SheetLeftbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu" className="md:hidden flex text-ui-fg hover:bg-ui-line/5 hover:text-ui-fg">
          <AlignLeftIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 px-0 w-screen max-w-none sm:max-w-sm bg-brand-navy border-white/10 text-white" side="left">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <SheetHeader>
          <div className="pl-4">
            <SheetClose className="px-5" asChild>
              <Logo variant="light" />
            </SheetClose>
          </div>
        </SheetHeader>
        <div className="relative flex flex-col gap-4 overflow-y-auto flex-1 pb-32">
          <div className="flex flex-col gap-2.5 mt-3 mx-2 px-5">
            <NavMenu isSheet />
          </div>
          <div className="ml-2 pl-5">
            <DocsMenu isSheet />
          </div>
          <div className="p-6 pb-4 flex gap-2.5">
            {/* FooterButtons removed */}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-50 px-6 pb-6 pointer-events-none md:hidden">
          <SheetClose asChild>
            <a
              href="/demo"
              className="pointer-events-auto mx-auto block w-full max-w-[420px] rounded-full bg-brand-coral py-4 text-center text-lg font-bold text-brand-navy shadow-xl transition-colors duration-200 hover:bg-brand-peach">
              Book a demo
            </a>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
