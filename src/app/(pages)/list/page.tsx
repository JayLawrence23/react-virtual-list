import { RQueryWrapper } from "@/hooks";
import MainList from "@/list/MainList";
import ReduxList from "@/list/ReduxList";
import React from "react";

const page = () => {
  return (
    // <RQueryWrapper>
    //   <MainList />
    // </RQueryWrapper>
    <ReduxList />
  );
};

export default page;
