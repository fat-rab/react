import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomContext from "./customContext";

class CustomButton extends Component {
  static contextType = CustomContext;
  static propTypes = {
    children: PropTypes.string,
  };
  static defaultProps = {
    children: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      color: "#28a745",
    };
  }
  render() {
    //console.log(this.context); //#28a745
    const { children } = this.props;
    return <button style={{ color: this.context }}>{children}</button>;
  }
}
export default CustomButton;
// const CustomButton = (props, context) => {
//   const { color } = context;
//   const { children } = props;
//   return <button style={{ color }}>{children}</button>;
// };

// export default CustomButton;

// CustomButton.contextTypes = {
//   color: PropTypes.string,
// };
