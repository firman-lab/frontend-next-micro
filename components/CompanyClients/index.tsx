import React from "react";
import Image from "next/image";

const brandClient = ["amazon", "ms", "tesla", "google", "fb"];

export default function CompanyClients() {
  return (
    <section className="mx-auto max-w-7xl" data-aos="zoom-in">
      <div className="py-8 mt-8 pl-9 pr-9 lg:w-full lg:py-12 lg:mt-12 overflow-x-auto">
        <div className="flex flex-wrap justify-center lg:justify-between">
          {brandClient.map((item, index) => (
            // <div className="md:mb-0 mx-2 lg:mx-auto" >
            <Image
              key={index}
              className="m-3"
              alt="brand"
              width={110}
              height={32}
              src={`/images/${item}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
