import React from 'react'
import Image from "next/image";

const brandClient = [
    "amazon", "ms", "tesla", "google", "fb",
   ]
   
export default function CompanyClients() {
  return (
    <section className="py-12 mt-10">
        <div className="flex flex-wrap justify-center items-center"> 
        {brandClient.map((item) => (
          <div className="mb-8 md:mb-0 mx-auto">
            <Image className="mx-auto" width={150} height={32} src={`/images/${item}.png`}/>
          </div>
        ))}
        </div>
      </section>
  )
}
