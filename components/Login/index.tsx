import React from 'react'

export default function Login() {
  return (
    <div className="flex justify-center items-center pb-24">
      <div className="w-full sm:w-3/12">
        <h1 className="text-4xl text-gray-900 mb-6">
          <span className="font-bold">Continue</span> Study, <br />
          Finish your <span className="font-bold">Goals</span>
        </h1>
        <form onSubmit={() => {}}>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              onChange={() => {}}
              className="bg-white focus:outline-none border w-full px-6 py-3 border-gray-600 focus:border-teal-500"
            //   value={}
              placeholder="Your email addres"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-lg mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={() => {}}
              className="bg-white focus:outline-none border px-6 py-3 w-full border-gray-600 focus:border-teal-500"
            //   value={}
              placeholder="Your password addres"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full"
          >
            Masuk
          </button>
        </form>
      </div>

      <div className="w-2/12 hidden sm:block"></div>

      <div className="w-5/12 hidden sm:block justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0"
            style={{ width: 324, height: 374 }}
          ></div>
          <div className="absolute w-full h-full -mb-8 -ml-8">
            <img
              src="/images/tamara-caem.jpg"
              alt="Mbak tamara caem juga"
            />
          </div>
          <div
            className="absolute z-10 bg-white bottom-0 right-0 py-3 px-4 -mr-12 border-2 border-indigo-200"
            style={{ width: 290 }}
          >
            <p className="text-gray-900 mb-2">
              Metode belajar yang santai seperti nonton drakor di Netflix
            </p>
            <span className="text-gray-600">Alyssa, Apps Developer</span>
          </div>
        </div>
      </div>
    </div>
  )
}
