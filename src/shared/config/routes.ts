export interface PageRoute {
  link: string;
  name: string;
  parent?: string;
}

interface PageRoutes {
  home: PageRoute;
  works: PageRoute;
  about: PageRoute;
  archieve: PageRoute;
  contact: PageRoute;
  agreement: PageRoute;
  price: PageRoute;
  [key: string]: PageRoute;
}
export const PAGE_ROUTES: PageRoutes = {
  home: { link: "/", name: "index" },
  works: { link: "/works", name: "работы", parent: "home" },
  about: { link: "/about", name: "cv", parent: "home" },
  archieve: { link: "/archieve", name: "архив", parent: "home" },
  contact: { link: "/contact", name: "контакты", parent: "home" },
  price: { link: "/price", name: "калькулятор", parent: "home" },
  agreement: { link: "/agreement", name: "условия", parent: "home" },
} as const;

type RoutesKeys = keyof typeof PAGE_ROUTES;
export type RoutesValue = (typeof PAGE_ROUTES)[RoutesKeys]["link"];

interface RoutesWithParent {
  link: string;
  name: string;
  parents: PageRoute[];
}

const parenstsArrCreate = (
  val: string,
  parent: PageRoute[],
  linksWithParent: RoutesWithParent[],
): PageRoute[] => {
  parent.push(PAGE_ROUTES[val]);
  if (PAGE_ROUTES[val].parent) {
    const linksReady = linksWithParent.find(
      (item) => item.link === PAGE_ROUTES[val].link,
    );
    if (linksReady) {
      parent.push(...linksReady.parents);
    } else {
      parenstsArrCreate(PAGE_ROUTES[val].parent, parent, linksWithParent);
    }
  }
  return parent;
};
function createLinksWithParent(): RoutesWithParent[] {
  const linksWithParent: RoutesWithParent[] = [];
  for (const key in PAGE_ROUTES) {
    if (Object.prototype.hasOwnProperty.call(PAGE_ROUTES, key)) {
      const route = PAGE_ROUTES[key];
      if (route.parent) {
        const parrentsArr: PageRoute[] = [];
        linksWithParent.push({
          link: route.link,
          name: route.name,
          parents: parenstsArrCreate(
            route.parent,
            parrentsArr,
            linksWithParent,
          ),
        });
      }
    }
  }
  return linksWithParent;
}

export const PageRoutesWithParents: RoutesWithParent[] = createLinksWithParent();
