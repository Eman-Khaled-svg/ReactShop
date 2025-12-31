import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../nav.css' 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand text-light">
            <i className="fa-solid fa-house"></i>
            FakeStore
          </Link>

          <button className="navbar-toggle" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>

          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`} id="navbarMenu">
            <li className='text-light  ' style={{color:'white',fontWeight:'bold'}}>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className='text-light  ' style={{color:'white',fontWeight:'bold'}}>
              <NavLink 
                to="/products" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                Products
              </NavLink>
            </li>
            <li className='text-light  ' style={{color:'white',fontWeight:'bold'}}>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
            <li className='text-light  ' style={{color:'white',fontWeight:'bold'}}>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                About
              </NavLink>
              
            </li>
            <li style={{color:'white',fontWeight:'bold',fontSize:'19px'}}>
              <NavLink
                to="/cart"
                className="cart-link ms-3"
                onClick={closeMenu}
              >
                <i className="fa-solid fa-basket-shopping" style={{color:'white',fontWeight:'bold',fontSize:'19px'}}></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}