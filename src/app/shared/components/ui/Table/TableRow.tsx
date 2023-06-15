import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const TableRow = ({ children, onClick }: Props) => (
  <tr
    onClick={onClick}
    className={`bg-white border-b ${
      onClick && 'cursor-pointer'
    } dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 [&:nth-child(even)]:bg-gray-50 [&:nth-child(even)]:dark:bg-gray-800`}
  >
    {children}
  </tr>
);
