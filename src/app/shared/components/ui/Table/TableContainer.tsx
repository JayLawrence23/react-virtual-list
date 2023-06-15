import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const TableContainer = ({ children }: Props) => (
  <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left table-fixed text-gray-500 dark:text-gray-400">
      {children}
    </table>
  </div>
);
