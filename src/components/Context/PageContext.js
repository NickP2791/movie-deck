import React, { useState, createContext } from "react";

export const PageContext = createContext();

export const PageProvider = (props) => {
  const [page, setPage] = useState();

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {props.children}
    </PageContext.Provider>
  );
};
