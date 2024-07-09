import React, { FunctionComponent, lazy } from 'react';

const Loading = lazy(() => import('@components/loading'));

import styles from '../assets/contact-page.module.scss';

const ContactPage: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default ContactPage;
