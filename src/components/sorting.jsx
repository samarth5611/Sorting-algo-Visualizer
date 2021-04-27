import React, { Component } from "react";
import "./sorting.css";

const SIZE = 150;

export default class sorting extends Component {
  constructor() {
    super();

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const a = [];
    for (let i = 0; i < SIZE; i++) {
      a.push(rand(10, 400));
    }
    this.setState({ array: a });
    console.log("init");
    console.log(this.state);
  }

  bubbleSort() {
    console.log("Bubble Sort");
    var a = this.state.array,
      idx = 1;
    const solve = setInterval(() => {
      if (this.is_sorted(a)) {
        clearInterval(solve);
      }
      if (idx >= a.length) {
        idx = 1;
      }

      if (a[idx] < a[idx - 1]) {
        a[idx] = a[idx] ^ a[idx - 1];
        a[idx - 1] = a[idx] ^ a[idx - 1];
        a[idx] = a[idx] ^ a[idx - 1];
        this.setState({ array: a });
      }
      idx++;
    }, 0);
  }

  is_sorted(arr) {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) return false;
    }
    return true;
  }

  render() {
    const { array } = this.state;
    console.log(array);

    return (
      <div className="container">
        <div className="array-case">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
        <div className="buttons">
          <button className="btn" onClick={() => this.bubbleSort()}>
            {" "}
            BubbleSort{" "}
          </button>
          <button className="btn" onClick={() => this.mergeSort()}>
            {" "}
            MergeSort{" "}
          </button>
        </div>
      </div>
    );
  }
}

function rand(l, r) {
  return Math.floor(Math.random() * (r - l + 1) + l);
}
