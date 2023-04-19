import { RiImageAddFill } from "react-icons/all.js";
import { RiAttachmentLine } from "react-icons/all.js";

const Input = () => {
  return (
    <div className="input h-12 p-3 bg-white flex items-center justify-between">
      <input
        type="text"
        className="w-full outline-none text-base text-indigo-500 placeholder:text-gray-400/70"
        placeholder="Type something..."
      />
      <div className="send flex items-center gap-3">
        <RiAttachmentLine
          size="1.4em"
          color="gray"
          className="cursor-pointer"
        />
        <input type="text" className="hidden" id="file" />
        <label htmlFor="file">
          <RiImageAddFill
            size="1.4em"
            color="gray"
            className="cursor-pointer"
          />
        </label>
        <button className="border-none px-4 py-2.5 bg-indigo-300">Send</button>
      </div>
    </div>
  );
};

export default Input;
