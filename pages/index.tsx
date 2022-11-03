import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import CompanyClients from "../components/CompanyClients";
import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AOS from "aos";

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
  
  useEffect(() => {
    AOS.init();
  })

 

  
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <Head>
            <title>Fist</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="relative z-10 bg-white dark:bg-black pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <Header title="Log in" href="/login"/>
            <Hero/>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:block hidden" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="hero"
          />
        </div>
      </div>
      <CompanyClients/>
      <Features/>
      <section className="bg-gray-50 pt-10 pb-10">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-aos="fade-right">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">
              Prepare your data now!
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0" data-aos="fade-left">
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
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-700 hover:text-white"
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
          <p className="mx-2 mt-8 text-center font-medium text-gray-400">
            Copyright 2022 Firman std. All right reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
