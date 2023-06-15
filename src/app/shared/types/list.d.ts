export type APIData = {
  count: number;
  entries: Entries[];
};

export type Entries = {
  API: string;
  Auth: string;
  Category: string;
  Cors: "yes" | "no";
  Description: string;
  HTTPS: boolean;
  Link: string;
};
