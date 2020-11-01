import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {});
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext({});
export default Store;
