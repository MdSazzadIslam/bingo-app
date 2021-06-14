import React, { useState } from "react";

import "./Board.css";

const Row = ({ tableLength, bingoArray, onClick }) => {
  const [color, setColor] = useState(false);

  const handleRowClicked = (i) => {
    onClick(i);
    setColor(!color);
  };

  var tableRow = bingoArray.slice(0, tableLength).map((item, i) => {
    return (
      <tr
        key={i + 1}
        onClick={(e) => handleRowClicked(i)}
        className="bingo_card"
      >
        <td className="num">{item[0]}</td>
        <td className="num">{item[1]}</td>
        <td className="num">
          {item[2] === "Hello everyone" ? "Config call bingo" : item[2]}
        </td>
        <td className="num">{item[2]}</td>

        <td className="num">{item[4]} </td>
      </tr>
    );
  });

  return <>{tableRow}</>;
};

export default Row;
