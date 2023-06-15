import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const ListContainer = ({ children }: Props) => (
  <div className='relative w-full overflow-x-auto text-left text-sm text-gray-500 shadow-md dark:text-gray-400 sm:rounded-lg'>
    {children}
  </div>
);
