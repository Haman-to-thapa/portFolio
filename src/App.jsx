import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import Hero from './component/Hero'

import Project from './pages/Project'
import About from './pages/About'
import Contact from './pages/Contact'
import HireMe from './pages/HireMe'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/hire' element={<HireMe />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App