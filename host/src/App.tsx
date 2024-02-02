import { useState } from "react";
import "./App.css";

import Button from "remoteApp/Button";
import useCount from "./store";
// import Header from "itemsdetail/Header";

function App() {
  // const [count, setCount] = useCount();

  return (
    <>
      <h1>Host</h1>
      <Button />
      {/* <Header /> */}
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
    </>
  );
}

export default App;
