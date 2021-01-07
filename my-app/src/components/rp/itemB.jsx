import React from "react";
import WithToolTip from "./withToolTip";
const ItemB = (props) => {
  return (
    <div className="container">
      <WithToolTip>
        {({ showToolTip, context }) => (
          <div>
            <button className="btn btn-primary" type="btn">
              itemB
            </button>
            {showToolTip && (
              <span className="badge badge-pill badge-primary ml-2">
                {context}
              </span>
            )}
          </div>
        )}
      </WithToolTip>
      {/* <WithToolTip
        render={({ showToolTip, context }) => (
          <div>
            <button className="btn btn-primary" type="btn">
              itemB
            </button>
            {showToolTip && (
              <span className="badge badge-pill badge-primary ml-2">
                {context}
              </span>
            )}
          </div>
        )}
      ></WithToolTip> */}
    </div>
  );
};

export default ItemB;
