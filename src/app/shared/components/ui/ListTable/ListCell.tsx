import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ListCell = ({ children }: Props) => (
  <span className='min-w-[3rem] overflow-auto px-6 py-4 font-normal text-gray-900'>
    {children}
  </span>
);
