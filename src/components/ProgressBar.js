import classses from "../styles/Progressbar.module.css";
import Button from "./Button";

export default function ProgressBar() {
  return (
    <div className={classses.progressBar}>
      <div className={classses.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classses.rangeArea}>
        <div className={classses.tooltip}>24% Cimplete!</div>
        <div className={classses.rangeBody}>
          <div className={classses.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <a href="result.html">
        <Button className={classses.next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </a>
    </div>
  );
}
