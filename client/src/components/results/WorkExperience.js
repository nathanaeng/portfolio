import React from 'react';

const WorkExperience = ({ data }) => {
    return (
        <div className="result-box">
            <h5 className="result-text">{data[1]}</h5>
            <p className="position">{data[5]}</p>
            <p className="work-location">{data[4]}</p>
            <p className="work-date">{data[2]} - {data[3]}</p>
            <ul className="work-description">{data[6].map((e, idx) => (<li key={idx}>{e}</li>))}</ul>
            <span className="result-label">{data[0]}</span>
        </div>
    );
}

export default WorkExperience