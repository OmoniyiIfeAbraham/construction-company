import React from 'react'

import Four from './../assets/services-four.webp'
import Five from './../assets/services-five.webp'

import Footer from './../components/footer'

function Services() {
  return (
    <div className='w-full h-auto bg-neutral-700 md:px-10'>
      <div className='w-full h-auto pb-28'>

      </div>

      <div className='w-full h-auto grid pb-10'>

        <div className='w-full h-auto grid md:grid-cols-4'>
          <div className='w-full/4 h-[150px] md:h-[500px] bg-amber-700/50 grid justify-center'>
            <h2 className='text-white font-bold text-4xl self-center'>Our Services</h2>
          </div>
          <div className='w-full/4 h-[500px] md:hidden'>
            <img className='w-full h-full object-cover' src={Four} alt="" />
          </div>
          <div className='w-full/4 h-[500px] border-amber-700/50 border-b-2 border-t-2 md:border md:border-amber-700/50 grid px-5 py-12'>
            <h4 className='text-amber-700/50 font-medium text-4xl self-center'>Complete Remodeling</h4>
            <p className='text-white font-normal text-1xl self-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima tempora numquam! Nihil cupiditate dolores ipsa earum quibusdam explicabo iure corrupti maxime laboriosam, fugit quisquam eius distinctio dolor cum ab doloribus eveniet harum qui?</p>
          </div>
          <div className='w-full/4 h-[500px] border-amber-700/50 border-b-2 md:border md:border-amber-700/50 grid px-5 py-12'>
            <h4 className='text-amber-700/50 font-medium text-4xl'>Kitchen Remodeling</h4>
            <p className='text-white font-normal text-1xl self-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima tempora numquam! Nihil cupiditate dolores ipsa earum quibusdam explicabo iure corrupti maxime laboriosam, fugit quisquam eius distinctio dolor cum ab doloribus eveniet harum qui?</p>
          </div>
          <div className='w-full/4 h-[500px] hidden md:block'>
            <img className='w-full h-full object-cover' src={Four} alt="" />
          </div>
        </div>

        <div className='w-full h-auto grid md:grid-cols-4'>
          <div className='w-full/4 h-[500px]'>
            <img className='w-full h-full object-cover' src={Five} alt="" />
          </div>
          <div className='w-full/4 h-[500px] border-amber-700/50 border-b-2 border-t-2 md:border md:border-amber-700/50 grid px-5 py-12'>
            <h4 className='text-amber-700/50 font-medium text-4xl'>Home Interior</h4>
            <p className='text-white font-normal text-1xl self-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima tempora numquam! Nihil cupiditate dolores ipsa earum quibusdam explicabo iure corrupti maxime laboriosam, fugit quisquam eius distinctio dolor cum ab doloribus eveniet harum qui?</p>
          </div>
          <div className='w-full/4 h-[500px] border-amber-700/50 border-b-2 md:border md:border-amber-700/50 grid px-5 py-12'>
            <h4 className='text-amber-700/50 font-medium text-4xl'>Flooring</h4>
            <p className='text-white font-normal text-1xl self-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima tempora numquam! Nihil cupiditate dolores ipsa earum quibusdam explicabo iure corrupti maxime laboriosam, fugit quisquam eius distinctio dolor cum ab doloribus eveniet harum qui?</p>
          </div>
          <div className='w-full/4 h-[500px] border-amber-700/50 border-b-2 md:border md:border-amber-700/50 grid px-5 py-12'>
            <h4 className='text-amber-700/50 font-medium text-4xl'>Bathroom Remodeling</h4>
            <p className='text-white font-normal text-1xl self-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima tempora numquam! Nihil cupiditate dolores ipsa earum quibusdam explicabo iure corrupti maxime laboriosam, fugit quisquam eius distinctio dolor cum ab doloribus eveniet harum qui?</p>
          </div>
        </div>

        <div className='w-full h-auto grid md:grid-cols-4'>
          <div className='w-full/4 h-[150px] md:h-[500px] border-amber-700/50 border-b-2 md:border md:border-amber-700/50 py-10 md:py-32 px-5'>
            <h2 className='text-white font-medium text-4xl'>Our Expertise</h2>
          </div>
          <div className='w-full/4 h-[500px] border-amber-700/50 border-b-2 md:border md:border-amber-700/50'>
            <h4 className='text-white font-medium text-3xl pt-28 pl-5'>Pre-Construction</h4>
            <ul className='list-disc pl-16'>
              <li className='text-white font-normal text-1xl'>Design-Build</li>
              <li className='text-white font-normal text-1xl'>Scheduling</li>
              <li className='text-white font-normal text-1xl'>Estimating & Budgeting</li>
            </ul>
          </div>
          <div className='w-full/4 h-[500px] border-amber-700/50 border-b-2 md:border md:border-amber-700/50'>
            <h4 className='text-white font-medium text-3xl pt-28 pl-5'>Construction</h4>
            <ul className='list-disc pl-16'>
              <li className='text-white font-normal text-1xl'>Quality Control</li>
              <li className='text-white font-normal text-1xl'>Safety Management</li>
              <li className='text-white font-normal text-1xl'>Subcontractor Management</li>
            </ul>
          </div>
          <div className='w-full/4 h-[500px] border-amber-700/50 border-b-2 md:border md:border-amber-700/50'>
            <h4 className='text-white font-medium text-3xl pt-28 pl-5'>Post-Construction</h4>
            <ul className='list-disc pl-16'>
              <li className='text-white font-normal text-1xl'>Cerificate of Occupancy</li>
              <li className='text-white font-normal text-1xl'>As-built documentation</li>
              <li className='text-white font-normal text-1xl'>Warranty</li>
            </ul>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Services