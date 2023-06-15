import React from "react";

type Props<T> = {
  headers: HeadersTable<T>[];
};

export const TableHeadPlain = <T,>({ headers }: Props<T>) => {
  return (
    <thead className='bg-slate-100 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
      <tr>
        {headers.map((header, i) => (
          <th key={i} scope='col' className='px-6'>
            {header.key === "action" ? (
              <span className='sr-only'>{header.label}</span>
            ) : (
              <span className='flex items-center'>{header.label}</span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};
