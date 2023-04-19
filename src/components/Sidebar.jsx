import Navbar from "./Navbar.jsx";
import Search from "./Search.jsx";
import Chats from "./Chats.jsx";

const Sidebar = () => {
  return (
    <div className="flex-1 bg-indigo-400 relative">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
