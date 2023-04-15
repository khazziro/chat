import Navbar from "./Navbar.jsx";
import Search from "./Search.jsx";

const Sidebar = () => {
  return (
    <div className="flex-1 bg-purple-400">
      <Navbar />
      <Search />
    </div>
  );
};

export default Sidebar;
