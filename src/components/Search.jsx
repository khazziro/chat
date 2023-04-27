import { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDoc,
  getDocs,
  updateDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase.js";
import { AuthContext } from "../context/AuthContext.jsx";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    // check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
    setUser(null);
    setUsername("");
  };

  return (
    <div className="border-b border-b-indigo-950/10">
      <div className="search p-3">
        <input
          type="text"
          className="bg-transparent text-white border-none outline-none placeholder:text-gray-200"
          placeholder="Find an user"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div
          className="userChat p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-indigo-500"
          onClick={handleSelect}
        >
          <img
            src={user.photoURL}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="userChatInfo">
            <span className="font-bold text-lg">{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
