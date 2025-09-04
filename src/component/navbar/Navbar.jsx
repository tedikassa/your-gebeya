import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between h-19 bg-white shadow-sm">
      <Link to="/">
        <div className="font-bold text-3xl">your ገበያ</div>
      </Link>
      <div className="flex items-center justify-between flex-1 mx-8 max-w-120">
        <input
          className="flex-1 w-full focus:outline-none border px-4 py-1.5 rounded-full focus:ring focus:ring-blue-200 "
          placeholder="Search..."
        />

        <Link
          className="ml-4 font-medium bg-stone-200 px-8 py-1.5 text-black rounded-full hover:bg-stone-300 capitalize"
          to="/order"
        >
          Orders
        </Link>
      </div>
      <div className=" flex items-center justify-between space-x-6 ">
        <Link
          className="flex flex-col text-stone-700 text-xs px-5 py-1.5 hover:border transition"
          to="/auth"
        >
          <div>Log in/</div>
          <div>Sign up</div>
        </Link>
        <Link className="mr-8" to="/cart">
          cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
