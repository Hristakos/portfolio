import React from 'react';
import "./Computer.css";





export default function Computer(props) {

    return (

        <div className="computer">
            <div className="monitor">
                <div className="screen">
                    {props.screenText}
                </div>
            </div>
            <div className="stand"><img src="apple-logo.png" alt="apple logo" /></div>
            <div className="base"></div>
        </div>

    )
}




