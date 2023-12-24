import React from 'react'

export default function Navbar() {
  return (
    <div>
        <header className="bg-black flex text-white justify-between px-5
    py-2">
        <div className="flex md:space-x-4 items-center">
            <div className="text-xl items-center"><a href="">Uber</a></div>
            <select className="bg-black hidden md:block items-center">
                <option selected>Company</option>
                <option>About us</option>
                <option>Our offerings</option>
            </select>
            <div className="hidden md:block items-center"><a href="">Safety</a></div>
            <div className="hidden md:block items-center"><a href="">Help</a></div>
        </div>
        <div className="flex md:space-x-4 space-x-4">
            <div className="hidden md:flex md:space-x-3">
                <i className="ri-earth-fill"></i>
                <div>EN</div>
            </div>
            <div className="hidden md:flex md:space-x-3">
                <i className="ri-menu-2-line"></i>
                <div><a href="">Products</a></div>
            </div>
            <div><a href="">Log in</a></div>
            <div className="bg-white text-black px-1 rounded-3xl"><a href="">Sign up</a></div>
            <div className="md:hidden lg:hidden"><i className="ri-menu-2-line"></i></div>
        </div>
    </header>
    </div>
  )
}
