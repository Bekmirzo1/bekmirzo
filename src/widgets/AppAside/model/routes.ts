import { PAGE_ROUTES, type RoutesValue } from "@/shared/config";

interface Routes {
  name: string;
  route: RoutesValue;
}
export const asideMainRoutes: Routes[] = [
  { name: "index", route: PAGE_ROUTES.home.link },
  { name: "работы", route: PAGE_ROUTES.works.link },
  { name: "архив", route: PAGE_ROUTES.archieve.link },
  { name: "контакты", route: PAGE_ROUTES.contact.link },
] as const;
export const asideRoutesMore: Routes[] = [
  { name: "cv", route: PAGE_ROUTES.about.link },
  { name: "калькулятор", route: PAGE_ROUTES.calculator.link },
] as const;
