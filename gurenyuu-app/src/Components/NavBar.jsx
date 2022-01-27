import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import gurenyuuIcon from './Styles/Neco-arc_MBAA.png';
import './Styles/NavBar.css';

const NavBar = () =>{
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    let audio = new Audio("/neco-arc-gurenyuu.mp3");
    const playAudio =()=>{
      audio.play()
    }
    return(
        <nav className='navbar'>
            <div className="nav-container">
          
          <NavLink style={{ color: "gray" }} exact to="/" className="nav-logo" onClick={playAudio}>
             <img src={gurenyuuIcon} width="75px" ></img>
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              
              

            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
    );
}

export default NavBar;
