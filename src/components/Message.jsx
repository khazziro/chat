import classNames from "classnames";

const owner = true;

const messageStyle = classNames("flex gap-5", {
  "flex-row-reverse": owner,
});
const messageContent = classNames("flex flex-col max-w-[80%] gap-2.5", {
  "items-end": owner,
});
const messageContentStyle = classNames(
  "bg-indigo-300 py-2.5 px-5 rounded-xl rounded-tl-none max-w-max",
  {
    "bg-white": !owner,
    "rounded-tr-none": owner,
    "rounded-tl-xl": owner,
    "text-white": owner,
  }
);
const Message = () => {
  return (
    <div className={messageStyle}>
      <div className="messageInfo flex flex-col text-gray-100 mb-5">
        <img
          src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg"
          alt=""
          className="h-10 w-10 rounded-full object-cover"
        />
        <span>Just now</span>
      </div>
      <div className={messageContent}>
        <p className={messageContentStyle}>Hello</p>
        <img
          className="w-1/2"
          src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
