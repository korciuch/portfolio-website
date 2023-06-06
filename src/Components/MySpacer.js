import React from "react";

const MySpacer = (props) => {
  return (
    <div
      style={{
        height: props.height ?? 50,
      }}
    />
  );
};

export default MySpacer;
