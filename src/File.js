import React from 'react';
import "./File.css";

const File = (props) => {
    return (
        <div className="file-container">
            <div className="file-closed" style={{ display: props.fileOpen.open ? "none" : "" }}>
                {props.name}
            </div>
            <div className={props.fileOpen.open ? "file-open" : ""}
                style={{ display: props.fileOpen.open ? "block" : "none" }}>
                <a href={props.link}>
                    <div className="page" style={{ backgroundColor: props.fileOpen.open ? "white" : "" }}>
                        <div className="project-name">
                            {props.name}
                        </div>
                        <div className="project-link"
                            style={{ display: props.fileOpen.open ? "block" : "none" }}>
                            <img src={props.img} />
                        </div>

                    </div >


                </a>
            </div>
        </div>

    );
}

export default File;
