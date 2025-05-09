import React from 'react';
import { BsEnvelopeAt, BsInfoCircle  } from "react-icons/bs";
import { LuFileQuestion } from "react-icons/lu";


function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h2 style={styles.title}>home</h2>
      </div>
      <div style={styles.body}>
        <div style={styles.intro}>
          <span style={styles.hiText}>hi! </span>
          <span style={styles.dannText}>i'm dann</span>
        </div>
        <p style={styles.subtitle}>welcome to my portofolio</p>
        <div style={styles.iconRow}>
          <div style={styles.iconItem}>
            <BsInfoCircle   size={80} />
            <span style={styles.iconLabel}>About</span>
          </div>
          <div style={styles.iconItem}>
            <LuFileQuestion  size={80} />
            <span style={styles.iconLabel}>FAQ</span>
          </div>
          <div style={styles.iconItem}>
            <BsEnvelopeAt  size={80} />
            <span style={styles.iconLabel}>Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '800px',
    margin: '200px auto',
    height: '600px',
    overflow: 'hidden',
    paddingBottom: '40px',
  },
  header: {
    backgroundColor: '#3e3e3e',
    padding: '16px 20px',
  },
  title: {
    margin: 0,
    color: '#fff',
    textAlign: 'left',
    fontSize: '20px',
    fontFamily: 'Montserrat, sans-serif',
  },
  body: {
    padding: '20px',
    marginTop: '100px',
  },
  intro: {
    textAlign: 'center',
  },
  hiText: {
    color: '#000',
    fontSize: '70px',
  },
  dannText: {
    color: '#FFA500',
    fontSize: '70px',
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '25px',
    marginTop: '10px',
    color: '#333',
  },
  iconRow: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '60px',
  },
  iconItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#333',
    fontSize: '16px',
    fontFamily: 'Montserrat, sans-serif',
  },
  iconLabel: {
    marginTop: '8px',
  },
};

export default Card;
