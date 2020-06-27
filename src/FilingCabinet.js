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
                    className={props.fileOpen[0].open ? "file project1 move-right1" : "file project1 "}
                >
                    <File
                        name="Tic Tac Toe"
                        fileOpen={props.fileOpen[0]}
                        link="/tic-tac-toe"
                        img="/tic-tac-toe-afl.jpg" />
                </div >
                <div onClick={() => props.onFileClick(1)}
                    className={props.fileOpen[1].open ? "file project2 move-right2" : "file project2 "}
                >
                    <File
                        name="Classic Car Parts"
                        fileOpen={props.fileOpen[1]}
                        link="/classic-car-parts"
                        img="/classic-car-parts.jpg" />
                </div >
                <div onClick={() => props.onFileClick(2)}
                    className={props.fileOpen[2].open ? "file project3 move-right3" : "file project3 "}
                >
                    <File
                        name="Beer Buddy"
                        fileOpen={props.fileOpen[2]}
                        link="/beer-buddy"
                        img="/beer-buddy.jpg" />
                </div >
                <div onClick={() => props.onFileClick(3)}
                    className={props.fileOpen[3].open ? "file project4 move-right4" : "file project4 "}
                >
                    <File
                        name="Stradbroke Printing Group"
                        fileOpen={props.fileOpen[3]}
                        link="/spg"
                        img="/spg.jpg" />
                </div >

            </div>
            <div onClick={() => props.onDrawerClick(1)} className={`drawer ${props.drawerOpen[1] ? "drawer-open" : ""}`}>
                <div className="wrapper">
                    <label>Resume</label>
                    <div className="handle"></div>
                </div>
                <div onClick={() => props.onFileClick(4)}

                    className={props.fileOpen[4].open ? "file resume move-rightr" : "file resume "}
                >
                    <File
                        name="Resume"
                        fileOpen={props.fileOpen[4]}
                        link="https://hristakos.github.io/project1" />
                </div >

            </div >
        </div>
    )
}

