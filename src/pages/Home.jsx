import Sidebar from "../components/Sidebar.jsx";
import Chat from "../components/Chat.jsx";

const Home = () => {
  return (
    <div className="bg-indigo-200 h-screen flex items-center justify-center">
      <div className="flex border border-white rounded-2xl w-4/6 h-4/5 overflow-hidden tablet:w-[90%]">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
