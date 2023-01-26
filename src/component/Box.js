import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2769/2769646.png"
        alt="scissors"
      />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
