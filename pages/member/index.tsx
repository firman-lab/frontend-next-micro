import React from "react";
import Sidebar from "../../components/Sidebar";

export default function Member() {
  return (
    <>
      <div className="fixed bg-gray-600 hidden opacity-60 left-0 right-0 bottom-0 top-0"/>
      <div className="w-full max-h-screen">
        <Sidebar activeMenu="dash" />
      </div>
      <nav className="flex justify-between items-center flex-wrap pt-12 px-4 pb-6 md:flex-nowrap">
        <div className="flex justify-between items-center w-full mb-3">
          <div className="flex justify-start items-center">
            <button onClick={() => {}}>
              <i className="bx bx-menu text-2xl"/>
            </button>
            <h2>Overview</h2>
          </div>
        </div>
      </nav>
    </>
  );
}
