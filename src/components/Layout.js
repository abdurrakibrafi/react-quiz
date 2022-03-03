import classes from "../styles/Layout.module.css";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div classsName={classes.container}>{children}</div>
      </main>
    </>
  );
}
