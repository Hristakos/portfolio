import React from 'react'
import "./Calendar.css"
export default function Calendar(props) {
    return (
        <div className="calendar-wrapper">
            <div className="triangle">
                <div className="inner-triangle"></div>
            </div>
            <div className="calendar">
                <div className="picture" onClick={props.handlePageClick}>
                    <img src={props.data[props.currentPage].image}></img>
                </div>

                <div className={`year page-clicked${props.currentPage}`}>
                    <p>{props.data[props.currentPage].description}</p>
                    <p>{props.data[props.currentPage].year}</p>
                </div>
            </div>
        </div>
    )
}

// data
// handlePageClick
// currentPage