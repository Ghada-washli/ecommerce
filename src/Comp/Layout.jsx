import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


export default function Layout() {
    return (
        <>

            <Navbar />
            <div className=' bg-gray-50 min-h-screen  '>
                <div className=' pt-44 pb-44 container m-auto max-w-7xl -z-[5] '>
                    <Outlet />
                </div>

            </div>

            <Footer />

        </>
    )
}
