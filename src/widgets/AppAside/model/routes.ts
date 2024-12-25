import { PAGE_ROUTES, type RoutesValue } from "@/shared/config";

interface Routes {
  name: string;
  route: RoutesValue;
}
export const asideMainRoutes: Routes[] = [
  { name: "index", route: PAGE_ROUTES.home },
  { name: "работы", route: PAGE_ROUTES.works },
  { name: "архив", route: PAGE_ROUTES.archieve },
  { name: "контакты", route: PAGE_ROUTES.contact },
] as const;
export const asideRoutesMore: Routes[] = [
  { name: "cv", route: PAGE_ROUTES.about },
  { name: "калькулятор", route: PAGE_ROUTES.calculator },
] as const;
