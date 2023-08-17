'use client'

import './globals.css'
import Navbar from '../components/Navbar'
import { usePathname } from 'next/navigation'
import Footer from '../components/Footer'


export default function RootLayout({ children }) {
  

  const toTopHandle = () => {
    window.scrollTo(0, 0);
  }
  
// #837667
// #716657
// #464646
  return (
    
    <html lang="bg-black" className={`scroll-smooth overflow-x-hidden`}>
      <body className='bg-black overflow-x-hidden'>

        <Navbar
        />
        {/* fixed navbar requires py same for all non home pages */}        



        <main>
          {children}
        </main>
        <Footer toTopHandle={toTopHandle}/>
      </body>
  </html>
  )
}