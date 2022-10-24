import React from "react";
import Image from "next/image";

const brandClient = ["amazon", "ms", "tesla", "google", "fb"];

export default function CompanyClients() {
  return (
    <section className="py-8 lg:py-12 lg:mt-10">
      <div className="max-w-7xl mx-auto my-auto px-4">
        <div className="flex justify-center justify-items-center items-center">
          {brandClient.map((item) => (
            <div className="md:mb-0 mx-2 lg:mx-auto">
              <Image
                className="mx-auto"
                width={150}
                height={32}
                src={`/images/${item}.png`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
