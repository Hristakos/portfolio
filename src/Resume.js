import React from 'react';
import "./Resume.css";

export default function Resume(props) {
    return (
        <div className="resume-container">
            <a className="back-button" href="/home">Back</a>
            <iframe src="https://drive.google.com/file/d/1fmFPvpWNamDu3_P9OZFMc6m21OqXi7ZB/view?usp=sharing" style={{ width: "100%", height: "100vh" }} />
            <a className="back-button" href="/home">Back</a>

        </div>
    )
}