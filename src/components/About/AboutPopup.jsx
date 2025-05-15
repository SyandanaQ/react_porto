import React, { useState, useRef, useEffect } from 'react';
import './AboutPopup.css';

// Ganti style inline dengan zIndex dari props dan panggil bringToFront saat mouse down

function AboutPopup({ id, onClose, bringToFront, zIndex }) {
  const popupRef = useRef(null);
  const [position, setPosition] = useState({ x: 200, y: 150 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    bringToFront();  // panggil untuk naik ke depan
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
        <h2 className="popup-title">About</h2>
        <button className="popup-close" onClick={onClose}>X</button>
      </div>
      <div className="popup-content">
        <p>Ini konten About. Bisa untuk menambahkan info portofolio atau deskripsi di sini.</p>
      </div>
    </div>
  );
}


export default AboutPopup;
