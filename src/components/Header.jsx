import React,{useEffect} from 'react'
import "./Header.css"
import { useState } from 'react';


const Header = () => {
    const [isClick, setIsClick] = useState(false);
    const handleNight_mod = () => {
        setIsClick(!isClick);
    };

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
                <div onClick={handleNight_mod} className='Nigth_mod'>
                    {isClick ? (
                        //click on
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    ) : (
                        // Click off
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    )}
                </div>
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
