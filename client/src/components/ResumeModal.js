import React from 'react';
import Resume from './Resume.js';
import { FiDownload } from 'react-icons/fi';

const ResumeModal = () => {
    let s = (window.innerWidth < 600) ? 1 : 2;
    
    return (
        <div className="modal" id="resumeModal" tabIndex="-1" aria-labelledby="resumeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-width">
                <div className="modal-content">
                    <button type="button" className="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-body">
                        <Resume scale={s}/>
                        <a className="resume-download" href="/documents/Resume.pdf" download><FiDownload size={25} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumeModal