import { faHome } from '@fortawesome/free-solid-svg-icons';
import { SidebarLink } from '../types/SidebarLink';

export const getSidebarContentLinks: SidebarLink[] = [
  {
    icon: faHome,
    text: 'Home',
    path: '/',
  },
];
