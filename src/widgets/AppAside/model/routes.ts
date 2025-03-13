import { PAGE_ROUTES, type RoutesValue } from "@/shared/config";

interface MainRoute {
  name: string;
  route: RoutesValue;
}
interface MainRouteEmoji extends MainRoute {
  icon: string
}
export const asideMainRoutes: MainRoute[] = [
  { name: "index", route: PAGE_ROUTES.home.link },
  { name: "контакты", route: PAGE_ROUTES.contact.link },
  { name: "работы", route: PAGE_ROUTES.works.link },
  { name: "архив", route: PAGE_ROUTES.archieve.link },
] as const;
export const asideRoutesMore: MainRouteEmoji[] = [
  { name: "read.cv", route: PAGE_ROUTES.about.link, icon: '💼' },
  { name: "стоимость", route: PAGE_ROUTES.calculator.link, icon: '💰' },
  { name: "условия", route: PAGE_ROUTES.agreement.link, icon: '🤝' },
] as const;
