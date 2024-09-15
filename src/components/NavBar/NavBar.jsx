import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='nav-first'>
        <div className='nav-first-main'>
            <div>
                <img src="https://probo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.b8a0a3e7.webp&w=128&q=75" alt="" />
            </div>

            <div className='nav-first-main2'>
                <ul>
                    <li>Trading</li>
                    <li>Team 11</li>
                    <li>Read</li>
                    <li>Cares</li>
                    <li>Careers</li>
                </ul>
            </div>

        </div>

        <div className='nav-btn'>
            <span >For 18+</span>
            <button>Download App</button>
            <button className='login-btn'>Login/Signup</button>
            <img src="https://probo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftranslation.5ad894fb.png&w=32&q=75" alt="" />

        </div>
      </div>
      <div className='nav-second'>
        <ul>
            <li>All events</li>
            <li>Cricket</li>
            <li>Crypto</li>
            <li>News</li>
            <li>Economy</li>
            <li>Elections</li>
            <li>Youtube</li>
            <li>Football</li>
            <li>Stocks</li>
            <li>Motorsports</li>
            <li>Tennis</li>
            <li>Probo</li>
            <li>Sports</li>
        </ul>

      </div>
    </div>
  )
}

export default NavBar
