import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am <span className="highlighted-text">Akash</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1> Full Stack Developer</h1>
              <span className='profile-role-tagline'>
                Enthusiastic full stack developer. 
              </span>
            </span>
          </div>
          <div className='profile-optins'>
            <button className='btn primary btn'>
                {""}
                Hire me{" "}
            </button>
            <a href='AKASH RESUME.pdf' download='AKASH RESUME.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
