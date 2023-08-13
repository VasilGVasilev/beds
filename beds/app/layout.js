'use client'

import './globals.css'
import Navbar from '../components/Navbar'
import { usePathname } from 'next/navigation'
import Footer from '../components/Footer'


export default function RootLayout({ children }) {
  const pathName = usePathname();

  const toTopHandle = () => {
    window.scrollTo(0, 0);
  }
  
// #837667
// #716657
// #464646
  return (
    
    <html lang="bg-ixora-dark" className={`scroll-smooth overflow-x-hidden`}>
      <body className='bg-ixora-dark overflow-x-hidden'>

        <Navbar
        />
        {/* fixed navbar requires py same for all non home pages */}        
        <div className='py-[2%] sm:py-[1%] bg-black'></div>


        <main className='app mt-[2%] sm:mt-[1%]'>
          {children}
        </main>
        <Footer toTopHandle={toTopHandle}/>
      </body>
  </html>
  )
}