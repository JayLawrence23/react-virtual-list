// == React 18 compatibility Custom Type for a React functional component with props AND CHILDREN ==
// Source: https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc/71800185#71800185 solution by ashuvssut

type FCC<P = {}> = import("react").FC<import("react").PropsWithChildren<P>>;

type SortOrder = "asc" | "desc" | null;

type SortKeys<T> = keyof T | "action" | null;

type Sorting<T> = {
  sortBy: SortKeys<T> | null;
  sort: SortOrder;
};

type HeadersTable<T> = { key: SortKeys<T>; label: string };
