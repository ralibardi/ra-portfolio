import React, { lazy } from 'react';
import { PrimaryButtonProps } from './types/primaryButtonProps';

const Loading = lazy(() => import('@components/loading'));

import './primaryButton.scss';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  children,
  isLoading,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className="primary-button"
      type="button"
      {...props}
      onClick={(e) => {
        e.preventDefault();
        if (!isLoading) {
          onClick(e);
        }
      }}
    >
      {isLoading ? <Loading /> : children}
    </button>
  );
};

export default PrimaryButton;
