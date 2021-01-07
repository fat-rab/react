import React from "react";
import withToolTip from "./withToolTip";
const ItemA = (props) => {
  return (
    <div className="container">
      <button className="btn btn-primary" type="btn">
        itemA
      </button>
      {props.action.showToolTip && (
        <span className="badge badge-pill badge-primary ml-2">
          {props.action.context}
        </span>
      )}
    </div>
  );
};

export default withToolTip(ItemA);
