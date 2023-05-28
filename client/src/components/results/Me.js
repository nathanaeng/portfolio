import React from 'react';

const Me = ({ data }) => {
    return (
        <div className="result-box">
                <img className="result-me" src={require('../../images/me.jpg')} alt="me"/>
                <h5 className="result-text">{data[1]}</h5>
                <div className="result-label">{data[0]}</div>
        </div>
    );
}

export default Me