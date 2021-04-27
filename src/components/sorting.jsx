import React, { useState } from "react";
// import Print from './print'

import "./sorting.css";
function Sorting() {
  const [Arr, setArr] = useState([null]);

  function init() {
    const arr = [10];
    for (let i = 0; i < 11; i++) {
      arr[i] = rand(5, 100);
    }
    setArr(arr);
    console.log(Arr);
  }

  return (
    <div className="container">
      <button onClick={init}>Genrate Array</button>
      <div className="array-case">
        {Arr.map((x, idx) => (
          <div className="array-bar" key={idx}>
            {" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sorting;

function rand(l, r) {
  return Math.floor(Math.random() * (r - l + 1) + l);
}
