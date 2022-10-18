import { Popover, Transition } from "@headlessui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Header from "../components/Header";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Contact", href: "#" },
  { name: "About", href: "#" },
];
const Solutions = [
  { name: "Tax Object", href: "#" },
  { name: "Estimate Tax", href: "#" },
  { name: "Highly accurate", href: "#" },
  { name: "Much better", href: "#" },
];

const features = [
  {
    name: "Faster over the rainbow",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "bolt",
  },
  {
    name: "Less Touch, No Brain",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "click",
  },
  {
    name: "High accuracy",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "cpu",
  },
  {
    name: "More sat-set than you",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "cubeless",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <Head>
            <title>Fist</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <Header title="Log in" href="/login" />
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt12 md:px-6 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Take Your Data</span>
                  <span className="block text-indigo-600">
                    Sat Set, maak Jreeng!!
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Classify Journal Acounting Data with best practice of Machine
                  Learning algorithm
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
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
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="hero"
          />
        </div>
      </div>
      <section className="py-12 mt-10" id="features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg font-semibold text-indigo-600">
              Potential Tax
            </h2>
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              A better way to finish your work
            </p>
            <p className="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500">
                      <img
                        className="h-6 w-6 border-white"
                        aria-hidden={true}
                        src={`../icons/${feature.icon}.svg`}
                      />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 pt-10 pb-10">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">
              Prepare your data now!
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Get Started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-12 px10 bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="p-5 max-w-sm">
              <img src="../icons/logo.svg" alt="logo" />
              <p className="font-normal text-gray-400 mt-4">
                Save your time, increase your wallet frequently. Start your day
                better.
              </p>
            </div>
            <div className="p-5 max-w-sm">
              <h5 className="font-semibold text-gray-400">Solutions</h5>
              <ul className="font-normal text-gray-500">
                {Solutions.map((item) => (
                  <li className="mb-4 mt-4" key={item.name}>
                    <a href="#" className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 max-w-sm">
              <h5 className="font-semibold text-gray-400">Resources</h5>
              <ul className="font-normal text-gray-500">
                {Solutions.map((item) => (
                  <li className="mb-4 mt-4" key={item.name}>
                    <a href="#" className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 max-w-sm">
              <h5 className="font-semibold text-gray-400">Contact</h5>
              <ul className="font-normal text-gray-500">
                {Solutions.map((item) => (
                  <li className="mb-4 mt-4" key={item.name}>
                    <a href="#" className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className=" mt-8 border-gray-500" />
          <p className="mt-8 text-center font-medium text-gray-500">
            Copyright 2022. All Right Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
