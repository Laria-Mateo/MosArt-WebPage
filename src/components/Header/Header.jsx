import { useState, useEffect } from 'react';
import logo from '../../../public/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const menuitems = [
        {
            title: 'Sobre Nosotros',
            path: '#sn',
        },
        {
            title: 'Diseños Más Vendidos',
            path: '#dmv',
        },
        {
            title: 'Contacto',
            path: '#contacto',
        },
    ];



    const [headerHeight, setHeaderHeight] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const header = document.getElementById('header');
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
    }, []);

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            const offset = headerHeight;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
            setIsMenuOpen(false); 
        }
    };

    return (
        <div className='relative mt-24'>
            <header id='header' className='flex flex-col items-center justify-between lg:flex-row height:calc(50vh-50px) fixed top-0 left-0 w-full z-50 bg-gray-300'>
                <div className='flex w-full items-center justify-between lg:w-auto'>
                    <a href="/"><img src={logo} width="150vh" alt="logo" className='lg:ml-5' /></a>
                    <button className="block lg:hidden mr-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </button>
                </div>
                <div className={`mt-2 w-full lg:mt-0 lg:flex lg:w-auto ${isMenuOpen ? '' : 'hidden'}`}>
                    <ul className="flex flex-col lg:flex-row lg:gap-3">
                        {menuitems.map((item) => (
                            <li key={item.title}>
                                <a
                                    aria-label="navigation link"
                                    href={item.path}
                                    onClick={() => scrollToSection(item.path)}
                                    className="flex py-2 text-black hover:text-blue-500 dark:text-white dark:hover:text-cyan-400 lg:px-3"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
               
            </header>
        </div>
    );
}

export default Header;
