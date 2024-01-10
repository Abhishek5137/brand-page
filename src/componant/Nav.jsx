import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <div>
      <nav>
            <div className='logo'><img src="/images/brand_logo.png" alt="brandlogo" /></div>
            
              <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <button>Login</button>
            
        </nav>
    </div>
  )
}
