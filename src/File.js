import React from 'react';
import "./File.css";

const File = (props) => {
    return (
        <div className="file-container">
            <div className="file-closed" style={{ display: props.fileOpen.open ? "none" : "" }}>
                {props.name}
            </div>
            <a href={props.link}>
                <div className={props.fileOpen.open ? "file-open" : ""}
                    style={{ display: props.fileOpen.open ? "block" : "none" }}>

                    <div className="page">
                        <div className="project-name">
                            {props.name}
                        </div>
                        <div className="project-link"
                            style={{ display: props.fileOpen.open ? "block" : "none" }}>
                            <img src={props.img} />
                        </div>

                    </div >



                </div>
            </a>
        </div >

    );
}

export default File;
