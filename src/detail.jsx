import React from 'react';

export default function Detail({ title, style, img, timeframes, selectedPeriod }) {
  const timeframe = timeframes[selectedPeriod];

  return (
    <div className="detail-container">
      <div className="image-container" style={style}>
        <img alt={title} src={`/images/${img}`} />
      </div>
      <div className="detail">
        <div className="ellipsis-container">
          <p>{title}</p>
          <img src="/images/icon-ellipsis.svg" alt="Ellipsis" />
        </div>
        <h1>{timeframe.current}hrs</h1>
        <h6>Last Week - {timeframe.previous}hrs</h6>
      </div>
    </div>
  );
}
