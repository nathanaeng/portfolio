import React from 'react';
import AsyncComponent from './AsyncComponent';
import Me from './results/Me';
import Project from './results/Projects';
import WorkExperience from './results/WorkExperience';
import Song from './results/Song';
import Link from './results/Link';
import FavoriteMedia from './results/FavoriteMedia';
import Default from './results/Default';

const Result = ({ data }) => {
    const AsyncResume = AsyncComponent(() => {
        return import('./Resume');
    });

    const type = data[0];

    switch (type) {
        case 'resume':
            return (
                <div className="result-box">
                    <AsyncResume />
                </div>
            );
        case 'me':
            return <Me data={data}/>;
        case 'projects':
            return <Project data={data} />
        case 'work experience':
        case 'research':
            return <WorkExperience data={data} />
        case 'links':
            return <Link data={data} />
        case 'favorite songs':
            return <Song data={data} />
        case 'favorite books':
        case 'favorite movies':
            return <FavoriteMedia data={data} />
        default:
            return <Default data={data} />
    }
}

export default Result