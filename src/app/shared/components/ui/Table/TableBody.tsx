import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const TableBody = ({ children }: Props) => <tbody>{children}</tbody>;
