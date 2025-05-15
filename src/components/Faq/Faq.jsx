import React, { useState, useRef } from 'react';
import './Faq.css';

function Faq({ id, onClose, bringToFront, zIndex }) {
  const popupRef = useRef(null);
  const [position, setPosition] = useState({ x: 300, y: 260 }); // Bisa beda posisi default supaya popup tidak langsung menumpuk
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    bringToFront();
    const rect = popupRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="popup"
      ref={popupRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ top: position.y, left: position.x, position: 'absolute', zIndex: zIndex }}
    >
      <div className="popup-header">
        <h2 className="popup-title">Faq</h2>
        <button className="popup-close" onClick={onClose}>X</button>
      </div>
      <div className="popup-content">
        <p>Ini konten Faq. Bisa diisi dengan pertanyaan tertentu.</p>
      </div>
    </div>
  );
}

export default Faq;
