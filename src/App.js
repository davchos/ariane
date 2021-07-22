import "./App.css";
import { useState } from "react";
import Switch from "./components/Switch";
import Flag from "./components/Flag";

function App() {
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);

  const switchSate = status1 && status2 && status3 ? true : false;

  return (
    <div className="main">
      <div>
        <Switch status={status1} setStatus={setStatus1} />
        <Switch status={status2} setStatus={setStatus2} />
        <Switch status={status3} setStatus={setStatus3} />
      </div>
      <div className="flag">
        <Flag color={switchSate ? "flag-green" : "flag-red"} />
      </div>
    </div>
  );
}

export default App;
