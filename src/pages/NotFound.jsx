import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 text-center">

      {/* 404 Text */}
      <h1 className="text-8xl font-extrabold text-teal-400 drop-shadow-lg">
        404
      </h1>

      <h2 className="text-3xl md:text-4xl font-bold mt-6">
        Developer Not Found
      </h2>

      <p className="mt-4 text-gray-400 max-w-xl">
        You are searching this developer.
        But it's missing here.
        Maybe try finding another one.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-teal-500 hover:bg-teal-600 transition rounded-xl font-semibold shadow-lg"
        >
          Go Back Home
        </button>

        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-3 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition rounded-xl"
        >
          Explore Projects
        </button>
      </div>
    </section>
  );
};

export default NotFound;
