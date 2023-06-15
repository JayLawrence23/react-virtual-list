"use client";

import { ListContainer, ListCell, ListHead, ListRow } from "@/components/ui";
import { APIData, Entries } from "@/types/list";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

import React, { CSSProperties } from "react";

import {
  FixedSizeList as List,
  ListChildComponentProps,
  areEqual,
} from "react-window";

interface RowProps extends ListChildComponentProps {
  index: number;
  style: CSSProperties;
  data: Entries[];
}

const fetchData = async (): Promise<APIData> => {
  const response = await axios.get("https://api.publicapis.org/entries");

  const data = response.data;

  return data as APIData;
};

export const dummyApi = createApi({
  reducerPath: "dummyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.publicapis.org/" }),
  endpoints: (builder) => ({
    getDummy: builder.query<APIData, {}>({
      query: () => `entries`,
    }),
  }),
});

export const { useGetDummyQuery } = dummyApi;

const Row = React.memo(({ data, index, style, isScrolling }: RowProps) => {
  const item = data[index];
  return (
    <ListRow style={style}>
      {isScrolling ? (
        <div className='flex h-full w-full p-2'>
          <div className='h-full w-[50%] animate-pulse bg-gray-100'></div>
          <div className='mx-2 h-full w-[30%] animate-pulse bg-gray-100'></div>
          <div className='h-full w-[20%] animate-pulse bg-gray-100'></div>
        </div>
      ) : (
        <>
          <ListCell>{item?.API} </ListCell>
          <ListCell>{item?.Category} </ListCell>
          <ListCell>{item?.Link} </ListCell>
        </>
      )}
    </ListRow>
  );
}, areEqual);

type ClinicalCategoryResponse = {
  createdAt: Date;
  id: string;
  name: string;
  neurologic: string;
  updatedAt: Date;
};
// ** Table headers
const headers: HeadersTable<ClinicalCategoryResponse>[] = [
  { key: "name", label: "CLINICAL CATEGORY" },
];

const ReduxList = () => {
  const { data } = useGetDummyQuery({});

  console.log(data);
  return (
    <ListContainer>
      {/* <ListHead headers={headers} /> */}
      {data?.entries && (
        <List
          useIsScrolling
          height={500}
          itemData={data?.entries}
          itemCount={data?.count}
          itemSize={35}
          width={"100%"}
        >
          {Row}
        </List>
      )}
    </ListContainer>
  );
};

export default ReduxList;
