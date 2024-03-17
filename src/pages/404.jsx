import React from 'react';

export default function Leg404() {
  return (
    <section className="relative bg-body overflow-hidden pt-20 pb-20 w-screen h-screen">
      <div className="relative flex flex-wrap -mx-4">
        <div className="absolute top-0 left-0 -mt-64 w-186 h-186 bg-gradient-to-t from-purple-600 via-darkBlue-900 to-transparent rounded-full filter blur-4xl"></div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="relative max-w-md xl:max-w-lg mx-auto pt-28 pb-12 lg:py-64 px-4">
            <img className="absolute top-0 lg:bottom-0 right-0 -mr-8 lg:-mr-0 lg:mb-24 animate-spinStar" src="./assets/blink-star.png" alt="" />
            <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl font-semibold dark:text-white tracking-tight mb-6">Oops! Can't Find That Page</h2>
            <p className="text-xl dark:text-gray-400 mb-6">Sorry, the page you are looking for doesn't exist or has been moved.</p>
            <a className="group inline-flex w-full md:w-auto h-14 px-7 items-center justify-center text-base font-medium text-black hover:text-violet-800 bg-violet-500 hover:bg-white transition duration-200 rounded-full" href="/">TAKE ME HOME</a>
          </div>
        </div>
      </div>
    </section>
  );
}
