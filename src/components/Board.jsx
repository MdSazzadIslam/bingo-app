import React, { useState } from "react";

import Row from "./Row";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Board.css";

const Board = () => {
  const [tableLength, setTableLength] = useState(5);
  const [values, setValues] = useState([]);
  const [bingoArray, setBingoArray] = useState([
    [
      "child noises in the background",
      "Hello, hello",
      "I need to jump in another call",
      "can everyone go on mute?",
      "could you please get closer to mic?",
    ],
    [
      "load painful echo/feedback",
      "Next slide please",
      "can we take this offline?",
      "is he on the call?",
      "could you share this slides afterwards?",
    ],
    [
      "can somebody grant presenter rights?",
      "can you email that to everyone?",
      "Hello everyone",
      "sorry, i had problem login in",
      "(animal noise in the background)",
    ],
    [
      "sorry, i didn't found the confidence id",
      "i was having connection issue",
      "i'will have to get back to you",
      "who just joined",
      "sorry, something with my calender",
    ],
    [
      "did you see any screen?",
      "let wait for",
      "you will send the minutes?",
      "sorry was on mute",
      "can u please repeat",
    ],
  ]);

  const checkIsSequential = (arr) => {
    for (var i = 1, len = arr.length; i < len; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }

    return true;
  };

  const checkIsEqual = (arr) => {
    return new Set(arr).size === 1;
  };

  function checkIsDecending(arr = []) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] >= arr[i]) {
        return false;
      }
    }
    return true;
  }

  const handleRowClicked = (i) => {
    debugger;
    let newValue = [],
      tempValue;
    console.log(i);

    newValue.push(i);
    tempValue = values.concat(newValue);
    setValues(tempValue);
    console.log(values, values.length);
    if (values.length === 4) {
      const isEqual = checkIsEqual(values); //checking all the number in an array are same or not

      if (isEqual === false) {
        const isSequential = checkIsSequential(values);
        if (isSequential === true) {
          toast.success("You are  winner", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000,
            toastId: "001",
          });
        } else {
          const isDecending = checkIsDecending(values);
          if (isDecending === true) {
            toast.success("You are  winner", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 2000,
              toastId: "001",
            });
          } else {
            toast.info("Opps, You lose", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 2000,
              toastId: "001",
            });
          }
        }
      } else {
        toast.success("You are  winner", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 2000,
          toastId: "001",
        });
      }

      setValues("");
    }
  };

  return (
    <div className="div_container">
      <div className="div_wrapper">
        <table align="center" valign="middle">
          <tbody className="board_table">
            <Row
              tableLength={tableLength}
              bingoArray={bingoArray}
              onClick={(e) => handleRowClicked(e)}
            />
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Board;
