import Link from 'next/link'
import React from 'react'

interface MenuItemProps{
    title: string;
    active?: boolean;
    href: string;
    icon: string;
}

export default function MenuItem(props: MenuItemProps) {
    const{title, active, href = "", icon,} = props;
  return (
    <Link href={'/'}>
        <a className='flex justify-start font-semibold items-center mx-4 px-4 py-3 rounded-md text-gray-600 hover:bg-indigo-700 hover:text-gray-100'>
          <i className="bx bxs-dashboard "/>
          <span className='pl-3'>{title}</span>
        </a>
      </Link>
  )
}
