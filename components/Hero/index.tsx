import React from "react";

export default function Hero() {
  return (
    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt12 md:px-6 lg:mt-20 lg:px-8 xl:mt-28" data-aos="fade-right">
      <div className="sm:text-center xl:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Take Your Data</span>
          <span className="block text-indigo-600">Sat Set, maak Jreeng!!</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mx-auto sm:max-w-xl sm:text-lg md:mt-5 md:text-xl xl:mx-0">
          Classify Journal Acounting Data with best practice of Machine Learning
          algorithm
        </p>
        <div className="mt-10 sm:flex sm:justify-center xl:justify-start">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-semibold text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
            >
              Get Stared
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-semibold text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
            >
              Try Demo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
