import React, {useState} from 'react'

import {MenuIcon, XIcon} from '@heroicons/react/outline'

import { Helmet } from 'react-helmet'

import {Link} from 'react-router-dom'

import { HashLink } from 'react-router-hash-link'

function Nav() {
    const [lin, setNav] = useState(false)
    const handleClick = () => setNav(!lin)

    const handleClose = () => setNav(!lin)


  return (
    <div>
        <nav className='flex items-center w-full h-[80px] z-10 bg-black md:bg-transparent fixed px-8' id='navbar'>
            {/* <div className='flex justify-between'> */}
                <Link to='/'>
                    <div className='w-[10%] flex'>
                        <h3 className='font-bold text-white'>Newel Residential Remodeling</h3>
                    </div>
                </Link>
                <div className='w-[90%] hidden md:flex justify-end'>
                    <ul className='hidden md:flex items-center px-8'>
                        <Link to='/'><li className='px-4 uppercase text-white'>Home</li></Link>
                        <Link to='/services'><li className='px-4 uppercase text-white'>Services</li></Link>
                        <Link to='/projects'><li className='px-4 uppercase text-white'>Projects</li></Link>
                        <HashLink to='/#contact' smooth><li className='px-4 uppercase text-white'>Contacts</li></HashLink>
                    </ul>
                    <div className='hidden md:flex pr-4'>
                        <button className='uppercase justify-center'><a href='tel:09032825450'>call now</a></button>
                    </div>
                </div>
                <div className='md:hidden w-[90%] flex justify-end' onClick={handleClick}>
                    {!lin ? <MenuIcon className='w-10 z-20 text-white' /> : <XIcon className='w-10 z-20 text-white' />}
                </div>
            {/* </div> */}
            
            {/* <div className='bg-black'> */}
                <ul className={!lin ? 'hidden' : 'flex flex-col items-center w-full h-screen mb-[-33vh] ml-[-35px] justify-center absolute bg-black z-15 mt-96 px-[8px]'}>
                    <Link to='/'><li onClick={handleClose} className='px-4 uppercase text-white'>Home</li></Link>
                    <Link to='/services'><li onClick={handleClose} className='px-4 uppercase text-white'>Services</li></Link>
                    <Link to='/projects'><li onClick={handleClose} className='px-4 uppercase text-white'>Projects</li></Link>
                    <HashLink to='/#contact' smooth><li onClick={handleClose} className='px-4 uppercase text-white'>Contacts</li></HashLink>
                    <div className='flex flex-col my-4'>
                        <a href="tel:09032825450"><button>call now</button></a>
                    </div>
                </ul>
            {/* </div> */}
        </nav>
        <Helmet>
            <script src='./navScript.js'></script>
        </Helmet>
    </div>
  )
}

export default Nav