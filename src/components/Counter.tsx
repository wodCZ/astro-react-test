import { useState } from "react";

type Props = {
  count: number;
  children: JSX.Element;
};

export default function Counter({ children, count: initialCount }: Props) {
  const [count, setCount] = useState(initialCount);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="children">{children}</div>
    </>
  );
}
