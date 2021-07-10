import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} time`;
    return () => {
      return;
    };
  });
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add 1
      </button>
    </div>
  );
};

export default Hooks;
