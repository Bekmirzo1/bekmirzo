export const SOCIAL_NAMES = {
  telegram: "bek_azim",
  designer: "ivantaskayev",
  github: "Bekmirzo1",
  email: "azimovbekmirzo0@gmail.com",
  mail: "azimovbekmirzo@mail.ru",
} as const;
export const SOCIAL_LINKS = {
  telegram: `https://t.me/${SOCIAL_NAMES.telegram}`,
  designer: `https://t.me/${SOCIAL_NAMES.designer}`,
  github: `https://github.com/${SOCIAL_NAMES.github}?tab=repositories`,
  email: `mailto:${SOCIAL_NAMES.email}`,
  mail: `mailto:${SOCIAL_NAMES.mail}`,
} as const;

type SocialLinksKeys = keyof typeof SOCIAL_LINKS;
export type SocialLinksValues = (typeof SOCIAL_LINKS)[SocialLinksKeys];
