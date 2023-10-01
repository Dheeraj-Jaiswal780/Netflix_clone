import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <header className='showcase'>
        <div className="showcase-top">
          <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo not found" />
          <Link to='/' className="btn-header btn-rounded">Sign in</Link>
        </div>

        <div className="showcase-content">
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Watch anywhere, Cancel anytime</p>
          <Link to="/netflixShow" className='btn-header btn-xl'>
            Watch free for 30 days
            <i className='fas fa-chevron-right btn icon'></i>
          </Link>


        </div>
      </header>
    </>
  )
}

export default Header
