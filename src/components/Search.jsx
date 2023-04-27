import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

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

  return (
    <div className="border-b border-b-indigo-950/10">
      <div className="search p-3">
        <input
          type="text"
          className="bg-transparent text-white border-none outline-none placeholder:text-gray-200"
          placeholder="Find an user"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-indigo-500">
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
