import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/Index";
function App() {
  // const [number, setNumber] = useState("0");
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.changeTheNumber);

  return (
    <>
      <div className="container">
        <h1>Increment and decrement Counter</h1>
        <h4>Using react and redux</h4>

        <div className="d-flex justify-content-center align-items-center">
          <span role="button" onClick={() => dispatch(decNumber())}>
            -
          </span>

          <input style={{ textAlign: "center" }} value={myState} />

          <span role="button" onClick={() => dispatch(incNumber())}>
            +
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
