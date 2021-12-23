import React from "react";

export default (props) => {
  const text = props.text.split("");
  const userInput = props.userInput;

  return (
    <div className="border rounded p-3 mb-4">
      {text.map((s, i) => {
        return <span key={i}>{s}</span>;
      })}
    </div>
  );
};
