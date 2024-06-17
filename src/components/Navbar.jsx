import React, { useState, useRef, useEffect } from 'react';
import Container from './Container';
import logo from '../assets/logo.svg';
import cart from '../assets/Cart.svg';
import user from '../assets/User-1.svg';
import Menu from './Menu';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import MobileMenu from './MobileMenu';

const Navbar = ({ promotion }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const handleIsOpen = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const body = document.body;
        console.log('Menu isOpen:', isOpen);

        if (isOpen) {
            console.log('Adding no-scroll to body');
            document.addEventListener('mousedown', handleClickOutside);
            body.classList.add('no-scroll');
        } else {
            console.log('Removing no-scroll from body');
            body.classList.remove('no-scroll');
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    return (
        <nav>
            <div className={`${promotion ? "bg-neutral-900 text-neutral-100 w-full flex flex-col md:flex-row items-center justify-center py-2" : "hidden"}`}>
                <span className='text-sm font-normal'>Get 25% OFF on your first order. <span className='font-medium'>Order Now</span></span>
            </div>
            <Container>
                <div className='flex flex-col gap-8 mt-6 w-full'>
                    <div className='flex flex-wrap items-center justify-between gap-2'>
                        <img src={logo} />
                        <Menu />
                        <div className='flex items-center gap-8 overflow-hidden'>
                            <img src={cart} alt="cart-icon" />
                            <img src={user} alt="user-icon" className='hidden sm:block' />
                            {!isOpen ? <HiOutlineMenuAlt3 className='lg:hidden z-20' size={25} onClick={handleIsOpen} /> : <RiCloseFill className='lg:hidden z-20 fixed top-12 right-4 text-neutral-100' size={25} onClick={handleIsOpen} />}
                        </div>
                    </div>
                </div>
            </Container>
            <div ref={menuRef} className={`fixed w-[70vw] top-9 bg-neutral-900 transition-transform transform duration-[750ms] ${!isOpen ? "translate-x-full" : "translate-x-0"} h-screen right-0 z-30`}>
                <MobileMenu />
            </div>
        </nav>
    );
}

export default Navbar;
