import React from 'react';
import "./Project.css"
export default function Project(props) {
    return (
        <div className="project-container">
            <div className="project-name"> {props.name}</div>
            <img src={props.img} />
            <div className="project-description">{props.description}</div>
            <a href={props.link}> Visit</a>
        </div>
    )
}