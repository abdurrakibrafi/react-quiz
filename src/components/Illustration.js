import Singupimage from "../assest/image/signup.svg";
import classes from "../styles/Illustration.module.css";
export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={Singupimage} alt="Signup" />
    </div>
  );
}
