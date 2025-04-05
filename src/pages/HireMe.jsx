import React from 'react'

const HireMe = () => {
  return (
    <section className="min-h-screen bg-[#080808] text-white flex items-center justify-center p-6 sm:p-12" id="hire-me">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Something Amazing? </h2>
        <p className="text-gray-400 mb-8">
          I'm currently open to freelance, part-time, or full-time frontend roles. If you're looking for a developer who delivers fast, responsive, and modern web applications using React, Tailwind, and the MERN stack — let’s talk!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-[#eb5951] text-white px-6 py-3 rounded-lg hover:bg-[#d44c44] transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="https://docs.google.com/document/d/1LEB3VvFbC0_s2Zc_kqKgEZfc9HY_DidDSHnarmNwKBU/edit?usp=sharing"
            target="_blank"
            className="border border-[#eb5951] text-[#eb5951] px-6 py-3 rounded-lg hover:bg-[#eb5951] hover:text-white transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>


  )
}

export default HireMe
