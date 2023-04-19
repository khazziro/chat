import Message from "./Message.jsx";

const Messages = () => {
  return (
    <div className="messages bg-indigo-900/10 p-3 h-[calc(100%-6rem)] overflow-y-scroll">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
