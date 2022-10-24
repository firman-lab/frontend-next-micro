import React from "react";
import { useRecoilState } from "recoil";
import sidebarShow from "../../store";

interface NavbarProps{
    title : string;
}

export default function Navbar(props: NavbarProps) {
    const {title} = props;
  const [show, setShow] = useRecoilState(sidebarShow);

  return (
    <nav className="flex justify-between items-center flex-wrap pt-12 pb-6 md:flex-nowrap">
      <div className="flex justify-between items-center w-full mb-3">
        <div className="flex justify-start items-center">
          <button
            onClick={() => {
              setShow(true);
            }}
          >
            <i className="bx bx-menu text-3xl font-semibold text-indigo-600 border-gray-300 hover:bg-indigo-500 hover:text-gray-100 hover:shadow-md hover:border-indigo-500 border-2 rounded-md lg:hidden" />
          </button>
          <h2 className="text-3xl font-semibold lg:pl-0 pl-2 leading-1">
            {title}
          </h2>
        </div>
        <div className="flex justify-end">
          <button onClick={() => {}}>
            <i className="bx bx-bell text-3xl text-gray-400" />
          </button>
        </div>
      </div>
    </nav>
  );
}
