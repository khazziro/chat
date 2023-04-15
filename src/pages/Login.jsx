import classNames from "classnames";
import { RiImageAddFill } from "react-icons/all.js";

const inputStyle = classNames(
  "py-4 px-7 border-b border-b-purple-300 placeholder:text-neutral-300"
);
const Login = () => {
  return (
    <div className="flex justify-center items-center bg-purple-200 h-screen">
      <div className="flex flex-col items-center bg-white px-16 py-5 rounded-xl gap-3">
        <div className="logo font-bold text-purple-400 text-xl">
          Khazziro Chat
        </div>
        <div className="title font-bold text-purple-400">Login</div>
        <form className="flex flex-col gap-3">
          <input className={inputStyle} type="email" placeholder="email" />
          <input
            className={inputStyle}
            type="password"
            placeholder="password"
          />
          <button className="bg-purple-300 p-3 font-bold cursor-pointer rounded-md text-white">
            Sign In
          </button>
        </form>
        <p className="text-purple-400 text-sm mt-3 cursor-pointer">
          You don't have an account? Register!
        </p>
      </div>
    </div>
  );
};

export default Login;
