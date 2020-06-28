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
                {props.fileOpen.map((file, index) => (
                    file.name !== "peter hristakos" ? <div key={index} className={file.open ? `file project${index + 1} move-right${index + 1}` : `file project${index + 1}`}>
                        <File
                            name={file.name}
                            fileOpen={file}
                            link={file.link}
                            img={file.img} />
                    </div > : ""
                ))}
            </div>
            <div onClick={() => props.onDrawerClick(1)} className={`drawer ${props.drawerOpen[1] ? "drawer-open" : ""}`}>
                <div className="wrapper">
                    <label>Resume</label>
                    <div className="handle"></div>
                </div>
                {props.fileOpen.map((file, index) => (
                    file.name === "peter hristakos" ? <div key={index} className={file.open ? `file resume move-rightr` : `file resume`}>
                        <File
                            name={file.name}
                            fileOpen={file}
                            link={file.link}
                            img={file.img} />
                    </div > : ""
                ))}

            </div >
        </div>
    )
}

