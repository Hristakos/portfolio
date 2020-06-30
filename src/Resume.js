import React from 'react';
import "./Resume.css";

export default function Resume(props) {
    return (
        <div className="resume-container">
            <a className="back-button" href="/home">Back</a>
            <iframe src="/Hristakos-resume.pdf" style={{ width: "100%", height: "100vh" }} />
            <a className="back-button" href="/home">Back</a>
        </div>
    )
}