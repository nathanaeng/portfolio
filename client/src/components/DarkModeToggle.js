import React, { useEffect } from 'react';
import { BiMoon } from 'react-icons/bi';
import { IoIosSunny } from 'react-icons/io';
import './DarkModeToggle.css';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
    useEffect(() => {
        localStorage.setItem('darkmode', JSON.stringify(darkMode));

        document.body.classList.toggle('dark-bg', darkMode);
        document.querySelectorAll(`#about, #about-more, #about-icon, #stack-button,
                .content-box, .searchbar, .search-input, .search-cancel,
                .search-icon, .results-container`)
                .forEach(e => e.classList.toggle('dark', darkMode));

        const meta = document.querySelector('meta[name="theme-color"]');
        darkMode ? meta.setAttribute("content", "#232323") : meta.setAttribute("content", "#FFFFFF");
    }, [darkMode]);

    return (
        <button className="darkmode-toggle-btn" onClick={toggleDarkMode}>
            {darkMode ? <IoIosSunny className="darkmode-svg" size={32} color="white"/>
                    : <BiMoon className="darkmode-svg" size={30} color="rgb(97, 97, 97)"/>}
        </button>
    );
}

export default DarkModeToggle