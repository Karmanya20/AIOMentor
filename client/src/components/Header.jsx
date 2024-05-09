import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b border-gray-950">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-3 px-2">
        <Link to="/">
          <h1 className="font-bold text-md sm:text-xl">Mentorhub</h1>
        </Link>
        <ul className="flex gap-3 sm:gap-4">
          <Link to="/about">
            <li className="text-sm sm:text-lg hover:text-blue-500">About</li>
          </Link>
          <p className="hidden sm:block">
            |
          </p>
          <Link to="/explore">
            <li className="text-sm sm:text-lg hover:text-blue-400">Explore Mentor</li>
          </Link>
        </ul>
        <Link className="w-[3.8rem] sm:w-[4.8rem] h-10 border-2 border-black rounded-sm flex justify-center items-center text-sm sm:text-lg hover:bg-gray-950 hover:text-gray-50 transition-all" to="/sign-in">
          <p>Sign In</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
