import { RiCamera2Fill } from "react-icons/all.js";
import { RiUserAddFill } from "react-icons/all.js";
import { RiMoreFill } from "react-icons/all.js";

const Chat = () => {
  return (
    <div className="flex-[2]">
      <div className="chatinfo flex items-center justify-between bg-purple-400 p-3 text-gray-100">
        <span>Jane</span>
        <div className="chatIcons flex gap-3">
          <RiCamera2Fill size="1.4em" />
          <RiUserAddFill size="1.4em" />
          <RiMoreFill size="1.4em" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
