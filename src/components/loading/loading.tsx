import React from 'react';

import './loding.scss';

const Loading: React.FC = () => {
  return (
    <div className="spinner__container">
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
