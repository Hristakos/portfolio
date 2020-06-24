import React from 'react';
import "./FilingCabinet.css"
import File from './File';

export default function FilingCabinet(props) {

    return (
        <div className="cabinet">
            <div onClick={() => props.onDrawerClick(0)} className={`drawer ${props.drawerOpen[0] ? "drawer-open" : ""}`}>
                <div className="wrapper">
                    <label>Projects</label>
                    <div className="handle"></div>
                </div>
                <div onClick={() => props.onFileClick(0)}
                    className={props.fileOpen[0] ? "file project1 move-right" : "file project1 "}
                    style={{ display: props.drawerOpen[0] || props.fileOpen[0] ? "block" : "none" }}  >
                    <File />
                </div >
                <div onClick={() => props.onFileClick(1)}
                    className={props.fileOpen[1] ? "file project2 move-right" : "file project2 "}
                    style={{ display: props.drawerOpen[0] || props.fileOpen[1] ? "block" : "none" }}  >
                    <File />
                </div >
                <div onClick={() => props.onFileClick(2)}
                    className={props.fileOpen[2] ? "file project3 move-right" : "file project3 "}
                    style={{ display: props.drawerOpen[0] || props.fileOpen[2] ? "block" : "none" }}  >
                    <File />
                </div >
                <div onClick={() => props.onFileClick(3)}
                    className={props.fileOpen[3] ? "file project4 move-right" : "file project4 "}
                    style={{ display: props.drawerOpen[0] || props.fileOpen[3] ? "block" : "none" }}  >
                    <File />
                </div >

            </div>
            <div onClick={() => props.onDrawerClick(1)} className={`drawer ${props.drawerOpen[1] ? "drawer-open" : ""}`}>
                <div className="wrapper">
                    <label>Resume</label>
                    <div className="handle"></div>
                </div>
                <div onClick={() => props.onFileClick(4)}
                    className={props.fileOpen[4] ? "file project2 move-right" : "file project2 "}
                    style={{ display: props.drawerOpen[1] || props.fileOpen[4] ? "block" : "none" }}  >
                    <File />
                </div >

            </div >
        </div>
    )
}

