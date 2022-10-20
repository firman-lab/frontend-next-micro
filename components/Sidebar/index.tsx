import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <aside className='flex w-72 h-screen flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2'>
      <div className="h-19.5">
        {/* <Image className='absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer text-slate-400 xl:hidden' src="/icons/close.svg" height={24} width={24}/> */}
        <a href="#" className='flex items-center justify-center space-x-1 rounded-md px-2 py-5'>
          <Image className='inline transition-all duration-200 text-indigo-700 ease-nav-brand max-h-8' alt='main-logo' src="/icons/ghost.svg" height={24} width={24}/>
          <span className='ml-1 font-semibold transition-all duration-200 ease-nav-brand'>FIST OU</span>
        </a>
      </div>
      <hr className='h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent' />

      <Link href={'/hr'} className="hover:bg-indigo-600">
        <a className='flex justify-start items-center px-4 py-3 rounded-md hover:bg-indigo-500 hover:text-gray-100'>
          <i className="bx bxs-dashboard"/>
          <span className='pl-3'>Dashboard</span>
        </a>
      </Link>
     
    </aside>
  )
}
