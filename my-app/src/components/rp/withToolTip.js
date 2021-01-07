import React from "react";

class WithToolTip extends React.Component {
  state = {
    showToolTip: false,
    context: "",
  };
  onMouseOver = (e) => {
    this.setState({
      showToolTip: true,
      context: e.target.innerText,
    });
  };
  onMouseOut = () => {
    this.setState({
      showToolTip: false,
      context: "",
    });
  };
  render() {
    return (
      <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        {this.props.children(this.state)}
      </div>
      // <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
      //   {this.props.render(this.state)}
      // </div>
    );
  }
}

export default WithToolTip;
