import { ReactNode } from 'react';

export default function HelpGuideLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-start gap-10 py-6">
      {/* Left Sidebar (Table of Contents) */}
      <aside className="flex-none w-64 hidden xl:block">
        {/* TableOfContents component will go here */}
        
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full min-w-0">
        {children}
      </main>

      {/* Right Sidebar (Optional - for future use like subheadings if needed) */}
      <aside className="flex-none w-64 hidden xl:block">
        {/* Could add right sidebar content here if needed */}
      </aside>
    </div>
  );
} 