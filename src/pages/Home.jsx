import React, { useState, useEffect } from 'react'
import image from '../assets/image.png'
import men from '../assets/men.jpg'
import { motion } from 'framer-motion'
import Learning from './Learning'
const Home = () => {


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delay for smooth effect
  }, []);


  return (


    <section className='w-full h-screen bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-full h-full text-white flex pt-40 mx-auto container">
        <div className=" md:flex-1">
          <h1 className=' text-3xl md:text-4xl font-bold hover:scale-95 duration-300 transition-all hover:text-amber-900 '>👋 Hey there, I'm HamaN</h1>
          <br /> <br />
          <div className="">
            <p
              className={`max-w-2xl mx-auto text-white text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-center transition-all duration-700 ease-in-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              I'm a <span className="text-[#eb5951] font-bold">Frontend Developer</span> passionate about building
              <span className="text-[#eb5951] font-bold"> visually stunning </span> and
              <span className="text-[#eb5951] font-bold"> highly functional </span> websites. I specialize in
              <span className="text-[#38bdf8] font-semibold"> Tailwind CSS</span>,
              <span className="text-[#61dafb] font-semibold"> React.js</span>, and
              <span className="text-yellow-500 font-semibold"> JavaScript</span>, ensuring seamless user experiences with modern UI/UX principles.
            </p>
            <br />
            <br />
          </div>
          <div className="grid grid-cols-1 sm::grid-cols-2 w-full gap-y-7">

            <button>
              <a
                href="https://docs.google.com/document/d/1LEB3VvFbC0_s2Zc_kqKgEZfc9HY_DidDSHnarmNwKBU/edit?usp=sharing"
                download
                className="px-6 py-2 border-2 border-[#2E8B57] text-[#2E8B57] bg-transparent rounded-lg font-medium hover:bg-[#2E8B57] hover:text-white transition-all duration-300"
              >
                📄 Download Resume
              </a>
            </button>
          </div>
        </div>

        <div className="flex-1">
          <motion.img src={men} alt="" className='w-full object-cover opacity-90  transition-transform '
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1, rotate: 3 }}
          />
        </div>
      </div>
      <div className="h-[7xl]">
        <Learning />
      </div>

    </section>


  )
}

export default Home