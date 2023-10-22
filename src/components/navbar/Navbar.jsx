import React from 'react'
import { Link } from 'react-router-dom'
import useNavbar from './hooks/useNavbar'
import MenuIcon from '../icons/MenuIcon';

const Navbar = () => {

    const { menuOpen, toggleMenu } = useNavbar();

    return (
        <div className="relative w-full flex justify-between items-center flex-row p-4">
            <div>
                PentestTool
            </div>

            <div className='right-0 md:hidden' onClick={toggleMenu}>
                <MenuIcon/>
            </div>

            <ul className={`${menuOpen ? 'absolute' : 'hidden'}  p-4 w-[90%] bg-[#202447e0] ring-2 rounded-lg translate-x-[-50%] top-full left-1/2 flex flex-col [&>*]:hover:pointer [&>*]:p-4 [&>*]:w-full md:flex md:items-center md:flex-row md:bg-transparent md:w-max md:ring-0 md:translate-x-0 md:[&>*]:w-max md:[&>*]:px-5 md:[&>*]:py-0`}>

                <li>
                    Home
                </li>

                <li>
                    Menu
                </li>

                <li>
                    <Link to='email-security'>
                        Email Security
                    </Link>
                </li>

                <li>
                    <Link to='network-security'>
                        Network Secuirty
                    </Link>
                </li>

                <li>
                    <Link to='contact-us'>
                        <div className='`w-full p-2 px-4 text-center bg-[#0EA5E9] text-white rounded-lg'>
                            Contact Us
                        </div>
                    </Link>
                </li>

            </ul>
        
        </div>
  )
}

export default Navbar