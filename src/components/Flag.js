// import { useState } from "react";
import "./css/Flag.css";

const Flag = (props) => {
  const { color } = props;

  console.log("flag called " + color);

  return (
    <div className={color}>{color === "flag-red" ? "NO WAY !" : "GO !"}</div>
  );
};
export default Flag;
