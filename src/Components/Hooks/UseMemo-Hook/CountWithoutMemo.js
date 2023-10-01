import React, { useState } from "react";

const CountWithoutMemo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  function multiCount() {
    console.warn("multiCount called unnecessarily")
    return count * 5;
  }
  return (
    <div>
      <h2>Count is:{count}</h2>
      <h2>item is:{item}</h2>
      <h2>{multiCount()}</h2>

      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 5)}>Update Item</button>
    </div>
  );
};

export default CountWithoutMemo;
