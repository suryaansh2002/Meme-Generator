import React from 'react'
import './header_styles.css'
import img from './img.png'
function Header() {
  return (
    <div className="head">
    <div className="image">
    <img src={img} alt="a"/>
    </div>

    <div className="heading">
    Meme<br/> Generator
    </div>


    </div>
  );
}

export default Header;
