import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  FaShare,
  FaBook,
  FaHourglassHalf,
  FaClipboardList,
} from "react-icons/fa";
import { MdKitchen } from "react-icons/md";

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/recipe/get/${params.recipeId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setRecipe(data);
        setLoading(false);
        setError(false);
        console.log(data.imageUrls);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [params.recipeId]);

  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went Wrong</p>
      )}
      {recipe && !loading && !error && (
        <div>
          <Carousel>
            {recipe.imageUrls.map((url) => (
              <div
                key={url}
                className="h-[500px] border border-gray-900"
                style={{
                  background: `url(${url}) center no-repeat`,
                  backgroundSize: "contain",
                  height: "500px",
                  width: "100%",
                }}
              ></div>
            ))}
          </Carousel>

          <div
            className="fixed top-[13%] right-[3%] z-10 border 
          rounded-full w-12 h-12 flex justify-center
           bg-slate-400 cursor-pointer"
          >
            <FaShare
              className="text-slate-700"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>
          {copied && (
            <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-300 p-2 mr-8 mb-10">
              Link Copied!
            </p>
          )}
          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
            <div className="flex items-center gap-4">
              <FaBook className="text-gray-400 text-2xl" />
              <p className="text-2xl font-semibold">{recipe.title}</p>
            </div>
            <div className="flex items-center gap-4">
              <MdKitchen className="text-gray-400 text-2xl" />
              <p className="text-2xl font-semibold">{recipe.ingredients}</p>
            </div>
            <div className="flex items-center gap-4">
              <FaClipboardList className="text-gray-400 text-2xl" />
              <p className="text-2xl font-semibold">
                {recipe.preparationSteps}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaHourglassHalf className="text-gray-400 text-2xl" />
              <p className="text-2xl font-semibold">{recipe.cookingTime}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
