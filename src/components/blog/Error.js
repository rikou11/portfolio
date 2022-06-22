import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="w-full sm:w-96 h-96 flex justify-center items-center bg-gray-100 shadow-lg rounded-lg overflow-hidden relative mx-auto">
          <img
            src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="PhotobyConnorBotts"
            class="w-full h-full object-cover object-center absolute inset-0"
          />

          <div class="flex flex-col justify-center items-center relative p-8 md:p-16">
            <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
              404
            </h1>

            <p class="text-gray-200 md:text-lg text-center mb-8">
              The page you’re looking for doesn’t exist.
            </p>

            <Link
              to={"/"}
              class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
