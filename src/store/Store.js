import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

// Based on this example:
// https://medium.com/@martin.crabtree/react-creating-a-redux-like-global-state-with-the-usecontext-and-usereducer-hooks-89aa2b27dbc5

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {});
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext({});
export default Store;
