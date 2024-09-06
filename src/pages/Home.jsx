import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 max-w-6xl mx-auto">
        <h1 className="text-slate-900 font-bold text-4xl lg:text-7xl">
          Discover the recipe <span className="text-slate-500">that is </span>
          <br />
          perfect for you
        </h1>
        <div className="text-gray-700 text-sm sm:text-sm">
          A recipe has no soul. You, as the cook, must bring soul to the recipe.
          <br />
          Thomas Keller
        </div>
        <Link
          to={"/search"}
          className="text-xs-sm text-blue-950 font-bold hover:underline"
        >
          Lets get started
        </Link>
      </div>
    </div>
  );
}
