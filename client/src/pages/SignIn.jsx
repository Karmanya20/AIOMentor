import { Link } from "react-router-dom";
<<<<<<< HEAD

const SignIn = () => {
  return (
    <div>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-4">Sign In</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="bg-slate-100 p-3 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="bg-slate-100 p-3 rounded-lg"
          />
          <button
            type="submit"
            className="bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-90 disabled:opacity-70"
          >
            Sign In
          </button>
        </form>

        <div className="flex gap-2 mt-5">
          <p>New User?</p>
          <Link to="/sign-up">
            <span className="text-blue-800 hover:underline">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
=======
import SignUp from "./SignUp";

const SignIn = () => {
  return <div><div className="p-3 max-w-lg mx-auto">
  <h1 className="text-3xl text-center font-semibold my-4">Sign Up</h1>
  <form className="flex flex-col gap-4">
    <input
      type="email"
      placeholder="Email"
      id="email"
      className="bg-slate-100 p-3 rounded-lg"
    />
    <input
      type="password"
      placeholder="Password"
      id="password"
      className="bg-slate-100 p-3 rounded-lg"
    />
    <button
      type="submit"
      className="bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-90 disabled:opacity-70"
    >
      Sign Inw
    </button>
  </form>

  <div className="flex gap-2 mt-5">
    <p>New User?</p>
    <Link to="/sign-up">
      <span className="text-blue-800 hover:underline">Sign Up</span>
    </Link>
  </div>
</div></div>;
>>>>>>> 2845650d49e6eb95942ff5746008b613b1523830
};

export default SignIn;
