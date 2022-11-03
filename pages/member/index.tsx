import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import Navbar from "../../components/Member/Navbar";
import Sidebar from "../../components/Sidebar";
import { sidebarShow } from "../../store";

export default function Member() {

  const show = useRecoilValue(sidebarShow);

  return (
    <>
      <div className={`${show === false ? "hidden" : ""} lg:hidden fixed bg-gray-600 opacity-60 left-0 right-0 bottom-0 top-0`} />
      <div className="w-full max-h-screen mx-auto pr-8 font-inter">
        {/* <div className={`${show === false ? "" : "hidden"} block`}> */}
          <Sidebar activeMenu="dash" />
        {/* </div> */}
        <div className="lg:pl-72 mx-8">
          <Navbar title="Overview"/>
          <section>
            
          </section>
        </div>
      </div>
    </>
  );
}
