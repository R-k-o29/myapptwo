import React, { useContext } from "react";
import { UserContext } from "../Hooks/example4";

export default function Component1() {
  const value = useContext(UserContext);
  return (
    <>
      <h2>This is Component 1</h2>
      <p>My secret is : {value}</p>
    </>
  );
}
