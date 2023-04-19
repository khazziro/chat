const Navbar = () => {
  return (
    <div className="flex items-center bg-indigo-500 h-12 p-3 justify-between text-neutral-100">
      <div className="font-bold tablet:hidden">Khazziro Chat</div>
      <div className="flex gap-3">
        <img
          src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg"
          alt=""
          className="bg-neutral-100 h-6 w-6 rounded-full object-cover "
        />
        <span>Renato</span>
        <button className="bg-indigo-400 text-neutral-100 text-xs px-2 tablet:absolute bottom-3 bg-indigo-500 py-2 px-4">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
