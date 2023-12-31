import React, { HTMLProps } from 'react';

type MaxWidthTypes =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'
  | 'full';

interface Props extends HTMLProps<HTMLDivElement> {
  className?: string;
  maxWidth?: MaxWidthTypes;
}

export const Container: FCC<Props> = ({
  children,
  className,
  maxWidth = '7xl',
}) => {
  return (
    <div
      className={`${getMaxWidth(
        maxWidth
      )} mx-auto p-5 px-7 md:px-12 md:pb-10 ${className}`}
    >
      {children}
    </div>
  );
};

const getMaxWidth = (maxWidth: MaxWidthTypes) => {
  const defaultCase = 'max-w-9xl';
  switch (maxWidth) {
    case 'xs':
      return 'max-w-xs';
    case 'sm':
      return 'max-w-sm';
    case 'md':
      return 'max-w-md';
    case 'lg':
      return 'max-w-lg';
    case 'xl':
      return 'max-w-xl';
    case '2xl':
      return 'max-w-2xl';
    case '3xl':
      return 'max-w-3xl';
    case '4xl':
      return 'max-w-4xl';
    case '5xl':
      return 'max-w-5xl';
    case '6xl':
      return 'max-w-6xl';
    case '7xl':
      return 'max-w-7xl';
    case 'full':
      return 'max-w-full';
    default:
      return defaultCase;
  }
};
