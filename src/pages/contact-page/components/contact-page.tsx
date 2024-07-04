import React, { lazy } from 'react';

const Loading = lazy(() => import('@components/loading'));

import styles from '../assets/contact-page.module.scss';

const ContactPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default ContactPage;
