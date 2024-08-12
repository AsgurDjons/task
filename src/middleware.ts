export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/appeals', '/appeals/:path*'],
};
