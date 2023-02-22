import React from "react";

function ConditionalRendering(props) {
  const { number } = props;

  return (
    <div>
      {number > 5 ? (
        <p>The number {number} is greater than 5.</p>
      ) : (
        <p>The number {number} is less than or equal to 5.</p>
      )}
    </div>
  );
}

export default ConditionalRendering;
