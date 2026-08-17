import React from 'react'
import { Route, Routes , Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Services from './Services'
import Pricing from './Pricing'
import Blog from './Blog'
import Contact from './Contact'

const Nav = () => {
  return (
    <>
      <div>
          <nav className='row p-3'>
                <div className='div1 col-lg-4'>
                      <div className='text-center mt-lg-2'>
                            <h2>Atelier Studio</h2>
                      </div>
                </div>
                <div className='div1 col-lg-4'>
                      <div className=''>
                          <ul className='d-flex list-unstyled justify-content-evenly mt-lg-3'>
                            <li>
                                {/* <a className='text-decoration-none text-dark fw-bold'  href="/">Home</a> */}
                                <Link className='text-decoration-none text-dark fw-bold' to="/" >Home</Link>
                            </li>
                            <li>
                                {/* <a className='text-decoration-none text-dark fw-bold'  href="/about">About</a> */}
                                <Link className='text-decoration-none text-dark fw-bold' to="/about">About</Link>
                            </li>
                            <li>
                                {/* <a className='text-decoration-none text-dark fw-bold'  href="/about">About</a> */}
                                <Link className='text-decoration-none text-dark fw-bold' to="/port">PortFolio</Link>
                            </li>
                            <li>
                               <Link className='text-decoration-none text-dark fw-bold' to="/ser">Services</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-dark fw-bold' to="/price">Pricing</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-dark fw-bold' to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-dark fw-bold' to="/contact">Contact</Link>
                            </li>
                          </ul>
                      </div>
                </div>
                <div className='div1 col-lg-4'>
                      <div className='text-center mt-2'>
                            <button className='btn btn-info text-white fw-bold'>Book Consultation</button>
                      </div>
                </div>
          </nav>
    </div>

    <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/about"  element={<About/>}/>
          <Route path="/port"  element={<Portfolio/>}/>
          <Route path="/ser"  element={<Services/>}/>
          <Route path="/price"  element={<Pricing/>}/>
          <Route path="/blog"  element={<Blog/>}/>
          <Route path="/contact"  element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default Nav
