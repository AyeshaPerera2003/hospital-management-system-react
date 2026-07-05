import { FaBell, FaSearch, FaMoon, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-white h-16 shadow flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none"
        />
      </div>

      <div className="flex items-center gap-6 text-xl">
        <FaBell className="cursor-pointer" />
        <FaMoon className="cursor-pointer" />
        <FaUserCircle className="text-3xl text-blue-700" />
      </div>
    </header>
  );
}

export default Navbar;