import classNames from "classnames";
import { RiImageAddFill } from "react-icons/all.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../firebase.js";

import { useState } from "react";

const inputStyle = classNames(
  "py-4 px-7 border-b border-b-indigo-300 placeholder:text-neutral-300"
);

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="flex justify-center items-center bg-indigo-200 h-screen">
      <div className="flex flex-col items-center bg-white px-16 py-5 rounded-xl gap-3">
        <div className="logo font-bold text-indigo-400 text-xl">
          Khazziro Chat
        </div>
        <div className="title font-bold text-indigo-400">Register</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
            className="flex items-center gap-3 text-sm cursor-pointer text-indigo-300"
            htmlFor="file"
          >
            <RiImageAddFill size="2.4em" />
            <span>Add an avatar</span>
          </label>
          <button className="bg-indigo-300 p-3 font-bold cursor-pointer rounded-md text-white">
            Sign Up
          </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p className="text-indigo-400 text-sm mt-3 cursor-pointer">
          You do have an account? Login!
        </p>
      </div>
    </div>
  );
};

export default Register;
