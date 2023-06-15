import React from 'react';
import { TypographyH3 } from '../Typography';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

export const ErrorMessage = () => {
  return (
    <div className="flex justify-center items-center space-x-5 py-10 mt-3 bg-gray-200/30 dark:bg-gray-700/70 rounded-md">
      <TypographyH3>SOMETHING WENT WRONG.. </TypographyH3>
      <ExclamationTriangleIcon className="dark:text-red-700 text-red-300 h-14 w-14" />
    </div>
  );
};
