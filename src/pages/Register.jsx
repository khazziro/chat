import classNames from "classnames";
import { RiImageAddFill } from "react-icons/all.js";

const inputStyle = classNames(
  "py-4 px-7 border-b border-b-purple-300 placeholder:text-neutral-300"
);
const Register = () => {
  return (
    <div className="flex justify-center items-center bg-purple-200 h-screen">
      <div className="flex flex-col items-center bg-white px-16 py-5 rounded-xl gap-3">
        <div className="logo font-bold text-purple-400 text-xl">
          Khazziro Chat
        </div>
        <div className="title font-bold text-purple-400">Register</div>
        <form className="flex flex-col gap-3">
          <input
            className={inputStyle}
            type="text"
            placeholder="display name"
          />
          <input className={inputStyle} type="email" placeholder="email" />
          <input
            className={inputStyle}
            type="password"
            placeholder="password"
          />
          <input className="hidden" id="file" type="file" />
          <label
            className="flex items-center gap-3 text-sm cursor-pointer text-purple-300"
            htmlFor="file"
          >
            <RiImageAddFill size="2.4em" />
            <span>Add an avatar</span>
          </label>
          <button className="bg-purple-300 p-3 font-bold cursor-pointer rounded-md text-white">
            Sign Up
          </button>
        </form>
        <p className="text-purple-400 text-sm mt-3 cursor-pointer">
          You do have an account? Login!
        </p>
      </div>
    </div>
  );
};

export default Register;
