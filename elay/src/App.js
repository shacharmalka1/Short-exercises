import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function App() {
  const [count, setCount] = useState(0);
  function upCount() {
    let newCount = count;
    setCount(++newCount);
  }
  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <>
      <p>counter: {count}</p>
      <Button count={count} func={upCount} />
    </>
  );
}
