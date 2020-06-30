import React from 'react';
import "./Computer.css";





export default function Computer(props) {

    return (

        <div className="computer">
            <div className="monitor">
                <div className="screen">
                    <img className="glideInUp" src={props.technology.img} alt={props.technology.name} />
                </div>
            </div>
            <div className="stand">
                <div className="apple-logo" >
                    <img src="apple-logo.png" alt="apple logo" />
                </div>
                <div className="collingwood-logo">
                    <img src="collingwood-logo.png" alt="collingwood logo" />  </div>

            </div>
            <div className="base"></div>
        </div>

    )
}




