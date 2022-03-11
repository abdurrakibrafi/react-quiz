import { useRef, useState } from "react";
import classes from "../styles/Progressbar.module.css";
import Button from "./Button";
export default function ProgressBar({ next, prev, submit, progress }) {
  const [tooltip, setTollTip] = useState();
  const toolTipRef = useRef();

  function toggleToll() {
    if (tooltip) {
      setTollTip(false);
      toolTipRef.current.style.display = "none";
    } else {
      setTollTip(true);
      toolTipRef.current.style.left = `calc(${progress}% - 65px)`;
      toolTipRef.current.style.display = "block";
    }
  }
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={toolTipRef}>
          {progress}% Complete!
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggleToll}
            onMouseOut={toggleToll}
            sss
          ></div>
        </div>
      </div>
      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : next}
      >
        <span>{progress === 100 ? "Submit Quiz" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
