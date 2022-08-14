import React, {useRef} from 'react'

import './homeStyle.css'

import one from './../assets/nelson/one.webp'
import two from './../assets/nelson/two.webp'
import three from './../assets/nelson/three.webp'
import four from './../assets/nelson/four.webp'
import five from './../assets/nelson/five.webp'
import One from './../assets/grove/one.webp'
import Two from './../assets/grove/two.webp'
import Three from './../assets/grove/three.webp'
import Four from './../assets/grove/four.webp'
import Five from './../assets/grove/five.webp'
import Six from './../assets/grove/six.webp'
import onE from './../assets/jefferson/one.webp'
import twO from './../assets/jefferson/two.webp'
import threE from './../assets/jefferson/three.webp'
import fouR from './../assets/jefferson/four.webp'
import fivE from './../assets/jefferson/five.webp'

import Footer from './footer'

function Projects() {

  const nelson = useRef(null)
  const grove = useRef(null)
  const jefferson = useRef(null)

  const goToNelson = () => {
    window.scrollTo({
      top: nelson.current.offsetTop,
      behavior: "smooth"
    })
  }
  const goToGrove = () => {
    window.scrollTo({
      top: grove.current.offsetTop,
      behavior: "smooth"
    })
  }
  const goToJefferson = () => {
    window.scrollTo({
      top: jefferson.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div className='w-full h-auto bg-neutral-700'>

      <div className='w-full h-auto bg-neutral-700 md:px-20'>

        <div className='w-full h-auto py-24 grid'>
          <div className='w-full h-auto border-amber-700/50 border-b-2 md:border md:border-amber-700/50 grid md:grid-cols-4'>
            <div className='w-full md:w-full/4 h-[100px] md:h-[400px] bg-amber-700/50 grid justify-start pl-5 md:pl-10'>
              <h3 className='text-white font-semibold text-5xl self-center'>Our Projects</h3>
            </div>
            <div className='w-full md:w-full/4 h-[100px] md:h-[400px] md:border md:border-amber-700/50 grid justify-center md:justify-start md:pl-10'>
              <h4 className='text-amber-700/50 font-normal text-4xl self-center cursor-pointer' onClick={goToNelson}>The Nelson's Project</h4>
            </div>
            <div className='w-full md:w-full/4 h-[100px] md:h-[400px] md:border md:border-amber-700/50 grid justify-center md:justify-start md:pl-10'>
              <h4 className='text-amber-700/50 font-normal text-4xl self-center cursor-pointer' onClick={goToGrove}>20131 Grove Street</h4>
            </div>
            <div className='w-full md:w-full/4 h-[100px] md:h-[400px] md:border md:border-amber-700/50 grid justify-center md:justify-start pl-10'>
              <h4 className='text-amber-700/50 font-normal text-4xl self-center cursor-pointer' onClick={goToJefferson}>The Jefferson's Lake House</h4>
            </div>
          </div>
        </div>

        <div className='w-full h-auto md:border-amber-700/50 md:border-b-2 pb-20 grid' id='nel' ref={nelson}>
          <div className='w-full h-[100px] grid justify-start'>
            <h4 className='text-amber-700/50 font-normal text-4xl self-end'>The Nelson's Project</h4>
          </div>
          <div className='w-full h-[200px] md:h-[100px] grid justify-start'>
            <p className='text-white font-normal text-xl self-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus quasi sint consequatur fugiat dicta cum error praesentium. Facilis magnam est veniam optio repudiandae corporis, necessitatibus, sequi ipsa incidunt dicta autem illo debitis error!</p>
          </div>
          <div className='w-full h-auto grid md:grid-cols-2 xl:grid-cols-3'>
            <div className='w-full md:w-full/2 xl:w-full/3 grid h-[650px] md:pr-5'>
              <div className='w-full h-[400px] pb-5' id="test">
                <img className='w-full h-[100%] object-cover' src={one} alt="The Nelson's Project" />
                <h5 className='text-black text-2xl font-thin'>The Nelson's Project</h5>
              </div>
              <div className='w-full h-[250px] pt-5' id="test">
                <img className='w-full h-[100%] object-cover' src={two} alt="The Nelson's Project" />
                <h5 className='text-black text-2xl font-thin'>The Nelson's Project</h5>
              </div>
            </div>
            <div className='w-full md:w-full/2 xl:w-full/3 grid h-[500px] md:px-5 pt-3 md:pt-0'>
              <div className='w-full h-[192px] pb-5' id="test">
                <img className='w-full h-[100%] object-cover' src={three} alt="The Nelson's Project" />
                <h5 className='text-black text-2xl font-thin'>The Nelson's Project</h5>
              </div>
              <div className='w-full h-[308px] pt-5 pb-5 md:pb-0' id="test">
                <img className='w-full h-[100%] object-cover' src={four} alt="The Nelson's Project" />
                <h5 className='text-black text-2xl font-thin'>The Nelson's Project</h5>
              </div>
            </div>
            <div className='w-full md:w-full/2 xl:w-full/3 grid h-[350px] md:pl-5' id="test">
              <img className='w-full h-[100%] object-cover' src={five} alt="The Nelson's Project" />
              <h5 className='text-black text-2xl font-thin'>The Nelson's Project</h5>
            </div>
          </div>
        </div>

        <div className='w-full h-auto md:border-amber-700/50 md:border-b-2 pb-20 grid' id="gro" ref={grove}>
          <div className='w-full h-[100px] grid justify-start'>
            <h4 className='text-amber-700/50 font-normal text-4xl self-end'>20131 Grove Street</h4>
          </div>
          <div className='w-full h-[200px] md:h-[100px] grid justify-start'>
            <p className='text-white font-normal text-xl self-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus quasi sint consequatur fugiat dicta cum error praesentium. Facilis magnam est veniam optio repudiandae corporis, necessitatibus, sequi ipsa incidunt dicta autem illo debitis error!</p>
          </div>
          <div className='w-full h-auto grid md:grid-cols-2 xl:grid-cols-3'>
            <div className='w-full md:w-full/2 xl:w-full/3 grid h-[720px] md:pr-5'>
              <div className='w-full h-[240px] pb-3' id='test'>
                <img className='w-full h-[100%] object-cover' src={One} alt="20131 Grove Street" />
                <h5 className='text-black text-2xl font-thin'>20131 Grove Street</h5>
              </div>
              <div className='w-full h-[240px]  py-3' id='test'>
                <img className='w-full h-[100%] object-cover' src={Two} alt="20131 Grove Street" />
                <h5 className='text-black text-2xl font-thin'>20131 Grove Street</h5>
              </div>
              <div className='w-full h-[240px] pt-3' id='test'>
                <img className='w-full h-[100%] object-cover' src={Three} alt="20131 Grove Street" />
                <h5 className='text-black text-2xl font-thin'>20131 Grove Street</h5>
              </div>
            </div>
            <div className='w-full md:w-full/2 xl:w-full/3 grid h-[480px] md:px-5 py-5 md:py-0' id='test'>
              <img className='w-full h-[100%] object-cover' src={Four} alt="20131 Grove Street" />
              <h5 className='text-black text-2xl font-thin'>20131 Grove Street</h5>
            </div>
            <div className='w-full md:w-full/2 xl:w-full/3 grid h-[480px] md:pl-5'>
              <div className='w-full h-[240px] pb-3' id='test'>
                <img className='w-full h-[100%] object-cover' src={Five} alt="20131 Grove Street" />
                <h5 className='text-black text-2xl font-thin'>20131 Grove Street</h5>
              </div>
              <div className='w-full h-[240px] pt-3' id='test'>
                <img className='w-full h-[100%] object-cover' src={Six} alt="20131 Grove Street" />
                <h5 className='text-black text-2xl font-thin'>20131 Grove Street</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-auto pb-20 grid' id="jef" ref={jefferson}>
          <div className='w-full h-[100px] grid justify-start'>
            <h4 className='text-amber-700/50 font-normal text-4xl self-end'>The Jefferson's Lake House</h4>
          </div>
          <div className='w-full h-[200px] md:h-[100px] grid justify-start'>
            <p className='text-white font-normal text-xl self-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus quasi sint consequatur fugiat dicta cum error praesentium. Facilis magnam est veniam optio repudiandae corporis, necessitatibus, sequi ipsa incidunt dicta autem illo debitis error!</p>
          </div>
          <div className='w-full h-auto grid md:grid-cols-2 xl:grid-cols-3'>
            <div className='w-full md:w-full/2 xl:w-full/3 grid h-[600px] md:pr-5'>
              <div className='w-full h-[300px] pb-3' id='test'>
                <img className='w-full h-[100%] object-cover' src={onE} alt="The Jefferson's Lake House" />
                <h5 className='text-black text-2xl font-thin'>The Jefferson's Lake House</h5>
              </div>
              <div className='w-full h-[300px] pt-3 pb-3 md:pb-0' id='test'>
                <img className='w-full h-[100%] object-cover' src={twO} alt="The Jefferson's Lake House" />
                <h5 className='text-black text-2xl font-thin'>The Jefferson's Lake House</h5>
              </div>
            </div>
            <div className='w-full md:w-full/2 xl:w-full/3 grid h-[800px] md:pl-5'>
              <div className='w-full h-[550px] pb-3' id='test'>
                <img className='w-full h-[100%] object-cover' src={threE} alt="The Jefferson's Lake House" />
                <h5 className='text-black text-2xl font-thin'>The Jefferson's Lake House</h5>
              </div>
              <div className='w-full h-[250px] pt-3' id='test'>
                <img className='w-full h-[100%] object-cover' src={fouR} alt="The Jefferson's Lake House" />
                <h5 className='text-black text-2xl font-thin'>The Jefferson's Lake House</h5>
              </div>
            </div>
            <div className='w-full md:w-full/2 xl:w-full/3 grid h-[650px] md:px-5 py-5 md:py-0' id='test'>
              <img className='w-full h-[100%] object-cover' src={fivE} alt="The Jefferson's Lake House" />
              <h5 className='text-black text-2xl font-thin'>The Jefferson's Lake House</h5>
            </div>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Projects