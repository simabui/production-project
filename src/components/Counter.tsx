import { useState } from "react";

import * as classes from "./Counter.module.scss";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div className={classes.button}>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
