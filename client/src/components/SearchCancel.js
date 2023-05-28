import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

const SearchCancel = ({ query, clear }) => {
    const clearInput = e => {
        clear();
        e.preventDefault(); // keep input focus
    }

    useEffect(() => {
        const cancel = document.querySelector('.search-cancel');
        query ? cancel.style.display = 'block'
            : cancel.style.display = 'none';
    }, [query]);

    return (
        <button type="reset" className="search-cancel" onMouseDown={e => clearInput(e)}>
            <MdClose size={27}/>
        </button>
    );
}

export default SearchCancel