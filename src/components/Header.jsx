import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="">
      <div className="flex justify-between items-center max-w-6xl max-auto p-3">
        <h1 className="font-bold text-lg sm:text-xl flex flex-wrap gap-2">
          <span className="text-slate-900">Recipe</span>
          <span className="text-slate-900">Application</span>
        </h1>

        <form className="">
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch className="text-slate-900" />
          </button>
        </form>
        <ul className="flex gap-3">
          <li className="hidden sm:inline text-slate-900 hover:underline">
            Home
          </li>
          <li className="hidden sm:inline text-slate-900 hover:underline">
            About
          </li>
          <Link to="/sign-in" className="text-slate-900 hover:underline">
            Sign in
          </Link>
        </ul>
      </div>
    </header>
  );
}
