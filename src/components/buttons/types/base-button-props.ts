import React from 'react';

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  label: string;
};
