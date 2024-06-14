import React from 'react';

export type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isLoading?: boolean;
};
