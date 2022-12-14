import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useRecoilState } from 'recoil';
import { sidebarShow } from '../../store';
import MenuItem from './MenuItem';

interface SidebarProps {
  activeMenu: "dash" | "classify" | "lpe" | "ln" | "lra" | "setting";
}

export default function Sidebar(props:SidebarProps) {
  const {activeMenu} = props;
  const [show, setShow] = useRecoilState(sidebarShow)
  return (
    <aside className={`${show === true ? "!w-72 !left-0" : ""} -left-72 w-0 lg:left-0 lg:w-72 fixed flex z-100 h-screen flex-col space-y-2 border-r dark:border-[#1E293B] dark:bg-[#0F172A] bg-white p-2 peer-focus:left-0 transition-all delay-100 duration-100`}>
      <a className="flex justify-end lg:hidden" type='button' onClick={() => {setShow(false)}}>
        <i className='bx bx-x text-3xl hover:bg-indigo-500 hover:text-white hover:rounded-md'/>
      </a>
      <div className="h-19.5">
        {/* <Image className='absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer text-slate-400 xl:hidden' src="/icons/close.svg" height={24} width={24}/> */}
        <Link href="/" className='flex items-center justify-center space-x-1 rounded-md px-2 py-4'>
          {/* <i className='bx bx-chevrons-left text-3xl hover:bg-indigo-600 hover:text-white hover:rounded-md'></i>         */}
          <Image className='inline transition-all duration-200 text-indigo-700 ease-nav-brand mr-4' alt='main-logo' src="/icons/logo.svg" height={35} width={35}/>
          <span className='ml-1 font-bold transition-all duration-200 text-3xl'>Fast</span>
        </Link>
      </div>
      <hr className='h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent' />
      <p className="pt-4 pl-4 font-light text-sm">Main</p>
      <MenuItem
        title='Dashboards'
        href='/member'
        icon="bxs-dashboard"
        active={activeMenu === "dash"}
      />
      <p className="pt-4 pl-4 font-light text-sm">Scope Data</p>
      <MenuItem
        title='Classify'
        href='/member/classify'
        icon='bxs-pyramid'
        active={activeMenu === "classify"}
      />
      <MenuItem
        title='History'
        href='#'
        icon='bxs-data'
        active={activeMenu === "lpe"}
      />
     
    </aside>
  )
}
