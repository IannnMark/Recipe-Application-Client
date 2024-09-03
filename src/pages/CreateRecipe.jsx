import { useState } from "react";
import { app } from "../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function CreateRecipe() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imagesUrls: [],
    title: "",
    ingredients: "",
    preparationSteps: "",
    cookingTime: "",
  });

  const [imageUploadError, setImageUploadError] = useState(false);

  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Create Recipe</h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Title"
            className="border p-3
             rounded-lg"
            id="title"
            required
          />
          <input
            type="text"
            placeholder="Ingredients"
            className="border p-3
             rounded-lg"
            id="ingredients"
            required
          />
          <input
            type="text"
            placeholder="Preparation Steps"
            className="border p-3
             rounded-lg"
            id="preparationSteps"
            required
          />
          <input
            type="text"
            placeholder="Cooking Time"
            className="border p-3
             rounded-lg"
            id="cookingTime"
            required
          />

          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-900 ml-1">
              The first image will be a cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="p-3 border border-gray-300 rounded-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button
              type="button"
              // disabled={uploading}
              // onClick={}
              className="p-3 text-green-800 border border-green-600 rounded uppercase
              hover:shadow-lg disabled:opacity-80"
            >
              Upload
            </button>
          </div>
          <p className="text-red-800 text-sm">
            {/* {imageUploadError && imageUploadError} */}
          </p>
        </div>
      </form>
    </main>
  );
}
