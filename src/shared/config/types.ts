export interface SocialLink{
  link: string;
  name: string;
}
export interface PageRoute extends SocialLink {
  parent?: string;
}
