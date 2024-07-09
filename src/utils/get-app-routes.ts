import { lazy } from 'react';
import {
  faAddressCard,
  faCamera,
  faGamepad,
  faHome,
  faTerminal,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import IRoute from '@type/route';
import {
  aboutPagePath,
  codingPagePath,
  contactPagePath,
  gamingPagePath,
  homePagePath,
  photographyPagePath,
} from './route-paths';

const HomePage = lazy(() => import('@pages/home-page'));
const CodingPage = lazy(() => import('@pages/coding-page'));
const PhotographyPage = lazy(() => import('@pages/photography-page'));
const GamingPage = lazy(() => import('@pages/gaming-page'));
const AboutPage = lazy(() => import('@pages/about-page'));
const ContactPage = lazy(() => import('@pages/contact-page'));

export const getAppRoutes: IRoute[] = [
  {
    path: homePagePath,
    index: true,
    component: HomePage,
    label: 'Home',
    icon: faHome,
  },
  {
    path: codingPagePath,
    index: true,
    component: CodingPage,
    label: 'Coding',
    icon: faTerminal,
  },
  {
    path: photographyPagePath,
    index: true,
    component: PhotographyPage,
    label: 'Photography',
    icon: faCamera,
  },
  {
    path: gamingPagePath,
    index: true,
    component: GamingPage,
    label: 'Gaming',
    icon: faGamepad,
  },
  {
    path: aboutPagePath,
    index: true,
    component: AboutPage,
    label: 'About',
    icon: faUser,
  },
  {
    path: contactPagePath,
    index: true,
    component: ContactPage,
    label: 'Contact',
    icon: faAddressCard,
  },
];