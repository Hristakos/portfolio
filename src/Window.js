import React from 'react';
import "./Window.css"
export default function Window(props) {

    return (
        <div className="frame">
            <div className="window-open tilt-in-fwd-tr "
                onClick={props.handleWindowClick}
                style={{ display: props.windowOpen ? "flex" : "none" }}>
                <div className="vision-statement"
                    style={{ display: props.windowOpen ? "block" : "none" }}>My vision is to become the best software developer I can through hard work and determination as well as having some fun along the way!</div>
            </div>

            <div className="window-closed"
                onClick={props.handleWindowClick}>
                <div className="panel-left"
                    style={{ display: props.windowOpen ? "none" : "grid" }}>
                    <div className="quater-panel-top-left">

                    </div>
                    <div className="quater-panel-bottom-left">

                    </div>
                </div>
                <div className="panel-right"
                    style={{ display: props.windowOpen ? "none" : "grid" }}>
                    <div className="quater-panel-top-right">

                    </div>
                    <div className="quater-panel-bottom-right">

                    </div>
                </div>
            </div>
        </div>

    )
}
