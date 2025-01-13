import React from "react";
import "../../styles/Popup.css";

const PostPopup = ({ post, onClose }) => {
  const { title, text } = post;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          ×
        </button>
        <h2 className="popup-title">{title}</h2>
        <p className="popup-text">{text}</p>
      </div>
    </div>
  );
};

export default PostPopup;
