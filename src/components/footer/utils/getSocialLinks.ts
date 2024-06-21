import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faSpotify,
  faStackOverflow,
  faXTwitter,
  faXbox,
} from '@fortawesome/free-brands-svg-icons';
import IIconLink from '@type/iconLink';

export function getSocialLinks(): IIconLink[] {
  const socialLinks: IIconLink[] = [
    {
      icon: faLinkedinIn,
      link: 'https://facebook.com',
      order: 3,
    },
    {
      icon: faGithub,
      link: 'https://facebook.com',
      order: 1,
    },
    {
      icon: faInstagram,
      link: 'https://facebook.com',
      order: 4,
    },
    {
      icon: faStackOverflow,
      link: 'https://facebook.com',
      order: 2,
    },
    {
      icon: faXTwitter,
      link: 'https://facebook.com',
      order: 1,
    },
    {
      icon: faXbox,
      link: 'https://facebook.com',
      order: 5,
    },
    {
      icon: faSpotify,
      link: 'https://facebook.com',
      order: 10,
    }
  ];

  return socialLinks;
}
