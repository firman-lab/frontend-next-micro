import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Sidebar from "../../components/Sidebar";
import sidebarShow from "../../store";

export default function Member() {

  const [show, setShow] = useRecoilState(sidebarShow);

  return (
    <>
      <div className={`${show === false ? "hidden" : ""} lg:hidden fixed bg-gray-600 opacity-60 left-0 right-0 bottom-0 top-0`} />
      <div className="w-full max-h-screen mx-auto pr-8">
        {/* <div className={`${show === false ? "" : "hidden"} block`}> */}
          <Sidebar activeMenu="dash" />
        {/* </div> */}
        <div className="lg:pl-80">
          <nav className="flex justify-between items-center flex-wrap pt-12 px-4 pb-6 md:flex-nowrap">
            <div className="flex justify-between items-center w-full mb-3">
              <div className="flex justify-start items-center">
                <button onClick={() => {setShow(true)}}>
                  <i className="bx bx-menu text-3xl font-semibold text-indigo-600 border-gray-300 hover:bg-indigo-500 hover:text-gray-100 hover:shadow-md hover:border-indigo-500 border-2 rounded-md lg:hidden" />
                </button>
                <h2 className="text-3xl font-semibold px-2 leading-1">Overview</h2>
              </div>
              <div className="flex justify-end">
                <button onClick={() => {}}>
                  <i className="bx bx-bell text-3xl text-gray-400" />
                </button>
              </div>
            </div>
          </nav>
          <section>
            MAkan Besar
          </section>
        </div>
      </div>
    </>
  );
}
