import Image from 'next/image'
import React from 'react'
import { useRecoilState } from 'recoil';
import sidebarShow from '../../store';
import MenuItem from './MenuItem';

interface SidebarProps {
  activeMenu: "dash" | "lo" | "lpe" | "ln" | "lra" | "setting";
}

export default function Sidebar(props:SidebarProps) {
  const {activeMenu} = props;
  const [show, setShow] = useRecoilState(sidebarShow)
  return (
    <aside className={`${show === true ? "!block" : ""} hidden lg:block fixed w-72 z-100 h-screen flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2`}>
      <a className="flex justify-end lg:hidden" type='button' onClick={() => {setShow(false)}}>
        <i className='bx bx-x text-3xl hover:bg-indigo-500 hover:text-white hover:rounded-md'/>
      </a>
      <div className="h-19.5">
        {/* <Image className='absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer text-slate-400 xl:hidden' src="/icons/close.svg" height={24} width={24}/> */}
        <a href="#" className='flex items-center justify-center space-x-1 rounded-md px-2 py-4'>
          <Image className='inline transition-all duration-200 text-indigo-700 ease-nav-brand max-h-8' alt='main-logo' src="/images/kemenhan.png" height={85} width={85}/>
          <span className='ml-1 font-bold transition-all duration-200 text-3xl'>Fast</span>
        </a>
      </div>
      <hr className='h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent' />
      <p className="pt-4 pl-4 font-light text-sm">Main</p>
      <MenuItem
        title='Dashboards'
        href='/'
        icon="bxs-dashboard"
        active={activeMenu === "dash"}
      />
      <p className="pt-4 pl-4 font-light text-sm">Scope Data</p>
      <MenuItem
        title='Classify'
        href='#'
        icon='bxs-pyramid'
        active={activeMenu === "lo"}
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
