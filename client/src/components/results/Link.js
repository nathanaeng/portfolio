import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Link = ({ data }) => {
    return (
        <div className="result-box">
            <span className="thumbnail">{data[1] === "LinkedIn" ? <BsLinkedin size={35}/> : <BsGithub size={35}/>}</span>
            <h5 className="result-text"><a href={data[2]} target="_blank" rel="noreferrer">{data[1]}</a></h5>
            <p></p>
            <span className="result-label">{data[0]}</span>
        </div>
    );
}

export default Link