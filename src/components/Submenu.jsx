import React, { useState } from 'react'
import SubmenuMasc from './SubmenuMasc';
import { HiChevronDown } from 'react-icons/hi';
import SubmenuFem from './SubmenuFem';

const Submenu = () => {

    const [subMenuMasc, setSubMenuMasc] = useState(false);
    const [subMenuFem, setSubMenuFem] = useState(false);

    const handleSubMenuMasc = () => {
        setSubMenuMasc(!subMenuMasc);
    }

    const handleSubMenuFem = () => {
        setSubMenuFem(!subMenuFem);
    }

    return (
        <ul className='flex flex-col gap-4'>
            <li onClick={handleSubMenuMasc} className='flex items-center gap-2'>Roupas Masculinas <HiChevronDown className={`${subMenuMasc ? "rotate-180 duration-500" : "rotate-0 duration-500"}`} /></li>
            {subMenuMasc && (
                <li className='ml-4 mb-5'>
                    <SubmenuMasc />
                </li>
            )}
            <li onClick={handleSubMenuFem} className='flex items-center gap-2'>Roupas Femininas <HiChevronDown className={`${subMenuFem ? "rotate-180 duration-500" : "rotate-0 duration-500"}`} /></li>
            {subMenuFem && (
                <li className='ml-4 mb-5'>
                    <SubmenuFem />
                </li>
            )}
        </ul>
    )
}

export default Submenu