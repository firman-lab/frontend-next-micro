import Link from 'next/link'
import React from 'react'
import cx from 'classnames'

interface MenuItemProps{
    title: string;
    active?: boolean;
    href: string;
    icon: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
    const{title, active, href = "", icon,} = props;
    const classItem = cx({
      active,
    });
  return (
    <Link href={href}>
        <a className={`side-link z-2001 ${classItem}`}>
          <i className={`bx ${icon}`}/>
          <span className='pl-3'>{title}</span>
        </a>
      </Link>
  )
}