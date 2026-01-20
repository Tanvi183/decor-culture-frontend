import { NextResponse } from 'next/server';

export default function middleware(request) {
  // Check if the request is for a protected route
  const protectedRoutes = ['/dashboard'];
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // Check for auth token in cookies
    const authToken = request.cookies.get('authToken');
    
    if (!authToken) {
      // Redirect to signin if not authenticated
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*']
};