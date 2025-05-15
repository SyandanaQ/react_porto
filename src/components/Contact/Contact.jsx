import React, { useState, useRef } from 'react';
import './Contact.css';

function Contact({ id, onClose, bringToFront, zIndex }) {
  const popupRef = useRef(null);
  const [position, setPosition] = useState({ x: 220, y: 180 }); // Bisa beda posisi default supaya popup tidak langsung menumpuk
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
        <h2 className="popup-title">Contact</h2>
        <button className="popup-close" onClick={onClose}>X</button>
      </div>
      <div className="popup-content">
        <p>Ini konten Contact. Bisa diisi dengan info kontak seperti email, telepon, atau form kontak.</p>
      </div>
    </div>
  );
}

export default Contact;
