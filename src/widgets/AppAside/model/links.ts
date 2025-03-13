import { SOCIAL_LINKS, type SocialLinksValues } from "@/shared/config";

interface Link {
  name: string;
  link: SocialLinksValues;
}

export const asideLinks: Link[] = [
  { name: "telegram", link: SOCIAL_LINKS.telegram },
  { name: "e-mail", link: SOCIAL_LINKS.email },
] as const;
