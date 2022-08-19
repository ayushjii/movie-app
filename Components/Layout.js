import React from 'react'
import { Navabr } from './Navbar';


const Layout = ({children}) => {
  return (
    <>
    <Navabr/>
    <div className='text-red-400 text-center font-serif font-extrabold text-6xl mt-12'>
    <h1>
        {children}
    </h1>
    </div>
    </>
  )
}

export default Layout;