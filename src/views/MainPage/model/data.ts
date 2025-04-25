import {
  PAGE_ROUTES,
  SOCIAL_LINKS,
  SOCIAL_NAMES,
  type PageRoute,
} from "@/shared/config";
import type { SocialLinkMainPage } from "./types";

export const descriptionLinks: PageRoute[] = [
  { name: "обо мне", link: PAGE_ROUTES.about.link },
  { name: "изучаю сейчас", link: PAGE_ROUTES.about.link },
  { name: "цели", link: PAGE_ROUTES.about.link },
] as const;
export const descriptionSocialLinks: SocialLinkMainPage[] = [
  {
    name: "📲&nbsp;&nbsp;написать в telegram",
    link: SOCIAL_LINKS.telegram,
    alias: `@${SOCIAL_NAMES.telegram}`,
  },
  {
    name: "📩&nbsp;&nbsp;почта mail.ru",
    link: SOCIAL_LINKS.mail,
    alias: SOCIAL_NAMES.mail,
  },
  {
    name: "👨‍💻&nbsp;&nbsp;github",
    link: SOCIAL_LINKS.github,
    alias: `@${SOCIAL_NAMES.github}`,
  },
] as const;
interface ColumnContent {
  title: string;
  text: string;
}
export const mainPageStackDesc: ColumnContent[] = [
  {
    title: "технологии&nbsp;&nbsp;📝",
    text: "то, что я умею, практикую, люблю.",
  },
  {
    title: "[все]Работы&nbsp;&nbsp;💻",
    text: "мои креативные веб[сайты].",
  },
] as const;
