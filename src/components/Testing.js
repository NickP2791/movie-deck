import React, { useState, useEffect } from "react";
import useLocalStorage from "components/Hooks/useLocalStorage";
import Testing2 from "./Testing2";

const Testing = () => {
  const [count, setCount] = useLocalStorage("test", 0);
  const [render, setRender] = useState();

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("RAAAAANNNNNN");
  }, [render]);

  const doRender = () => {
    let item = window.localStorage.getItem("test");
    setCount(JSON.parse(item));
  };

  console.log(render);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        outline: "10px solid blue",
      }}>
      <h1 style={{ color: "white" }}>{count}</h1>
      <button onClick={handleCount}>Test</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Testing2 doRender={doRender} />
    </div>
  );
};

export default Testing;
