export const SOCIAL_LINKS = {
  telegram: "https://t.me/bek_azim",
  github: "https://github.com/Bekmirzo1?tab=repositories",
  email: "mailto:azimovbekmirzo0@gmail.com",
} as const;

type SocialLinksKeys = keyof typeof SOCIAL_LINKS;
export type SocialLinksValues = typeof SOCIAL_LINKS[SocialLinksKeys];