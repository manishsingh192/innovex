import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/public/About'
import PublicLayout from '../pages/PublicLayout'
import Home from '../pages/public/Home'
import Career from '../pages/public/Career'
import Contact from '../pages/public/Contact'
import Project from '../pages/public/Project'
import ScrollerTop from '../components/ScrollerTop' // ✅ Import added
import RoadsHighway from "../pages/public/RoadsHighway";
import RailsMetro from '../pages/public/RailsMetro';
import Airport from '../pages/public/Airport'
import Coalmining from '../pages/public/Coalmining'
import Notfound from  '../components/Notfound'
export default function PublicRoutes() {
  return (
    <>
      <ScrollerTop /> {/* ✅ Add this before Routes */}
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/project/roadshighway" element={<RoadsHighway />} />
          <Route path="/project/railsmetro" element={<RailsMetro />} />
          <Route path="/project/airport" element={<Airport />} />
          <Route path="/project/coalmining" element={<Coalmining />}   />
           

        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}
