import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import Submenu from './Submenu';

const MobileMenu = () => {

  const [categoryOpen, setCategoryOpen] = useState(false);

  const handleCategoryMenu = () => {
    setCategoryOpen(!categoryOpen);
    console.log('Category:' + categoryOpen)
  }

  return (
    <div className='w-full h-screen pt-20 px-5'>
      <ul className='text-neutral-100 text-[18px] flex flex-col gap-10'>
        <li>Início</li>
        <li onClick={handleCategoryMenu} className='flex gap-2 items-center'>Categorias<HiChevronDown className={`${categoryOpen ? "rotate-180 duration-500" : "rotate-0 duration-500"}`} /></li>
        {categoryOpen && (
          <li className={`ml-4 -mt-5`}>
            <Submenu />
          </li>
        )}
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </div>
  )
}

export default MobileMenu