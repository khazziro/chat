import { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.js";
import { AuthContext } from "../context/AuthContext.jsx";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div
          className="userChat p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-indigo-500"
          key={chat[0]}
        >
          <img
            src={chat[1].userInfo.photoURL}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="userChatInfo">
            <span className="font-bold">{chat[1].userInfo.displayName}</span>
            <p className="text-sm text-gray-100">
              {chat[1].userInfo.lastMessage?.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
