import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { SocialLinks } from '../types/socialLinks';

export function getSocialLinks(): SocialLinks[] { 
    const socialLinks: SocialLinks[] = [
    {
        icon: faFacebook,
        link: 'https://facebook.com',
    }];

    return socialLinks;
}