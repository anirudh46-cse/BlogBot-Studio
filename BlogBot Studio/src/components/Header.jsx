import React, { useRef } from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  // 🔍 Search Handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };


  const onClear = () => {
    setInput('');
    inputRef.current.value = '';
  };

  return (
    <div className="relative mx-8 sm:mx-16 xl:mx-24">
      
      <div className="text-center mt-20 mb-8">
        {/* ✨ Feature Badge */}
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} className="w-2.5" alt="Star icon" />
        </div>

        {/* 🏷️ Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-semibold leading-snug text-gray-700 dark:text-white">
          <span className="text-primary">Blogging  Platform.</span>
        </h1>

        {/* 📝 Description */}
        <p className="my-6 sm:my-8 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 dark:text-gray-400">
          BlogBot Studio is an AI-powered blogging platform built for creators who value speed, style, and substance. Effortlessly craft, brand, and publish content with smart tools, responsive layouts, and elegant design—giving every blog a voice that’s bold, beautiful, and uniquely yours.
        </p>

        {/* 🔎 Search Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg mx-auto border border-gray-300 bg-white dark:bg-gray-900 rounded overflow-hidden shadow-sm transition-transform duration-300 hover:scale-[1.01]"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blogs"
            required
            className="w-full pl-4 py-2 outline-none dark:text-white dark:bg-gray-900"
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-transform cursor-pointer"
          >
            Search
          </button>
        </form>

       
        {input && (
          <div className="text-center mt-4">
            <button
              onClick={onClear}
              className="border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer dark:text-black dark:border-gray-600"
            >
              Clear Search
            </button>
          </div>
        )}

      
      </div>

      
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-10 opacity-40 pointer-events-none"
      />
    </div>
  );
};

export default Header;
