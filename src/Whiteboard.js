import React from 'react';
import "./Whiteboard.css";

export default function Whiteboard(props) {
    return (
        <div className="whiteboard-wrapper">
            <div className="whiteboard" onClick={props.handleClick}>
                <div className="display" style={{ display: props.display ? "grid" : "none" }}>
                    <a href="mailto:peter.hristakos@bigpond.com">peter.hristakos@bigpond.com</a>
                    <a href="tel:0405367369">0405367369</a>
                </div>
            </div>
            <div className="shelf"><div className="marker"></div></div>
        </div>

    )
}
