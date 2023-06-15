import React, { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  style: CSSProperties;
};

export const ListRow = ({ children, style }: Props) => (
  <div style={style} className={`border-b bg-white hover:bg-gray-50 `}>
    {children}
  </div>
);
