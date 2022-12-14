import { Popover, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Product", href: "#product" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "#about" },
];

interface HeaderProps {
  href: string;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { href, title } = props;

  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
      setEnabled(true);
    } else {
      setTheme("light");
      setEnabled(false);
    }
  };

  useEffect(() => {
    setEnabled(theme === "dark" ? true : false);
    console.log("theme:", theme);
  }, [theme]);

  return (
    <Popover>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 xl:justify-start"
          aria-label="Globals"
        >
          <div className="flex flex-shrink-0 flex-grow items-center justify-center lg:flex-grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <a href="/">
                <span className="sr-only">Fist Mousea</span>
                <img
                  alt="Fist Mousea"
                  className="h-8 w-auto sh:h-10"
                  src="/icons/logo.svg"
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-indigo-200 p-2 text-gray-400 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open mian menu</span>
                  <Image
                    alt="bar-ic"
                    width={24}
                    height={24}
                    src="/icons/bar.svg"
                    aria-hidden={true}
                  />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8 md:pr-4 my-auto">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-semibold align-middle text-gray-400 hover:text-gray-200"
              >
                {item.name}
              </a>
            ))}
           
            {enabled === true ? (
              <button
                onClick={changeToggle}
                className="bg-indigo-800 hover:bg-indigo-700 text-indigo-800 rounded-xl p-2 text-xs"
              >
                <span>
                  <Image className="text-cyan-50" width={24} height={24} src="/icons/sun_light.svg" alt="Dark"/>
                </span>
              </button>
            ) : (
              <button
                onClick={changeToggle}
                className="bg-indigo-800 hover:bg-indigo-700 text-indigo-200 rounded-xl p-2 text-xs"
              >
                <span>
                  <Image className="text-cyan-50" width={24} height={24} src="/icons/moon_dark.svg" alt="Dark"/>
                </span>
              </button>
            )}
             <a
              href={href}
              className="font-semibold text-indigo-600 bg-indigo-100 hover:bg-indigo-700 hover:text-white px-4 py-2 rounded-md"
              >
              {title}
            </a>
          </div>
        </nav>
      </div>
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-slate-900">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  alt="Fist Mousea"
                  className="h-8 w-auto sh:h-10"
                  src="/icons/logo.svg"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <Image
                    alt="close-ic"
                    width={24}
                    height={24}
                    src="/icons/close.svg"
                    aria-hidden={true}
                  />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex justify-between items-center px-5 pb-3">
              <div className="font-medium dark:text-gray-300 text-gray-700">Set Mode</div>
              {enabled === true ? (
              <button
                onClick={changeToggle}
                className="bg-indigo-800 hover:bg-indigo-700 text-indigo-800 rounded-xl p-2 text-xs"
              >
                <span>
                  <Image className="text-cyan-50" width={24} height={24} src="/icons/sun_light.svg" alt="Dark"/>
                </span>
              </button>
            ) : (
              <button
                onClick={changeToggle}
                className="bg-indigo-800 hover:bg-indigo-700 text-indigo-200 rounded-xl p-2 text-xs"
              >
                <span>
                  <Image className="text-cyan-50" width={24} height={24} src="/icons/moon_dark.svg" alt="Dark"/>
                </span>
              </button>
            )}
            </div>
            
            <a
              type="button"
              href={href}
              className="block w-full bg-gray-50 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
            >
              {title}
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
