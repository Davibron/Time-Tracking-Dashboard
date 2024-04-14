import React from "react"

export default function Detail(props) {
  

  return (
    <div className="detail-container">
      <div className="image-container" style={props.style}>
        <img src={`../src/assets/images/${props.img}`} />
      </div>
      <div className="detail">
        <div className="ellipsis-container">
          <p>{props.name}</p>
          <img src="../src/assets/images/icon-ellipsis.svg" />
        </div>
        <h1>00hrs</h1>
        <h6>Last Week - 00hrs</h6>
      </div>
    </div>
  )
}