import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// next.config redirects match case-insensitively, so a case-only redirect needs an exact check here.
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/resources/Industries") {
    return NextResponse.redirect(new URL("/resources/industries", request.url), 308);
  }
  return NextResponse.next();
}

export const config = { matcher: "/resources/:path*" };
