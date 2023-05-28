import React from 'react';

const Song = ({ data }) => {
    return (
        <div className="result-box">
            <a href={data[3]} target="_blank" rel="noreferrer">
                <img className="thumbnail-song" src={require(`../../images/${data[4]}`)} alt="thumbnail" width="100px" />
            </a>
            <h5 className="result-text">{data[1]}</h5>
            <h6 className="result-by">{data[2]}</h6>
            <div className="result-label">{data[0]}</div>
        </div>
    );
}

export default Song