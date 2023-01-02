import React from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { useState } from 'react';
import logo from '../../assets/shazam.png';
import './navbar.css'

const Menu =()=>(
  <>
  <p> <a href="#Home">Home</a></p>
  <p> <a href="#gpt3">What is GPT3</a></p>
  <p> <a href="#possibility"></a>Open Ai</p>
  <p> <a href="#features"></a>Case study</p>
  <p> <a href="#blog"></a>Liberary</p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <Menu/>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;