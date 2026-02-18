import React, { useState, useEffect } from 'react'
import image from '../assets/image.png'
import { motion } from 'framer-motion'
import Learning from './Learning'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <section className='w-full min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black transition-colors duration-300 pt-24 pb-12 relative overflow-hidden'>
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl font-medium text-gray-500 dark:text-gray-400">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mt-2 flex flex-wrap gap-2">
              {"Hemant Thapa".split("").map((char, index) => (
                <span
                  key={index}
                  className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300 cursor-default"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-4 max-w-lg font-light">
              Junior Frontend Developer (React) & MERN Stack Enthusiast.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
          >
            I build <span className="text-black dark:text-white font-semibold">pixel-perfect</span>, engaging, and accessible digital experiences. Focused on clean design and performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="https://www.canva.com/design/DAGw9fUjzfY/mi9M-c2NAM3jryr6eNjDwQ/edit?utm_content=DAGw9fUjzfY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:opacity-80 transition-all duration-300"
            >
              Resume
            </a>
            <a
              href="/projects"
              className="px-8 py-3 border border-black dark:border-white text-black dark:text-white font-medium rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              Projects
            </a>
          </motion.div>
        </div>

        {/* Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-2xl transition-all duration-700 hover:scale-[1.02]">
            <img
              src={image}
              alt="Hemant Thapa"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>

      {/* Learning Section (Keeping it, but ensuring it blends) */}
      <div className="w-full mt-20 border-t border-gray-100 dark:border-gray-900">
        <Learning />
      </div>

    </section>
  )
}

export default Home