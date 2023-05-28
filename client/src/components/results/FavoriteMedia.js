import React from 'react';

const FavoriteMedia = ({ data }) => {
    return (
        <div className="result-box">
            <h5 className="result-text">{data[1]}</h5>
            {data[0] === "favorite books" ?
                    <h6 className="result-by">by {data[2]}</h6> :
                    <h6 className="result-by">Director(s): {data[2]}</h6>}
            <span className="result-label">{data[0]}</span>
        </div>
    );
}

export default FavoriteMedia