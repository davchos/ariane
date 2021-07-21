import "./css/Flag.css";

const Flag = (props) => {
  const { color } = props;

  return (
    <div className={color}>{color === "flag-red" ? "NO WAY !" : "GO !"}</div>
  );
};
export default Flag;
