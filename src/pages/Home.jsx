import Sidebar from "../components/Sidebar.jsx";
import Chat from "../components/Chat.jsx";

const Home = () => {
  return (
    <div className="bg-purple-200 h-screen flex items-center justify-center">
      <div className="flex border border-white rounded-2xl w-4/6 h-4/5 overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;