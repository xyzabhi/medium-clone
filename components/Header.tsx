import Link from 'next/link'
import React from 'react'

function Header() {
  const logoURL =
    'https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png'
  return (
    <header
      className="border-b-[0.5px]  border-solid border-black"
      style={{ background: '#ffc018' }}
    >
      <div className=" mx-auto flex max-w-7xl justify-between  p-5 text-sm font-light ">
        <Link href="/">
          <img
            src={logoURL}
            alt=""
            className="w-44 cursor-pointer object-contain"
          />
        </Link>
        <div className="flex space-x-5">
          <div className="hidden items-center space-x-7 md:inline-flex">
            <h3>Our story</h3>
            <h3>Membership</h3>
            <h3>Write</h3>
            <h3>Sign In</h3>
          </div>
          <div>
            <h3 className="rounded-full bg-black py-2 px-3 py-2 text-white">
              Get started
            </h3>
          </div>
        </div>
      </div>
      <div></div>
    </header>
  )
}

export default Header
