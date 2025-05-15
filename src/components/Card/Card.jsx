import React from "react";
import "./Card.css";
import { BsEnvelopeAt, BsInfoCircle } from "react-icons/bs";
import { LuFileQuestion } from "react-icons/lu";
import AboutPopup from "../About/AboutPopup";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";
import useSinglePopup from "../../hooks/useSinglePopup";

function Card() {
  const aboutPopup = useSinglePopup();
  const contactPopup = useSinglePopup();
  const faqPopup = useSinglePopup();

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
          <div className="icon-item" onClick={aboutPopup.openPopup}>
            <BsInfoCircle className="icon-svg" size={80} />
            <span className="icon-label">About</span>
          </div>
          <div className="icon-item" onClick={faqPopup.openPopup}>
            <LuFileQuestion className="icon-svg" size={80} />
            <span className="icon-label">FAQ</span>
          </div>
          <div className="icon-item" onClick={contactPopup.openPopup}>
            <BsEnvelopeAt className="icon-svg" size={80} />
            <span className="icon-label">Contact</span>
          </div>
        </div>
      </div>

      {aboutPopup.popupId && (
        <AboutPopup
          id={aboutPopup.popupId}
          onClose={aboutPopup.closePopup}
          bringToFront={aboutPopup.bringToFront}
          zIndex={aboutPopup.zIndex}
        />
      )}

      {contactPopup.popupId && (
        <Contact
          id={contactPopup.popupId}
          onClose={contactPopup.closePopup}
          bringToFront={contactPopup.bringToFront}
          zIndex={contactPopup.zIndex}
        />
      )}

      {faqPopup.popupId && (
        <Faq
          id={faqPopup.popupId}
          onClose={faqPopup.closePopup}
          bringToFront={faqPopup.bringToFront}
          zIndex={faqPopup.zIndex}
        />
      )}
    </div>
  );
}

export default Card;
