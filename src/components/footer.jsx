import React from 'react'

import { HashLink } from 'react-router-hash-link'

import {Link} from 'react-router-dom'

import {Helmet} from 'react-helmet'
import {RiHome2Line, RiLayoutMasonryLine, RiBankLine, RiHomeLine} from 'react-icons/ri'
import { IoExtensionPuzzleOutline } from 'react-icons/io5'
import {FiSmartphone, FiMail} from 'react-icons/fi'

function Footer() {
  return (
    <div>
        <div className='w-full h-auto grid md:grid-cols-3 md:px-10' id='contact'>
            <div className='w-full/3 h-[700px] md:h-[400px] grid'>
              <div className='w-full h-full/4 flex justify-center md:justify-start px-5'>
                <h2 className='text-amber-700/50 text-5xl font-semibold self-center'>Contact Us</h2>
              </div>
              <div className='w-full h-full/4 grid md:grid-cols-2 justify-center md:pl-8 md:pr-10'>
                <RiHomeLine className='w-20 h-20 text-amber-700/50 self-center ml-[120px] md:ml-[20px]' />
                <p className='text-amber-700/50 text-1xl self-center'>500 Terry Francois Street San Francisco, CA 94158</p>
              </div>
              <div className='w-full h-full/4 grid md:grid-cols-2 justify-center md:pl-8 md:pr-10'>
                <FiMail className='w-20 h-20 text-amber-700/50 self-center ml-[20px]' />
                <p className='text-amber-700/50 text-1xl self-center'>info@mysite.com</p>
              </div>
              <div className='w-full h-full/4 grid md:grid-cols-2 justify-center md:pl-8 md:pr-10'>
                <FiSmartphone className='w-20 h-20 text-amber-700/50 self-center ml-[15px]' />
                <p className='text-amber-700/50 text-1xl self-center'>123-456-7890</p>
              </div>
              <div className='md:flex justify-center px-5 hidden'>
                <p className='text-amber-700/50 text-1xl self-center'>&#169; 2023 by Newel Residential Remodeling. Proudly created with <a href='#'>Wix.com</a></p>
              </div>
            </div>
            <div className='w-full/3 h-[700px] md:h-[400px] grid md:px-10'>
                <div className='w-full h-full/4 grid md:grid-cols-2 md:justify-center'>
                    <input className='w-full md:w-[170px] bg-transparent border-amber-700/50 border-b-2 self-center placeholder:text-amber-700/50 pb-8 placeholder:text-2xl' type="text" name="" id="" placeholder='First Name' />
                    <input className='w-full md:w-[170px] bg-transparent border-amber-700/50 border-b-2 self-center placeholder:text-amber-700/50 pb-8 placeholder:text-2xl' type="text" name="" id="" placeholder='Last Name' />
                </div>
                <div className='w-full h-full/4 justify-center'>
                    <input className='w-full bg-transparent border-amber-700/50 border-b-2 self-center placeholder:text-amber-700/50 pb-8 placeholder:text-2xl' type="email" name="" id="" placeholder='Email*' />
                </div>
                <div className='w-full h-full/4 grid md:grid-cols-2 md:justify-center mt-[-100px] md:mt-0'>
                    <input className='w-full md:w-[170px] bg-transparent border-amber-700/50 border-b-2 self-center placeholder:text-amber-700/50 pb-8 placeholder:text-2xl' type="text" name="" id="" placeholder='Phone' />
                    <input className='w-full md:w-[170px] bg-transparent border-amber-700/50 border-b-2 self-center placeholder:text-amber-700/50 pb-8 placeholder:text-2xl' type="text" name="" id="" placeholder='Address' />
                </div>
                <div className='w-full h-full/4 grid'>
                    <button className='px-[170px] py-6 self-center border border-amber-700/50 text-amber-700/50' id='btn'>Submit</button>
                </div>
            </div>
            <div className='w-full/3 h-[700px] md:h-[400px] grid justify-center md:justify-end md:pr-10 pt-32 md:pt-16 md:pb-20'>
                <ul className='pb-10 px-40 md:px-0'>
                    <HashLink to='/#home' smooth><li className='text-amber-700/50 text-1xl'>Home</li></HashLink>
                    <Link to='/services'><li className='text-amber-700/50 text-1xl'>Services</li></Link>
                    <Link to='/projects'><li className='text-amber-700/50 text-1xl'>Projects</li></Link>
                    <HashLink to='/#contact' smooth><li className='text-amber-700/50 text-1xl'>Contact</li></HashLink>
                </ul>
                <button className='px-0 md:px-12 md:py-3 text-black font-thin uppercase text-2xl bg-amber-700/50' id='btn2'><a href='tel:09032825450'>call now</a></button>
                <p className='text-amber-700/50 text-1xl self-center md:hidden'>&#169; 2023 by Newel Residential Remodeling. Proudly created with <a href='#'>Wix.com</a></p>
            </div>
            <div className='w-full h-[100px]'></div>
        </div>
    </div>
  )
}

export default Footer