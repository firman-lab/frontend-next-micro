import React from "react";
import Image from "next/image";

const brandClient = ["amazon", "ms", "tesla", "google", "fb"];

export default function CompanyClients() {
  return (
    <section
      className="max-w-7xl bg-gray-100 dark:bg-gray-800 mx-10 xl:mx-auto rounded-xl sticky"
      data-aos="zoom-in"
    >
      <div className="py-8 -mt-12 lg:w-full lg:py-12 overflow-x-auto">
        <div className="flex flex-wrap items-center justify-around">
          {brandClient.map((item, index) => (
            // <div className="md:mb-0 mx-2 lg:mx-auto" >
            <Image
              key={index}
              className="m-2"
              alt="brand"
              width={90}
              height={32}
              src={`/images/${item}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
