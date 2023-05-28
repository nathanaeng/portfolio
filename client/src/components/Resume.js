import React from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../documents/Resume.pdf';

const Resume = ({ scale }) => {
  return (
    <div className="resume" data-bs-toggle="modal" data-bs-target="#resumeModal">
      <Document file={resume} options={{workerSrc: "pdf.worker.js"}}>
          <Page pageNumber={1} scale={scale}/>
      </Document>
    </div>
  );
}

export default Resume