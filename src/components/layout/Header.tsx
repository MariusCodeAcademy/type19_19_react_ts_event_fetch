//

import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav data-bs-theme='dark' className='navbar navbar-expand-sm bg-body-tertiary'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            React TS Router
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
              <NavLink className='nav-link' to='/posts'>
                Posts
              </NavLink>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
