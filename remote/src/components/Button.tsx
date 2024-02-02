import { useState } from "react";
// import useCount from "./store";

export const Button = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <button onClick={() => setState((s) => s + 1)}>Click : {state}</button>
    </div>
  );
};

export default Button;
