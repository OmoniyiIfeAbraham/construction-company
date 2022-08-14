import React from 'react'

// import bgImg from './../assets/background.webp'
import twoPeps from './../assets/home-two-men.webp'
import twoPlan from './../assets/home-men-plan.webp'
import homeOne from './../assets/home-one.webp'
import homeTwo from './../assets/home-two.webp'
import homeThree from './../assets/home-three.webp'
import homeFour from './../assets/home-four.webp'
import homeFive from './../assets/home-five.webp'

import './homeScript'
import './homeStyle.css'
import Footer from './../components/footer'

import {Helmet} from 'react-helmet'
import {RiHome2Line, RiLayoutMasonryLine, RiBankLine, RiHomeLine} from 'react-icons/ri'
import { IoExtensionPuzzleOutline } from 'react-icons/io5'
import {FiSmartphone, FiMail} from 'react-icons/fi'

function Home() {
  return (
    <div>
      <div id='Parallax'>
        <div id='sub'></div>
      </div>
      {/* <div className='bg-black w-full h-[700px] bg-gray-900/60 bg absolute mb-50' id='Parallax'>
        <img className='w-full h-[700px] object-cover mix-blend-overlay' src={bgImg} alt="" />
      </div> */}

      <div>
        <div className='px-auto pt-80'>
          <h2 className='text-5xl pt-50 text-white font-bold text-center z-0 relative'>Newel Residential Remodeling</h2>
          <h3 className='text-3xl text-white py-6 text-center z-0 relative'>Recreating Dream Homes That Last</h3>
        </div>

        <div className='w-full mt-80 h-auto bg-neutral-700 pt-1'>
          <div className='grid md:px-10 pt-10 md:grid-cols-2 w-full h-auto mt-32'>
            <div className='w-full h-[700px] bg-transparent md:pt-5 md:border md:border-amber-700/50 mb-[-300px] md:mb-0'>
                <h3 className='text-white font-semibold text-5xl pb-4 pl-10'>Our Services</h3>
                <ul className='list-disc pl-20'>
                  <li className='text-white font-normal text-1xl pb-0'>Complete Remodeling</li>
                  <li className='text-white font-normal text-1xl pb-0'>Kitchen Remodeling</li>
                  <li className='text-white font-normal text-1xl pb-0'>Bathroom Remodeling</li>
                  <li className='text-white font-normal text-1xl pb-0'>Home Interior</li>
                  <li className='text-white font-normal text-1xl pb-0'>Flooring</li>
                </ul>
                <button className='uppercase px-24 py-4 bg-amber-700/50 mt-10 ml-10'>more info</button>
            </div>
            <div className='w-full h-[700px] border border-amber-700/50' id='two-peps'>
              <img className='w-full h-[100%] object-cover' src={twoPeps} alt="" />
            </div>
          </div>

          {/* <div> */}
            <div className='grid grid-cols-2 md:grid-cols-4 w-full h-[600px] md:px-10 md:h-[300px]'>
              <div className='w-full/4 border-t-2 md:border border-amber-700/50 grid'>
                <div className='w-full h-[150px] flex justify-center'>
                  <RiHome2Line className='w-28 h-28 text-amber-700/50 self-end' />
                </div>
                <div className='w-full h-[150px] flex justify-center pt-2'>
                  <h1 className='text-white text-2xl font-light self-start text-center'>Vast <br/ > Experience</h1>
                </div>
              </div>

              <div className='w-full/4 border-t-2 md:border border-amber-700/50 grid'>
                <div className='w-full h-[150px] flex justify-center'>
                  <IoExtensionPuzzleOutline className='w-28 h-28 text-amber-700/50 self-end' />
                </div>
                <div className='w-full h-[150px] flex justify-center pt-2'>
                  <h1 className='text-white text-2xl font-light self-start text-center'>Professional <br/ > Team</h1>
                </div>
              </div>

              <div className='w-full/4 border-t-2 border-b-2-amber-700/50 md:border border-amber-700/50 grid'>
                <div className='w-full h-[150px] flex justify-center'>
                  <RiLayoutMasonryLine className='w-28 h-28 text-amber-700/50 self-end' />
                </div>
                <div className='w-full h-[150px] flex justify-center pt-2'>
                  <h1 className='text-white text-2xl font-light self-start text-center'>High <br/ > Finish</h1>
                </div>
              </div>

              <div className='w-full/4 border-t-2 border-b-2-amber-700/50 md:border border-amber-700/50 grid'>
                <div className='w-full h-[150px] flex justify-center'>
                  <RiBankLine className='w-28 h-28 text-amber-700/50 self-end' />
                </div>
                <div className='w-full h-[150px] flex justify-center pt-2'>
                  <h1 className='text-white text-2xl font-light self-start text-center'>Sustainable <br/ > & Accountable</h1>
                </div>
              </div>

            </div>
          {/* </div> */}

          <div className='grid md:px-10 md:grid-cols-2 w-full h-auto'>
            <div className='w-full h-[700px] bg-transparent pt-5 border border-t-2-amber-700/50 border-b-0 border-l-0 border-r-0 border-amber-700/50 grid items-center md:pt-40 pb-4 md:pb-40'>
              <h3 className='text-white font-bold text-5xl px-5 md:px-20'>About Us</h3>
              <h5 className='text-amber-700/50 font-semibold text-4xl px-5 md:px-20'>Newel Residential <br/ > Remodeling</h5>
              <p className='text-white text-1xl px-5 md:px-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta itaque quas, quidem, sequi voluptatem perspiciatis nulla saepe dicta officiis voluptas doloribus deleniti sunt corrupti delectus accusantium. Atque amet, molestiae qui autem vel pariatur consequatur odit nulla reiciendis. Eligendi totam doloribus, incidunt iure, non dolores animi obcaecati ipsam, dicta facilis nostrum hic ratione praesentium?</p>
            </div>
            <div className='w-full h-[700px] border border-b-2-amber-700/50 border-t-0 border-l-0 border-r-0 md:border-amber-700/50'>
              <img className='w-full h-[100%] object-cover' src={twoPlan} alt="" />
            </div>
          </div>

          <div className='w-full h-auto'>
            <div className='flex w-full h-52 justify-center'>
              <h3 className='text-white font-bold text-5xl self-center mt-20'>Recent Projects</h3>
            </div>

            <div className='w-full h-auto grid xl:grid-cols-2 md:px-10'>
              <div className='w-full/2 h-auto xl:h-[500px] grid md:grid-cols-2'>
                <div className='w-full/2 h-[700px] xl:h-[500px] grid md:pr-10 flex'>
                  <div className='w-full h-[420px] xl:h-[300px] self-start' id='test'>
                    <img className='w-full h-[100%] object-cover' src={homeOne} alt="20131 Grove Street" />
                    <h5 className='text-black text-2xl font-thin'>20131 Grove Street</h5>
                  </div>              
                  <div className='w-full h-[210px] xl:h-[150px] self-end' id='test'>
                    <img className='w-full h-[100%] object-cover' src={homeTwo} alt="The Nelson's Project" />
                    <h5 className='text-black text-2xl font-thin'>The Nelson's Project</h5>
                  </div>
                </div>
                <div className='w-full/2 h-[700px] xl:h-[500px] grid md:pl-5 md:pr-8 flex'>
                  <div className='w-full h-[280px] xl:h-[200px] self-start pt-10 md:pt-0' id='test'>
                    <img className='w-full h-[100%] object-cover' src={homeThree} alt="20131 Grove Street" />
                    <h5 className='text-black text-2xl font-thin'>20131 Grove Street</h5>
                  </div>
                  <div className='w-full h-[350px] xl:h-[250px] self-end' id='test'>
                    <img className='w-full h-[100%] object-cover' src={homeFour} alt="The Nelson's Project" />
                    <h5 className='text-black text-2xl font-thin'>The Nelson's Project</h5>
                  </div>
                </div>
              </div>
              <div className='w-full/2 h-[500px] pt-10 xl:pt-0' id='test'>
                <img className='w-full h-[100%] object-cover' src={homeFive} alt="The Jefferson's Lake House" />
                <h5 className='text-black text-2xl font-thin'>The Jefferson's Lake House</h5>
              </div>
            </div>

            <div className='flex w-full h-52 justify-center'>
              <button className='self-center px-24 py-6 bg-amber-700/50 uppercase text-2xl font-thin'>view all</button>
            </div>

          </div>

          <div className='w-full h-auto md:px-10 md:py-20'>
            <div className='w-full h-full border-amber-700/50 border-b-2 md:border md:border-amber-700/50 grid md:grid-cols-4'>
              <div className='w-full/4 h-24 md:h-[450px] bg-amber-700/50 flex justify-center'>
                <h3 className='text-white font-bold text-4xl self-center'>Testimonials</h3>
              </div>
              <div className='w-full/4 h-[450px] border-amber-700/50 border-b-2 md:border md:border-amber-700/50 grid px-5'>
                <p className='text-white font-normal text-1xl self-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolores praesentium eius libero sequi! Cum deserunt harum aspernatur provident veritatis, culpa pariatur impedit fugit saepe excepturi ducimus ab sunt voluptas, nisi ad?</p>
                <h5 className='text-amber-700/50 font-light text-4xl'>The Mathews</h5>
              </div>
              <div className='w-full/4 h-[450px] border-amber-700/50 border-b-2 md:border md:border-amber-700/50 grid px-5'>
                <p class='text-white font-normal text-1xl self-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et corrupti vel nemo inventore nostrum nisi laboriosam ex distinctio at! Accusamus nisi nesciunt perferendis recusandae soluta maiores quo vitae consequatur laborum. Architecto?</p>
                <h5 className='text-amber-700/50 font-light text-4xl'>Lars & Mary Williams</h5>
              </div>
              <div className='w-full/4 h-[450px] grid px-5'>
                <p class='text-white font-normal text-1xl self-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis temporibus nihil ut sed pariatur accusantium aliquid labore error hic voluptates, nesciunt et, tempora atque veritatis eligendi itaque repellat sit molestiae quis.</p>
                <h5 className='text-amber-700/50 font-light text-4xl'>Chris Parks</h5>
              </div>
            </div>
          </div>

          <Footer />

        </div>
      </div>
      <Helmet>
        <script src='./homeScript.js'></script>
      </Helmet>
    </div>

  )
}

export default Home;