import React from 'react';
import './Card.css';
import { BsEnvelopeAt, BsInfoCircle } from "react-icons/bs";
import { LuFileQuestion } from "react-icons/lu";

function Card() {
  return (
    <div className="card">
      <div className="header">
        <h2 className="title">home</h2>
      </div>
      <div className="body">
        <div className="intro">
          <span className="hi-text">hi! </span>
          <span className="dann-text">i'm dann</span>
        </div>
        <p className="subtitle">welcome to my portofolio</p>
        <div className="icon-row">
          <div className="icon-item">
            <BsInfoCircle size={80} />
            <span className="icon-label">About</span>
          </div>
          <div className="icon-item">
            <LuFileQuestion size={80} />
            <span className="icon-label">FAQ</span>
          </div>
          <div className="icon-item">
            <BsEnvelopeAt size={80} />
            <span className="icon-label">Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
