import { useState } from 'react'
import logo from '../../../public/LogoCorte.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const menuitems = [
        {
            title: 'Home',
            path: '#home',
        },
        {
            title: 'Shop',
            path: '#shop',
        },
        {
            title: 'About',
            path: '#about',
        },
        {
            title: 'Contact',
            path: '#contact',
        },
    ];

    const userItems = [
        {
            title: 'My Account',
            path: '#myacount',
            icon: faUserPlus
        },
        {
            title: 'Search',
            path: '#search',
            icon: faMagnifyingGlass
        },
        {
            title: 'Favourite',
            path: '#favourite',
            icon: faHeart
        },
        {
            title: 'Cart',
            path: '#cart',
            icon: faCartShopping
        }
    ]

    return (
        <div className='relative mt-24'>
            <header id='header' className=' flex flex-col items-center justify-between lg:flex-row height:calc(50vh-50px) fixed top-0 left-0 w-full z-50  bg-white'>
                <div className='flex w-full items-center justify-between lg:w-auto'>

                    <a href="/"> <img src={logo} width="150vh" alt="logo" className='lg:ml-5'/></a>
                    
                </div>
                <div className='mt-2 hidden w-full lg:mt-0 lg:flex lg:w-auto'>
                    <ul className="flex flex-col lg:flex-row lg:gap-3">
                        {
                            menuitems.map((item) => (
                                <>
                                    <li>
                                        <a
                                            aria-label="navigation link"
                                            href={item.path}
                                            className="flex py-2 text-black hover:text-cyan-400 dark:text-white dark:hover:text-cyan-400 lg:px-3"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                </>
                            ))
                        }

                    </ul>
                </div>
                <div className='mt-2 hidden w-full lg:mt-0 lg:flex lg:w-auto'>
                    <ul className="flex flex-col lg:flex-row lg:gap-3">
                        {
                            userItems.map((itemUser) => (
                                <>
                                    <li>
                                        <a
                                            aria-label="navigation link"
                                            href={itemUser.path}
                                            className="flex py-2 text-black hover:text-cyan-400 dark:text-white dark:hover:text-cyan-400 lg:px-3"
                                        >
                                            <FontAwesomeIcon icon={itemUser.icon} />
                                        </a>
                                    </li>
                                </>
                            ))
                        }

                    </ul>

                </div>

            </header>
        </div>
    )
}

export default Header
