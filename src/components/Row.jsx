import React from "react";

import "./Board.css";

const Row = ({ tableLength, bingoArray, onClick }) => {
  const handleRowClicked = (i) => {
    onClick(i);
  };

  var tableRow = bingoArray.slice(0, tableLength).map((item, i) => {
    if (item[i] === "Hello everyone") {
      item[2] = "Config call bingo";
    }

    return (
      <tr key={i} onClick={(e) => handleRowClicked(i)} className="bingo_card">
        <td className="num" id={item[0]}>
          {item[0]}
        </td>
        <td className="num">{item[1]}</td>
        <td className="num">{item[2]} </td>
        <td className="num">{item[3]} </td>
        <td className="num">{item[4]} </td>
      </tr>
    );
  });

  return <>{tableRow}</>;
};

export default Row;
