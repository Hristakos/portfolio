import React from 'react';
import "./Project.css"
export default function Project(props) {
    return (
        <div className="project-container">
            <div className="project-name"> {props.data.name}</div>
            <img src={props.data.image} />
            <div className="brief">BRIEF: {props.data.brief}</div>
            <div className="project-description">{props.data.description}</div>
            <div className="buttons">

                <a className="back-button" href="/home">Back</a>
                <a target="_blank" className="go-button" href={props.data.link}>Go</a>
            </div>

        </div>
    )
}