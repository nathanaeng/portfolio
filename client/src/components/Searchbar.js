import React, { useEffect, useState } from 'react';
import './Searchbar.css';
import { FiSearch } from 'react-icons/fi';
import SearchCancel from './SearchCancel';

const Searchbar = ({ fetchData, clearResults }) => {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    // When search icon clicked
    const selectSearch = () => {
        document.querySelector('.search-input').focus();
    }

    // Clear query and results
    const clear = () => {
        document.querySelector(".search-input").value = "";
        setDebouncedQuery("");
        clearResults();
    }

    useEffect(() => {
        const toggleFocus = e => {
            const input = document.querySelector(".search-input");
            const content = document.querySelector(".content-box");
            const container = document.querySelector(".title-container");
            const dm = document.querySelector(".darkmode-toggle-btn");
    
            if (input === document.activeElement) {
                content.classList.add("expand");
                container.classList.add("blur");
            } else if (!content.contains(e.target) && !dm.contains(e.target)) {
                content.classList.remove("expand");
                container.classList.remove("blur");
                clear();
            }
        }

        document.addEventListener('click', e => toggleFocus(e));
    }, []);

    useEffect(() => {
        const toggle = (...values) => {
            let index = 0;
    
            return function next() {
                index++;
                if (index >= values.length) {
                    index = 0;
                }
                return values[index];
            };
        }
    
        let togglePlaceholder = toggle("e.g. work experience", "e.g. hobbies", "e.g. favorite movies",
                "e.g. interests", "e.g. education", "e.g. pets", "e.g. resume", "e.g. home town",
                "e.g. languages I know", "e.g. projects", "e.g. LinkedIn");

        const interval = setInterval(() => {
            document.querySelector('.search-input').placeholder = togglePlaceholder();
        }, 2000);
        
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (query !== "") {
            fetchData(query);
        } else {
            clearResults();
        }
    }, [query]);

    useEffect(() => {
        const timeout = setTimeout(() => setQuery(debouncedQuery), 150);
        return () => clearTimeout(timeout);
    }, [debouncedQuery]);

    // Mobile: hide keyboard after touch event
    useEffect(() => {
        document.querySelector('.results-container').addEventListener('touchstart', e => {
            document.activeElement.blur(); 
        });
    });

    return (
        <div className="searchbar">
            <button className="search-icon" onClick={ selectSearch }><FiSearch size={20} /></button>
            <input className="search-input" type="search" placeholder="e.g. work experience" onChange={e => setDebouncedQuery(e.target.value)} maxLength="50" />
            <SearchCancel query={debouncedQuery} clear={clear}/>
        </div>
    );
}

export default Searchbar