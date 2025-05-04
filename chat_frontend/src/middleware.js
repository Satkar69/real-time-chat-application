import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const requestUrl = request.nextUrl.pathname;

  // Define protected routes
  const protectedRoutes = ["/", "/dashboard"];
  const publicRoutes = ["/login", "/signup"];

  // Check if the requested URL matches any of the protected routes
  const isProtectedRoute = protectedRoutes.some((route) =>
    requestUrl.startsWith(route)
  );

  // Check if the requested URL matches any of the public routes
  const isPublicRoute = publicRoutes.some((route) =>
    requestUrl.startsWith(route)
  );

  // If it's a public route, and the user has token, redirect to "/"
  if (isPublicRoute && token && requestUrl !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow unauthenticated users to access public routes like "/login" or "/signup"
  if (isPublicRoute && !token) {
    return NextResponse.next();
  }

  // If it's a protected route and user has no token, redirect to loginin
  if (isProtectedRoute && !token && requestUrl !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Matcher to apply the middleware to specific routes
export const config = {
  matcher: ["/", "/login", "/signup", "/dashboard"],
};
