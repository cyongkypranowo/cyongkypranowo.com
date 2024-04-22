import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

const baseUrl = import.meta.env.BASE_URL;

export const siteConfig: SiteConfig = {
  title: 'Blogs',
  subtitle: 'My blog',
  lang: 'en',
  themeHue: 250,
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name:'Feed',
      icon: 'fa6-solid:rss',
      url: baseUrl+'rss.xml',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/cyongkypranowo.jpeg',
  name: 'C Yongky Pranowo',
  bio: `Just Sharing insights`,
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com/in/cyongkypranowo/',
    },
    {
      name: 'Twitter',
      icon: 'fa6-brands:github',
      url: 'https://github.com/cyongkypranowo',
    },
    {
      name: 'Email',
      icon: 'fa6-solid:envelope',
      url: 'mailto:cyongkypranowo@gmail.com',
    } 
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
