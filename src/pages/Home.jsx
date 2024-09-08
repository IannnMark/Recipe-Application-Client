import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import RecipeItem from "../components/RecipeItem";
import { useEffect, useState } from "react";

export default function Home() {
  const [offerRecipes, setOfferRecipes] = useState([]);
  SwiperCore.use([navigation]);

  useEffect(() => {
    const recentOfferRecipes = async () => {
      try {
        const res = await fetch(
          "/api/recipe/get?limit=8&sort=createdAt&order=desc"
        );
        const data = await res.json();
        setOfferRecipes(data);
      } catch (error) {
        console.log(error);
      }
    };
    recentOfferRecipes();
  }, []);

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

      <Swiper navigation>
        {offerRecipes &&
          offerRecipes.length > 0 &&
          offerRecipes.map((recipe) => (
            <SwiperSlide key={recipe._id}>
              <div
                style={{
                  background: `url(${recipe.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerRecipes && offerRecipes.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                Recent Upload
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerRecipes.map((recipe) => (
                <RecipeItem recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
