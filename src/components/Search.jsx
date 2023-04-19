const Search = () => {
  return (
    <div className="border-b border-b-gray-100">
      <div className="search p-3">
        <input
          type="text"
          className="bg-transparent text-white border-none outline-none placeholder:text-gray-200"
          placeholder="Find an user"
        />
      </div>
      <div className="userChat p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-indigo-500">
        <img
          src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="userChatInfo">
          <span className="font-bold text-lg">Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
