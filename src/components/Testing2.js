import React, { useEffect } from "react";
import useLocalStorage from "./Hooks/useLocalStorage";

const Testing2 = ({ doRender }) => {
  const [count, setCount] = useLocalStorage("test", 0);
  // const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount((prev) => prev + 1);
    doRender();
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        outline: "10px solid blue",
      }}>
      <h1 style={{ color: "white" }}>{count}</h1>
      <button onClick={handleCount}>Test2</button>
      <button onClick={() => setCount(0)}>Reset2</button>
    </div>
  );
};

export default Testing2;
