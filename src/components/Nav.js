import React, { useState } from 'react';
//css
import '../css/navft.css';
import { NavLink } from 'react-router-dom';

// assets
import probook from '../Assets/logos/probook2.png';

// let toggle = false;
// let ham = document.getElementsByClassName('.ham');
// let hamMid = document.getElementsByClassName('.ham-mid');
// let navdn = document.getElementsByClassName('.nav-bottom');


const Navbar = () => {
   

    // const Shi = () => {
    //     {
    //         if (stylemid !== "stylemid") {
    //             setStylemid = "style";
    //             alert('hello');
    //         } else {
    //             setStylemid = "stylemid";
    //         }
    //     }
    //     {
    //         if (style !== "style") {
    //             setStylemid = "stylemid";
    //             alert("style");
    //         } else {
    //             setStylemid = "style";
    //         }
    //     }

    // }


    let [style, setStyle] = useState(false);

    const Shi=()=> setStyle(!style);

    return (
        <>
            <header>
                <nav>
                    <div className="navcont">
                        <div className="left-logo-search">
                            <div className="logo-probook">
                                <NavLink to="/" className="routings"> <img className="pro-book" src={probook} alt="" /></NavLink>
                            </div>
                        </div>
                        <div className="right">
                            <div className="navigation">
                                <ul className="nav-navul">
                                    <NavLink to="/" className="routings"><li className="nav-list">Home</li></NavLink>
                                    <NavLink to="/about" className="routings"><li className="nav-list">About</li></NavLink>
                                    <NavLink to="/about" className="routings"><li className="nav-list">Contact</li></NavLink>
                                    {/* <NavLink href="/help" className="routings"><li className="nav-list">Help</li></NavLink> */}
                                    {/* <NavLink href="/donate" className="routings"></NavLink>  <li className="nav-list">Donate</li> */}
                                </ul>
                            </div>
                            <div className="res-nav-hamburger">
                                {/* <img src="" alt="" className="hamburg" /> */}
                                <span className="ham " id={!style ? "nor": "hda"} onClick={ Shi}></span>
                                <span className="ham" id={!style ? "style": "stylemid"} onClick={Shi}></span>
                                <span className="ham hd" id={!style ? "nor": "hd"} onClick={ Shi}></span>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="nav-bottom" id={style ? "style": "stylemid"}>
                    <div className="navigation-dn">
                        <ul className="nav-navul-dn">
                            <NavLink to="/" className="routings"><li className="nav-list">Home</li></NavLink>
                            <NavLink to="/about" className="routings"><li className="nav-list">About</li></NavLink>
                            <NavLink to="/about" className="routings"><li className="nav-list">Contact</li></NavLink>
                            {/* <NavLink href="/help" className="routings"><li className="nav-list">Help</li></NavLink> */}
                            {/* <NavLink href="/donate" className="routings"></NavLink>  <li className="nav-list">Donate</li> */}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;