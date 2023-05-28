import React from 'react';

const Projects = ({ data }) => {
    return (
        <div className="result-box">
            <h5 className="result-text">{data[1]}</h5>
            <p className="project-date">Date: {data[2]}</p>
            <p className="project-info">{data[3]}</p>
            <p className="project-info"><a href={data[5]} target="_blank" rel="noreferrer">{data[5]}</a></p>
            <p className="project-info">tools used: {data[4]}</p>
            <span className="result-label">{data[0]}</span>
        </div>
    );
}

export default Projects