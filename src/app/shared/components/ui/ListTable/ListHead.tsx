import React from "react";

type Props<T> = {
  headers: HeadersTable<T>[];
};

export const ListHead = <T,>({ headers }: Props<T>) => {
  return (
    <div className='bg-slate-100 uppercase text-gray-700'>
      <div>
        {headers.map((header, i) => (
          <div key={i} className='px-6'>
            {header.key === "action" ? (
              <span className='sr-only'>{header.label}</span>
            ) : (
              <span className='flex items-center'>{header.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
