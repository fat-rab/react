import React, { useContext } from "react";
import CustomContext from "./customContext";
const TestButton = () => {
  const context = useContext(CustomContext);
  return <button style={{ color: context }}>test</button>;
};

export default TestButton;
