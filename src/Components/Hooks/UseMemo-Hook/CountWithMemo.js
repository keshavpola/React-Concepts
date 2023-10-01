import React, { useState,useMemo } from "react";

const CountWithMemo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

 const multiCountMemo=useMemo( function multiCount() {
    console.warn("multiCount called unnecessarily")
    return count * 5;
  },[count])
  return (
    <div>
      <h2>Count is:{count}</h2>
      <h2>item is:{item}</h2>
      <h2>{multiCountMemo}</h2>

      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 5)}>Update Item</button>
    </div>
  );
};

export default CountWithMemo;
