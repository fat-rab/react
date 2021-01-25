import React, { useContext } from "react";
import PropTypes from "prop-types";
import CustomContext from "./customContext";
import TestButton from "./testButton";
const FunButton = (props) => {
  const { children } = props;
  //写法二
  const context = useContext(CustomContext);
  return (
    //写法二
    <>
      <button style={{ color: context }}>{children}</button>
      <TestButton></TestButton>
    </>
    //写发一
    // <CustomContext.Consumer>
    //   {(context) => {
    //     return <button style={{ color: context }}>{children}</button>;
    //   }}
    // </CustomContext.Consumer>
  );
};
FunButton.propTypes = {
  children: PropTypes.string,
};
FunButton.defaultProps = {
  children: "",
};
export default FunButton;
