import React, { Component } from "react";
import "./sorting.css";

const SIZE = 200;
const disp = [];
const buffer = new Array(300);
var arra = new Array(SIZE);

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
    const a = new Array(SIZE);
    for (let i = 0; i < SIZE; i++) {
      a[i] = rand(10, 400);
      arra[i] = a[i];
    }
    this.setState({ array: a });
    console.log("init");
    console.log(this.state);
  }

  bubbleSort() {
    var a = this.state.array,
      idx = 1;
    const solve = setInterval(() => {
      if (this.is_sorted(a, 0, a.length)) {
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

  getDisplay() {
    this.mergeSortH(0, SIZE - 1);
    return;
  }

  mergeSortH(l, r) {
    if (l === r) {
      return;
    }
    const middle = Math.floor((l + r) / 2);
    this.mergeSortH(l, middle);
    this.mergeSortH(middle + 1, r);

    this.merge(l, middle, r);
    return;
  }
  merge(l, mid, r) {
    var left = l,
      leftLimit = mid,
      right = mid + 1,
      rightLimit = r;
    var i = left;
    var litr = left,
      ritr = rightLimit;

    while (left <= leftLimit && right <= rightLimit) {
      if (arra[left] <= arra[right]) {
        disp.push([i, arra[left]]);
        buffer[i++] = arra[left++];
      } else {
        disp.push([i, arra[right]]);
        buffer[i++] = arra[right++];
      }
    }
    while (left <= leftLimit) {
      disp.push([i, arra[left]]);
      buffer[i++] = arra[left++];
    }
    while (right <= rightLimit) {
      disp.push([i, arra[right]]);
      buffer[i++] = arra[right++];
    }

    for (let i = litr; i <= ritr; i++) arra[i] = buffer[i];
    return;
  }

  mergeSort() {
    console.log("Mergesort");
    this.getDisplay();
    console.log("start");

    var idx = 0;
    const h = setInterval(() => {
      const arr = this.state.array;
      if (this.is_sorted(arr, 0, SIZE - 1)) {
        clearInterval(h);
      }
      arr[disp[idx][0]] = disp[idx][1];
      this.setState({ array: arr });
      idx++;
    }, 10);
  }

  is_sorted(arr, l, r) {
    if (arr.length <= 1) return true;
    for (var i = l; i < r; i++) {
      if (arr[i] < arr[i - 1]) return false;
    }
    return true;
  }

  render() {
    for (let i = 0; i < 100; i++) {
      buffer[i] = 0;
    }
    const { array } = this.state;
    console.log("RENDER");
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
