import { Loading } from '@components/loading';
import { PrimaryButtonProps } from './types/primaryButtonProps';

import './primaryButton.scss';

const PrimaryButton = ({
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
