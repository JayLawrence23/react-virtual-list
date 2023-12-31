import react, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function TypographyH1({ children }: Props) {
  return (
    <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h3>
  );
}
