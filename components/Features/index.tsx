import Aos from "aos";
import React, { useEffect } from "react";

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

export default function Features() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="lg:py-12 py-4 scroll-smooth mt-12" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
            Potential Tax
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
            A better way to finish your work
          </p>
          <p className="mt-4 max-w-4xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative" data-aos="fade-left">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500">
                    <img
                      className="h-6 w-6 border-white"
                      aria-hidden={true}
                      src={`../icons/${feature.icon}.svg`}
                    />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-indigo-400">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
