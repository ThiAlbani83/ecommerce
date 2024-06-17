import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const Menu = () => {

  return (
    <menu>
        <ul className='lg:flex items-center gap-8 text-neutral-500 font-medium text-sm hidden'>
            <li>Home</li>
            <li className='flex items-center gap-2'>Categories <HiChevronDown /> </li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </menu>
  )
}

export default Menu