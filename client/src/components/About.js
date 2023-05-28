import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const About = () => {
  return (
    <div className="about">
        <span id="about">
          {"Type something to learn more about me "}
          <button id="about-icon" data-bs-toggle="collapse" data-bs-target="#about-more">
            <AiOutlineInfoCircle />
          </button>
        </span>
        <div id="about-more" className="collapse">
          <br/>
          This isn't your typical portfolio. You can search anything you want to know about me. Well, almost anything.
          <br/>
          <br/>
          Think I'm missing something? Email me!
        </div>
    </div>
  );
}

export default About