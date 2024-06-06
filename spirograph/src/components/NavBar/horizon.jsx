import React from "react";

//NavBar위에 각 회색 선
const Horizon = ({ text }) => {
  return (
    <div
      style={{
        // display: "block",
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #646464",
        lineHeight: "0.1rem",
        marginRight: "1.25rem",
        overflow: "hidden",
        // marginBottom: "0.4rem",
      }}
    ></div>
  );
};

export default Horizon;
