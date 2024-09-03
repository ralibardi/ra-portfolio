import {
  faGithub,
  faStackOverflow,
  faAndroid,
  faAppStore,
  faLinkedinIn,
  faInstagram,
  faXbox,
  faXTwitter,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import socialLinks from './socialLinks.json';

export interface ISocialLink {
  icon: IconDefinition;
  link: string;
  order: number;
  isHidden: boolean;
}

const iconMap: Record<string, IconDefinition> = {
  faGithub: faGithub,
  faStackOverflow: faStackOverflow,
  faAndroid: faAndroid,
  faAppStore: faAppStore,
  faLinkedinIn: faLinkedinIn,
  faInstagram: faInstagram,
  faXbox: faXbox,
  faXTwitter: faXTwitter,
  faSpotify: faSpotify,
};
function getIconDefinition(iconName: string): IconDefinition {
  return iconMap[iconName];
}

export function getSocialLinks(): ISocialLink[] {
  return socialLinks
    .map((link) => ({
      ...link,
      icon: getIconDefinition(link.icon),
    }))
    .filter((link) => !link.isHidden)
    .sort((a, b) => a.order - b.order);
}
