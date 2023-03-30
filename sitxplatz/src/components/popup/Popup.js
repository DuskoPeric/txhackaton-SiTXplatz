import React from "react";
import './Popup.scss'

const Popup = ({ children,closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-box">
        <div className="close-btn" onClick={closePopup}>X</div>
        <div className="popup-content">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
