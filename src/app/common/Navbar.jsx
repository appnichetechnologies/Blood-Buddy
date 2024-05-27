'use client';
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link'
import Logo from './Logo';
import Logo1 from './Logo1';

const Navbar = () => 
{
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'ABOUT US', link: '/#about' },
        { id: 2, text: 'VOLUNTEER', link: '/#volunteer' },
        { id: 3, text: 'GET HELP', link: '/donate' },
        { id: 4, text: 'DONATE', link: '/#help' },
    ];

    const nav_bar = (
        <header className="w-[100dvw] h-[20dvh] backdrop-blur-sm backdrop-opacity-80 -z-100 fixed flex items-center justify-between p-4 md:p-12 ">
            {/* Logo  */}
            <Logo />

            {/* Navbar */}
            <nav className="hidden md:flex flex-row gap-4 text-black text-right w-auto absolute left-[50%] font-serif font-medium">
                
                {
                    navItems.map((items)=>(
                    <Link key={items.id} href={items.link} className='py-4 px-6 text-xl hover:[text-shadow:_0_1px_0_rgb(100_0_0_/_110%)] duration-700 hover:text-red-700 hover:border-b hover:border-red-500 transition'>
                        {items.text}
                    </Link>
                    ))
                }
            </nav>

            {/* Mobile Navigation Icon */}
            <div className='absolute left-[70%]'>
                <div onClick={handleNav} className='text-black md:hidden z-200 w-auto object-right'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
            </div>

        </header>
    );

    return (
        // <nav className="hidden md:flex flex-row gap-4 text-white text-right w-auto font-serif font-medium">

        <>
            {nav_bar}
            {/* Mobile Navigation Menu */}
            <ul
                onClick={handleNav}
                className={
                    nav
                        ? 'z-10 bg-[#000000] fixed flex-row md:hidden left-0 top-0 w-[100dvw] h-[100dvh] border-b border-white ease-in-out duration-500'
                        : 'z-10 ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                <div className='md:hidden flex items-center flex-row w-[100dvw] h-[20dvh] justify-between p-4'>
                    <Logo1/>

                    {/* Mobile Navigation Icon */}
                    <div className='absolute left-[70%] '>
                        <div onClick={handleNav} className=' text-white md:hidden z-200 w-auto object-right'>
                            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mt-[10dvh]'>
                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <a
                            key={item.id}
                            className='p-4 border-b w-full duration-300 cursor-pointer border-gray-600'
                            href={item.link}

                        >
                            <div className='hover:bg-white hover:rounded-xl px-4 py-2 duration-300 hover:text-black'>
                                {item.text}
                            </div>
                        </a>
                    ))}
                </div>

            </ul>
        </>
        
    )
}
 
export default Navbar
