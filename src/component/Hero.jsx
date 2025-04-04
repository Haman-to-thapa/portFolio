import React from 'react'
import Home from '../pages/Home'
import Learning from '../pages/Learning'


const Hero = () => {
  return (
    <section className="w-full flex flex-col">
      {/* Home Section */}
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-900">
        <Home />
      </div>

      {/* Learning Section */}
      <div className=" bg-[#111] py-20">
        <Learning />
      </div>
    </section>
  )
}

export default Hero