import Illustration from "../Illustration";
import SingupForm from "../SingupForm";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration />
        <SingupForm />
      </div>
    </>
  );
}
