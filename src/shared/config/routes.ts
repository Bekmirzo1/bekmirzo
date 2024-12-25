export const PAGE_ROUTES = {
  home: '/',
  works: '/works',
  about: '/about',
  archieve: '/archieve',
  contact: '/contact',
  calculator: '/calculator',
} as const


type RoutesKeys = keyof typeof PAGE_ROUTES;
export type RoutesValue = typeof PAGE_ROUTES[RoutesKeys];