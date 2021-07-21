import "./App.css";
import { useState, useEffect } from "react";
import Switch from "./components/Switch";
import Flag from "./components/Flag";

function App() {
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [colorFlag, setColor] = useState("flag-red");

  useEffect(() => {
    console.log("call use effect" + status1 + status2 + status3 + colorFlag);
    if (status1 && status2 && status3) {
      setColor("flag-green");
      console.log("Color green");
    } else {
      setColor("flag-red");
      console.log("Color red");
    }
  }, [status1, status2, status3, colorFlag]);
  return (
    <div className="main">
      <div>
        <Switch status={status1} setStatus={setStatus1} />
        <Switch status={status2} setStatus={setStatus2} />
        <Switch status={status3} setStatus={setStatus3} />
      </div>
      <div className="flag">
        <Flag color={colorFlag} />
      </div>
    </div>
  );
}

export default App;
