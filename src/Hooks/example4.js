//prop drilling
// component1 -> component2 -> component3 -> component4 -> component5

import React from "react";
import { useContext } from "react";

//create a context at module level so it can be exported
export const UserContext = React.createContext("secret hai ye");

export default function Example4({ children }) {
  return (
    <UserContext.Provider value="I love">
      {children}
    </UserContext.Provider>
  );
}
