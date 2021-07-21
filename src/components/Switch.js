import "./css/Switch.css";
import { useState } from "react";

const Switch = (props) => {
  const { status, setStatus } = props;
  const [{ stateBtnOn, stateBtnOff }, setBtn] = useState({
    stateBtnOn: "btnOff",
    stateBtnOff: "btnOn",
  });
  // const [stateBtnOff, setBtnOff] = useState("btnOn");
  const handleClickOn = () => {
    if (stateBtnOn === "btnOff") {
      setBtn({
        stateBtnOn: "btnOn",
        stateBtnOff: "btnOff",
      });
      setStatus(true);
    }
  };
  const handleClickOff = () => {
    if (stateBtnOff === "btnOff") {
      setBtn({
        stateBtnOn: "btnOff",
        stateBtnOff: "btnOn",
      });
      setStatus(false);
      console.log("status " + status);
    }
  };
  return (
    <div className="switch">
      <div onClick={handleClickOn} className={stateBtnOn}>
        ON
      </div>
      <div onClick={handleClickOff} className={stateBtnOff}>
        OFF
      </div>
    </div>
  );
};
export default Switch;
