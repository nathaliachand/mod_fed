import { useState } from "react";
import "./App.css";

import Button from "remoteApp/Button";
import useCount from "./store";
import Header from "https://micro-fe-chi.vercel.app/remoteEntry.js";
console.log(Header);
// const Headertolol = Header.default;

function App() {
  // const [count, setCount] = useCount();

  return (
    <>
      <h1>Host</h1>
      {/* <Button /> */}
      {/* <Headertolol /> */}
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
    </>
  );
}

export default App;
