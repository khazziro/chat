const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-indigo-500">
        <img
          src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="userChatInfo">
          <span className="font-bold">Jane</span>
          <p className="text-sm text-gray-100">Hello</p>
        </div>
      </div>
      <div className="userChat p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-indigo-500">
        <img
          src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="userChatInfo">
          <span className="font-bold">Jane</span>
          <p className="text-sm text-gray-100">Hello</p>
        </div>
      </div>
      <div className="userChat p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-indigo-500">
        <img
          src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="userChatInfo">
          <span className="font-bold">Jane</span>
          <p className="text-sm text-gray-100">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
