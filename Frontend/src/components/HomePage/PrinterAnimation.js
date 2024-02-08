import React, { useState } from 'react';

function PrinterAnimation() {
  const [clicked, setClicked] = useState(false);

  const handleCheckboxChange = () => {
    setClicked(!clicked);
  };

  return (
    <div id="printer-animation" className={clicked ? 'printer-animation clicked' : 'printer-animation'}>
      <div className="printer">
        <input id="printer-button" type="checkbox" onChange={handleCheckboxChange} checked={clicked} />
        <label className="printer-button" htmlFor="printer-button"></label>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="trace"></div>
        <div className="paper"></div>
      </div>
    </div>
  );
}

export default PrinterAnimation;