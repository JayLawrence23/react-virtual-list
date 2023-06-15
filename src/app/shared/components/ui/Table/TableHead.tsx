import React, {
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
} from "react";

import {
  ChevronDownIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";

import { cn } from "@/utils/utils";

type Props<T> = {
  headers: HeadersTable<T>[];
  sortOrder: SortOrder;
  setSortOrder: Dispatch<SetStateAction<SortOrder>>;
  sortKey: SortKeys<T>;
  setSortKey: Dispatch<React.SetStateAction<SortKeys<T>>>;
};

export const TableHead = <T,>({
  headers,
  sortOrder,
  setSortOrder,
  sortKey,
  setSortKey,
}: Props<T>) => {
  const changeSort = (key: SortKeys<T>) => {
    setSortOrder(
      sortOrder === "asc" ? "desc" : sortOrder === "desc" ? null : "asc"
    );

    setSortKey(key);
  };

  const SortButton = ({
    sortOrder,
    columnKey,
    sortKey,
    onClick,
    children,
  }: {
    sortOrder: SortOrder;
    columnKey: SortKeys<T>;
    sortKey: SortKeys<T>;
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
  }) => {
    return (
      <button
        onClick={onClick}
        className={cn(
          "my-auto border-none px-3 py-2 text-sm text-slate-700 active:bg-gray-300/20 dark:text-white dark:active:bg-gray-900/20"
        )}
      >
        <span className='flex items-center'>
          {children}

          {sortOrder === null || sortKey !== columnKey ? (
            <ChevronUpDownIcon className=' ml-2 h-5 w-5 text-primary' />
          ) : (
            <ChevronDownIcon
              className={`${
                sortKey === columnKey && sortOrder === "asc" && "rotate-180"
              } ml-2 h-4 w-4 text-primary`}
            />
          )}
        </span>
      </button>
    );
  };

  return (
    <thead className='bg-slate-100 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
      <tr>
        {headers.map((header, i) => (
          <th key={i} scope='col' className={`px-3`}>
            {header.key === "action" ? (
              <span className='sr-only'>{header.label}</span>
            ) : (
              <span className='flex items-center'>
                <SortButton
                  columnKey={header.key}
                  onClick={() => changeSort(header.key)}
                  {...{
                    sortOrder,
                    sortKey,
                  }}
                  sortOrder={sortOrder}
                  sortKey={sortKey}
                >
                  {header.label}
                </SortButton>
              </span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};
