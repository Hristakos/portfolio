import React from 'react';
import "./Desk.css"
import CoffeeCup from './CoffeeCup';


export default function Desk(props) {
    return (
        <div>

            <div className="desk">
                <div className="contact">

                    <a href="https://github.com/Hristakos"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/peter-hristakos/"><i className="fab fa-linkedin"></i></a>
                </div>
                <div className="right-side-desk">


                    <CoffeeCup />
                    <div className="clock">
                        {props.date.toLocaleTimeString()}
                    </div>
                </div>
            </div>
        </div>
    )
}
