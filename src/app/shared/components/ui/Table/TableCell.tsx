import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const TableCell = ({ children }: Props) => (
  <td className="py-4 px-6 font-normal text-gray-900 overflow-auto min-w-[3rem] dark:text-white">
    {children}
  </td>
);
