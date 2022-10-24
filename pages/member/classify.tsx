import React from "react";
import { useRecoilValue } from "recoil";
import Navbar from "../../components/Member/Navbar";
import Sidebar from "../../components/Sidebar";
import sidebarShow from "../../store";

export default function classify() {
  const show = useRecoilValue(sidebarShow);

  return (
    <>
      <div
        className={`${
          show === false ? "hidden" : ""
        } lg:hidden fixed bg-gray-600 opacity-60 left-0 right-0 bottom-0 top-0`}
      />
      <div className="w-full max-h-screen mx-auto pr-8 font-inter">
        {/* <div className={`${show === false ? "" : "hidden"} block`}> */}
        <Sidebar activeMenu="classify" />
        {/* </div> */}
        <div className="lg:pl-72 mx-8">
          <Navbar title="Classify Data" />
          <section className="py-8 px-4 bg-indigo-900 rounded-lg">
            <div className="px-5 mx-auto text-center">
              <h2 className="pb-4 text-white text-2xl font-bold">
                Upload Jurnal Keuangan
              </h2>
              {/* <button onClick={()=>{}} className="px-12 py-4 bg-white font-medium text-lg rounded-lg hover:bg-indigo-500 hover:text-white hover:shadow-md ">
                    Select Data
                </button> */}
              <div className="flex justify-center">
                <input
                  type="file"
                  className="  block
                  w-96
                  px-4
                  py-4
                  text-md
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                />
              </div>
            </div>
            <div className="left-4"></div>
          </section>
        </div>
      </div>
    </>
  );
}
