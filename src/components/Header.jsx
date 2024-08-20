import React,{useEffect} from 'react'
import "./Header.css"
import { useState } from 'react';


const Header = () => {
    

    function Open_right_nav() {
        var right_nav = document.getElementById("right-nav");
        if (right_nav) {
            if (right_nav.style.display === "none" || right_nav.style.display === "") {
                document.getElementById("ul_right").style.display = "flex";
                right_nav.style.display = "flex";
            } else {
                right_nav.style.display = "none";
            }
        }
    }
    function Close_right_nav() {
        var right_nav = document.getElementById("right-nav");
        // document.getElementById("ul_right").style.display = "none";
        if (right_nav) {
            right_nav.style.display = "none";
        }
    }
    
    const handleClickOutside = (event) => {
        const rightNav = document.getElementById("right-nav");
        const menuButton = document.getElementById("option");
        if (rightNav && !rightNav.contains(event.target) && !menuButton.contains(event.target)) {
            Close_right_nav();
        }
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 635) {
                Close_right_nav();
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className='Header' id='Header'>

            <img src="https://img.icons8.com/?size=100&id=VFRQEWdIGMdf&format=png&color=000000" alt="" />
            <h2>Personal Website</h2>
            <nav>
                <ul>
                    <a href="#" ><li >Home</li></a>
                    <a href="#article2"><li>Skills</li></a>
                    <a href="#article3"><li>Project</li></a>
                    <a href="#article4"><li>About</li></a>
                </ul>
                <img id='option' onClick={Open_right_nav} src="https://img.icons8.com/?size=100&id=Im6MKqbsOZcm&format=png&color=000000" alt="" />

            </nav>
            <nav className='right-nav' id="right-nav" >
            <img className='close-btn' onClick={Close_right_nav} src="https://img.icons8.com/?size=100&id=21323&format=png&color=000000" alt="" />
                <ul id='ul_right'>
                    <a href="#" ><li >Home</li></a>
                    <a href="#article2"><li>Skills</li></a>
                    <a href="#article3"><li>Project</li></a>
                    <a href="#article4"><li>About</li></a>
                </ul>
               
            </nav>

        </header>
    )
}

export default Header;
