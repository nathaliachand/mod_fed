import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button />
      <div>
        <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      </div>
    </div>
  );
}

export default App;
