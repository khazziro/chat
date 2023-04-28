import Message from "./Message.jsx";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext.jsx";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.js";

const Messages = ({ message }) => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);

  console.log(messages);
  return (
    <div className="messages bg-indigo-900/10 p-3 h-[calc(100%-6rem)] overflow-y-scroll">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
