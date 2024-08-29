import { lazy } from 'react';
import {
  faAddressCard,
  faCamera,
  faFile,
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
  cvPagePath,
} from './route-paths';
import {
  about_page_key,
  coding_page_key,
  contact_page_key,
  cv_page_key,
  gaming_page_key,
  home_page_key,
  photography_page_key,
} from '@app/i18n/keys';

const HomePage = lazy(() => import('@pages/home-page'));
const CodingPage = lazy(() => import('@pages/coding-page'));
const PhotographyPage = lazy(() => import('@pages/photography-page'));
const GamingPage = lazy(() => import('@pages/gaming-page'));
const AboutPage = lazy(() => import('@pages/about-page'));
const ContactPage = lazy(() => import('@pages/contact-page'));
const CVPage = lazy(() => import('@pages/cv-page'));

export const getAppRoutes: IRoute[] = [
  {
    path: homePagePath,
    index: true,
    component: HomePage,
    labelKey: home_page_key,
    icon: faHome,
    enabled: true,
  },
  {
    path: codingPagePath,
    index: true,
    component: CodingPage,
    labelKey: coding_page_key,
    icon: faTerminal,
    enabled: false,
  },
  {
    path: photographyPagePath,
    index: true,
    component: PhotographyPage,
    labelKey: photography_page_key,
    icon: faCamera,
    enabled: false,
  },
  {
    path: gamingPagePath,
    index: true,
    component: GamingPage,
    labelKey: gaming_page_key,
    icon: faGamepad,
    enabled: false,
  },
  {
    path: aboutPagePath,
    index: true,
    component: AboutPage,
    labelKey: about_page_key,
    icon: faUser,
    enabled: false,
  },
  {
    path: contactPagePath,
    index: true,
    component: ContactPage,
    labelKey: contact_page_key,
    icon: faAddressCard,
    enabled: false,
  },
  {
    path: cvPagePath,
    index: true,
    component: CVPage,
    labelKey: cv_page_key,
    icon: faFile,
    enabled: true,
  },
];
