import React from 'react';
import "./Desk.css"
export default function Desk(props) {
    return (
        <div>

            <div className="desk">
                <div className="contact">

                    <a href="https://github.com/Hristakos"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/peter-hristakos/"><i class="fab fa-linkedin"></i></a>
                </div>

                <div className="clock">
                    {props.date.toLocaleTimeString()}
                </div>
            </div>
        </div>
    )
}
